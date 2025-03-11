"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bell, Map, Users, MessageSquare, FileText, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const steps = [
    {
      icon: <Bell className="h-12 w-12 text-primary" />,
      title: "Alerte d'incident",
      description: "Un incident est signalé via l'application ou le système central, déclenchant une alerte immédiate.",
    },
    {
      icon: <Map className="h-12 w-12 text-primary" />,
      title: "Localisation précise",
      description: "Le système géolocalise l'incident et identifie les ressources disponibles à proximité.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Mobilisation des équipes",
      description:
        "Les équipes appropriées sont alertées et reçoivent toutes les informations nécessaires sur leurs appareils.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Communication en temps réel",
      description:
        "Les intervenants peuvent communiquer entre eux et avec le centre de contrôle pendant toute l'opération.",
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Documentation de l'intervention",
      description: "Toutes les actions sont enregistrées pour analyse ultérieure et amélioration continue.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Résolution et rapport",
      description: "L'incident est résolu et un rapport détaillé est généré automatiquement.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Comment ça fonctionne</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez le processus complet de gestion des interventions d'urgence avec Flash React, de l'alerte initiale
            à la résolution de l'incident.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="p-2 rounded-full bg-primary/10 mr-3 md:order-2">{step.icon}</div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

