import { BranchPage } from "@/components/pages/BranchPage";
import { getBranchBySlug } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";

const branch = getBranchBySlug("corporate-events")!;

export const metadata = buildPageMetadata({
  title: branch.seoTitle,
  description: branch.seoDescription,
  path: branch.href,
});

export default function CorporateEventsPage() {
  return <BranchPage branch={branch} />;
}
