"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bell, Map, Smartphone, BarChart, Headphones, Settings } from "lucide-react"

export function Features() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const features = [
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Alertes en temps réel",
      description: "Notifications instantanées pour une réaction immédiate aux situations d'urgence.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Géolocalisation précise",
      description: "Localisation exacte des incidents pour une intervention ciblée et efficace.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Application mobile",
      description: "Accès à toutes les fonctionnalités depuis n'importe quel appareil mobile.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Analyses détaillées",
      description: "Rapports et statistiques pour améliorer continuellement les processus d'intervention.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "Support 24/7",
      description: "Assistance technique disponible à tout moment pour répondre à vos besoins.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Personnalisation avancée",
      description: "Adaptation de la plateforme selon les besoins spécifiques de votre organisation.",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fonctionnalités innovantes</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez comment Flash React transforme la gestion des interventions d'urgence grâce à ses fonctionnalités
            avancées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

