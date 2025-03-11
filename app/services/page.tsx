import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServicesList } from "@/components/services-list"
import { TechnicalSupport } from "@/components/technical-support"
import { UserManagement } from "@/components/user-management"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ServiceHero />
        <ServicesList />
        <TechnicalSupport />
        <UserManagement />
      </main>
      <Footer />
    </div>
  )
}

