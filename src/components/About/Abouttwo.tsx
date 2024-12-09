import { Settings, FileText, Lock, User, Code, LayoutGrid } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Settings,
      title: "Software Features",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: FileText,
      title: "Subscription Plans",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: Lock,
      title: "Customization Option",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: User,
      title: "Choose A App",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: Code,
      title: "Clean Modern Code",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: LayoutGrid,
      title: "User Interactive",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-amber-100 to-yellow-200">

    <div className="container px-4 py-12 mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
            <div
            key={index}
            className="p-6   transition-shadow"
            >
            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-green-100 shadow-md">
              <feature.icon className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-[500] mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
              </div>
    </div>
  );
}
