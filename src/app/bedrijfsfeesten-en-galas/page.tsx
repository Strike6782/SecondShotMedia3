import { BranchPage } from "@/components/pages/BranchPage";
import { getBranchBySlug } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";

const branch = getBranchBySlug("bedrijfsfeesten-en-galas")!;

export const metadata = buildPageMetadata({
  title: branch.seoTitle,
  description: branch.seoDescription,
  path: branch.href,
  image: `/og/${branch.slug}.jpg`,
});

export default function BedrijfsfeestenEnGalasPage() {
  return <BranchPage branch={branch} />;
}
