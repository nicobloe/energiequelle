import { Check } from "lucide-react"

const benefits = [
  {
    title: "Wissenschaftlich fundiert",
    description:
      "Alle Zinzino-Produkte basieren auf wissenschaftlichen Erkenntnissen und werden kontinuierlich durch Studien verbessert.",
  },
  {
    title: "Höchste Qualität",
    description:
      "Nur die besten Inhaltsstoffe werden für die Herstellung verwendet, mit strengen Qualitätskontrollen in jedem Produktionsschritt.",
  },
  {
    title: "Nachhaltig produziert",
    description: "Zinzino legt grossen Wert auf Nachhaltigkeit und umweltfreundliche Produktionsprozesse.",
  },
  {
    title: "Personalisierte Lösungen",
    description:
      "Mit dem BalanceTest können Sie Ihre persönlichen Bedürfnisse ermitteln und individuell angepasste Produkte auswählen.",
  },
  {
    title: "Ganzheitlicher Ansatz",
    description: "Die Produkte ergänzen sich gegenseitig und unterstützen einen ganzheitlichen Gesundheitsansatz.",
  },
  {
    title: "Transparente Inhaltsstoffe",
    description: "Vollständige Transparenz über alle verwendeten Inhaltsstoffe und deren Herkunft.",
  },
]

export default function Benefits() {
  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="benefits" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section">
        <h2 className="section-title">Warum Zinzino?</h2>
        <p className="section-subtitle">
          Zinzino steht für höchste Qualität und wissenschaftlich fundierte Nahrungsergänzungsmittel, die Ihr
          Wohlbefinden nachhaltig verbessern können.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#38C0B2] p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
