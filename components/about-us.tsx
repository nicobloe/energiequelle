"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Heart, Award, Users } from "lucide-react"

// Safe string handling function
const safeString = (value: any): string => {
  if (value === null || value === undefined) {
    return ""
  }
  return String(value)
}

export default function AboutUs() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <div id="persoenlich" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Endlich, ein Partner der deine
              <br />
              <span className="text-[#9BCCED]">Gesundheit</span> versteht
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lerne mich kennen und erfahre mehr über meine Mission für deine Gesundheit und dein Wohlbefinden
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Story Card */}
            <div className="bg-[#968C83] rounded-3xl p-8 text-white shadow-xl">
              <div className="mb-6">
                <span className="text-sm font-medium opacity-80 uppercase tracking-wide">MEINE GESCHICHTE</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Von der Vision zur Mission</h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Als leidenschaftlicher Gesundheitsexperte habe ich energiequelle gegründet, um Menschen dabei zu helfen,
                ihr volles Potenzial zu entfalten. Meine Reise begann mit der Erkenntnis, dass echte Gesundheit mehr ist
                als die Abwesenheit von Krankheit.
              </p>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Als offizieller Zinzino-Partner teile ich die Vision, durch hochwertige, wissenschaftlich fundierte
                Nahrungsergänzungsmittel einen positiven Einfluss auf die Gesundheit von Menschen zu nehmen.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-80">Jahre Erfahrung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm opacity-80">Zufriedene Kunden</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-[#968C83] hover:bg-gray-100 rounded-xl font-semibold"
                  onClick={scrollToContact}
                >
                  Kontaktiere mich
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#968C83] rounded-xl font-semibold"
                >
                  <Link href="/ueber-uns">Mehr erfahren</Link>
                </Button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <Image
                  src="/images/team/erich-zwyssig.png"
                  alt="Erich Zwyssig - Inhaber energiequelle"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#9BCCED] rounded-2xl p-4 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6" />
                  <div>
                    <div className="font-bold text-sm">Zertifizierter Partner</div>
                    <div className="text-xs opacity-80">Zinzino Schweiz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#9BCCED]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-[#9BCCED]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meine Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Ich möchte Menschen dabei unterstützen, durch optimale Ernährung und Nahrungsergänzung ein gesünderes,
                aktiveres und erfüllteres Leben zu führen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#968C83]/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-[#968C83]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meine Werte</h3>
              <p className="text-gray-600 leading-relaxed">
                Qualität, Transparenz und wissenschaftliche Fundierung stehen im Mittelpunkt meiner Arbeit. Ich glaube
                an nachhaltige Gesundheitslösungen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#9BCCED]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#9BCCED]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mein Versprechen</h3>
              <p className="text-gray-600 leading-relaxed">
                Ich verspreche dir nur Produkte anzubieten, von denen ich selbst überzeugt bin und die ich auch selbst
                verwende. Deine Zufriedenheit steht an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
