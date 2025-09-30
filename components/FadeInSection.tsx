"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.05 }}
      className=""
    >
      {children}
    </motion.div>
  )
}
