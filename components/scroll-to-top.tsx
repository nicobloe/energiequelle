"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Wenn sich der Pfadname ändert, scrolle zum Anfang der Seite
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Verwende 'instant' statt 'auto' für sofortiges Scrollen
      })
    }
  }, [pathname])

  return null
}
