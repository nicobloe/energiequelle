"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  // Funktion zum sanften Scrollen zum Kontaktbereich
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100, // 100px Offset für die Navbar
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="persoenlich" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section bg-gray-50 pt-8 md:pt-12">
        <h2 className="section-title">Über mich</h2>
        <p className="section-subtitle">
          Lerne mich kennen und erfahre mehr über meine Mission für deine Gesundheit und dein Wohlbefinden
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 px-4 md:px-0">Meine Geschichte</h3>
            <p className="text-lg mb-4 px-4 md:px-0">
              Als leidenschaftlicher Gesundheitsexperte habe ich energiequelle gegründet, um Menschen dabei zu helfen,
              ihr volles Potenzial zu entfalten. Meine Reise begann mit der Erkenntnis, dass echte Gesundheit mehr ist
              als die Abwesenheit von Krankheit – sie ist ein Zustand des vollständigen körperlichen, geistigen und
              sozialen Wohlbefindens.
            </p>
            <p className="text-lg mb-6 px-4 md:px-0">
              Als offizieller Zinzino-Partner teile ich die Vision, durch hochwertige, wissenschaftlich fundierte
              Nahrungsergänzungsmittel einen positiven Einfluss auf die Gesundheit von Menschen zu nehmen. Ich glaube an
              einen ganzheitlichen Ansatz und biete dir nicht nur Produkte, sondern auch Beratung und Unterstützung auf
              deinem Weg zu mehr Wohlbefinden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button" onClick={scrollToContact}>
                Kontaktiere mich
              </Button>
              <Button asChild variant="outline" className="border-[#9BCCED] text-[#9BCCED]">
                <Link href="/ueber-uns">Mehr über mich erfahren</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/team/erich-zwyssig.png"
              alt="Erich Zwyssig - Inhaber energiequelle"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#9BCCED]">Meine Mission</h3>
            <p className="px-2">
              Ich möchte Menschen dabei unterstützen, durch optimale Ernährung und Nahrungsergänzung ein gesünderes,
              aktiveres und erfüllteres Leben zu führen.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#9BCCED]">Meine Werte</h3>
            <p className="px-2">
              Qualität, Transparenz und wissenschaftliche Fundierung stehen im Mittelpunkt meiner Arbeit. Ich glaube an
              nachhaltige Gesundheitslösungen und persönliche Betreuung.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#9BCCED]">Mein Versprechen</h3>
            <p className="px-2">
              Ich verspreche dir nur Produkte anzubieten, von denen ich selbst überzeugt bin und die ich auch selbst
              verwende. Deine Zufriedenheit steht für mich an erster Stelle.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
