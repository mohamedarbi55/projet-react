"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
              Solution d'intervention d'urgence
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Flash React <span className="block text-primary">Révolutionnez l'intervention d'urgence</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Une plateforme innovante qui transforme la gestion des situations d'urgence grâce à une technologie de
              pointe et une interface intuitive.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/services">
                <Button size="lg" className="group">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/placeholder.svg?height=600&width=800" alt="Flash React en action" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sécurité maximale</h3>
            <p className="text-muted-foreground">
              Protection des données et communications sécurisées pour toutes les interventions.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Réactivité immédiate</h3>
            <p className="text-muted-foreground">
              Temps de réponse optimisé pour une prise en charge rapide des situations critiques.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration efficace</h3>
            <p className="text-muted-foreground">
              Coordination simplifiée entre les équipes d'intervention et les différents acteurs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

