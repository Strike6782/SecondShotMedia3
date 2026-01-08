import { Hero } from "@/components/layout/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Second Shot Media",
  description: "Algemene voorwaarden van Second Shot Media. Lees hier onze afspraken over dienstverlening, betaling, levering en rechten.",
};

export default function GeneralTermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Algemene Voorwaarden"
        subtitle="Duidelijke afspraken, goede samenwerking."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Definities</h3>
            <p>
              1.1 <strong>Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met Second Shot Media.<br />
              1.2 <strong>Opdrachtnemer:</strong> Second Shot Media, gevestigd te Cambridgelaan 293 Utrecht, ingeschreven bij de Kamer van Koophandel onder nummer 92016421.<br />
              1.3 <strong>Overeenkomst:</strong> De overeenkomst tussen Opdrachtgever en Opdrachtnemer met betrekking tot het leveren van diensten of producten.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">2. Toepasselijkheid</h3>
            <p>
              2.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, opdrachten en overeenkomsten tussen Opdrachtnemer en Opdrachtgever.<br />
              2.2 Afwijkingen van deze algemene voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">3. Offertes en Overeenkomst</h3>
            <p>
              3.1 Alle offertes van Opdrachtnemer zijn vrijblijvend en 30 dagen geldig, tenzij anders aangegeven.<br />
              3.2 Een overeenkomst komt tot stand na schriftelijke acceptatie door Opdrachtgever of door schriftelijke bevestiging van Opdrachtnemer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">4. Betaling</h3>
            <p>
              4.1 Betalingen dienen te worden voldaan binnen 30 dagen na factuurdatum, tenzij anders overeengekomen.<br />
              4.2 Bij niet tijdige betaling is Opdrachtgever van rechtswege in verzuim en is Opdrachtnemer gerechtigd wettelijke rente en incassokosten in rekening te brengen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">5. Annulering en Wijziging</h3>
            <p>
              5.1 Bij annulering door Opdrachtgever tussen het aangaan van de overeenkomst en 14 dagen voor de afgesproken datum worden reeds gemaakte kosten in rekening gebracht, tot een maximum van 50% van het totaalbedrag.<br />
              5.2 Bij annulering door Opdrachtgever minder dan 14 dagen voor de afgesproken datum wordt 50% van het totaalbedrag in rekening gebracht.<br />
              5.3 Bij annulering door Opdrachtgever minder dan 48 uur voor de afgesproken datum wordt 100% van het totaalbedrag in rekening gebracht.<br />
              5.4 Wijzigingen in een opdracht dienen schriftelijk te worden doorgegeven en kunnen extra kosten met zich meebrengen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">6. Levering</h3>
            <p>
              6.1 Opdrachtnemer streeft naar levering binnen de afgesproken termijn, maar kan niet aansprakelijk worden gesteld voor vertragingen buiten haar invloedssfeer.<br />
              6.2 Opdrachtnemer levert foto&apos;s en video&apos;s in een overeengekomen formaat en resolutie.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">7. Intellectueel Eigendom</h3>
            <p>
              7.1 Alle door Opdrachtnemer geleverde beelden blijven eigendom van Opdrachtnemer, tenzij schriftelijk anders is overeengekomen.<br />
              7.2 Opdrachtgever verkrijgt een licentie voor het overeengekomen gebruik van de beelden. Het is niet toegestaan beelden zonder schriftelijke toestemming van Opdrachtnemer te wijzigen of door te verkopen.<br />
              7.3 Opdrachtnemer heeft het recht om gemaakte beelden te verkopen aan derden, tenzij schriftelijk anders is overeengekomen.<br />
              7.4 Opdrachtnemer heeft het recht om de beelden te gebruiken voor promotionele doeleinden, zoals portfolio, website en sociale media, tenzij schriftelijk anders is overeengekomen.<br />
              7.5 Opdrachtnemer is niet aansprakelijk voor inbreuk op auteursrechten of portretrechten van derden door gebruik van de beelden door Opdrachtgever.<br />
              7.6 Opdrachtgever probeert waar mogelijk de naam van Opdrachtnemer te vermelden bij gebruik van de beelden.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">8. Aansprakelijkheid</h3>
            <p>
              8.1 Opdrachtnemer is niet aansprakelijk voor schade ontstaan door onjuiste of onvolledige informatie verstrekt door Opdrachtgever.<br />
              8.2 De aansprakelijkheid van Opdrachtnemer is beperkt tot het factuurbedrag van de opdracht.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">9. Klachten</h3>
            <p>
              9.1 Klachten dienen binnen 7 dagen na levering schriftelijk te worden gemeld.<br />
              9.2 Bij gegronde klachten zal Opdrachtnemer naar redelijkheid zorgdragen voor een passende oplossing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">10. Overmacht</h3>
            <p>
              10.1 Opdrachtnemer is niet aansprakelijk voor vertraging of niet-nakoming van verplichtingen door overmacht, waaronder ziekte, technische storingen of extreme weersomstandigheden.<br />
              10.2 In geval van overmacht kunnen de verplichtingen van de Fotograaf, in overleg met opdrachtgever, worden overgenomen door een collega-Fotograaf. Deze wordt aangewezen door de Fotograaf.<br />
              10.3 Indien de Fotograaf bij het intreden van de overmacht al gedeeltelijk aan zijn verplichtingen heeft voldaan of slechts gedeeltelijk aan zijn verplichtingen zal kunnen voldoen, is hij gerechtigd het reeds geleverde deel van de diensten inclusief de gemaakte onkosten afzonderlijk te factureren en is de opdrachtgever gehouden deze factuur te voldoen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">11. Toepasselijk Recht</h3>
            <p>
              11.1 Op alle overeenkomsten is het Nederlands recht van toepassing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">12. Privacy en Gegevensbescherming</h3>
            <p>
              12.1 Opdrachtnemer behandelt alle persoonsgegevens vertrouwelijk en in overeenstemming met de AVG.<br />
              12.2 Opdrachtnemer is niet verantwoordelijk voor het verkrijgen van individuele toestemmingen van vastgelegde personen voor het gebruik van hun beelden, en gaat er vanuit dat de opdrachtgever dit heeft gedaan. Tenzij anders schriftelijk overeengekomen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">13. Revisies en Aanpassingen</h3>
            <p>
              13.1 In de overeenkomst is standaard een (1) revisieronde inbegrepen bij video&apos;s, tenzij anders schriftelijk overeengekomen. Een tweede revisieronde is mogelijk over de aanpassingen die gedaan zijn in de eerste revisieronde.<br />
              13.2 Aanpassingen die buiten de inbegrepen revisierondes vallen, worden als meerwerk beschouwd en apart in rekening gebracht.<br />
              13.3 Revisies zijn beperkt tot kleine wijzigingen, zoals kleurcorrecties, tekstaanpassingen en eenvoudige bewerkingen. Grote aanpassingen of wijzigingen aan de oorspronkelijke opdracht vallen niet onder de revisierondes en worden beschouwd als meerwerk.<br />
              13.4 Alle verzoeken tot revisies dienen schriftelijk te worden ingediend binnen zeven (7) dagen na levering van het conceptmateriaal. Revisieverzoeken die na deze termijn worden ingediend, kunnen als extra werk worden gefactureerd.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">14. Overige Bepalingen</h3>
            <p>
              14.1 Opdrachtnemer zal niet foto-/ of videograferen op locaties met lasers indien hier geen rekening gehouden wordt met de veiligheid van de camera-apparatuur.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">15. Slotbepalingen</h3>
            <p>
              15.1 Indien een bepaling in deze algemene voorwaarden ongeldig blijkt, blijven de overige bepalingen onverminderd van kracht.<br />
              15.2 Opdrachtgever verklaart door akkoord te gaan met een opdracht tevens akkoord te gaan met deze algemene voorwaarden.
            </p>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Laatste aanpassing: 27/10/2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
