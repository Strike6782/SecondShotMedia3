// Shared content types for pages, branches, and SEO.
export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type BranchLogo = {
  src: string;
  alt: string;
  /** Show on a dark tile, for logos with white lettering. */
  dark?: boolean;
};

export type BranchVideo = {
  id: string;
  title: string;
  /** Optional credit or context, e.g. "Alleen montage" or "Alleen camerawerk". */
  note?: string;
  /** @deprecated Use `note` instead. Kept for backwards compatibility. */
  subtitle?: string;
  type?: "youtube" | "vimeo";
};

export type BranchTestimonial = {
  quote: string;
  author: string;
  role?: string;
};

