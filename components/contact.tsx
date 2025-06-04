"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from "lucide-react"

// Safe string handling function
const safeString = (value: any): string => {
  if (value === null || value === undefined) {
    return ""
  }
  return String(value)
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e || !e.target) return

    const name = e.target.name || ""
    const value = e.target.value || ""

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    if (e) e.preventDefault()

    console.log("Form submitted:", formData)
    alert("Vielen Dank für deine Nachricht! Wir werden uns in Kürze bei dir melden.")
    setFormData({ firstName: "", lastName: "", email: "", message: "" })
  }

  return (
    <>
      <div id="contact" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Endlich, ein Gespräch das
              <br />
              <span className="text-[#9BCCED]">weiterbringt</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hast du Fragen zu Zinzino-Produkten oder möchtest du mehr über eine Partnerschaft erfahren? Ich bin für
              dich da!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <div className="w-12 h-12 bg-[#9BCCED]/10 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-[#9BCCED]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Schreib mir eine Nachricht</h3>
                <p className="text-gray-600">Ich antworte normalerweise innerhalb von 24 Stunden</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName || ""}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-gray-200 focus:border-[#9BCCED] focus:ring-[#9BCCED]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName || ""}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-gray-200 focus:border-[#9BCCED] focus:ring-[#9BCCED]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-gray-200 focus:border-[#9BCCED] focus:ring-[#9BCCED]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-gray-200 focus:border-[#9BCCED] focus:ring-[#9BCCED] min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#9BCCED] hover:bg-[#7FB3E3] rounded-xl font-semibold py-3">
                  Nachricht senden
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Right - Contact Info & Quick Actions */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-[#968C83] rounded-3xl p-8 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Kontaktinformationen</h3>
                  <p className="opacity-90">Erreiche mich direkt über diese Kanäle</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-Mail</h4>
                      <p className="opacity-90">info@energiequelle.ch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefon</h4>
                      <p className="opacity-90">+41 (0)79 690 84 34</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="opacity-90">
                        Mühlebachstrasse 5<br />
                        6370 Stans
                        <br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Card */}
              <div className="bg-[#9BCCED] rounded-3xl p-8 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Persönlichen Termin buchen</h3>
                <p className="opacity-90 mb-6">
                  Buche einen kostenlosen Beratungstermin - vor Ort in Stans oder online per Zoom.
                </p>
                <Button className="bg-white text-[#9BCCED] hover:bg-gray-100 rounded-xl font-semibold w-full">
                  Termin vereinbaren
                </Button>
              </div>

              {/* Response Time Badge */}
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-2xl font-bold text-[#9BCCED]">{"< 24h"}</div>
                <div className="text-sm text-gray-600">Durchschnittliche Antwortzeit</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
