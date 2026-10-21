import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Archivo variable font (weight + width axes), self-hosted so builds do not depend on Google Fonts.
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Foto en video voor events`,
  },
  description:
    "Eventfotografie en -videografie voor zakelijke events, bedrijfsfeesten, festivals en pretparken. Previews dezelfde dag, volledig album binnen 24 uur. Vanuit Utrecht, door heel Nederland.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: dev overlay and browser extensions may mutate <html>/<body> before hydration.
    <html lang="nl" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${archivo.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-background focus:px-4 focus:py-2"
        >
          Naar de inhoud
        </a>
        <div className="mx-auto w-full max-w-[2560px] flex flex-col min-h-screen">
          <StructuredData />
          <Navbar />
          <main id="inhoud" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
