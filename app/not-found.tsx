import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-8">Seite nicht gefunden</h2>
      <p className="text-gray-500 max-w-md mb-8">Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
      <Button asChild className="cta-button">
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  )
}
