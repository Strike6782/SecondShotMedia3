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
};

export type BranchVideo = {
  id: string;
  title: string;
  subtitle?: string;
  type?: "youtube" | "vimeo";
};
