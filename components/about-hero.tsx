"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Flash React</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez notre mission, notre technologie et comment nous transformons la gestion des interventions
            d'urgence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

