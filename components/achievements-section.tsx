"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Flag, Medal } from "lucide-react"

const achievements = [
  {
    title: "Top 6 in Arbitox CTF",
    description: "Achieved 6th position in a competitive 5-hour CTF competition",
    year: "2025",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "Top 50 in Phantom Flags 2.0",
    description: "Ranked among top 50 in a challenging 24-hour CTF competition",
    year: "2025",
    icon: Flag,
    highlight: true,
  },
]

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    year: "2024",
    icon: Award,
  },
  {
    title: "Introduction CIP Completion",
    issuer: "OPSWAT",
    year: "2024",
    icon: Medal,
  },
  {
    title: "Ethical Hacking For Beginners",
    issuer: "GUVI",
    year: "2025",
    icon: Award,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// ACHIEVEMENTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Milestones & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments in the cybersecurity field.
          </p>
        </motion.div>

        {/* CTF Achievements */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">CTF Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-card border border-primary/30 rounded-xl p-6 overflow-hidden glow"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-mono rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{cert.year}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                <p className="text-primary text-sm font-medium">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
