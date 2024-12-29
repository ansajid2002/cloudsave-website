// import { Badge } from "@/components/ui/badge"
import { Bell, FileStack, LayoutGrid, MessageCircle, Share2, Users } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: FileStack,
      title: "Enhanced Uploads",
      description: "Upload files with priority speed and zero delays."
    },
    {
      icon: Bell,
      title: "Exclusive Sharing Features",
      description: "Generate secure, password-protected links for added privacy."
    },
    {
      icon: LayoutGrid,
      title: "Advanced Streaming Options",
      description: "Stream content in 4K quality directly from your storage."
    },
    {
      icon: MessageCircle,
      title: "Priority Support",
      description: "Access 24/7 premium support for faster resolutions to your queries."
    },
    {
      icon: Users,
      title: "Create Groups",
      description: "Create groups with upto 1M+ Participants."
    },
    {
      icon: Share2,
      title: " Exclusive Tools",
      description: "Detailed file analytics, including audience insights for shared files."
    }
  ]

  return (
    <div className="innercontainer mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className='mb-4'>

        <span variant="secondary" className="bg-purple-100 px-4 py-1.5 rounded-full text-purple-500 font-bold ">
        Premium Benefits – Elevate Your CloudSave Experience
        🔥
        </span>
        </div>
        <h1 className=" text-3xl md:text-4xl font-[500] tracking-tight md:!leading-[55px] lg:text-5xl text-white">
        Upgrade to CloudSave Premium and unlock exclusive features designed for power users:
        </h1>
      </div>

      <div className="flex flex-col md:pt-10  justify-between  lg:flex-row md:space-x-6 items-center gap-8 relative z-20">
        {/* Left Column (First Three Features) */}
        <div className="flex flex-col  space-y-8 lg:w-1/3 ">
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
        {/* <div  className="relative w-full  my-10 transform  max-w-md mx-auto lg:w-1/3">
          <div className="aspect-square rounded-full bg-purple-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%]  md:w-[130%]" />
          <div className="aspect-square rounded-full bg-purple-50 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[110px] md:-translate-y-[140px] w-[80%]  md:w-[100%]" />
          <img data-aos="fade-up"
            src="/home/cslogo.png"
            alt="App Interface Preview"
            className="relative z-10 -mb-6 w-full max-md:max-w-[100px]  max-w-[200px] mx-auto h-auto"
          />
        </div> */}

        <div  className="relative w-full   my-10 transform   scale-90  lg:w-1/3 max-w-[350px]">
          <div className="aspect-square rounded-full bg-purple-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%]  md:w-[130%]" />
          <div className="aspect-square rounded-full bg-purple-50 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[110px] md:-translate-y-[130px] w-[80%]  md:w-[100%]" />
          <img data-aos="fade-up"
            src="/home/cslogo.png"
            alt="App Interface Preview"
            className="relative z-10 max-w-[160px] py-10  md:max-w-[200px] mx-auto -mb-4 w-full h-auto"
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
