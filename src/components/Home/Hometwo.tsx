// import { Badge } from "@/components/ui/badge"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Download App",
      description: <p>Get it from<br/>Appstore / Playstore</p>
    },
    {
      step: "02",
      title: "Create account",
      description:  <p>Signup<br/> to get started.</p>
    },
    {
      step: "03",
      title: "Start uploading files",
      description:  <p>Upload and manage files.<br/> </p>
    }
  ]

  return (
    <div className="sjcontainer mx-auto px-4 py-16">
      {/* Badge and Title */}
      <div className="text-center mb-20">
        <div className="mb-3">

        <span variant="secondary" className="bg-purple-100 px-3 text-sm rounded-full py-1.5 text-purple-500 ">
          How It Work 🔥
        </span>
        </div>

        <h1 className=" text-2xl md:text-4xl font-[500] tracking-tight md:!leading-[60px] lg:text-5xl text-white">
        Create your simple and infinite space for your files 

        </h1>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Timeline Line - Hidden on mobile */}
        {/* <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-purple-100 -translate-y-1/2">
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div> */}

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div data-aos="fade-up"
              key={step.step}
              className={`text-center relative ${
                index === 1 ? "md:mt-20" : "md:mt-0"
              }`}
            >
              {/* Step Number Badge */}
              <div className="inline-block mb-4">
                <div
                  variant="secondary"
                  className="bg-purple-100 px-4 py-1.5 text-sm rounded-full text-purple-500"
                >
                  STEP - {step.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl text-white font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Curved Lines - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
         <img src="/home/timeline.png" />
        </div>
      </div>
    </div>
  )
}

