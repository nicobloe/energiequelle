import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Diese Middleware kann helfen, Probleme mit der API-Handhabung zu beheben
export function middleware(request: NextRequest) {
  // Stelle sicher, dass alle API-Anfragen korrekt verarbeitet werden
  if (request.nextUrl.pathname.startsWith("/api/")) {
    // Füge CORS-Header hinzu
    const response = NextResponse.next()
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    return response
  }

  return NextResponse.next()
}

// Konfiguriere die Middleware, um nur für API-Routen zu gelten
export const config = {
  matcher: "/api/:path*",
}
