"use server"

// Beispiel für eine korrekte Server Action mit Response
export async function exampleAction(formData: FormData) {
  try {
    // Verarbeitung der Daten
    const name = formData.get("name")

    // Korrekte Rückgabe von JSON-Daten
    return { success: true, data: { name } }
  } catch (error) {
    console.error("Action error:", error)
    return { success: false, error: "Ein Fehler ist aufgetreten" }
  }
}
