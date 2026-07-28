import { Seo, organizationSchema } from "@/app/components/Seo";
import { LegalLayout, P, H2, UL } from "@/app/components/LegalLayout";

export default function EaisyDeskPrivacy() {
  return (
    <>
      <Seo
        title="eaisyDesk — Adatvédelmi tájékoztató / Privacy Policy"
        description="Az eaisyDesk termékspecifikus adatvédelmi tájékoztatója: Meta API-k (PSID, IGSID, WhatsApp), adatkategóriák, célok, jogalapok, megőrzési idők, adatfeldolgozók és adattörlés. Product-specific privacy policy of eaisyDesk."
        path="/eaisydesk/privacy"
        ogType="article"
        jsonLd={[organizationSchema()]}
      />
      <LegalLayout
        title="eaisyDesk — Adatvédelmi tájékoztató / Privacy Policy"
        lastUpdated="2026-07-28"
        intro={
          <>
            <P>
              Ez a dokumentum az <strong>eaisyDesk</strong> termék termékspecifikus adatvédelmi tájékoztatója. A ThinkAI Kft.
              vállalati szintű tájékoztatója a{" "}
              <a className="text-[#186d98] font-semibold hover:underline" href="/privacy">eaisy.hu/privacy</a> címen érhető el.
            </P>
            <P>
              <em>This is the product-specific privacy notice for <strong>eaisyDesk</strong>. The corporate-level policy of
              ThinkAI Kft. is available at{" "}
              <a className="text-[#186d98] font-semibold hover:underline" href="/privacy">eaisy.hu/privacy</a>.</em>
            </P>
          </>
        }
        hu={
          <>
            <H2>1. Az adatkezelő adatai</H2>
            <UL>
              <li><strong>Adatkezelő (Data Controller):</strong> Think AI Korlátolt Felelősségű Társaság</li>
              <li><strong>Rövidített név:</strong> Think AI Kft.</li>
              <li><strong>Székhely:</strong> 1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó</li>
              <li><strong>Cégjegyzékszám:</strong> 01-09-426295</li>
              <li><strong>Adószám:</strong> 32478620-2-43</li>
              <li><strong>Alapítás dátuma:</strong> 2024. január 23.</li>
              <li><strong>Kapcsolattartási e-mail:</strong> hello@thinkai.hu</li>
            </UL>
            <P>
              Az eaisyDesk ügyfélszolgálati platformot (a továbbiakban: „Szolgáltatás") a ThinkAI Kft. üzemelteti az
              ügyfelek ügyfélszolgálati folyamatainak támogatására.
            </P>
            <P>
              <strong>Az adatkezelés jogalapjai:</strong> GDPR 6. cikk (1) bek. a) (hozzájárulás), b) (szerződéses
              teljesítés) és f) (jogos érdek).
            </P>

            <H2>2. Milyen adatokat gyűjtünk</H2>
            <P>
              A Szolgáltatás az ügyfelekkel folytatott kommunikáció kezelésére és automatizált válaszadásra szolgál. Az
              alábbi adatokat gyűjtjük:
            </P>

            <H2>2.1. Közvetlenül az ügyféltől kapott adatok</H2>
            <UL>
              <li>A kommunikációs csatornákon (telefon, e-mail, Messenger, Instagram, WhatsApp) küldött üzenetek tartalma (szöveg),</li>
              <li>Személyes adatok, amelyeket az ügyfél önként megad (pl. név, telefonszám, e-mail cím, foglalási szándék, panasz leírása),</li>
              <li>Időpontfoglaláskor megadott adatok (név, elérhetőségek, kért szolgáltatás).</li>
            </UL>

            <H2>2.2. Meta engedély-API-n keresztül kapott adatok</H2>
            <P>
              A Meta platformokkal (Facebook/Messenger, Instagram, WhatsApp Business) való integráció során az alábbi
              adatok érkeznek a Meta API-jain keresztül:
            </P>
            <UL>
              <li><strong>Messenger:</strong> a feladó oldal-specifikus azonosítója (PSID, Page-Scoped ID), üzenet szövege, nyilvános profiladatok (keresztnév, vezetéknév, profilkép URL).</li>
              <li><strong>Instagram DM:</strong> a feladó Instagram-azonosítója (IGSID), üzenet szövege, nyilvános profiladatok (név, felhasználónév, profilkép URL).</li>
              <li><strong>WhatsApp Business:</strong> a feladó telefonszáma, üzenet szövege, a Meta által szolgáltatott profilnév (ha elérhető).</li>
            </UL>
            <P>
              A fenti adatokat a Meta Webhook API-ján keresztül kapjuk. A Meta profiladatok lekérdezéséhez a felhasználó
              hozzájárulása a Meta platform saját felületén történik.
            </P>

            <H2>2.3. Harmadik felektől származó adatok</H2>
            <UL>
              <li>AI-szolgáltatóktól (pl. Google Gemini) származó feldolgozott válaszok és összefoglalók, amelyeket az ügyfél eredeti üzenete alapján generálunk,</li>
              <li>Naptár-/foglalási adatok a belső foglalási rendszerből.</li>
            </UL>

            <H2>2.4. Automatikusan gyűjtött adatok</H2>
            <UL>
              <li><strong>Szerver-oldali metaadatok:</strong> üzenet érkezési időpontja, csatorna típusa, IP-cím (a webes kiszolgáló naplóiban, a kommunikáció biztonságos kezelésére szolgáló szerveroldali naplók keretében),</li>
              <li><strong>Munkamenet-adatok (session):</strong> JWT-alapú bejelentkezési token az admin felhasználók számára (8 óra lejárattal), amely nem tartalmaz személyes adatot magánügyfelekről,</li>
              <li><strong>Használati adatok:</strong> az admin felület interakciói (pl. jóváhagyások, állapot-módosítások) a belső auditnapló céljára.</li>
            </UL>

            <H2>3. Hogyan kezeljük az adatokat és milyen célból</H2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-['Inter',sans-serif] border-collapse">
                <thead>
                  <tr className="bg-black/5 text-left">
                    <th className="p-3 border border-black/10">Adatkategória</th>
                    <th className="p-3 border border-black/10">Cél</th>
                    <th className="p-3 border border-black/10">Jogalap</th>
                    <th className="p-3 border border-black/10">Megőrzési idő</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-black/10">Üzenet tartalma (szöveg, transzkript)</td>
                    <td className="p-3 border border-black/10">Ügyfélkiszolgálás, AI-alapú válaszadás, beszélgetésnapló vezetése</td>
                    <td className="p-3 border border-black/10">Szerződéses teljesítés (6(1)(b))</td>
                    <td className="p-3 border border-black/10">A beszélgetés lezárása után legfeljebb 24 hónap</td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10">Név, elérhetőségek (telefon, e-mail)</td>
                    <td className="p-3 border border-black/10">Ügyfélazonosítás visszatéréskor, kapcsolattartás, foglalás visszaigazolása</td>
                    <td className="p-3 border border-black/10">Szerződéses teljesítés (6(1)(b))</td>
                    <td className="p-3 border border-black/10">Az ügyfélkapcsolat alatt; törlésig</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-black/10">Meta azonosítók (PSID, IGSID, WhatsApp-szám)</td>
                    <td className="p-3 border border-black/10">Válasz küldése a megfelelő csatornán, ügyfél felismerése</td>
                    <td className="p-3 border border-black/10">Hozzájárulás (6(1)(a)) és szerződéses teljesítés (6(1)(b))</td>
                    <td className="p-3 border border-black/10">Az ügyfélkapcsolat alatt</td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10">AI által generált összefoglalók, besorolás</td>
                    <td className="p-3 border border-black/10">Ügyfélszolgálati munkafolyamat támogatása (triage, állapotkövetés)</td>
                    <td className="p-3 border border-black/10">Jogos érdek (6(1)(f))</td>
                    <td className="p-3 border border-black/10">A beszélgetésnaplóval egyezően</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-black/10">Szervernaplók, IP-címek</td>
                    <td className="p-3 border border-black/10">Biztonság, visszaélések megelőzése, hibakeresés</td>
                    <td className="p-3 border border-black/10">Jogos érdek (6(1)(f))</td>
                    <td className="p-3 border border-black/10">Legfeljebb 30 nap</td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10">Foglalási adatok</td>
                    <td className="p-3 border border-black/10">Időpontok kezelése, emlékeztetők küldése</td>
                    <td className="p-3 border border-black/10">Szerződéses teljesítés (6(1)(b))</td>
                    <td className="p-3 border border-black/10">A foglalás teljesülése + könyvelési kötelezettség ideje</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              <strong>Adattovábbítás harmadik országokba:</strong> Az AI-szolgáltató (Google) és a Meta szerverei az Európai
              Gazdasági Térségen (EGT) kívül is feldolgozhatnak adatokat. A ThinkAI Kft. megfelelő garanciákat (Standard
              Contractual Clauses) alkalmaz az adattovábbítás jogszerűsége érdekében.
            </P>
            <P><strong>Adatfeldolgozók (processzorok), akik adatokhoz férnek:</strong></P>
            <UL>
              <li><strong>Meta Platforms Ireland Ltd.</strong> — Messenger/Instagram/WhatsApp üzenetek kézbesítése</li>
              <li><strong>Google Ireland Ltd. / Google LLC</strong> — AI-alapú szövegfeldolgozás (Gemini), LiveKit hangalapú agent</li>
              <li><strong>Brevo (Sendinblue)</strong> — tranzakciós e-mailek küldése (visszaigazolások, emlékeztetők)</li>
              <li><strong>Supabase</strong> — adatbázis-hosting (EU-régió)</li>
              <li><strong>LiveKit</strong> — valós idejű hangkommunikáció</li>
            </UL>

            <H2>4. Hogyan kérheti az adatai törlését</H2>
            <P><strong>Meta alkalmazások esetén (Messenger, Instagram, WhatsApp):</strong> Ha Meta-platformon (Messenger, Instagram, WhatsApp) keresztül kommunikált a Szolgáltatással, és törölni szeretné az adatait, a következőket teheti:</P>
            <UL>
              <li><strong>Meta adattörlési callback:</strong> A Meta platformról indított adattörlési kérelem automatikusan megérkezik hozzánk a Meta adattörlési webhookján keresztül. Ennek hatására az összes, az Ön Meta-azonosítójához (PSID/IGSID/telefonszám) kapcsolódó adatot töröljük rendszerünkből, és visszaigazoljuk a törlést a Meta felé.</li>
              <li><strong>Közvetlen kérelem:</strong> Írjon a hello@thinkai.hu címre „Adattörlés kérelem" tárggyal. A kérelem megküldésekor adja meg a csatornát és az azonosítóját (telefonszám, e-mail cím vagy Meta-felhasználónév). A kérelmet a beérkezéstől számított legfeljebb 30 napon belül teljesítjük, és visszaigazoljuk.</li>
              <li><strong>Általános adattörlés (minden csatorna):</strong> Kérheti adatai törlését bármikor a hello@thinkai.hu címen. A GDPR „elfeledtetéshez való jog" (17. cikk) alapján a törlést akkor teljesítjük, ha nincs fennálló jogi kötelezettség (pl. számviteli nyilvántartás) az adatok megőrzésére.</li>
            </UL>

            <H2>5. Az érintett jogai (GDPR 15–22. cikk)</H2>
            <P>A GDPR alapján a következő jogok illetik meg Önt:</P>
            <UL>
              <li><strong>Hozzáférési jog (15. cikk):</strong> tájékoztatást kérhet a kezelt adatokról,</li>
              <li><strong>Helyesbítéshez való jog (16. cikk):</strong> kérheti a pontatlan adatok módosítását,</li>
              <li><strong>Törléshez / el felejtetéshez való jog (17. cikk),</strong></li>
              <li><strong>Adatkezelés korlátozásához való jog (18. cikk),</strong></li>
              <li><strong>Adathordozhatósághoz való jog (20. cikk),</strong></li>
              <li><strong>Tiltakozási jog (21. cikk),</strong></li>
              <li><strong>Automatizált döntéshozatallal kapcsolatos jog (22. cikk):</strong> az AI-alapú klasszifikáció nem eredményez Önt jogilag kötelező döntést; minden automatikus választ ember is felülvizsgálhatja a jóváhagyási rendszerben.</li>
            </UL>
            <P>
              A jogok gyakorlása érdekében írjon a hello@thinkai.hu címre. Panasza esetén a Nemzeti Adatvédelmi és
              Információszabadság Hatósághoz (NAIH, https://naih.hu) fordulhat.
            </P>

            <H2>6. Adatbiztonság</H2>
            <P>A ThinkAI Kft. megfelelő technikai és szervezeti intézkedéseket tesz az adatok védelme érdekében:</P>
            <UL>
              <li>Adatbázis-szintű hozzáférés-szabályozás (RLS — Row Level Security),</li>
              <li>Titkosított kapcsolat (HTTPS/TLS) az összes adatátvitelnél,</li>
              <li>Service-role kulcsok korlátozott hozzáférése (csak a backend szerver),</li>
              <li>Rendszeres biztonsági audit és sebezhetőségi ellenőrzés.</li>
            </UL>

            <H2>7. Sütik (cookies)</H2>
            <P>
              Az admin felület minimális sütiket használ a bejelentkezési munkamenet fenntartására (JWT token a
              localStorage-ben). Harmadik fél sütiket (hirdetési, analitikai) nem használunk. A webhely cookie-consent
              bannert jelenít meg a látogatók számára.
            </P>

            <H2>8. Kapcsolat</H2>
            <UL>
              <li><strong>Adatkezelő:</strong> Think AI Korlátolt Felelősségű Társaság</li>
              <li><strong>Székhely:</strong> 1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó</li>
              <li><strong>Cégjegyzékszám:</strong> 01-09-426295</li>
              <li><strong>Adószám:</strong> 32478620-2-43</li>
              <li><strong>E-mail:</strong> hello@thinkai.hu</li>
              <li><strong>Adatvédelmi incidens bejelentése:</strong> hello@thinkai.hu</li>
            </UL>
          </>
        }
        en={
          <>
            <H2>1. Data controller</H2>
            <UL>
              <li><strong>Data Controller:</strong> Think AI Korlátolt Felelősségű Társaság (Think AI Kft.)</li>
              <li><strong>Registered office:</strong> 1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó, Hungary</li>
              <li><strong>Company registration number:</strong> 01-09-426295</li>
              <li><strong>Tax number:</strong> 32478620-2-43</li>
              <li><strong>Date of foundation:</strong> 23 January 2024</li>
              <li><strong>Contact email:</strong> hello@thinkai.hu</li>
            </UL>
            <P>
              The eaisyDesk customer-service platform ("Service") is operated by ThinkAI Kft. to support customer-service
              workflows.
            </P>
            <P>
              <strong>Legal bases for processing:</strong> GDPR Art. 6(1)(a) (consent), (b) (contract performance), and (f)
              (legitimate interest).
            </P>

            <H2>2. What data we collect</H2>
            <P>
              The Service is used to manage and automate responses to customer communications. We collect the following
              data:
            </P>

            <H2>2.1. Data provided directly by the user</H2>
            <UL>
              <li>Content of messages sent via any communication channel (phone, e-mail, Messenger, Instagram, WhatsApp),</li>
              <li>Personal details voluntarily provided (e.g. name, phone number, e-mail address, booking intent, complaint description),</li>
              <li>Booking details provided when scheduling (name, contact info, requested service).</li>
            </UL>

            <H2>2.2. Data received via Meta permission APIs</H2>
            <P>
              Through integration with Meta platforms (Facebook/Messenger, Instagram, WhatsApp Business) the following data
              is received via Meta's APIs:
            </P>
            <UL>
              <li><strong>Messenger:</strong> the sender's Page-Scoped ID (PSID), message text, public profile data (first name, last name, profile picture URL).</li>
              <li><strong>Instagram DM:</strong> the sender's Instagram ID (IGSID), message text, public profile data (name, username, profile picture URL).</li>
              <li><strong>WhatsApp Business:</strong> the sender's phone number, message text, profile name provided by Meta (if available).</li>
            </UL>
            <P>This data is received via the Meta Webhook API. Consent for Meta profile data is obtained on the Meta platform itself.</P>

            <H2>2.3. Data from third parties</H2>
            <UL>
              <li>AI-generated responses and summaries from AI providers (e.g. Google Gemini), based on the user's original message,</li>
              <li>Booking data from the internal booking system.</li>
            </UL>

            <H2>2.4. Automatically collected data</H2>
            <UL>
              <li><strong>Server-side metadata:</strong> message timestamps, channel type, IP address (in web-server logs, for secure operation),</li>
              <li><strong>Session data:</strong> JWT-based login token for admin users (8-hour expiry) — does not contain personal data about end customers,</li>
              <li><strong>Usage data:</strong> admin-interface interactions (approvals, status changes) for the internal audit log.</li>
            </UL>

            <H2>3. How we use the data and for what purpose</H2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-['Inter',sans-serif] border-collapse">
                <thead>
                  <tr className="bg-black/5 text-left">
                    <th className="p-3 border border-black/10">Data category</th>
                    <th className="p-3 border border-black/10">Purpose</th>
                    <th className="p-3 border border-black/10">Legal basis</th>
                    <th className="p-3 border border-black/10">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-black/10">Message content (text, transcript)</td>
                    <td className="p-3 border border-black/10">Customer service, AI-assisted responses, conversation log</td>
                    <td className="p-3 border border-black/10">Contract performance (6(1)(b))</td>
                    <td className="p-3 border border-black/10">By default up to 24 months after the conversation is closed</td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10">Name, contact info (phone, e-mail)</td>
                    <td className="p-3 border border/10">Customer identification on return, contact, booking confirmation</td>
                    <td className="p-3 border border-black/10">Contract performance (6(1)(b))</td>
                    <td className="p-3 border border-black/10">For the duration of the customer relationship</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-black/10">Meta IDs (PSID, IGSID, WhatsApp number)</td>
                    <td className="p-3 border border-black/10">Sending a reply on the right channel, customer recognition</td>
                    <td className="p-3 border border-black/10">Consent (6(1)(a)) and contract performance (6(1)(b))</td>
                    <td className="p-3 border border-black/10">For the duration of the customer relationship</td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10">AI-generated summaries, classification</td>
                    <td className="p-3 border border-black/10">Support of customer-service workflows (triage, status tracking)</td>
                    <td className="p-3 border border-black/10">Legitimate interest (6(1)(f))</td>
                    <td className="p-3 border border-black/10">Same as the conversation log</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-black/10">Server logs, IP addresses</td>
                    <td className="p-3 border border-black/10">Security, abuse prevention, debugging</td>
                    <td className="p-3 border border-black/10">Legitimate interest (6(1)(f))</td>
                    <td className="p-3 border border-black/10">Up to 30 days</td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10">Booking data</td>
                    <td className="p-3 border border-black/10">Appointment management, sending reminders</td>
                    <td className="p-3 border border-black/10">Contract performance (6(1)(b))</td>
                    <td className="p-3 border border-black/10">Until appointment + accounting obligations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              <strong>Transfers outside the EEA:</strong> AI providers (Google) and Meta servers may process data outside
              the European Economic Area. ThinkAI Kft. applies appropriate safeguards (Standard Contractual Clauses) to
              ensure lawful transfers.
            </P>
            <P><strong>Processors with access to data:</strong></P>
            <UL>
              <li><strong>Meta Platforms Ireland Ltd.</strong> — Messenger/Instagram/WhatsApp message delivery</li>
              <li><strong>Google Ireland Ltd. / Google LLC</strong> — AI-based text processing (Gemini), LiveKit voice agent</li>
              <li><strong>Brevo (Sendinblue)</strong> — transactional e-mail sending</li>
              <li><strong>Supabase</strong> — database hosting (EU region)</li>
              <li><strong>LiveKit</strong> — real-time voice communication</li>
            </UL>

            <H2>4. How to request deletion of your data</H2>
            <P><strong>For Meta applications (Messenger, Instagram, WhatsApp):</strong> If you communicated with the Service via a Meta platform, you can request deletion of your data as follows:</P>
            <UL>
              <li><strong>Meta data-deletion callback:</strong> A deletion request initiated from the Meta platform is delivered to us automatically through the Meta data-deletion webhook. As a result, we delete all data linked to your Meta ID (PSID/IGSID/phone number) from our system and confirm the deletion to Meta.</li>
              <li><strong>Direct request:</strong> E-mail hello@thinkai.hu with the subject "Data deletion request". Please include the channel and your identifier (phone number, e-mail address or Meta username). We fulfil the request within at most 30 days of receipt and confirm it.</li>
              <li><strong>General deletion (all channels):</strong> You may request deletion of your data at any time by e-mailing hello@thinkai.hu. Under the GDPR "right to erasure" (Art. 17), we carry out the deletion unless there is a legal obligation (e.g. accounting records) to retain the data.</li>
            </UL>

            <H2>5. Your rights under the GDPR (Arts. 15–22)</H2>
            <P>Under the GDPR you have the following rights:</P>
            <UL>
              <li><strong>Right of access (Art. 15):</strong> you may request information about the data we process,</li>
              <li><strong>Right to rectification (Art. 16):</strong> you may request correction of inaccurate data,</li>
              <li><strong>Right to erasure / "right to be forgotten" (Art. 17),</strong></li>
              <li><strong>Right to restriction of processing (Art. 18),</strong></li>
              <li><strong>Right to data portability (Art. 20),</strong></li>
              <li><strong>Right to object (Art. 21),</strong></li>
              <li><strong>Rights regarding automated decision-making (Art. 22):</strong> AI-based classification does not produce legal effects concerning you; every automatic reply can be reviewed by a human in the approval system.</li>
            </UL>
            <P>
              To exercise your rights, e-mail hello@thinkai.hu. You may lodge a complaint with the Hungarian National
              Authority for Data Protection and Freedom of Information (NAIH, https://naih.hu).
            </P>

            <H2>6. Data security</H2>
            <P>ThinkAI Kft. takes appropriate technical and organisational measures to protect the data:</P>
            <UL>
              <li>Database-level access control (Row Level Security, RLS),</li>
              <li>Encrypted connection (HTTPS/TLS) for all data transmission,</li>
              <li>Restricted access to service-role keys (backend server only),</li>
              <li>Regular security audits and vulnerability checks.</li>
            </UL>

            <H2>7. Cookies</H2>
            <P>
              The admin interface uses minimal cookies to maintain the login session (JWT token in localStorage). We do not
              use third-party cookies (advertising, analytics). The website shows a cookie-consent banner to visitors.
            </P>

            <H2>8. Contact</H2>
            <UL>
              <li><strong>Data Controller:</strong> Think AI Korlátolt Felelősségű Társaság (Think AI Kft.)</li>
              <li><strong>Registered office:</strong> 1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó, Hungary</li>
              <li><strong>Company registration number:</strong> 01-09-426295</li>
              <li><strong>Tax number:</strong> 32478620-2-43</li>
              <li><strong>E-mail:</strong> hello@thinkai.hu</li>
              <li><strong>Data-breach reporting:</strong> hello@thinkai.hu</li>
            </UL>
          </>
        }
      />
    </>
  );
}
