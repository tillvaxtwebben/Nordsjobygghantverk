import { useTitle } from "@/lib/useTitle";

/**
 * EDIT DINA PROJEKT HÄR.
 *
 * Så här lägger du till ett nytt projekt:
 *  1. Lägg din bild i mappen   public/images/projekt/
 *     t.ex.  public/images/projekt/loga-vattholma.jpg
 *  2. Lägg till ett nytt objekt i listan nedan med samma sökväg.
 *  3. Spara filen – sidan uppdateras automatiskt.
 */
const projects: {
  image: string;
  title: string;
  year?: string;
  place?: string;
  description: string;
}[] = [
  {
    image: "/images/om-foretaget.jpg",
    title: "Varsam renovering av äldre byggnad",
    year: "Exempelprojekt",
    place: "Uppland",
    description:
      "Utbyte av rötskadade stockar och restaurering av panel med handhyvlad furu enligt traditionella metoder.",
  },
  {
    image: "/images/vi-utfor.jpg",
    title: "Nytimring med traditionella metoder",
    year: "Exempelprojekt",
    place: "Uppland",
    description:
      "Komplett timmerstomme rest med yxa och timmerbila – byggd för att stå i flera hundra år.",
  },
  {
    image: "/images/hero.jpg",
    title: "Stomarbete – kyrkkonstruktion",
    year: "Exempelprojekt",
    place: "Uppland",
    description:
      "Stomarbeten i klockstapel och takkonstruktion med traditionella förband.",
  },
];

export default function Projekt() {
  useTitle(
    "Våra projekt – Nordsjö Bygghantverk AB",
    "Ett urval av projekt vi arbetat med – renoveringar, nytimring och kyrkkonstruktioner.",
  );
  return (
    <article className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">Referenser</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">Våra projekt</h1>
      <p className="mt-4 max-w-3xl text-foreground/80">
        Ett urval av projekt vi arbetat med. Vill du veta mer om något specifikt projekt eller
        diskutera ditt eget?{" "}
        <a href="mailto:info@nordsjobygghantverk.se" className="text-accent underline-offset-4 hover:underline">
          Hör av dig
        </a>
        .
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <figure key={p.title} className="group overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <figcaption className="p-5">
              <div className="flex items-baseline justify-between gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <span>{p.place}</span>
                {p.year && <span>{p.year}</span>}
              </div>
              <h3 className="mt-2 font-serif text-xl text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{p.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}