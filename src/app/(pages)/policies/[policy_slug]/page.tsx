import { BACKEND_URL } from '@/app/layout';
import { promises } from 'dns';
import React from 'react'

export async function getpolicydata(slug) {
  try {
    const response = await fetch(`${BACKEND_URL}/wp-json/custom-api/v1/policy/${slug}`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error,"ERROR FETCHING POLICIES");
    
  }
}
const Page = async({params}:any) => {
  
  const {policy_slug} = await params
//   console.log(policy_slug,"pppppppppppppppppp");

    const policyData = await getpolicydata(policy_slug)
  
    console.log(policyData);
    

  
    return (
    <div className='text-white mt-24 md:mt-32 sjcontainer'>
        <h1 className='text-3xl mb-10 md:text-5xl'>{policyData.title}</h1>
        <div className='space-y-4' dangerouslySetInnerHTML={{__html : policyData.content }} />
    </div>
  )
}

export default Page