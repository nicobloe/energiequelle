import PageLayout from "@/components/page-layout"
import Link from "next/link"

export default function ImpressumPage() {
  return (
    <PageLayout title="Impressum" description="Rechtliche Informationen">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Rechtliche Angaben</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Kontaktadresse</h3>
            <p className="mb-1">energieQuelle</p>
            <p className="mb-1">Mühlebachstrasse 5</p>
            <p className="mb-1">6370 Stans</p>
            <p className="mb-1">Schweiz</p>
            <p className="mb-1">Tel.: +41 (0) 79 690 84 34</p>
            <p className="mb-1">E-Mail: info@energiequelle.ch</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Vertretungsberechtigte Person</h3>
            <p className="mb-4">[Name der vertretungsberechtigten Person einfügen]</p>
            <p className="text-sm text-gray-600 italic">
              Hinweis: Die für den Inhalt verantwortliche Person muss namentlich genannt werden.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Handelsregistereintrag</h3>
            <p className="mb-1">[Falls vorhanden, Handelsregisternummer einfügen]</p>
            <p className="mb-1">Firmennummer: [Firmennummer einfügen, falls vorhanden]</p>
            <p className="mb-4">UID: [UID-Nummer einfügen, falls vorhanden]</p>
            <p className="text-sm text-gray-600 italic">
              Hinweis: Falls Ihr Unternehmen im Handelsregister eingetragen ist, sollten diese Informationen ergänzt
              werden.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Haftungsausschluss</h3>
            <p className="mb-4">
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
              Vollständigkeit der Informationen.
            </p>
            <p className="mb-4">
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff
              oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung
              oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
            <p className="mb-4">
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das
              gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
              Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Urheberrecht</h3>
            <p className="mb-4">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website
              gehören ausschliesslich energieQuelle oder den speziell genannten Rechteinhabern. Für die Reproduktion
              jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Datenschutz</h3>
            <p className="mb-4">
              Basierend auf datenschutzrechtlichen Bestimmungen hat jede Person Anspruch auf Schutz ihrer Privatsphäre
              sowie auf Schutz vor Missbrauch ihrer persönlichen Daten.
            </p>
            <p className="mb-4">
              Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-[#2aaa8a] hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Änderungen</h3>
            <p className="mb-4">
              Wir können diese Impressum-Informationen jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils
              aktuelle, auf unserer Website publizierte Fassung.
            </p>
            <p className="mb-4">Letzte Aktualisierung: Mai 2025</p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
