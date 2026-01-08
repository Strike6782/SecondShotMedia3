import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Evenementen fotograaf en videograaf in Zoetermeer | Second Shot Media",
  description: "Op zoek naar een evenementen fotograaf en videograaf in Zoetermeer? Professionele fotografie en videografie voor congressen, bedrijfsfeesten en festivals in Zoetermeer.",
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
        title="Evenementen fotograaf en videograaf in Zoetermeer"
        subtitle="Professionele fotografie en videografie voor evenementen in Zoetermeer. Van congressen tot festivals."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-12 px-4 max-w-screen-2xl space-y-16">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Evenementen in Zoetermeer</h2>
            <Button variant="ghost" asChild><Link href="/evenementen-fotograaf">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={eventImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Zakelijke Evenementen</h2>
            <Button variant="ghost" asChild><Link href="/zakelijke-evenementen">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={corporateImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Club & Nightlife</h2>
            <Button variant="ghost" asChild><Link href="/clubfotografie">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={clubImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Attractieparken</h2>
            <Button variant="ghost" asChild><Link href="/attractieparken">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={themeParkImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Studenten</h2>
            <Button variant="ghost" asChild><Link href="/studentenverenigingen">Bekijk meer &rarr;</Link></Button>
          </div>
          <Gallery images={studentImages.slice(0, 4)} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" />
        </div>

      </section>
    </div >
  );
}
