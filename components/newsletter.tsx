"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validierung
    if (!email) {
      setStatus("error")
      setErrorMessage("Bitte gib deine E-Mail-Adresse ein.")
      return
    }

    if (!privacyAccepted) {
      setStatus("error")
      setErrorMessage("Bitte akzeptiere die Datenschutzbestimmungen.")
      return
    }

    setStatus("loading")

    // Hier würde normalerweise ein API-Aufruf erfolgen
    // Für dieses Beispiel simulieren wir eine erfolgreiche Anmeldung
    try {
      // Simuliere API-Aufruf
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus("success")
      setEmail("")
      setFirstName("")
      setLastName("")
      setPrivacyAccepted(false)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.")
    }
  }

  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="newsletter" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section bg-[#f8f9fa] pt-8 md:pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-[#9BCCED] bg-opacity-10 rounded-full mb-4">
            <Mail className="h-6 w-6 text-[#9BCCED]" />
          </div>
          <h2 className="section-title">Newsletter abonnieren</h2>
          <p className="section-subtitle">
            Erhalte regelmässig Informationen zu Gesundheitsthemen, Produktneuheiten und exklusive Angebote direkt in
            dein Postfach.
          </p>

          <div className="mt-8 bg-white p-5 rounded-lg shadow-md">
            {status === "success" ? (
              <div className="text-center py-6">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vielen Dank für deine Anmeldung!</h3>
                <p className="text-gray-600">
                  Du erhältst in Kürze eine Bestätigungs-E-Mail. Bitte bestätige deine Anmeldung, um den Newsletter zu
                  erhalten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button variant="outline" onClick={() => setStatus("idle")}>
                    Weitere Anmeldung
                  </Button>
                  <Button asChild className="cta-button">
                    <Link href="/newsletter">Mehr zum Newsletter</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Vorname
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Dein Vorname"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Nachname
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Dein Nachname"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    E-Mail-Adresse *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.ch"
                    required
                    className="w-full"
                  />
                </div>

                <div className="flex items-start mt-4">
                  <Checkbox
                    id="privacy"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 text-left">
                    Ich akzeptiere die{" "}
                    <a href="/datenschutz" className="text-[#9BCCED] hover:underline">
                      Datenschutzbestimmungen
                    </a>{" "}
                    und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage elektronisch erhoben
                    und gespeichert werden. *
                  </label>
                </div>

                {status === "error" && <div className="text-red-500 text-sm mt-2 text-left">{errorMessage}</div>}

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button type="submit" className="cta-button w-full md:w-auto px-8" disabled={status === "loading"}>
                    {status === "loading" ? "Wird angemeldet..." : "Jetzt anmelden"}
                  </Button>
                  {/* Überprüfe den Link zur Newsletter-Seite */}
                  <Button asChild variant="outline" className="border-[#9BCCED] text-[#9BCCED]">
                    <Link href="/newsletter">Mehr Informationen</Link>
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-left">
                  * Pflichtfelder. Du kannst dich jederzeit vom Newsletter abmelden.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
