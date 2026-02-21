import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management voor Leisure bestemmingen | Second Shot Media",
  description: "Sfeervolle fotografie van attractieparken, kermissen en evenementen. Kleurrijk, dynamisch en vol energie.",
};

export default async function ThemeParksPage() {
  const images = await getImagesFromDirectory("theme-parks");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Social Media Management voor Leisure bestemmingen"
        subtitle="Wij zorgen voor een betere online aanwezigheid en trekken meer bezoekers aan."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold">Short content (tiktok en instagram reels) voor attractieparken en themabelevingen</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-6">
                <p>
                  De meeste attractieparken en themabelevingen hebben een hele goede website, een goed product, maar de social media kanalen blijven vaak achter. Terwijl juist daar zoveel te halen is. Als elke video duizenden
                  views krijgt, trek je hierdoor honderden nieuwe bezoekers aan. En dat is is wat wij doen. Wij maken video's die viraal gaan en zorgen voor meer bezoekers in het park met een betere online aanwezigheid.
                  De investering vanuit het park is relatief laag. We plannen samen een aantal dagen opnamedagen waarin we de content maken voor heel het jaar. Wij pakken het hele proces op; concepting, filmen, editten en posten.
                  Dit is ook te combineren met andere diensten, zoals drone fotografie en fotografie, of meer uitgebreidere video's voor bijvoorbeeld marketingcampagnes.
                </p>
                <p>
                  Dit doen we al bij themabelevingen zoals Halloween Vlaardingen, Theme Park Science, Halloween Rosmalen, en vanaf 2026 ook voor Familiepark Drievliet. Wil jij jouw beleving ook beter op de kaart zetten?
                  Neem contact op voor de mogelijkheden.
                  
                </p>
              </div>
            </div>

            <Gallery images={images} />

            {/* Video Placeholder */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Theme Park Science - Opening nieuw pretpark </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-muted relative group border border-border">
                {
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/2PJ1USshijg?si=kRYv-yeUZ5HrOyhZ"
                    title="Attractiepark Video"
                    allowFullScreen
                  />
                }
                
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Theme Park Science Trailer (edit door Second Shot Media, beelden extern) </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-muted relative group border border-border">
                {
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/CJl2UsZ-_Tc?si=Ymmg5aLep7A_eC0d"
                    title="Theme Park Science Trailer"
                    allowFullScreen
                  />
                }
                
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <ServiceSidebar className="lg:sticky lg:top-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
