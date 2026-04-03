"use client"

import { useEffect, useRef, useState } from "react"
import { CrystalIcon } from "@/components/crystal-icon"

const stats = [
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 24, suffix: "/7", label: "Support" },
]

function useCountUp(target: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const isDecimal = target % 1 !== 0
    const steps = 40
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, target)
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current))
      if (step >= steps) {
        clearInterval(timer)
        setCount(target)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number
  suffix: string
  label: string
  inView: boolean
}) {
  const count = useCountUp(value, inView)
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-4xl font-bold text-foreground">
        {count}
        {suffix}
      </span>
      <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-y border-border bg-muted/50 px-6 py-20">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center justify-center gap-3">
          <CrystalIcon className="size-6 text-accent" />
          <p className="text-lg font-medium text-foreground">
            Trusted by businesses ready to scale
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
