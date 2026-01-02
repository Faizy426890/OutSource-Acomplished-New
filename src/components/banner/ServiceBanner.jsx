"use client"
import { useEffect, useState } from "react"
import "./OperationsHero.css"

export default function OperationsHero() {
  const [industries, setIndustries] = useState(0)
  const [successRate, setSuccessRate] = useState(0)
  const [hoursSaved, setHoursSaved] = useState(0)

  useEffect(() => {
    const animate = (setter, target, duration = 1500) => {
      let start = 0
      const steps = 60
      const increment = target / steps
      const interval = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(interval)
        } else {
          setter(Math.floor(start))
        }
      }, duration / steps)
    }

    animate(setIndustries, 15)
    animate(setSuccessRate, 98)
    animate(setHoursSaved, 10000)
  }, [])

  return (
    <section className="ops-hero">
      <div className="ops-container">
        <h1 className="ops-heading">
          Transform Your <br />
          <span>Business Operations</span>
        </h1>

        <p className="ops-subtext">
          Enterprise-grade solutions tailored to your industry.
        </p>

        <p className="ops-tagline">
          Built by operators, for operators.
        </p>

        <div className="ops-stats">
          <div className="ops-stat">
            <div className="ops-stat-number">{industries}+</div>
            <div className="ops-stat-label">Industries Served</div>
          </div>

          <div className="ops-stat">
            <div className="ops-stat-number">{successRate}%</div>
            <div className="ops-stat-label">Client Success Rate</div>
          </div>

          <div className="ops-stat">
            <div className="ops-stat-number">{hoursSaved.toLocaleString()}+</div>
            <div className="ops-stat-label">Hours Saved Monthly</div>
          </div>
        </div>
      </div>
    </section>
  )
}
