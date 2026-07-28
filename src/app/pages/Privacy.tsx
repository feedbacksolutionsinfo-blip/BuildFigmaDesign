import { Seo, organizationSchema, websiteSchema } from "@/app/components/Seo";
import { LegalLayout, P, H2, UL } from "@/app/components/LegalLayout";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Adatvédelmi tájékoztató / Privacy Policy — ThinkAI Kft."
        description="A ThinkAI Kft. vállalati szintű adatvédelmi tájékoztatója: általános adatkezelési elvek, GDPR-jogok, terméktábla és elérhetőségek. Corporate privacy policy of ThinkAI Kft."
        path="/privacy"
        ogType="article"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <LegalLayout
        title="Adatvédelmi tájékoztató / Privacy Policy"
        lastUpdated="2026-07-28"
        intro={
          <>
            <P>
              A ThinkAI Kft. (a továbbiakban: „Társaság", „adatkezelő") több szoftverterméket üzemeltet. Ez az oldal a
              vállalati szintű adatvédelmi tájékoztató, amely lefedi a Társaság általános adatkezelési elveit és a termékek
              felsorolását.
            </P>
            <P>
              Minden egyes termék saját, termékspecifikus adatvédelmi tájékoztatóval rendelkezik, amely pontosan az adott
              termék által gyűjtött és kezelt adatokat, a célokat, a megőrzési időket és az adattörlés módját írja le.
              Kérjük, hogy az Ön által használt termékhez tartozó tájékoztatót olvassa el.
            </P>
            <P>
              <em>The ThinkAI Kft. operates several software products. This page is the corporate-level privacy policy,
              covering general data-processing principles and the product list. Each product has its own product-specific
              privacy notice below — please read the one for the product you use.</em>
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

            <H2>2. Termékek és termékspecifikus tájékoztatók</H2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-['Inter',sans-serif] border-collapse">
                <thead>
                  <tr className="bg-black/5 text-left">
                    <th className="p-3 border border-black/10">Termék</th>
                    <th className="p-3 border border-black/10">Leírás</th>
                    <th className="p-3 border border-black/10">Termékspecifikus tájékoztató</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-black/10 font-semibold">eaisyDesk</td>
                    <td className="p-3 border border-black/10">Többcsatornás, AI-alapú ügyfélszolgálati (helpdesk) platform — telefon, e-mail, Messenger, Instagram, WhatsApp integráció</td>
                    <td className="p-3 border border-black/10"><a className="text-[#186d98] font-semibold hover:underline" href="/eaisydesk/privacy">eaisy.hu/eaisydesk/privacy</a></td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10 text-black/50">(további termékek)</td>
                    <td className="p-3 border border-black/10 text-black/50">ide kerülnek a jövőbeli termékek</td>
                    <td className="p-3 border border-black/10 text-black/50">…</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Ha nem biztos benne, hogy melyik terméket használja, vagy a fenti listán nem találja a keresett tájékoztatót,
              írjon a hello@thinkai.hu címre.
            </P>

            <H2>3. Általános adatkezelési alapelvek</H2>
            <P>
              A következő alapelvek valamennyi ThinkAI-termékre vonatkoznak; a konkrét adatok, célok és megőrzési idők a
              termékspecifikus tájékoztatókban szerepelnek.
            </P>
            <UL>
              <li><strong>Jogszerűség, tisztességes eljárás és átláthatóság:</strong> személyes adatot csak megfelelő jogalapon (hozzájárulás, szerződéses teljesítés, jogos érdek, jogi kötelezettség) kezelünk, és az érintettet erről érthetően tájékoztatjuk.</li>
              <li><strong>Célhoz kötöttség:</strong> az adatokat csak az összegyűjtésük céljára használjuk fel.</li>
              <li><strong>Adattömörítés:</strong> csak a cél megvalósulásához szükséges adatokat kezeljük.</li>
              <li><strong>Pontosság:</strong> az adatokat pontosan és naprakészen tartjuk.</li>
              <li><strong>Tárolási korlátozás:</strong> az adatokat csak a cél eléréséhez szükséges ideig őrizzük meg, utána töröljük vagy anonimizáljuk.</li>
              <li><strong>Biztonság:</strong> megfelelő technikai és szervezeti intézkedésekkel védjük az adatokat (TLS-titkosítás, adatbázis-szintű hozzáférés-szabályozás/RLS, korlátozott service-role hozzáférés, rendszeres audit).</li>
              <li><strong>Elnézettség és felelősség:</strong> az adatkezelést úgy végezzük, hogy meg tudjuk indokolni a GDPR-megfelelést.</li>
            </UL>

            <H2>4. Adattovábbítás harmadik országokba</H2>
            <P>
              Egyes termékeink harmadik fél szolgáltatókat vesznek igénybe (pl. felhő-hosting, AI-feldolgozás, e-mail
              kézbesítés), amelyek az Európai Gazdasági Térségen (EGT) kívül is feldolgozhatnak adatokat. Ezekről az
              adattovábbításokról és a biztosított garanciákról (Standard Contractual Clauses) a termékspecifikus
              tájékoztatók számolnak be részletesen.
            </P>

            <H2>5. Az érintett jogai (GDPR 15–22. cikk)</H2>
            <P>A GDPR alapján a következő jogok illetik meg Önt bármelyik termékünk esetén:</P>
            <UL>
              <li>Hozzáférési jog (15. cikk)</li>
              <li>Helyesbítéshez való jog (16. cikk)</li>
              <li>Törléshez / el felejtetéshez való jog (17. cikk)</li>
              <li>Adatkezelés korlátozásához való jog (18. cikk)</li>
              <li>Adathordozhatósághoz való jog (20. cikk)</li>
              <li>Tiltakozási jog (21. cikk)</li>
              <li>Automatizált döntéshozatallal kapcsolatos jog (22. cikk)</li>
            </UL>
            <P>
              A jogok gyakorlása érdekében írjon a hello@thinkai.hu címre. Panasza esetén a Nemzeti Adatvédelmi és
              Információszabadság Hatósághoz (NAIH, https://naih.hu) fordulhat.
            </P>

            <H2>6. Adattörlés</H2>
            <P>
              Bármelyik termékünkben kezelt adatainak törlését a hello@thinkai.hu címen kérheti. A Meta-platformokon
              (Messenger, Instagram, WhatsApp) keresztül történt adatkezelés esetén az automatikus Meta adattörlési
              callback is működik — a részleteket a termékspecifikus tájékoztató tartalmazza.
            </P>

            <H2>7. Kapcsolat</H2>
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

            <H2>2. Products and product-specific privacy policies</H2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-['Inter',sans-serif] border-collapse">
                <thead>
                  <tr className="bg-black/5 text-left">
                    <th className="p-3 border border-black/10">Product</th>
                    <th className="p-3 border border-black/10">Description</th>
                    <th className="p-3 border border-black/10">Product-specific policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-black/10 font-semibold">eaisyDesk</td>
                    <td className="p-3 border border-black/10">Multi-channel, AI-based customer-service (helpdesk) platform — phone, e-mail, Messenger, Instagram, WhatsApp integration</td>
                    <td className="p-3 border border-black/10"><a className="text-[#186d98] font-semibold hover:underline" href="/eaisydesk/privacy">eaisy.hu/eaisydesk/privacy</a></td>
                  </tr>
                  <tr className="bg-black/[0.02]">
                    <td className="p-3 border border-black/10 text-black/50">(further products)</td>
                    <td className="p-3 border border-black/10 text-black/50">future products listed here</td>
                    <td className="p-3 border border-black/10 text-black/50">…</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              If you are unsure which product you use or cannot find the relevant notice, e-mail hello@thinkai.hu.
            </P>

            <H2>3. General data-processing principles</H2>
            <P>
              The following principles apply to all ThinkAI products; the specific data, purposes and retention periods
              are set out in the product-specific notices.
            </P>
            <UL>
              <li><strong>Lawfulness, fairness and transparency:</strong> we process personal data only on a valid legal basis (consent, contract performance, legitimate interest, legal obligation) and inform the data subject in an understandable way.</li>
              <li><strong>Purpose limitation:</strong> data is used only for the purpose for which it was collected.</li>
              <li><strong>Data minimisation:</strong> we process only the data necessary for the purpose.</li>
              <li><strong>Accuracy:</strong> we keep data accurate and up to date.</li>
              <li><strong>Storage limitation:</strong> data is kept only as long as necessary, then deleted or anonymised.</li>
              <li><strong>Security:</strong> we protect data with appropriate technical and organisational measures (TLS encryption, database-level Row Level Security, restricted service-role access, regular audits).</li>
              <li><strong>Accountability:</strong> we can demonstrate GDPR compliance.</li>
            </UL>

            <H2>4. Transfers outside the EEA</H2>
            <P>
              Some of our products use third-party providers (e.g. cloud hosting, AI processing, e-mail delivery) which may
              process data outside the European Economic Area. Details of these transfers and the safeguards in place
              (Standard Contractual Clauses) are described in the product-specific notices.
            </P>

            <H2>5. Your rights under the GDPR (Arts. 15–22)</H2>
            <P>Under the GDPR you have the following rights for any of our products:</P>
            <UL>
              <li>Right of access (Art. 15)</li>
              <li>Right to rectification (Art. 16)</li>
              <li>Right to erasure / "right to be forgotten" (Art. 17)</li>
              <li>Right to restriction of processing (Art. 18)</li>
              <li>Right to data portability (Art. 20)</li>
              <li>Right to object (Art. 21)</li>
              <li>Rights regarding automated decision-making (Art. 22)</li>
            </UL>
            <P>
              To exercise your rights, e-mail hello@thinkai.hu. You may lodge a complaint with the Hungarian National
              Authority for Data Protection and Freedom of Information (NAIH, https://naih.hu).
            </P>

            <H2>6. Data deletion</H2>
            <P>
              You may request deletion of your data in any of our products by e-mailing hello@thinkai.hu. For data
              processed via Meta platforms (Messenger, Instagram, WhatsApp) the automatic Meta data-deletion callback
              also operates — details are in the product-specific notice.
            </P>

            <H2>7. Contact</H2>
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
