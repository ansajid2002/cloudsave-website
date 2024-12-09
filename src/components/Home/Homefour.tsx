// import { Badge } from "@/components/ui/badge"
import { Bell, FileStack, LayoutGrid, MessageCircle, Share2, Users } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: FileStack,
      title: "High Usability",
      description: "There are many variations of passages of Lorem Ipsum"
    },
    {
      icon: Bell,
      title: "Action Reminder",
      description: "There are many variations of passages of Lorem Ipsum"
    },
    {
      icon: LayoutGrid,
      title: "Merge Files",
      description: "There are many variations of passages of Lorem Ipsum"
    },
    {
      icon: MessageCircle,
      title: "Free Live Chat",
      description: "There are many variations of passages of Lorem Ipsum"
    },
    {
      icon: Users,
      title: "Social Share",
      description: "There are many variations of passages of Lorem Ipsum"
    },
    {
      icon: Share2,
      title: "Custom Shortcuts",
      description: "There are many variations of passages of Lorem Ipsum"
    }
  ]

  return (
    <div className="innercontainer mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className='mb-4'>

        <span variant="secondary" className="bg-purple-100 px-4 py-1.5 rounded-full text-purple-500 font-bold ">
          Why using our app 🔥
        </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto mt-8 leading-tight text-white">
          Our App Is Great For Individuals, Startups And Enterprises
        </h2>
      </div>

      <div className="flex flex-col pt-10  justify-between  lg:flex-row md:space-x-6 items-center gap-8 relative z-20">
        {/* Left Column (First Three Features) */}
        <div className="flex flex-col  space-y-8 lg:w-1/3">
          {features.slice(0, 3).map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} data-aos="fade-right" className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <div>
                <h3 className="font-semibold text-xl text-purple-300 mb-2">{feature.title}</h3>
                <p className="text-gray-400 font-light">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Center Image */}
        <div  className="relative w-full  my-10 transform -translate-x-4 max-w-md mx-auto lg:w-1/3">
          <div className="aspect-square rounded-full bg-purple-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%]  md:w-[130%]" />
          <div className="aspect-square rounded-full bg-purple-50 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[110px] md:-translate-y-[140px] w-[80%]  md:w-[100%]" />
          <img data-aos="fade-up"
            src="/home/mockup2.png"
            alt="App Interface Preview"
            className="relative z-10 -mb-6 w-full h-auto"
          />
        </div>

        {/* Right Column (Last Three Features) */}
        <div className="flex flex-col space-y-8 lg:w-1/3 md:pl-8 ">
          {features.slice(3).map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} data-aos="fade-left" className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-purple-300 mb-2">{feature.title}</h3>
                  <p className="text-gray-400 font-light">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
