"use client"

import { motion } from "framer-motion"
import { Code2, Shield, Terminal, Globe, Database, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 60 },
    ],
  },
  {
    title: "Security Tools",
    icon: Shield,
    skills: [
      { name: "Burp Suite", level: 80 },
      { name: "Wireshark", level: 85 },
      { name: "Nmap", level: 90 },
      { name: "Steghide", level: 75 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    title: "Operating Systems",
    icon: Terminal,
    skills: [
      { name: "Kali Linux", level: 85 },
      { name: "Linux CLI", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Other Skills",
    icon: Cpu,
    skills: [
      { name: "Digital Forensics", level: 75 },
      { name: "Steganography", level: 80 },
      { name: "CTF Challenges", level: 85 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, security tools, and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProfileCard
              name="TryHackMe"
              stat="50+ Rooms"
              detail="8 Badges • Level 8"
              color="from-green-500 to-green-600"
            />
            <ProfileCard
              name="LeetCode"
              stat="100+ Problems"
              detail="DSA & Algorithms"
              color="from-yellow-500 to-orange-500"
            />
            <ProfileCard
              name="Skillrack"
              stat="900+ Problems"
              detail="Competitive Coding"
              color="from-blue-500 to-blue-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProfileCard({ name, stat, detail, color }: {
  name: string
  stat: string
  detail: string
  color: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative bg-card border border-border rounded-xl p-6 overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`} />
      <h4 className="font-semibold text-foreground text-lg mb-2">{name}</h4>
      <p className="text-3xl font-bold text-primary mb-1">{stat}</p>
      <p className="text-muted-foreground text-sm">{detail}</p>
    </motion.div>
  )
}
