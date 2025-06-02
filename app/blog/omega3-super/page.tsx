"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ArrowLeft, Share2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function Omega3SuperBlogPost() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Halleluja - Omega-3 ist super!</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>15. Januar 2025</span>
              <span className="mx-2">•</span>
              <span>Omega-Balance</span>
              <button
                className="ml-auto flex items-center text-[#2aaa8a] hover:text-[#3CD8C8] transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: "Halleluja - Omega-3 ist super!",
                        text: "Entdecke die unglaublichen Vorteile von Omega-3-Fettsäuren für deine Gesundheit und dein Wohlbefinden.",
                        url: window.location.href,
                      })
                      .catch((error) => console.log("Fehler beim Teilen:", error))
                  } else {
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
              src="/images/omega3-benefits.png"
              alt="Omega-3 Fettsäuren - Die Superkraft für deine Gesundheit"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              Halleluja - Omega-3 ist super! Diese kleinen Fettsäuren sind wahre Wundermittel für unsere Gesundheit.
              Wenn du noch nicht von den unglaublichen Vorteilen von Omega-3 überzeugt bist, dann wird dich dieser
              Artikel definitiv begeistern!
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Was macht Omega-3 so besonders?</h2>

            <p className="text-lg mb-6">
              Omega-3-Fettsäuren sind essentielle Fettsäuren, die unser Körper nicht selbst herstellen kann. Das
              bedeutet, wir müssen sie über die Nahrung oder Nahrungsergänzungsmittel aufnehmen. Und das ist auch gut
              so, denn diese kleinen Kraftpakete haben es wirklich in sich!
            </p>

            <div className="bg-[#2aaa8a] bg-opacity-10 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4 text-[#2aaa8a]">Die drei wichtigsten Omega-3-Fettsäuren:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>EPA (Eicosapentaensäure):</strong> Unterstützt Herz und Kreislauf
                </li>
                <li>
                  <strong>DHA (Docosahexaensäure):</strong> Wichtig für Gehirn und Augen
                </li>
                <li>
                  <strong>ALA (Alpha-Linolensäure):</strong> Pflanzliche Omega-3-Quelle
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Warum ich von Omega-3 so begeistert bin</h2>

            <p className="text-lg mb-6">
              Als ich vor einigen Jahren angefangen habe, mich intensiver mit Omega-3 zu beschäftigen, war ich
              überwältigt von den wissenschaftlichen Erkenntnissen. Diese Fettsäuren sind an so vielen wichtigen
              Körperfunktionen beteiligt, dass es fast schon unglaublich erscheint.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#2aaa8a]">Für das Herz ❤️</h3>
                <p className="text-gray-700">
                  Omega-3 unterstützt die normale Herzfunktion und kann helfen, den Blutdruck zu regulieren. Studien
                  zeigen, dass Menschen mit einer guten Omega-3-Versorgung ein geringeres Risiko für
                  Herz-Kreislauf-Erkrankungen haben.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#2aaa8a]">Für das Gehirn 🧠</h3>
                <p className="text-gray-700">
                  DHA ist ein wichtiger Baustein unserer Gehirnzellen. Eine ausreichende Omega-3-Versorgung kann die
                  Konzentration verbessern und das Gedächtnis unterstützen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#2aaa8a]">Gegen Entzündungen 🔥</h3>
                <p className="text-gray-700">
                  Omega-3 hat entzündungshemmende Eigenschaften und kann helfen, chronische Entzündungen im Körper zu
                  reduzieren - ein wichtiger Baustein für langfristige Gesundheit.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#2aaa8a]">Für die Augen 👁️</h3>
                <p className="text-gray-700">
                  DHA ist auch ein wichtiger Bestandteil der Netzhaut. Eine gute Omega-3-Versorgung unterstützt die
                  normale Sehkraft und kann vor altersbedingten Augenproblemen schützen.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Das Problem mit unserem modernen Lebensstil</h2>

            <p className="text-lg mb-6">
              Hier kommt der Haken: Die meisten von uns nehmen viel zu wenig Omega-3 zu sich! Unsere moderne Ernährung
              ist oft reich an Omega-6-Fettsäuren (aus verarbeiteten Lebensmitteln und Pflanzenölen), aber arm an
              Omega-3. Das ideale Verhältnis sollte etwa 3:1 (Omega-6 zu Omega-3) betragen, aber viele Menschen haben
              ein Verhältnis von 15:1 oder sogar noch schlechter!
            </p>

            <div className="bg-yellow-50 p-6 rounded-xl my-8 border-l-4 border-yellow-400">
              <h3 className="text-lg font-bold mb-2">Wusstest du?</h3>
              <p className="text-gray-700">
                Ein unausgewogenes Omega-6:3-Verhältnis kann zu chronischen Entzündungen führen und das Risiko für
                verschiedene Gesundheitsprobleme erhöhen. Der BalanceTest von Zinzino kann dir zeigen, wie es um dein
                persönliches Omega-Verhältnis steht.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Meine persönliche Omega-3 Erfolgsgeschichte</h2>

            <p className="text-lg mb-6">
              Bevor ich mit der regelmäßigen Einnahme von hochwertigem Omega-3 begonnen habe, fühlte ich mich oft müde
              und unkonzentriert. Mein BalanceTest zeigte ein Omega-6:3-Verhältnis von 12:1 - definitiv nicht optimal!
            </p>

            <p className="text-lg mb-6">
              Nach nur vier Monaten mit BalanceOil+ von Zinzino hatte sich mein Verhältnis auf 3:1 verbessert. Und das
              Beste: Ich spürte den Unterschied! Mehr Energie, bessere Konzentration und ein allgemein verbessertes
              Wohlbefinden. Halleluja - Omega-3 ist wirklich super!
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Warum BalanceOil+ meine erste Wahl ist</h2>

            <p className="text-lg mb-6">
              Nicht alle Omega-3-Produkte sind gleich. BalanceOil+ von Zinzino überzeugt mich aus mehreren Gründen:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-lg mb-8">
              <li>Hochwertige Fischöle aus nachhaltiger Fischerei</li>
              <li>Optimales Verhältnis von EPA und DHA</li>
              <li>Zusatz von Olivenöl für bessere Aufnahme</li>
              <li>Vitamin D für zusätzliche Gesundheitsvorteile</li>
              <li>Wissenschaftlich getestet und dokumentiert</li>
              <li>Angenehmer Geschmack (kein Fischgeschmack!)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">So startest du deine Omega-3 Reise</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#2aaa8a] h-2"></div>
                <div className="p-6">
                  <div className="bg-[#2aaa8a] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">BalanceTest machen</h3>
                  <p className="text-gray-600">
                    Finde heraus, wie es um dein aktuelles Omega-6:3-Verhältnis steht. Wissen ist der erste Schritt!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#2aaa8a] h-2"></div>
                <div className="p-6">
                  <div className="bg-[#2aaa8a] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">BalanceOil+ starten</h3>
                  <p className="text-gray-600">
                    Beginne mit der täglichen Einnahme von BalanceOil+ für eine optimale Omega-3-Versorgung.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#2aaa8a] h-2"></div>
                <div className="p-6">
                  <div className="bg-[#2aaa8a] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fortschritt messen</h3>
                  <p className="text-gray-600">
                    Nach 4 Monaten machst du einen neuen BalanceTest und siehst deine Verbesserung!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Fazit: Omega-3 verändert Leben!</h2>

            <p className="text-lg mb-6">
              Halleluja - Omega-3 ist wirklich super! Diese essentiellen Fettsäuren sind ein Geschenk der Natur für
              unsere Gesundheit. Von der Unterstützung des Herzens über die Förderung der Gehirnfunktion bis hin zur
              Entzündungshemmung - Omega-3 ist ein echter Allrounder.
            </p>

            <p className="text-lg mb-6">
              Wenn du noch nicht auf den Omega-3-Zug aufgesprungen bist, dann ist jetzt der perfekte Zeitpunkt! Dein
              Körper wird es dir danken, und du wirst den Unterschied spüren. Versprochen!
            </p>

            <div className="bg-[#2aaa8a] bg-opacity-10 p-6 rounded-xl my-8">
              <p className="text-xl font-bold mb-2">Bereit für deine Omega-3 Transformation?</p>
              <p className="text-base mb-4">
                Ich helfe dir gerne dabei, den ersten Schritt zu machen und deine optimale Omega-Balance zu finden!
              </p>
              <Button asChild className="cta-button">
                <Link href="/contact">Kontaktiere mich</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8">
            <h3 className="text-2xl font-bold mb-6">Weitere Artikel, die dich interessieren könnten</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <Image
                    src="/images/grandfather-with-baby.png"
                    alt="Omega-3 und gesundes Altern"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">Omega-3 reduziert laut Schweizer Studie das biologische Alter</h4>
                  <Link href="/blog/omega3-aging" className="text-[#2aaa8a] text-sm hover:underline">
                    Weiterlesen
                  </Link>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <Image
                    src="/images/zinobiotic-smoothie.png"
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
                    src="/images/balanceoil-plus.png"
                    alt="BalanceOil+ für optimale Omega-Balance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">BalanceOil+ - Dein Weg zur optimalen Omega-Balance</h4>
                  <Link href="/produkte" className="text-[#2aaa8a] text-sm hover:underline">
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
