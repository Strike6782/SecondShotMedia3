import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Evenementen fotograaf en videograaf in Wijchen | Second Shot Media",
  description: "Op zoek naar een evenementen fotograaf en videograaf in Wijchen? Professionele fotografie en videografie voor congressen, bedrijfsfeesten en festivals in Wijchen.",
};

export default async function Page() {
  // Helper filter for horizontal images (aspect ratio roughly 3:2, so > 1.2 to be safe)
  const isHorizontal = (img: { width: number; height: number }) => (img.width / img.height) > 1.2;

  const eventImages = (await getImagesFromDirectory("events")).filter(isHorizontal);
  const clubImages = (await getImagesFromDirectory("club")).filter(isHorizontal);
  const studentImages = (await getImagesFromDirectory("students")).filter(isHorizontal);
  const corporateImages = (await getImagesFromDirectory("corporate")).filter(isHorizontal);
  const themeParkImages = (await getImagesFromDirectory("theme-parks")).filter(isHorizontal);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Evenementen fotograaf en videograaf in Wijchen"
        subtitle="Professionele fotografie en videografie voor evenementen in Wijchen. Van congressen tot festivals."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-12 px-4 max-w-screen-2xl space-y-16">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Evenementen in Wijchen</h2>
            <Button variant="ghost" asChild><Link href="/evenementen-fotograaf">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={eventImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" linkTarget="/evenementen-fotograaf/" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Zakelijke Evenementen</h2>
            <Button variant="ghost" asChild><Link href="/zakelijke-evenementen">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={corporateImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" linkTarget="/zakelijke-evenementen/" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Club & Nightlife</h2>
            <Button variant="ghost" asChild><Link href="/clubfotografie">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={clubImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" linkTarget="/clubfotografie/" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Attractieparken</h2>
            <Button variant="ghost" asChild><Link href="/attractieparken">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={themeParkImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" linkTarget="/attractieparken/" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Studenten</h2>
            <Button variant="ghost" asChild><Link href="/studentenverenigingen">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={studentImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" linkTarget="/studentenverenigingen/" />
        </div>

      </section>

      <section className="container py-12 px-4 max-w-screen-2xl mb-12">
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Op zoek naar een videograaf?</h2>
          <Button size="lg" className="text-lg" asChild>
            <Link href="/evenementen-videograaf/" prefetch={false}>Bekijk mijn video portfolio hier</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
