// Custom next/image loader: maps site photos to pre-generated WebP variants in /_img/
// (see scripts/build-image-variants.mjs). Other files are served as-is.
const WIDTHS = [640, 1080, 1280, 1920];

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (/^\/(gallery|images|logos)\/.+\.(jpe?g|png|webp)$/i.test(src)) {
    const variant = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
    return `/_img${src.replace(/\.[^./]+$/, "")}-${variant}w.webp`;
  }
  return `${src}?w=${width}`;
}
