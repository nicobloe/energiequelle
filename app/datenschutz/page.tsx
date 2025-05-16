import PageLayout from "@/components/page-layout"

export default function DatenschutzPage() {
  return (
    <PageLayout title="Datenschutzerklärung" description="Informationen zum Schutz Ihrer Daten">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Datenschutzerklärung gemäss Schweizer Datenschutzgesetz (DSG)</h2>
          <p className="mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen
            Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Verantwortliche Stelle</h3>
            <p className="mb-1">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mb-1">energieQuelle</p>
            <p className="mb-1">Mühlebachstrasse 5</p>
            <p className="mb-1">6370 Stans</p>
            <p className="mb-1">Schweiz</p>
            <p className="mb-1">Tel.: +41 (0) 79 690 84 34</p>
            <p className="mb-1">E-Mail: info@energiequelle.ch</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Grundsatz</h3>
            <p className="mb-4">
              Wir erheben und verwenden personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und
              Verwendung personenbezogener Daten erfolgt regelmässig nur nach Ihrer Einwilligung. Eine Ausnahme gilt in
              solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht
              möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p className="mb-4">
              Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese
              Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem,
              den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschliesslich um
              Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch
              notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des
              Internets zwingend an.
            </p>
            <p className="mb-4">
              Wir erheben personenbezogene Daten wie Name, Adresse, E-Mail oder Telefonnummer in folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Kontaktaufnahme über unser Kontaktformular</li>
              <li>Anmeldung zu unserem Newsletter</li>
              <li>Anfrage von Informationsmaterial</li>
              <li>Teilnahme an Umfragen oder Gewinnspielen</li>
              <li>Bestellung von Produkten oder Dienstleistungen</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Zweck der Datenverarbeitung</h3>
            <p className="mb-4">Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Um unsere Website und deren Inhalte anzuzeigen und zu verbessern</li>
              <li>Um Ihre Anfragen zu beantworten und mit Ihnen zu kommunizieren</li>
              <li>Um Ihnen unseren Newsletter zuzusenden, sofern Sie eingewilligt haben</li>
              <li>Zur Abwicklung von Bestellungen und Verträgen</li>
              <li>Zur Verhinderung und Aufklärung von Missbrauch</li>
              <li>Zur Gewährleistung der technischen Sicherheit unserer Website</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Rechtsgrundlage der Verarbeitung</h3>
            <p className="mb-4">
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis des Schweizer Datenschutzgesetzes (DSG).
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person
              einholen, dient Art. 31 DSG als Rechtsgrundlage.
            </p>
            <p className="mb-4">
              Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich ist,
              dient Art. 31 Abs. 2 lit. b DSG als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
              Durchführung vorvertraglicher Massnahmen erforderlich sind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Datenweitergabe an Dritte</h3>
            <p className="mb-4">
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken
              findet nicht statt.
            </p>
            <p className="mb-4">Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 31 DSG)</li>
              <li>
                Die Weitergabe zur Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist (Art. 31 Abs. 2 lit.
                b DSG)
              </li>
              <li>Eine gesetzliche Verpflichtung zur Weitergabe besteht (Art. 31 Abs. 2 lit. c DSG)</li>
              <li>
                Die Weitergabe zur Wahrung berechtigter Unternehmensinteressen und zur Durchsetzung von Rechtsansprüchen
                erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse
                an der Nichtweitergabe Ihrer Daten haben (Art. 31 Abs. 2 lit. d DSG)
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Datenübermittlung in Drittländer</h3>
            <p className="mb-4">
              Sofern wir Daten in einem Drittland (d.h. ausserhalb der Schweiz oder der Europäischen Union) verarbeiten
              oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung bzw. Übermittlung von Daten
              an andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer
              (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung
              oder auf Grundlage unserer berechtigten Interessen geschieht.
            </p>
            <p className="mb-4">
              Vorbehaltlich ausdrücklicher Einwilligung oder vertraglicher Erforderlichkeit, verarbeiten oder lassen wir
              die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, vertraglichen Verpflichtung durch
              sogenannte Standardschutzklauseln der EU-Kommission oder beim Vorliegen von Zertifizierungen oder
              verbindlichen internen Datenschutzvorschriften verarbeiten.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Speicherdauer</h3>
            <p className="mb-4">
              Wir speichern personenbezogene Daten nur so lange, wie es für die Zwecke, für die sie verarbeitet werden,
              erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen
              anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen wir unterliegen, vorgesehen wurde.
            </p>
            <p className="mb-4">
              In allen anderen Fällen löschen wir Ihre personenbezogenen Daten nach Wegfall des Zwecks der Verarbeitung,
              mit Ausnahme solcher Daten, die wir zur Erfüllung rechtlicher Verpflichtungen weiter speichern müssen
              (z.B. sind wir aufgrund steuer- und handelsrechtlicher Aufbewahrungs- und Dokumentationspflichten
              verpflichtet, bestimmte Daten für einen Zeitraum von bis zu 10 Jahren zu speichern).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Cookies und Analyse-Tools</h3>
            <p className="mb-4">
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich die
              Benutzerfreundlichkeit und Sicherheit dieser Website.
            </p>
            <p className="mb-4">
              Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es ist nicht
              gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Sie
              entsprechende Einstellungen vornehmen.
            </p>
            <p className="mb-4">
              Diese Website verwendet Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). Google
              Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine
              Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über
              Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und
              dort gespeichert. Wir haben die IP-Anonymisierung aktiviert, so dass Ihre IP-Adresse von Google innerhalb
              von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
              Europäischen Wirtschaftsraum zuvor gekürzt wird. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
              Server von Google in den USA übertragen und dort gekürzt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Ihre Rechte</h3>
            <p className="mb-4">
              Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu
              erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen
              Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten.
            </p>
            <p className="mb-4">Im Einzelnen haben Sie folgende Rechte:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob
                Sie betreffende personenbezogene Daten verarbeitet werden. Ist dies der Fall, so haben Sie ein Recht auf
                Auskunft über diese personenbezogenen Daten und auf weitere Informationen gemäss Art. 25 DSG.
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, von uns unverzüglich die Berichtigung Sie
                betreffender unrichtiger personenbezogener Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung:</strong> Sie haben das Recht, von uns zu verlangen, dass Sie betreffende
                personenbezogene Daten unverzüglich gelöscht werden, und wir sind verpflichtet, personenbezogene Daten
                unverzüglich zu löschen, sofern einer der in Art. 32 DSG aufgeführten Gründe zutrifft.
              </li>
              <li>
                <strong>Recht auf Einschränkung der Verarbeitung:</strong> Sie haben das Recht, von uns die
                Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art. 34 DSG aufgeführten Voraussetzungen
                gegeben ist.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, die Sie betreffenden
                personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch
                einzulegen.
              </li>
              <li>
                <strong>Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung:</strong> Sie haben das
                Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der
                Einwilligung wird die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
                Verarbeitung nicht berührt.
              </li>
              <li>
                <strong>Recht auf Beschwerde bei einer Aufsichtsbehörde:</strong> Sie haben das Recht auf Beschwerde bei
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes
                oder des Orts des mutmasslichen Verstosses, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
                betreffenden personenbezogenen Daten gegen das DSG verstösst.
              </li>
            </ul>
            <p className="mb-4">
              Wenn Sie Fragen zum Datenschutz haben oder eines der genannten Rechte ausüben möchten, wenden Sie sich
              bitte an die oben genannte verantwortliche Stelle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Datensicherheit</h3>
            <p className="mb-4">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in
              Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der
              Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit
              Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne
              Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
              Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
            </p>
            <p className="mb-4">
              Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmassnahmen, um Ihre
              Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung
              oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmassnahmen werden entsprechend
              der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Aktualität und Änderung dieser Datenschutzerklärung</h3>
            <p className="mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
            <p className="mb-4">
              Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website von Ihnen abgerufen und
              ausgedruckt werden.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
