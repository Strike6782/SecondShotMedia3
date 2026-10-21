// Site-wide constants for URLs, contact, and entity data (SEO / schema).
export const SITE_URL = "https://secondshotmedia.nl";
export const SITE_NAME = "Second Shot Media";
export const CONTACT_EMAIL = "ivan@secondshotmedia.nl";

export const OFFERTE_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_INSTAGRAM = "https://instagram.com/secondshotmedia";
export const CONTACT_LINKEDIN = "https://www.linkedin.com/in/ivan-balkenende/";
export const KVK = "92016421";
export const BTW_ID = "NL004604590B73";
export const FOUNDING_YEAR = "2020";

// Business address (matches algemene voorwaarden).
export const BUSINESS_STREET = "Cambridgelaan 293";
export const BUSINESS_POSTAL_CODE = "3541 SE";
export const BUSINESS_CITY = "Utrecht";
export const BUSINESS_COUNTRY = "NL";
export const SITE_LOGO = `${SITE_URL}/og-image.jpg`;

// Geo coordinates for LocalBusiness schema (Utrecht office area).
export const BUSINESS_GEO = {
  latitude: 52.0947,
  longitude: 5.0847,
};

export const AGENCY_TAGLINE = "Foto en video voor events";

export const AGENCY_DEFINITION =
  "Second Shot Media legt zakelijke events, bedrijfsfeesten, festivals en pretparken vast in foto en video. Gevestigd in Utrecht, actief door heel Nederland, met Ivan Balkenende als vast aanspreekpunt van aanvraag tot levering.";

// Drop a group photo at this path and the team sections show it automatically.
export const TEAM_PHOTO = "/images/team.jpg";

// Delivery promise, used across the site. Keep these in line with what the team can deliver.
export const DELIVERY = {
  previews: "Eerste selectie dezelfde dag",
  album: "Volledig album binnen 24 uur",
};

// Kept for backwards compatibility in imports.
export const STUDIO_DEFINITION = AGENCY_DEFINITION;
