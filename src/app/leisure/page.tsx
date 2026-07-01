import { BranchPage } from "@/components/pages/BranchPage";
import { getBranchBySlug } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";

const branch = getBranchBySlug("leisure")!;

export const metadata = buildPageMetadata({
  title: branch.seoTitle,
  description: branch.seoDescription,
  path: branch.href,
});

export default function LeisurePage() {
  return <BranchPage branch={branch} />;
}
