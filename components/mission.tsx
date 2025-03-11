"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Mission() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Notre Mission</h2>
            <p className="text-lg text-muted-foreground">
              Chez Flash React, notre mission est de révolutionner la gestion des interventions d'urgence en fournissant
              une technologie de pointe qui permet aux équipes de réagir plus rapidement et plus efficacement face aux
              situations critiques.
            </p>
            <p className="text-lg text-muted-foreground">
              Nous croyons que chaque seconde compte lors d'une urgence, et notre plateforme est conçue pour optimiser
              chaque étape du processus d'intervention, de l'alerte initiale à la résolution complète de l'incident.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre objectif est de devenir le standard mondial pour la gestion des interventions d'urgence, en offrant
              une solution complète, fiable et intuitive qui sauve des vies et protège les biens.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=500&width=700&text=Notre+Mission"
                alt="Notre Mission"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

