"use client"

import { motion } from "framer-motion"
import { FileText, Download, ExternalLink, X } from "lucide-react"
import { useState } from "react"

const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1QKy5fNtci50OqCvpQOQkyOC29-jFxp-r/view?usp=drivesdk"
const RESUME_PREVIEW_LINK = "https://drive.google.com/file/d/1QKy5fNtci50OqCvpQOQkyOC29-jFxp-r/preview"
const RESUME_DOWNLOAD_LINK = "https://drive.google.com/uc?export=download&id=1QKy5fNtci50OqCvpQOQkyOC29-jFxp-r"

export function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="resume" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-sm">// RESUME</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              My <span className="text-primary">Resume</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View or download my complete resume for more details about my experience and qualifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              View Resume
            </motion.button>
            
            <motion.a
              href={RESUME_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.a>
            
            <motion.a
              href={RESUME_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl font-semibold hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Open in New Tab
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl h-[80vh] bg-card border border-border rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Resume - Shivatharun S</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={RESUME_PREVIEW_LINK}
              className="w-full h-[calc(100%-60px)]"
              title="Resume"
              allow="autoplay"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
