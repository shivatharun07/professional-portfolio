"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MatrixRain() {
  const [drops, setDrops] = useState<{ id: number; left: number; delay: number; duration: number }[]>([])

  useEffect(() => {
    const newDrops = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
    setDrops(newDrops)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
          style={{
            left: `${drop.left}%`,
            height: "100px",
          }}
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
