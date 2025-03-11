"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function TechnicalSupport() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const supportFeatures = [
    "Assistance technique disponible 24/7",
    "Équipe d'experts dédiée",
    "Temps de réponse garanti",
    "Support multilingue",
    "Accès à une base de connaissances complète",
    "Mises à jour régulières du système",
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=500&width=700&text=Support+Technique"
                alt="Support Technique"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Support technique d'excellence</h2>
            <p className="text-lg text-muted-foreground">
              Notre équipe de support technique est disponible 24/7 pour vous aider à résoudre rapidement tout problème
              et garantir le bon fonctionnement de votre système.
            </p>

            <ul className="space-y-3">
              {supportFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

