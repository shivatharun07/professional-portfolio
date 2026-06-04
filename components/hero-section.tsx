"use client"

import { motion } from "framer-motion"
import { ArrowDown, Shield, Terminal, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-pattern">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Cybersecurity Engineer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-primary text-glow">Shivatharun</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              A passionate cybersecurity enthusiast pursuing B.E. in Computer Science (Cybersecurity). 
              I specialize in <span className="text-primary">ethical hacking</span>, 
              <span className="text-primary"> penetration testing</span>, and 
              <span className="text-primary"> CTF competitions</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <motion.a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">900+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">TryHackMe Rooms</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">Top 6</div>
                <div className="text-sm text-muted-foreground">CTF Ranking</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden glow">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-muted-foreground font-mono">shivatharun@kali:~</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <TypewriterLine delay={0.5} prefix="$" text="whoami" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-primary mb-2"
                >
                  Shivatharun S - Cybersecurity Engineer
                </motion.div>
                <TypewriterLine delay={2} prefix="$" text="cat skills.txt" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="text-muted-foreground mb-2"
                >
                  [Python, C, C++, Java, JavaScript]
                </motion.div>
                <TypewriterLine delay={4} prefix="$" text="ls tools/" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.5 }}
                  className="text-muted-foreground mb-2"
                >
                  Burp Suite  Wireshark  Nmap  Steghide
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6 }}
                  className="flex items-center"
                >
                  <span className="text-primary">$</span>
                  <span className="ml-2 w-2 h-5 bg-primary animate-pulse" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function TypewriterLine({ delay, prefix, text }: { delay: number; prefix: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="mb-2"
    >
      <span className="text-primary">{prefix}</span>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
        className="ml-2 overflow-hidden inline-block text-foreground"
      >
        {text}
      </motion.span>
    </motion.div>
  )
}
