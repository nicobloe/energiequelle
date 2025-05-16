import PageLayout from "@/components/page-layout"
import Contact from "@/components/contact"

export default function ContactPage() {
  return (
    <PageLayout title="Kontakt" description="Haben Sie Fragen? Wir sind für Sie da!">
      <div className="max-w-6xl mx-auto">
        <Contact />
      </div>
    </PageLayout>
  )
}
