"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Server, Database, Shield, Cpu, Cloud, Smartphone } from "lucide-react"

export function Technology() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const technologies = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Infrastructure robuste",
      description: "Serveurs redondants et haute disponibilité pour un service ininterrompu.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Base de données sécurisée",
      description: "Stockage crypté et sauvegardes automatiques pour protéger vos données.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Sécurité avancée",
      description: "Protocoles de sécurité de pointe pour protéger toutes les communications.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Algorithmes intelligents",
      description: "Traitement rapide des données pour des décisions éclairées en temps réel.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Solution cloud",
      description: "Accessibilité depuis n'importe où avec une synchronisation instantanée.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Applications mobiles",
      description: "Applications natives pour iOS et Android pour une utilisation sur le terrain.",
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Notre Technologie</h2>
          <p className="text-lg text-muted-foreground">
            Flash React utilise les technologies les plus avancées pour offrir une solution fiable, sécurisée et
            performante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

