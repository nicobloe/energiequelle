import { NextResponse } from "next/server"

// Beispiel für eine korrekte API-Route
export async function GET() {
  try {
    // Verwende NextResponse.json() statt Response.json()
    return NextResponse.json({ message: "Success" })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

// Stelle sicher, dass OPTIONS-Anfragen korrekt behandelt werden
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}
