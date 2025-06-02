"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

// Mapping von Pfaden zu benutzerfreundlichen Namen
const pathMap: Record<string, string> = {
  produkte: "Produkte",
  stoffwechselkur: "Stoffwechselkur",
  "ueber-uns": "Über uns",
  blog: "Blog",
  erfahrungsberichte: "Erfahrungsberichte",
  events: "Events",
  newsletter: "Newsletter",
  contact: "Kontakt",
  "gut-health": "Darmgesundheit",
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Wenn wir auf der Startseite sind, keine Breadcrumbs anzeigen
  if (pathname === "/") return null

  // Pfad in Segmente aufteilen und das erste leere Segment entfernen
  const segments = pathname.split("/").filter(Boolean)

  // Wenn keine Segmente vorhanden sind, keine Breadcrumbs anzeigen
  if (segments.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="bg-white py-2 px-4 md:px-8">
      <ol className="flex items-center flex-wrap text-sm">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-[#9BCCED] flex items-center">
            <Home className="h-4 w-4" />
            <span className="sr-only">Startseite</span>
          </Link>
          {segments.length > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />}
        </li>

        {segments.map((segment, index) => {
          // Pfad bis zum aktuellen Segment erstellen
          const path = `/${segments.slice(0, index + 1).join("/")}`
          // Prüfen, ob es das letzte Segment ist
          const isLast = index === segments.length - 1

          return (
            <li key={path} className="flex items-center">
              {isLast ? (
                <span className="font-medium text-[#9BCCED]" aria-current="page">
                  {pathMap[segment] || segment}
                </span>
              ) : (
                <>
                  <Link href={path} className="text-gray-500 hover:text-[#9BCCED]">
                    {pathMap[segment] || segment}
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
