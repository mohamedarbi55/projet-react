"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function Testimonials() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const testimonials = [
    {
      quote:
        "Flash React a complètement transformé notre façon de gérer les situations d'urgence. La rapidité d'intervention a été améliorée de 40%.",
      author: "Marie Dubois",
      position: "Directrice des Opérations, Service d'Urgence Municipal",
    },
    {
      quote:
        "L'interface intuitive et la fiabilité du système nous ont permis de coordonner nos équipes avec une efficacité sans précédent.",
      author: "Thomas Martin",
      position: "Chef de la Sécurité, Hôpital Central",
    },
    {
      quote:
        "Depuis que nous utilisons Flash React, le temps de réponse à nos incidents a diminué de moitié. Un outil indispensable.",
      author: "Sophie Laurent",
      position: "Responsable Sécurité, Grand Centre Commercial",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez comment Flash React aide les professionnels à améliorer leurs interventions d'urgence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-sm border relative"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

