"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, UserPlus, UserCheck, ShieldCheck, History, Settings } from "lucide-react"

export function UserManagement() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const features = [
    {
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      title: "Création de comptes",
      description: "Ajoutez facilement de nouveaux utilisateurs et attribuez-leur des rôles spécifiques.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Gestion des permissions",
      description: "Définissez précisément les droits d'accès pour chaque utilisateur ou groupe.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Authentification sécurisée",
      description: "Protégez les accès avec une authentification multi-facteurs.",
    },
    {
      icon: <History className="h-8 w-8 text-primary" />,
      title: "Historique des activités",
      description: "Suivez toutes les actions des utilisateurs pour une traçabilité complète.",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Personnalisation des profils",
      description: "Adaptez les profils utilisateurs selon vos besoins spécifiques.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Gestion des équipes",
      description: "Organisez vos utilisateurs en équipes pour une meilleure coordination.",
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Gestion des utilisateurs simplifiée</h2>
          <p className="text-lg text-muted-foreground">
            Notre système de gestion des utilisateurs vous permet de contrôler facilement les accès et de suivre toutes
            les activités sur la plateforme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

