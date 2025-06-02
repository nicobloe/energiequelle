import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ArrowLeft, Share2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function GutHealthBlogPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Breadcrumb />
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/#blog" className="flex items-center text-[#9BCCED] mb-4 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Übersicht
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mehr als nur ein Gefühl - Dein Bauchgefühl gibt den Ton an
            </h1>
            <div className="flex items-center text-gray-500 mb-6">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>9. April 2025</span>
              <span className="mx-2">•</span>
              <span>Darmgesundheit</span>
              <button className="ml-auto flex items-center text-[#2aaa8a]">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Teilen</span>
              </button>
            </div>
          </div>

          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/zinobiotic-smoothie.png"
              alt="Gesunde Ernährung mit Zinzino ZinoBiotic+ für optimale Darmgesundheit"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              Wusstest du, dass 70% deines Immunsystems im Darm sitzen? Dein Verdauungssystem ist nicht nur für die
              Zerlegung von Nahrung zuständig - es ist die Schaltzentrale deiner allgemeinen Gesundheit. Von Immunität
              und Stoffwechsel bis hin zum psychischen Wohlbefinden spielt der Darm eine entscheidende Rolle für dein
              tägliches Wohlbefinden.
            </p>

            <p className="text-lg mb-8">
              Stell dir dein Darmmikrobiom wie einen tropischen Regenwald in deinem Körper vor - vielfältig, empfindlich
              und ständig anpassungsfähig. Im Gleichgewicht unterstützt es deinen Körper beim Gedeihen. Wird es jedoch
              vernachlässigt, kann es zu Verdauungsbeschwerden, Energiemangel und sogar Stimmungsschwankungen führen.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Was ist dein Bauchgefühl und warum ist es wichtig?</h2>

            <p className="text-lg mb-6">
              Dein Darm ist ein Kraftwerk! Er ist 7,7 bis 9 Meter lang (ungefähr so lang wie ein Schulbus!) und umfasst
              Organe wie Magen, Darm, Leber, Gallenblase und Bauchspeicheldrüse.
            </p>

            <p className="text-lg mb-6">
              Aber hier ist etwas Verrücktes: Dein Darm ist voller Nervenzellen und produziert mehr Neurotransmitter als
              dein Gehirn! Das bedeutet, dass dein Darm und dein Gehirn ständig miteinander kommunizieren. Dein Darm
              spielt auch eine Schlüsselrolle für die Immunität. Jedes Mal, wenn du isst, entscheiden Billionen von
              Bakterien in deinem Darm, was gut für dich ist und was nicht.
            </p>

            <p className="text-lg mb-8">
              Eine Mischung aus guten und schlechten Bakterien ist völlig normal, aber eine Ernährung mit viel Zucker,
              verarbeiteten Lebensmitteln und ungesunden Fetten nährt die schlechten Bakterien in deinem Darm und erhöht
              das Risiko von Verdauungsproblemen und Entzündungen, die deine Energie rauben und dein Immunsystem
              schwächen können.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Das Darmmikrobiom: Dein inneres Ökosystem</h2>

            <p className="text-lg mb-6">
              Dein Darm beherbergt Billionen von Bakterien, Pilzen und Viren, die zusammen als Darmmikrobiota bezeichnet
              werden. Kein Mikrobiom ist wie das andere - nicht einmal bei eineiigen Zwillingen! Deine Ernährung, dein
              Stresslevel und dein Lebensstil beeinflussen das Gleichgewicht zwischen guten und schlechten Bakterien in
              deinem Darm.
            </p>

            <div className="bg-[#2aaa8a] bg-opacity-10 p-4 rounded-xl my-6">
              <h3 className="text-xl font-bold mb-2 text-[#9BCCED]">Wenn dein Mikrobiom im Gleichgewicht ist, dann:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>unterstützt es die Verdauung und Nährstoffaufnahme</li>
                <li>stärkt es das Immunsystem</li>
                <li>reguliert es den Blutzucker und Cholesterinspiegel</li>
                <li>
                  produziert es Wohlfühlchemikalien wie Serotonin (95% des Serotonins werden in deinem Darm produziert!)
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Die Darm-Hirn-Verbindung: Warum dein Magen deine Stimmung beeinflusst
            </h2>

            <p className="text-lg mb-6">
              Hast du schon einmal bemerkt, dass Stress oder Angst dir Magenverstimmungen bereiten? Das liegt daran,
              dass dein Darm und dein Gehirn über die Darm-Hirn-Achse ständig miteinander kommunizieren. Der Vagusnerv
              sendet Signale zwischen beiden und beeinflusst so alles von der Verdauung bis zum emotionalen
              Wohlbefinden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-red-600">
                  Wenn dein Darm aus dem Gleichgewicht gerät, kann dies zu Folgendem führen:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Angstzustände und Stimmungsschwankungen</li>
                  <li>Gehirnnebel und niedrige Energie</li>
                  <li>Hautprobleme wie Akne oder Ekzeme</li>
                  <li>Verdauungsbeschwerden, Blähungen und Reizdarm-ähnliche Symptome</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Wusstest du?</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>70% deines Immunsystems befinden sich in deinem Darm.</li>
                  <li>Dein Darm ist bis zu neun Meter lang!</li>
                  <li>In deinem Körper leben 100 BILLIONEN Bakterien.</li>
                  <li>95% des Serotonins (deines Glückshormons) werden im Darm produziert.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Nimmst du genügend Ballaststoffe zu dir?</h2>

            <p className="text-lg mb-6">
              Deine Darmbakterien lieben Ballaststoffe - sie wirken präbiotisch und ernähren die guten Mikroben, die die
              Verdauung, das Immunsystem und die Entzündungshemmung unterstützen.
            </p>

            <div className="bg-yellow-50 p-4 rounded-xl my-6">
              <p className="text-xl font-bold mb-2">
                Dennoch nehmen 90% der Menschen täglich nicht genügend Ballaststoffe zu sich!
              </p>
              <p className="text-base">
                Die WHO empfiehlt 25 bis 40 Gramm pro Tag, die meisten Menschen nehmen jedoch nur etwa 15 Gramm zu sich.
              </p>
            </div>

            <div className="my-10">
              <h3 className="text-2xl font-bold mb-6">Die besten Ballaststoffquellen:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    <li>Obst und Gemüse</li>
                    <li>Vollkornprodukte und Hülsenfrüchte</li>
                    <li>Fermentierte Lebensmittel wie Joghurt, Kimchi und Sauerkraut</li>
                    <li>Nüsse und Samen</li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5AfRxKGN479xUkxuHum4kXzpdze5NW.png"
                    alt="Ballaststoffreiche Lebensmittel: Obst, Gemüse, Nüsse, Vollkornprodukte und Hülsenfrüchte"
                    width={500}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              So stellst du die Darmgesundheit wieder her und erhältst sie
            </h2>

            <p className="text-lg mb-6">
              Möchtest du deinem Darm die Pflege geben, die er verdient? Hier ist ein einfacher 3-Schritte-Plan:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#2aaa8a] h-2"></div>
                <div className="p-6">
                  <div className="bg-[#9BCCED] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Erhöhe die Ballaststoffzufuhr</h3>
                  <p className="text-gray-600">
                    Iss mehr Pflanzen, Vollkornprodukte und ballaststoffreiche Lebensmittel.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#2aaa8a] h-2"></div>
                <div className="p-6">
                  <div className="bg-[#9BCCED] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Unterstütze die Darmbakterien</h3>
                  <p className="text-gray-600">
                    Nimm Präbiotika (Ballaststoffe) und Probiotika (fermentierte Lebensmittel) in deine Ernährung auf.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#2aaa8a] h-2"></div>
                <div className="p-6">
                  <div className="bg-[#9BCCED] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sorge für ein ausgewogenes Verhältnis</h3>
                  <p className="text-gray-600">
                    Reduziere verarbeitete Samenöle und bevorzuge Omega-3-reiche Lebensmittel.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Warum ZinoBiotic+ die ultimative Unterstützung für die Darmgesundheit ist
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10">
              <div>
                <p className="text-lg mb-6">
                  ZinoBiotic+ ist eine wissenschaftlich entwickelte Mischung aus acht natürlichen Ballaststoffen, die
                  entwickelt wurde, um:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
                  <li>die guten Bakterien in deinem Darm zu ernähren</li>
                  <li>eine gesunde Verdauung und Darmfunktion zu unterstützen</li>
                  <li>den Blutzucker- und Cholesterinspiegel auszugleichen</li>
                  <li>Entzündungen zu reduzieren</li>
                </ul>
                <p className="text-lg">
                  Im Gegensatz zu vielen Ballaststoffpräparaten, die nur ein oder zwei Ballaststoffarten enthalten,
                  enthält ZinoBiotic+ resistente Stärke, Inulin, Beta-Glucane und Flohsamenschalen - die jeweils eine
                  einzigartige Rolle für die Gesundheit des Mikrobioms spielen.
                </p>
              </div>
              <div>
                <Image
                  src="/images/zinobiotic-smoothie.png"
                  alt="ZinoBiotic+ Produkt mit gesunden Zutaten für einen Smoothie"
                  width={500}
                  height={500}
                  className="rounded-xl"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Abschliessende Gedanken: Höre auf dein Bauchgefühl!</h2>

            <p className="text-lg mb-6">
              Deine Darmgesundheit ist nicht nur eine Frage der Verdauung - sie ist die Grundlage deines allgemeinen
              Wohlbefindens. Indem du dein Mikrobiom mit den richtigen Lebensmitteln, Ballaststoffen und
              Omega-3-Fettsäuren versorgst, investierst du in mehr Energie, ein stärkeres Immunsystem und langfristige
              Gesundheit.
            </p>

            <div className="bg-[#2aaa8a] bg-opacity-10 p-5 rounded-xl my-6">
              <p className="text-xl font-bold mb-2">
                Fang noch heute an und lass dich von deinem Bauchgefühl in eine gesündere Zukunft führen!
              </p>
              <p className="text-base mb-4">Ich unterstütze dich gerne dabei...</p>
              <Button className="cta-button">Kontaktiere mich</Button>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8">
            <h3 className="text-2xl font-bold mb-6">Weitere Artikel, die dich interessieren könnten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100"></div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">Stoffwechsel aktivieren: Tipps und Tricks</h4>
                  <Link href="#" className="text-[#2aaa8a] text-sm hover:underline">
                    Weiterlesen
                  </Link>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <Image
                    src="/images/omega3-health.png"
                    alt="Omega-3 Fettsäuren und gesundes Altern"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">5. Februar 2025</div>
                  <h4 className="font-bold mb-2">Omega-3 reduziert laut Schweizer Studie das biologische Alter</h4>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    Omega-3-Fettsäuren können laut einer neuen Studie der Universität Zürich das Altern messbar
                    verlangsamen. Die tägliche Einnahme von einem Gramm Omega-3 verlangsamt die biologische Alterung in
                    drei Jahren um bis zu vier Monate.
                  </p>
                  <Link href="/blog/omega3-aging" className="text-[#9BCCED] text-sm hover:underline">
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
