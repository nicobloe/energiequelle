import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import Link from "next/link"

// Safe string handling function
const safeString = (value: any): string => {
  if (value === null || value === undefined) {
    return ""
  }
  return String(value)
}

const events = [
  {
    id: 1,
    title: "Zinzino Produktpräsentation",
    description:
      "Lernen Sie die Vorteile der Zinzino-Produkte kennen und erfahren Sie, wie sie Ihre Gesundheit unterstützen können.",
    date: "18. März 2025",
    time: "18:00 - 20:00 Uhr",
    location: "Online Webinar",
    type: "online",
  },
  {
    id: 2,
    title: "Gesundheitsworkshop: Balance finden",
    description: "Ein interaktiver Workshop zur Optimierung Ihrer Gesundheit mit praktischen Tipps für den Alltag.",
    date: "5. Mai 2025",
    time: "10:00 - 16:00 Uhr",
    location: "Zürich, Schweiz",
    type: "in-person",
  },
  {
    id: 3,
    title: "Stoffwechselkur: Informationsabend",
    description:
      "Alles über unsere erfolgreiche Stoffwechselkur und wie sie Ihnen zu mehr Wohlbefinden verhelfen kann.",
    date: "27. Juni 2025",
    time: "19:00 - 21:00 Uhr",
    location: "Online Webinar",
    type: "online",
  },
]

export default function Events() {
  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="events" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section pt-8 md:pt-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Kommende Events</h2>
          <p className="section-subtitle">
            Nehmen Sie an unseren Veranstaltungen teil und erfahren Sie mehr über Gesundheit und Wohlbefinden
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {events.map((event) => {
              const eventTitle = safeString(event.title)
              const eventDescription = safeString(event.description)
              const eventDate = safeString(event.date)
              const eventTime = safeString(event.time)
              const eventLocation = safeString(event.location)
              const eventType = safeString(event.type)

              return (
                <Card key={event.id || 0} className="h-full product-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 pb-4 border-b">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          eventType === "online" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                        }`}
                      >
                        {eventType === "online" ? "Online" : "Vor Ort"}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{eventTitle}</h3>
                      <p className="text-gray-600">{eventDescription}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{eventDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{eventTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{eventLocation}</span>
                      </div>

                      <Button className="w-full cta-button">Anmelden</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <Button className="cta-button">Alle Events anzeigen</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
