<?php
// Add the custom API to fetch policies.
function custom_register_policies_api() {
    // Register a new REST route.
    register_rest_route(
        'custom-api/v1', // Namespace and version.
        '/policies', // Endpoint.
        array(
            'methods'  => 'GET', // HTTP method.
            'callback' => 'custom_get_policies', // Callback function.
            'permission_callback' => '__return_true', // Makes the API public.
        )
    );
}
add_action('rest_api_init', 'custom_register_policies_api');

// Callback function to handle the API request.
function custom_get_policies() {
    // Query arguments to fetch all posts of the "post" type.
    // Replace 'post' with your custom post type if needed.
    $args = array(
        'post_type'      => 'post', // Replace with your custom post type, e.g., 'policy'.
        'posts_per_page' => -1,    // Retrieve all posts.
        'fields'         => 'ids', // Optimize the query to return only post IDs.
    );

    // Get all posts based on the query arguments.
    $post_ids = get_posts($args);

    // Create an array of policies with their names and slugs.
    $policies = array_map(function($post_id) {
        return array(
            'name' => get_the_title($post_id),          // Get the post title.
            'slug' => get_post_field('post_name', $post_id), // Get the post slug.
        );
    }, $post_ids);

    // Return the response in JSON format with a 200 status.
    return new WP_REST_Response($policies, 200);
}
