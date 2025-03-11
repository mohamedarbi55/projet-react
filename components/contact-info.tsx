"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "contact@flashreact.com",
      link: "mailto:contact@flashreact.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Adresse",
      value: "123 Avenue de l'Innovation, 75001 Paris, France",
      link: "https://maps.google.com/?q=123+Avenue+de+l'Innovation,+75001+Paris,+France",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Heures d'ouverture",
      value: "Lun-Ven: 9h-18h | Support technique: 24/7",
      link: null,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="bg-card rounded-xl p-6 shadow-sm border space-y-6">
        <h3 className="text-xl font-bold">Informations de contact</h3>

        <div className="space-y-4">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-0.5">{item.icon}</div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-xl overflow-hidden shadow-sm border h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330157606347!3d48.87456857928884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sOp%C3%A9ra%20Garnier!5e0!3m2!1sfr!2sfr!4v1647427804499!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Carte"
        ></iframe>
      </div>
    </motion.div>
  )
}

