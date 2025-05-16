"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ArrowLeft, Share2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function Omega3AgingBlogPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Breadcrumb />
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/#blog" className="flex items-center text-[#2aaa8a] mb-4 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Übersicht
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Omega-3 reduziert laut Schweizer Studie das biologische Alter
            </h1>
            <div className="flex items-center text-gray-500 mb-6">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>5. Februar 2025</span>
              <span className="mx-2">•</span>
              <span>Omega-Balance</span>
              <button
                className="ml-auto flex items-center text-[#2aaa8a] hover:text-[#3CD8C8] transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: "Omega-3 reduziert laut Schweizer Studie das biologische Alter",
                        text: "Omega-3-Fettsäuren können laut einer neuen Studie das Altern messbar verlangsamen. Die tägliche Einnahme von einem Gramm Omega-3 verlangsamt die biologische Alterung um bis zu vier Monate.",
                        url: window.location.href,
                      })
                      .catch((error) => console.log("Fehler beim Teilen:", error))
                  } else {
                    // Fallback für Browser, die Web Share API nicht unterstützen
                    navigator.clipboard
                      .writeText(window.location.href)
                      .then(() => alert("Link in die Zwischenablage kopiert!"))
                      .catch(() => alert("Konnte den Link nicht kopieren."))
                  }
                }}
              >
                <Share2 className="h-5 w-5 mr-1" />
                <span>Teilen</span>
              </button>
            </div>
          </div>

          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/grandfather-with-baby.png"
              alt="Großvater mit Enkelkind - Generationsübergreifende Gesundheit durch Omega-3"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              Omega-3-Fettsäuren können laut einer neuen Studie das Altern messbar verlangsamen. Wie eine Analyse von
              Forschenden der Universität Zürich zeigte, verlangsamt die tägliche Einnahme von einem Gramm Omega-3 die
              biologische Alterung in drei Jahren um bis zu vier Monate.
            </p>

            <div className="bg-gray-50 p-4 rounded-xl my-6">
              <p className="text-lg font-medium mb-2">Wichtigste Erkenntnisse der Studie:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tägliche Einnahme von 1g Omega-3 verlangsamt die biologische Alterung</li>
                <li>Kombination mit Vitamin D und Bewegung verstärkt den Effekt</li>
                <li>Ergebnisse basieren auf der grössten Altersstudie Europas</li>
                <li>Wirkung unabhängig von Geschlecht, Alter und Body-Mass-Index</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Die Do-Health-Studie</h2>

            <p className="text-lg mb-6">
              Für die Studie analysierten die Forschenden Daten von 777 Schweizer Teilnehmerinnen und Teilnehmern der
              «Do-Health-Studie», der grössten Altersstudie Europas. Die Studienteilnehmerinnen und Studienteilnehmer
              wurden in acht verschiedene Gruppen eingeteilt. Jede der Gruppen erhielt drei Jahre lang eine
              unterschiedliche Therapie: Omega-3, Vitamin D, ein Trainingsprogramm, sowie Kombinationen dieser
              Therapien. Eine Gruppe erhielt ein Placebo.
            </p>

            <p className="text-lg mb-6">
              Wurde die Einnahme von Omega-3-Fettsäuren mit Vitamin D und Bewegung kombiniert, waren die Effekte sogar
              noch grösser, wie die Universität Zürich mitteilte. Die Resultate wurden in der renommierten
              Fachzeitschrift «Nature Aging» veröffentlicht.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10">
              <div>
                <h3 className="text-2xl font-bold mb-4">Natürliche Quellen für Omega-3</h3>
                <p className="text-lg mb-4">
                  Omega-3-Fettsäuren sind in verschiedenen Lebensmitteln enthalten, darunter:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fettreiche Fische wie Lachs, Makrele und Hering</li>
                  <li>Leinsamen und Leinöl</li>
                  <li>Walnüsse</li>
                  <li>Chiasamen</li>
                  <li>Algen und Algenöl</li>
                  <li>Bestimmte Gemüsesorten wie Spinat</li>
                </ul>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl my-6">
                <h4 className="font-bold text-[#2aaa8a] mb-3">Wussten Sie?</h4>
                <p className="text-gray-700">
                  Der menschliche Körper kann Omega-3-Fettsäuren nicht selbst herstellen, daher müssen sie über die
                  Nahrung oder Nahrungsergänzungsmittel aufgenommen werden. Die meisten Menschen nehmen zu wenig Omega-3
                  zu sich, was zu einem Ungleichgewicht im Verhältnis zu Omega-6-Fettsäuren führen kann.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Biologische Uhr gemessen</h2>

            <p className="text-lg mb-6">
              Vor und nach der Intervention wurde das biologische Alter der Studienteilnehmenden gemessen. Für die
              Messung des Alters nutzten die Forschenden sogenannte epigenetische Uhren. Diese erfassen chemische
              Veränderungen des DNA-Moleküls, die als Methylierung bekannt sind und quantifizieren so den Unterschied
              zwischen biologischem und chronologischem Altern.
            </p>

            <p className="text-lg mb-6">
              Bei der Einnahme von Omega-3-Fettsäuren verlangsamte sich die Alterung in diesem Zeitraum von drei Jahren
              dabei um 2,9 bis 3,8 Monate. Dies unabhängig von Geschlecht, Alter und Body-Mass-Index. Für die Messung
              des biologischen Alters gibt es allerdings keinen allgemein anerkannten Goldstandard, wie die Forschenden
              einräumten.
            </p>

            <div className="bg-[#2aaa8a] bg-opacity-10 p-4 rounded-xl my-6">
              <h3 className="text-xl font-bold mb-2 text-[#2aaa8a]">Warum ist das biologische Alter wichtig?</h3>
              <p className="text-base mb-3">
                Das biologische Alter gibt Aufschluss darüber, wie schnell unser Körper altert, unabhängig von unserem
                chronologischen Alter. Es ist ein besserer Indikator für unsere Gesundheit und Lebenserwartung als das
                Geburtsdatum.
              </p>
              <p className="text-base">
                Faktoren wie Ernährung, Bewegung, Stress und Umwelteinflüsse können das biologische Alter beeinflussen.
                Die Studie zeigt, dass gezielte Interventionen wie die Einnahme von Omega-3 diesen Prozess positiv
                beeinflussen können.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frühere Forschungsergebnisse bestätigt</h2>

            <p className="text-lg mb-6">
              In Forschung an Tieren zeigten die Einnahme von Vitamin D oder Omega-3 bereits zuvor vielversprechende
              Ergebnisse für die Verlangsamung des biologischen Alterns. Ob diese Massnahmen auch beim Menschen
              funktionieren, war bisher unklar. Die neue Studie liefert nun erstmals belastbare Daten für die
              Wirksamkeit beim Menschen.
            </p>

            <p className="text-lg mb-6">
              Die Ergebnisse unterstreichen die Bedeutung einer ausreichenden Versorgung mit Omega-3-Fettsäuren für die
              Gesundheit und das Wohlbefinden, insbesondere im Hinblick auf gesundes Altern.
            </p>

            <div className="bg-white p-4 border border-gray-200 rounded-xl my-6">
              <h3 className="text-lg font-bold mb-2">Quelle</h3>
              <p className="text-gray-700">
                Dieser Artikel basiert auf Informationen von Swiss Info (SWI). Die Originalmeldung wurde am 4. Februar
                2025 veröffentlicht. Die vollständige Studie ist in der Fachzeitschrift "Nature Aging" erschienen.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Wie können Sie Ihre Omega-3-Versorgung verbessern?</h2>

            <p className="text-lg mb-6">
              Eine ausgewogene Ernährung mit regelmässigem Verzehr von fettem Fisch ist ein guter Anfang. Für viele
              Menschen kann es jedoch schwierig sein, ausreichend Omega-3 allein über die Nahrung aufzunehmen.
              Hochwertige Nahrungsergänzungsmittel wie BalanceOil+ von Zinzino können eine sinnvolle Ergänzung sein.
            </p>

            <p className="text-lg mb-6">
              BalanceOil+ wurde speziell entwickelt, um das Omega-6:3-Verhältnis zu optimieren und so zu einer gesunden
              Zellalterung beizutragen. Mit dem BalanceTest können Sie Ihren persönlichen Omega-Status ermitteln und
              gezielt verbessern.
            </p>

            <div className="bg-[#2aaa8a] bg-opacity-10 p-5 rounded-xl my-6">
              <p className="text-xl font-bold mb-2">Möchten Sie mehr über Ihre persönliche Omega-Balance erfahren?</p>
              <p className="text-base mb-4">
                Kontaktieren Sie mich für eine individuelle Beratung und erfahren Sie, wie Sie Ihre Omega-3-Versorgung
                optimieren können.
              </p>
              <Button className="cta-button">Kontaktieren Sie mich</Button>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8">
            <h3 className="text-2xl font-bold mb-6">Weitere Artikel, die Sie interessieren könnten</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <Image
                    src="/images/gut-health.png"
                    alt="Darmgesundheit und Wohlbefinden"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">Mehr als nur ein Gefühl - Dein Bauchgefühl gibt den Ton an</h4>
                  <Link href="/blog/gut-health" className="text-[#2aaa8a] text-sm hover:underline">
                    Weiterlesen
                  </Link>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <Image
                    src="/healthy-meal-prep.png"
                    alt="Gesunde Mahlzeitenvorbereitung"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">Gesunde Ernährung im Alltag integrieren</h4>
                  <Link href="#" className="text-[#2aaa8a] text-sm hover:underline">
                    Weiterlesen
                  </Link>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <Image
                    src="/images/collagen-boozt-new.png"
                    alt="Kollagen für gesunde Haut"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">Kollagen - Der Schlüssel zu jugendlicher Haut</h4>
                  <Link href="#" className="text-[#2aaa8a] text-sm hover:underline">
                    Weiterlesen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
