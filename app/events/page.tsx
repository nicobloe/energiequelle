import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin, Filter } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Zinzino Produktpräsentation",
    description:
      "Lernen Sie die Vorteile der Zinzino-Produkte kennen und erfahren Sie, wie sie Ihre Gesundheit unterstützen können.",
    date: "15. Juni 2023",
    time: "18:00 - 20:00 Uhr",
    location: "Online Webinar",
    type: "online",
  },
  {
    id: 2,
    title: "Gesundheitsworkshop: Balance finden",
    description: "Ein interaktiver Workshop zur Optimierung Ihrer Gesundheit mit praktischen Tipps für den Alltag.",
    date: "22. Juni 2023",
    time: "10:00 - 16:00 Uhr",
    location: "Zürich, Schweiz",
    type: "in-person",
  },
  {
    id: 3,
    title: "Stoffwechselkur: Informationsabend",
    description:
      "Alles über unsere erfolgreiche Stoffwechselkur und wie sie Ihnen zu mehr Wohlbefinden verhelfen kann.",
    date: "30. Juni 2023",
    time: "19:00 - 21:00 Uhr",
    location: "Online Webinar",
    type: "online",
  },
  {
    id: 4,
    title: "Gesundheitsfrühstück mit Zinzino",
    description:
      "Geniessen Sie ein gesundes Frühstück und erfahren Sie mehr über die Bedeutung der richtigen Ernährung für Ihre Gesundheit.",
    date: "8. Juli 2023",
    time: "09:00 - 11:00 Uhr",
    location: "Bern, Schweiz",
    type: "in-person",
  },
  {
    id: 5,
    title: "Darmgesundheit & Wohlbefinden",
    description:
      "Ein informativer Vortrag über die Bedeutung der Darmgesundheit für Ihr allgemeines Wohlbefinden und wie Sie Ihr Mikrobiom unterstützen können.",
    date: "15. Juli 2023",
    time: "19:00 - 20:30 Uhr",
    location: "Online Webinar",
    type: "online",
  },
  {
    id: 6,
    title: "Persönliche Gesundheitsberatung",
    description:
      "Individuelle Beratungstermine zur Analyse Ihrer aktuellen Gesundheitssituation und Erstellung eines personalisierten Gesundheitsplans.",
    date: "Nach Vereinbarung",
    time: "Flexibel",
    location: "Zürich oder Online",
    type: "both",
  },
]

export default function EventsPage() {
  return (
    <PageLayout
      title="Kommende Events"
      description="Nehmen Sie an unseren Veranstaltungen teil und erfahren Sie mehr über Gesundheit und Wohlbefinden"
    >
      <div className="max-w-6xl mx-auto">
        <section className="mb-12">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <p className="text-lg">
              Entdecken Sie unsere kommenden Veranstaltungen und melden Sie sich an, um mehr über Gesundheit,
              Wohlbefinden und Zinzino-Produkte zu erfahren.
            </p>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select className="border rounded-md px-3 py-2 bg-white">
                <option value="all">Alle Events</option>
                <option value="online">Nur Online</option>
                <option value="in-person">Nur Vor Ort</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="h-full product-card">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 pb-4 border-b">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        event.type === "online"
                          ? "bg-blue-100 text-blue-600"
                          : event.type === "in-person"
                            ? "bg-green-100 text-green-600"
                            : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {event.type === "online" ? "Online" : event.type === "in-person" ? "Vor Ort" : "Online & Vor Ort"}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>

                    <Button className="w-full cta-button">Anmelden</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-5 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Eigene Veranstaltung organisieren</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Möchten Sie eine eigene Informationsveranstaltung zu Zinzino-Produkten oder der Stoffwechselkur
              organisieren? Wir unterstützen Sie gerne dabei!
            </p>
            <Button asChild className="cta-button">
              <Link href="/contact">Kontaktieren Sie uns</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
