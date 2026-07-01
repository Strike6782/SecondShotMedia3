// Short factual summary block for AI and human readers, placed fully below the hero.
export function DefinitionBlock({ text }: { text: string }) {
  return (
    <section className="container max-w-screen-2xl px-6 md:px-12 pt-10 pb-2">
      <p className="bg-muted/30 border border-border/50 rounded-2xl p-6 text-lg text-muted-foreground leading-relaxed">
        {text}
      </p>
    </section>
  );
}
