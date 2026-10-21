import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { TEAM_PHOTO } from "@/lib/site";

const stats = [
  { value: "6+", label: "jaar actief" },
  { value: "220+", label: "events" },
  { value: "9.300+", label: "opgeleverde foto's" },
  { value: "180+", label: "opgeleverde video's" },
];

const hasTeamPhoto = fs.existsSync(path.join(process.cwd(), "public", TEAM_PHOTO));
// Until the group photo exists, show its frame only in development and Vercel previews.
const showTeamPlaceholder =
  !hasTeamPhoto && (process.env.NODE_ENV !== "production" || process.env.VERCEL_ENV === "preview");

type TeamSectionProps = {
  /** Link to the about page; hide it on the about page itself. */
  showMoreLink?: boolean;
};

// Ivan as the face of the company, with the team behind him.
export function TeamSection({ showMoreLink = true }: TeamSectionProps) {
  return (
    <section className="container max-w-screen-2xl py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted lg:col-span-5">
          <Image
            src="/images/ivan-portret.jpg"
            alt="Ivan Balkenende met camera op een event van Second Shot Media"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[45%_center]"
          />
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-7">
          <h2 className="display text-5xl sm:text-6xl">Eén gezicht, een heel team erachter.</h2>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ivan Balkenende richtte Second Shot Media op in 2020 en legde sindsdien meer dan 220 events vast, van
              stadsfeesten tot internationale events met 50.000 bezoekers.
            </p>
            <p>
              Bij elke opdracht is hij uw aanspreekpunt: hij maakt het voorstel, brieft het team en staat vaak zelf
              achter de camera. Voor grotere events werkt hij met een vaste poule fotografen, videografen en editors
              uit heel Nederland. Iedereen werkt volgens dezelfde briefing en stijl.
            </p>
          </div>
          <blockquote className="max-w-2xl border-l-2 border-primary pl-6">
            <p className="heading text-2xl sm:text-3xl">
              &ldquo;Elk bijzonder moment verdient een tweede kans om te schitteren.&rdquo;
            </p>
            <footer className="mt-3 text-muted-foreground">Ivan Balkenende, oprichter</footer>
          </blockquote>
          <dl className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="heading text-4xl">{stat.value}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
          {showMoreLink && (
            <Link
              href="/over-en-contact/"
              className="self-start font-semibold underline decoration-primary decoration-2 underline-offset-8 hover:decoration-4"
            >
              Meer over Ivan en het team
            </Link>
          )}
        </div>
      </div>

      {hasTeamPhoto && (
        <figure className="mt-20 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <figcaption className="space-y-3 lg:order-1 lg:col-span-4">
            <p className="display text-4xl sm:text-5xl">Het team</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ivan met een deel van het team op de vakbeurs WoTS in de Jaarbeurs in Utrecht.
            </p>
          </figcaption>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted lg:order-2 lg:col-span-8">
            <Image
              src={TEAM_PHOTO}
              alt="Het team van Second Shot Media met camera's op de vakbeurs WoTS in de Jaarbeurs Utrecht"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      )}
      {showTeamPlaceholder && (
        <div className="mt-16 flex aspect-[16/9] items-center justify-center border-2 border-dashed border-border bg-muted p-6 text-center md:aspect-[21/9]">
          <p className="max-w-md text-muted-foreground">
            Plek voor de teamfoto. Zet een liggende groepsfoto in <code>public{TEAM_PHOTO}</code> en hij verschijnt
            hier. Deze melding is alleen zichtbaar in previews.
          </p>
        </div>
      )}
    </section>
  );
}
