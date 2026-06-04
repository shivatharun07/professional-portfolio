"use client"

import { motion } from "framer-motion"
import { GraduationCap, Target, Code2, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Passionate About <span className="text-primary">Cybersecurity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated cybersecurity enthusiast with a strong foundation in programming and security tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m <span className="text-foreground font-semibold">Shivatharun S</span>, currently pursuing 
              my Bachelor&apos;s degree in Computer Science Engineering with a specialization in 
              <span className="text-primary"> Cybersecurity</span> at Sri Eshwar College of Engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey in cybersecurity started with a curiosity about how systems can be secured and how 
              vulnerabilities can be identified. Today, I actively participate in 
              <span className="text-primary"> CTF competitions</span>, solve challenges on 
              <span className="text-primary"> TryHackMe</span>, and work on security-focused projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not hunting for vulnerabilities, you&apos;ll find me solving coding problems on LeetCode 
              and Skillrack, constantly sharpening my problem-solving skills.
            </p>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <InfoCard
              icon={GraduationCap}
              title="Education"
              description="B.E CSE (Cybersecurity)"
              detail="CGPA: 7.5"
            />
            <InfoCard
              icon={Shield}
              title="Focus Area"
              description="Ethical Hacking"
              detail="Penetration Testing"
            />
            <InfoCard
              icon={Target}
              title="CTF Player"
              description="Top 6 Arbitox CTF"
              detail="Top 50 Phantom Flags"
            />
            <InfoCard
              icon={Code2}
              title="Problem Solver"
              description="900+ Problems"
              detail="Skillrack"
            />
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center">Education Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TimelineCard
              year="Present"
              title="Sri Eshwar College of Engineering"
              subtitle="B.E CSE (Cybersecurity)"
              score="CGPA: 7.5"
            />
            <TimelineCard
              year="2023 - 2024"
              title="Vivekananda HSS"
              subtitle="Higher Secondary (HSC)"
              score="83.3%"
            />
            <TimelineCard
              year="2021 - 2022"
              title="Vivekananda HSS"
              subtitle="Secondary (SSLC)"
              score="84.2%"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ icon: Icon, title, description, detail }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  detail: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
    >
      <Icon className="w-8 h-8 text-primary mb-4" />
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      <p className="text-primary text-sm font-medium mt-1">{detail}</p>
    </motion.div>
  )
}

function TimelineCard({ year, title, subtitle, score }: {
  year: string
  title: string
  subtitle: string
  score: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
    >
      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-mono rounded-full mb-4">
        {year}
      </span>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm mb-2">{subtitle}</p>
      <p className="text-primary font-semibold">{score}</p>
    </motion.div>
  )
}
