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

      <section className="section bg-gray-50">
        <h2 className="section-title">Über uns</h2>
        <p className="section-subtitle">
          Lerne uns kennen und erfahre mehr über unsere Mission für deine Gesundheit und dein Wohlbefinden
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Unsere Geschichte</h3>
            <p className="text-lg mb-4">
              Als leidenschaftliche Gesundheitsexperten haben wir energiequelle gegründet, um Menschen dabei zu helfen,
              ihr volles Potenzial zu entfalten. Unsere Reise begann mit der Erkenntnis, dass echte Gesundheit mehr ist
              als die Abwesenheit von Krankheit – sie ist ein Zustand des vollständigen körperlichen, geistigen und
              sozialen Wohlbefindens.
            </p>
            <p className="text-lg mb-6">
              Als offizieller Zinzino-Partner teilen wir die Vision, durch hochwertige, wissenschaftlich fundierte
              Nahrungsergänzungsmittel einen positiven Einfluss auf die Gesundheit von Menschen zu nehmen. Wir glauben
              an einen ganzheitlichen Ansatz und bieten dir nicht nur Produkte, sondern auch Beratung und Unterstützung
              auf deinem Weg zu mehr Wohlbefinden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button" onClick={scrollToContact}>
                Kontaktiere uns
              </Button>
              {/* Überprüfe den Link zur Über-uns-Seite */}
              <Button asChild variant="outline" className="border-[#2aaa8a] text-[#2aaa8a]">
                <Link href="/ueber-uns">Mehr über uns erfahren</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/energiequelle-team.png"
              alt="Das energiequelle Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Unsere Mission</h3>
            <p>
              Wir möchten Menschen dabei unterstützen, durch optimale Ernährung und Nahrungsergänzung ein gesünderes,
              aktiveres und erfüllteres Leben zu führen.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Unsere Werte</h3>
            <p>
              Qualität, Transparenz und wissenschaftliche Fundierung stehen im Mittelpunkt unserer Arbeit. Wir glauben
              an nachhaltige Gesundheitslösungen und persönliche Betreuung.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Unser Versprechen</h3>
            <p>
              Wir versprechen dir nur Produkte anzubieten, von denen wir selbst überzeugt sind und die wir auch selbst
              verwenden. Deine Zufriedenheit steht für uns an erster Stelle.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
