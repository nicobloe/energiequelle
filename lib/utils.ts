import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Füge eine Hilfsfunktion hinzu, um sicherzustellen, dass JSON-Daten korrekt serialisiert werden
export function safeJsonParse(data: string) {
  try {
    return JSON.parse(data)
  } catch (error) {
    console.error("JSON parse error:", error)
    return null
  }
}

// Füge eine Hilfsfunktion hinzu, um sicherzustellen, dass API-Antworten korrekt verarbeitet werden
export async function fetchWithErrorHandling(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options)

    // Überprüfe, ob die Antwort erfolgreich ist
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Überprüfe, ob die Antwort JSON enthält
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      return await response.json()
    }

    // Wenn keine JSON-Antwort, gib den Text zurück
    return await response.text()
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}
