"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ShieldAlert, Users, Headphones } from "lucide-react"

export function ServicesList() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    {
      icon: <ShieldAlert className="h-12 w-12 text-primary" />,
      title: "Gestion des urgences",
      description:
        "Système complet de gestion des situations d'urgence avec alertes en temps réel, coordination des équipes et suivi des interventions.",
      features: ["Alertes instantanées", "Coordination des équipes", "Suivi en temps réel", "Rapports détaillés"],
    },
    {
      icon: <Headphones className="h-12 w-12 text-primary" />,
      title: "Support technique",
      description:
        "Assistance technique disponible 24/7 pour garantir le bon fonctionnement de la plateforme et répondre à toutes vos questions.",
      features: ["Support 24/7", "Formation personnalisée", "Mises à jour régulières", "Documentation complète"],
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Gestion des utilisateurs",
      description:
        "Gestion simplifiée des utilisateurs avec différents niveaux d'accès, permissions personnalisées et suivi des activités.",
      features: [
        "Contrôle des accès",
        "Permissions personnalisées",
        "Historique des activités",
        "Authentification sécurisée",
      ],
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={`/placeholder.svg?height=400&width=600&text=${service.title}`}
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

