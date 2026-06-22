import { Link } from "react-router-dom";
import { useTitle } from "@/lib/useTitle";
import heroTimber from "@/assets/hero-timber.jpg";
import timberDetail from "@/assets/timber-detail.jpg";
import workshopImg from "@/assets/workshop.jpg";
import toolsCraft from "@/assets/tools-craft.jpg";
import panelDetail from "@/assets/panel-detail.jpg";

const badges = [
  "Traditionellt hantverk",
  "Varsam renovering",
  "Nytimring & stomarbeten",
  "F-skatt & försäkrade",
];

const services = [
  {
    title: "Renovering av äldre byggnader",
    text: "Timmerlagning, panelarbeten och varsam återställning av kulturhistoriska hus med traditionella material.",
    image: timberDetail,
    to: "/vi-utfor",
  },
  {
    title: "Nytimring",
    text: "Nya timmerstommar resta med yxa och bila – byggda för att stå i generationer.",
    image: workshopImg,
    to: "/vi-utfor",
  },
  {
    title: "Stomarbeten & kyrkkonstruktioner",
    text: "Klockstaplar, takstolar och större träkonstruktioner med traditionella förband.",
    image: toolsCraft,
    to: "/projekt",
  },
];

const values = [
  { title: "Kulturarv", text: "Vi arbetar med respekt för byggnadens historia och ursprungliga material." },
  { title: "Hantverk", text: "Traditionella tekniker och verktyg ger ett resultat som håller över tid." },
  { title: "Helhetsansvar", text: "Tydlig dialog från första kontakt till färdigt arbete." },
  { title: "Samarbete", text: "Genom våra partners löser vi även större entreprenader." },
];

export default function Home() {
  useTitle(
    "Nordsjö Bygghantverk AB – Hantverk som håller över tid",
    "Välkommen till Nordsjö Bygghantverk – traditionellt bygghantverk, varsam renovering och nytimring med gamla metoder.",
  );
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={heroTimber} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/90" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 text-primary-foreground md:py-44">
          <span className="rounded-full border border-primary-foreground/40 px-4 py-1 text-xs uppercase tracking-[0.3em]">
            Sedan 2007
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Hantverk som håller över tid
          </h1>
          <p className="max-w-2xl text-lg opacity-90">
            Nordsjö Bygghantverk renoverar äldre byggnader och utför nytillverkning med traditionella
            metoder – med stor respekt för vårt kulturarv.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/kontakt" className="rounded-sm bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90">
              Kontakta oss
            </Link>
            <Link to="/projekt" className="rounded-sm border border-primary-foreground/60 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-primary-foreground/10">
              Se våra projekt
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-90">
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Välkommen</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Till Nordsjö Bygghantverk AB</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Nordsjö Bygghantverks företagsidé är att med traditionella tekniker utföra
                renoveringar av äldre byggnader samt att utföra nytillverkning med gamla metoder.
                Grunden för företaget är ett stort intresse för vårt kulturarv.
              </p>
              <p>
                Under de senaste åren har vi sett ett ökande intresse för kulturminnesvård och
                bevarande av gammalt hantverk – som dessutom är mer miljövänligt. Precis som Da
                Capos Hantverksskola anser vi att hantverk är ett nödvändigt redskap för att
                restaurera och vårda kulturhistoriska byggnader. Utan kunskap i hantverksutförande
                riskerar också de materiella värdena att gå förlorade.
              </p>
            </div>
          </div>
          <img
            src={panelDetail}
            alt="Renovering av äldre byggnad"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-image)]"
          />
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Vad vi gör</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Ett dedikerat hantverksföretag</h2>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Vi tar oss an både små jobb och större entreprenader – med samma omsorg om detaljerna.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-image)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.text}</p>
                  <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Varför Nordsjö</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Hantverk du kan lita på</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-sm border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Har du ett projekt på gång?</h2>
            <p className="mt-2 max-w-xl opacity-85">
              Berätta om byggnaden eller arbetet du planerar – vi återkopplar gärna.
            </p>
          </div>
          <Link to="/kontakt" className="rounded-sm bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90">
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}