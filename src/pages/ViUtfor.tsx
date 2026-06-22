import { useTitle } from "@/lib/useTitle";
import viutforHero from "@/assets/viutfor-hero.jpg";

const services = [
  { title: "Timmerlagning", text: "Med traditionella material och utförande." },
  { title: "Nytimring", text: "Med traditionella metoder och hantverk." },
  { title: "Utvändig renovering", text: "Panel, gärna handhyvlad, med mera." },
  { title: "Invändiga renoveringar", text: "I äldre hus, lerklining och liknande." },
  { title: "Tegelläggning av tak", text: "Både nya tak och varsam omläggning av gamla." },
  { title: "Stickspåntak", text: "Traditionellt utförande av spåntak." },
  { title: "Stomarbeten", text: "Kyrkor, klockstaplar och andra större träkonstruktioner." },
];

const partners = [
  { name: "Husrestauratören Bygg & Måleri", url: "http://www.husrestauratoren.se/", note: "Grundarbeten, transporter, målning och större entreprenader." },
  { name: "Andreassons plåtarbeten", url: "http://www.andreasonsplatarbeten.se/", note: "Plåtslagare." },
  { name: "Råkans Design & Produktion", url: "http://www.rakans.se/", note: "Specialbeställning av hyvlat virke." },
  { name: "Uno Wallgren", url: "http://www.unowallgren.se/", note: "Isolering med träfiber." },
];

const links = [
  { name: "Länsstyrelsen Uppsala län", url: "http://www.lansstyrelsen.se/uppsala/Sv/samhallsplanering-och-kulturmiljo/byggnadsvard/Pages/default.aspx", note: "Bidragsärenden för renovering av kulturbyggnader." },
  { name: "Upplandsmuseet", url: "http://www.upplandsmuseet.se/Sidor/VERKSAMHET/KULTURMILJOVARD/", note: "Kunskapsbas och rådgivning om gamla byggnader." },
  { name: "Da Capo Hantverksskola", url: "http://www.conservation.gu.se/", note: "Utbildning i traditionellt hantverk." },
  { name: "FIBOR", url: "http://fibor.org/index.html", note: "Branschorganisation för företag inom byggnadsvård." },
  { name: "Kulturmiljövård i Vendel", url: "http://www.kulturmiljo-vard.se/", note: "Rådgivning och industriminnesvård." },
];

export default function ViUtfor() {
  useTitle(
    "Vi utför – Nordsjö Bygghantverk AB",
    "Tjänster vi erbjuder: timmerlagning, nytimring, panelarbeten, lerklining, tegeltak, stickspåntak och stomarbeten i kyrkor och klockstaplar.",
  );
  return (
    <article>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={viutforHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/55 to-background" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-primary-foreground md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Tjänster</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Vi utför</h1>
          <p className="mt-4 max-w-2xl opacity-90">
            Både små jobb som byte av en rötskadad stock och större entreprenader som
            totalrenovering av ett bostadshus. Genom samarbete med andra firmor löser vi det mesta.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <h3 className="font-serif text-lg text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-foreground/75">{s.text}</p>
            </li>
          ))}
        </ul>

      <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">Företag vi samarbetar med</h2>
          <ul className="mt-4 space-y-3">
            {partners.map((p) => (
              <li key={p.name} className="border-l-2 border-accent pl-4">
                <a href={p.url} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">
                  {p.name}
                </a>
                <p className="text-sm text-foreground/70">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Andra länkar</h2>
          <ul className="mt-4 space-y-3">
            {links.map((l) => (
              <li key={l.name} className="border-l-2 border-border pl-4">
                <a href={l.url} target="_blank" rel="noreferrer" className="font-medium text-primary hover:text-accent">
                  {l.name}
                </a>
                <p className="text-sm text-foreground/70">{l.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </div>
    </article>
  );
}