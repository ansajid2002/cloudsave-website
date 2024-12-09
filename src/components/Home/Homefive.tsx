'use client'

import { useState, useEffect, useRef } from 'react'

// Custom Hook: useCountUp
function useCountUp({ end, duration = 2000, start = 0 }: { end: number; duration?: number; start?: number }) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime = Date.now()
    const timer = setInterval(() => {
      const timeElapsed = Date.now() - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const currentCount = Math.floor(progress * (end - start) + start)

      setCount(currentCount)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, start])

  return count
}

// Component: StatsCard
function StatsCard({ value, label, suffix = '', shouldAnimate }: { value: number; label: string; suffix?: string; shouldAnimate: boolean }) {
  const count = shouldAnimate ? useCountUp({ end: value }) : 0

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className=" text-4xl md:text-6xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-white/90 text-sm md:text-base">{label}</p>
    </div>
  )
}

// Component: StatsSection
export default function StatsSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`bg-[url("/home/countup.png")] py-24 !my-28 bg-cover mx-4  p-8 rounded-xl`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCard value={56} suffix="+" label="Customers visit app every month" shouldAnimate={inView} />
        <StatsCard value={32} suffix="+" label="Total downloads of our app" shouldAnimate={inView} />
        <StatsCard value={1560} suffix="k" label="Total Members of App Users" shouldAnimate={inView} />
        <StatsCard value={42} suffix="+" label="Satisfaction rate from customers" shouldAnimate={inView} />
      </div>
    </div>
  )
}
