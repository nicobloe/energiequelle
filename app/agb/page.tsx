import PageLayout from "@/components/page-layout"

export default function AGBPage() {
  return (
    <PageLayout title="Allgemeine Geschäftsbedingungen" description="Unsere AGB für Bestellungen und Dienstleistungen">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Allgemeine Geschäftsbedingungen (AGB)</h2>
          <p className="mb-6">
            Die nachfolgenden Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen energieQuelle und
            unseren Kunden. Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">1. Geltungsbereich</h3>
            <p className="mb-4">
              1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für sämtliche Verträge zwischen
              energieQuelle (nachfolgend "wir" oder "uns") und unseren Kunden (nachfolgend "Kunde" oder "Sie").
            </p>
            <p className="mb-4">
              1.2 Wir sind offizieller Partner von Zinzino und vermitteln deren Produkte. Der Verkauf der Produkte
              erfolgt direkt über Zinzino. Für den Kauf der Produkte gelten zusätzlich die AGB von Zinzino.
            </p>
            <p className="mb-4">
              1.3 Für Beratungsleistungen, Stoffwechselkuren und andere von uns direkt angebotene Dienstleistungen
              gelten ausschließlich diese AGB.
            </p>
            <p className="mb-4">
              1.4 Abweichende, entgegenstehende oder ergänzende AGB werden nicht Vertragsbestandteil, es sei denn, ihrer
              Geltung wird ausdrücklich schriftlich zugestimmt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">2. Vertragsabschluss</h3>
            <p className="mb-4">
              2.1 Die Darstellung unserer Dienstleistungen auf unserer Website stellt kein rechtlich bindendes Angebot,
              sondern eine unverbindliche Aufforderung dar, bei uns Dienstleistungen zu buchen.
            </p>
            <p className="mb-4">
              2.2 Durch Absenden einer Anfrage über unser Kontaktformular, per E-Mail oder telefonisch geben Sie eine
              unverbindliche Anfrage ab.
            </p>
            <p className="mb-4">
              2.3 Ein Vertrag kommt erst zustande, wenn wir Ihre Anfrage durch eine separate Auftragsbestätigung per
              E-Mail annehmen oder die Dienstleistung erbringen.
            </p>
            <p className="mb-4">
              2.4 Für Produktbestellungen über Zinzino gelten die Vertragsabschlussbedingungen von Zinzino.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">3. Leistungsbeschreibung</h3>
            <p className="mb-4">
              3.1 Der Umfang unserer Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung zum Zeitpunkt der
              Buchung sowie aus den entsprechenden Angaben in der Auftragsbestätigung.
            </p>
            <p className="mb-4">
              3.2 Wir behalten uns vor, Änderungen der Leistungsbeschreibung vorzunehmen, sofern diese nach
              Vertragsschluss notwendig werden und von uns nicht wider Treu und Glauben herbeigeführt wurden.
            </p>
            <p className="mb-4">
              3.3 Bei der Stoffwechselkur handelt es sich um ein Konzept zur Unterstützung einer gesunden Ernährung und
              Lebensweise. Es handelt sich nicht um eine medizinische Behandlung und ersetzt nicht den Besuch bei einem
              Arzt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">4. Preise und Zahlungsbedingungen</h3>
            <p className="mb-4">
              4.1 Die angegebenen Preise für unsere Dienstleistungen sind Endpreise und enthalten die gesetzliche
              Mehrwertsteuer.
            </p>
            <p className="mb-4">
              4.2 Die Zahlung erfolgt nach Vereinbarung per Überweisung, Kreditkarte oder Barzahlung. Die Zahlung ist,
              sofern nicht anders vereinbart, sofort nach Erhalt der Rechnung fällig.
            </p>
            <p className="mb-4">
              4.3 Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 5% über dem Basiszinssatz zu
              berechnen. Die Geltendmachung eines höheren Verzugsschadens bleibt vorbehalten.
            </p>
            <p className="mb-4">
              4.4 Für Produktbestellungen über Zinzino gelten die Preise und Zahlungsbedingungen von Zinzino.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">5. Terminvereinbarung und Stornierung</h3>
            <p className="mb-4">
              5.1 Termine für Beratungen und andere Dienstleistungen werden individuell vereinbart und per E-Mail oder
              telefonisch bestätigt.
            </p>
            <p className="mb-4">
              5.2 Terminabsagen oder -verschiebungen müssen mindestens 24 Stunden vor dem vereinbarten Termin erfolgen.
              Bei späteren Absagen oder Nichterscheinen behalten wir uns vor, 50% des vereinbarten Honorars in Rechnung
              zu stellen.
            </p>
            <p className="mb-4">
              5.3 Wir behalten uns vor, Termine aus wichtigem Grund (z.B. Krankheit) abzusagen oder zu verschieben. In
              diesem Fall werden wir Sie schnellstmöglich informieren und einen Ersatztermin anbieten.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">6. Widerrufsrecht</h3>
            <p className="mb-4">
              6.1 Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Verbraucher ist jede natürliche Person, die ein
              Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen
              beruflichen Tätigkeit zugerechnet werden können.
            </p>
            <p className="mb-4">
              6.2 Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die
              Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="mb-4">
              6.3 Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. ein mit der
              Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
            <p className="mb-4">
              6.4 Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
              Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
            <p className="mb-4">
              6.5 Das Widerrufsrecht erlischt bei Dienstleistungen, wenn wir die Dienstleistung vollständig erbracht
              haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche
              Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht
              bei vollständiger Vertragserfüllung durch uns verlieren.
            </p>
            <p className="mb-4">
              6.6 Für Produktbestellungen über Zinzino gelten die Widerrufsbestimmungen von Zinzino.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">7. Haftung</h3>
            <p className="mb-4">
              7.1 Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit,
              soweit wir diese zu vertreten haben.
            </p>
            <p className="mb-4">
              7.2 Für andere Schäden haften wir nur, wenn sie auf einer vorsätzlichen oder grob fahrlässigen
              Pflichtverletzung durch uns oder unsere Erfüllungsgehilfen beruhen.
            </p>
            <p className="mb-4">
              7.3 Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten
              verletzt werden.
            </p>
            <p className="mb-4">
              7.4 Wir übernehmen keine Haftung für den Erfolg unserer Beratungen, insbesondere nicht für den Erfolg der
              Stoffwechselkur oder anderer Gesundheitskonzepte. Die Ergebnisse können individuell variieren und hängen
              von verschiedenen Faktoren ab, die nicht in unserem Einflussbereich liegen.
            </p>
            <p className="mb-4">
              7.5 Für Produktbestellungen über Zinzino gelten die Haftungsbestimmungen von Zinzino.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">8. Gesundheitshinweise</h3>
            <p className="mb-4">
              8.1 Unsere Beratungen und Konzepte, einschließlich der Stoffwechselkur, ersetzen nicht den Besuch bei
              einem Arzt oder eine medizinische Behandlung.
            </p>
            <p className="mb-4">
              8.2 Bei bestehenden Erkrankungen oder gesundheitlichen Beschwerden sollten Sie vor Beginn einer
              Stoffwechselkur oder der Einnahme von Nahrungsergänzungsmitteln Rücksprache mit Ihrem Arzt halten.
            </p>
            <p className="mb-4">
              8.3 Wir übernehmen keine Verantwortung für gesundheitliche Folgen, die aus der Nichtbeachtung ärztlicher
              Anweisungen oder der unsachgemäßen Anwendung unserer Konzepte resultieren.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">9. Datenschutz</h3>
            <p className="mb-4">
              9.1 Wir erheben und verwenden Ihre personenbezogenen Daten ausschließlich im Rahmen der Bestimmungen des
              Schweizer Datenschutzgesetzes (DSG).
            </p>
            <p className="mb-4">
              9.2 Nähere Einzelheiten zur Datenverarbeitung entnehmen Sie bitte unserer Datenschutzerklärung, die Sie
              auf unserer Website unter "Datenschutz" finden.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">10. Urheberrecht</h3>
            <p className="mb-4">
              10.1 Alle im Rahmen unserer Dienstleistungen zur Verfügung gestellten Materialien, Dokumente und Inhalte
              sind urheberrechtlich geschützt.
            </p>
            <p className="mb-4">
              10.2 Jede Nutzung, Vervielfältigung, Verbreitung oder sonstige Verwertung dieser Materialien, die über den
              vertraglich vereinbarten Zweck hinausgeht, bedarf unserer vorherigen schriftlichen Zustimmung.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">11. Schlussbestimmungen</h3>
            <p className="mb-4">
              11.1 Es gilt das Recht der Schweizerischen Eidgenossenschaft unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mb-4">
              11.2 Erfüllungsort für alle Leistungen aus den mit uns bestehenden Geschäftsbeziehungen ist Stans,
              Schweiz.
            </p>
            <p className="mb-4">
              11.3 Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist Stans, Schweiz, sofern es sich
              bei dem Kunden um einen Kaufmann, eine juristische Person des öffentlichen Rechts oder ein
              öffentlich-rechtliches Sondervermögen handelt.
            </p>
            <p className="mb-4">
              11.4 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so berührt dies die Wirksamkeit
              der übrigen Bestimmungen nicht.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">12. Änderungen der AGB</h3>
            <p className="mb-4">
              12.1 Wir behalten uns vor, diese AGB jederzeit und ohne Nennung von Gründen zu ändern.
            </p>
            <p className="mb-4">
              12.2 Die geänderten Bedingungen werden Ihnen per E-Mail mindestens zwei Wochen vor ihrem Inkrafttreten
              zugesendet. Widersprechen Sie der Geltung der neuen AGB nicht innerhalb von zwei Wochen nach Empfang der
              E-Mail, gelten die geänderten AGB als angenommen.
            </p>
            <p className="mb-4">Stand: Mai 2025</p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
