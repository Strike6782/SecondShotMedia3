import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studentenvereniging Fotograaf | Gala's & Feesten",
  description: "De fotograaf voor studentenverenigingen in Utrecht, Amsterdam, Leiden en Delft. Gala's, lustrumfeesten en almanakfoto's.",
};

export default async function StudentsPage() {
  const images = await getImagesFromDirectory("students");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Studenten Portfolio"
        subtitle="Gala's, feesten en bestuursfoto's vastgelegd met oog voor detail en sfeer."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Als gespecialiseerd fotograaf voor studentenverenigingen begrijp ik de tradities en de sfeer als geen ander.
                Van het jaarlijkse gala tot aan wilde lustrumfeesten; ik lever beelden die perfect zijn voor de almanak en social media.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Scherpe tarieven voor verenigingen (25% korting).</li>
                <li>Snelle levering (binnen 48 uur).</li>
                <li>Opgeleverd in een digitale map die direct gedeeld kan worden met de aanwezigen</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Portfolio Highlights</h2>
              <Gallery images={images} />
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
