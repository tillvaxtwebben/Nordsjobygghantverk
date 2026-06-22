import { useTitle } from "@/lib/useTitle";
import omHero from "@/assets/om-hero.jpg";

export default function OmForetaget() {
  useTitle(
    "Om företaget – Nordsjö Bygghantverk AB",
    "Om Nordsjö Bygghantverk: traditionellt timmermanshantverk, Per Olsson och vårt arbete med kulturhistoriska byggnader.",
  );
  return (
    <article>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={omHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-primary-foreground md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Om oss</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Om företaget</h1>
          <p className="mt-4 max-w-2xl opacity-90">
            Traditionellt timmermanshantverk med respekt för vårt kulturarv – sedan 2007.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            Nordsjö Bygghantverks företagsidé är att med traditionella tekniker utföra
            renoveringar av äldre byggnader samt att utföra nytillverkning med gammal
            hantverksteknik. Grunden för företaget är ett stort intresse för vårt kulturarv.
          </p>
          <p>
            Vi vänder oss till privatpersoner, företag och institutioner. Vi har även erfarenhet av
            att arbeta med träkonstruktioner i kyrkobyggnader såsom klockstaplar, takkonstruktioner
            med mera.
          </p>
          <p>
            Per Olsson avslutade sin utbildning 2001 på Da Capo Hantverksskola i Mariestad – en
            tvåårig utbildning som idag ligger under Göteborgs universitet. Han har därefter
            arbetat som timmerman med traditionellt hantverk. 2007 bildades Nordsjö Bygghantverk.
          </p>
        </div>
        <figure className="mx-auto w-full max-w-[240px] space-y-2 md:mx-0">
          <img
            src="/images/per-olsson.jpg"
            alt="Per Olsson"
            width={240}
            height={320}
            className="w-full rounded-sm shadow-[var(--shadow-image)]"
          />
          <figcaption className="text-sm italic text-muted-foreground">Per Olsson</figcaption>
        </figure>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-2xl">Vi är medlemmar i</h2>
        <div className="mt-6 flex flex-wrap items-center gap-8">
          <a href="http://fibor.org/" target="_blank" rel="noreferrer">
            <img src="/images/fibor.jpg" alt="FIBOR" width={76} height={85} className="h-auto w-[76px] rounded-sm" />
          </a>
          <a href="http://www.byggnadsvard.se/" target="_blank" rel="noreferrer">
            <img
              src="/images/byggnadsvard.jpg"
              alt="Svenska Byggnadsvårdsföreningen"
              width={160}
              height={67}
              className="h-auto w-[160px] rounded-sm"
            />
          </a>
        </div>
      </section>
      </div>
    </article>
  );
}