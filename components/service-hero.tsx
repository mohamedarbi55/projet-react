"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ServiceHero() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez comment Flash React améliore la gestion des urgences, offre un support technique de qualité et
            simplifie la gestion des utilisateurs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

