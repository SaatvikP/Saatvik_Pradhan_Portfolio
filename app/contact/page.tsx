import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Saatvik Pradhan",
  description: "Get in touch with Saatvik Pradhan for collaborations, opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Get In Touch
        </h1>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}

