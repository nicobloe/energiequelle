import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Beispiel für korrekte Verwendung von NextResponse
    return NextResponse.json({ message: "Success" })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
