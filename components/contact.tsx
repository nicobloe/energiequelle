"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde die Logik zum Absenden des Formulars implementiert werden
    console.log("Form submitted:", formData)
    alert("Vielen Dank für deine Nachricht! Wir werden uns in Kürze bei dir melden.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="contact" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section">
        <h2 className="section-title">Kontaktiere uns</h2>
        <p className="section-subtitle">
          Hast du Fragen zu Zinzino-Produkten oder möchtest du mehr über eine Partnerschaft erfahren? Wir sind für dich
          da!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-Mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nachricht
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="cta-button w-full">
                Nachricht senden
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#2aaa8a] mr-4" />
                <div>
                  <h4 className="font-medium">E-Mail</h4>
                  <p className="text-gray-600">info@energiequelle.ch</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#2aaa8a] mr-4" />
                <div>
                  <h4 className="font-medium">Telefon</h4>
                  <p className="text-gray-600">+41 (0)79 690 84 34</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#2aaa8a] mr-4" />
                <div>
                  <h4 className="font-medium">Adresse</h4>
                  <p className="text-gray-600">Schweiz</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-2">Folge uns</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#2aaa8a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#2aaa8a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#2aaa8a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
