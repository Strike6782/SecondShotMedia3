// Serializes JSON-LD safely for an inline <script> (no premature </script> close).
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
