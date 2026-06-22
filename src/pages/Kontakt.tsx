import { useTitle } from "@/lib/useTitle";
import kontaktHero from "@/assets/kontakt-hero.jpg";

export default function Kontakt() {
  useTitle(
    "Kontakta oss – Nordsjö Bygghantverk AB",
    "Kontakta Nordsjö Bygghantverk AB i Bälinge. Per Olsson: 073-708 26 69.",
  );
  return (
    <article>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={kontaktHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center text-primary-foreground md:py-44">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Kontakta oss</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Hör gärna av dig</h1>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Berätta om byggnaden eller arbetet du planerar – vi återkopplar så snart vi kan.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-20">

      <div className="-mt-16 relative grid gap-4 sm:grid-cols-3">
        <a href="tel:+46737082669" className="rounded-sm border border-border bg-card p-6 text-center transition-colors hover:border-accent">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Telefon</p>
          <p className="mt-2 font-serif text-lg text-primary">073-708 26 69</p>
          <p className="text-xs text-muted-foreground">Per Olsson</p>
        </a>
        <a href="mailto:info@nordsjobygghantverk.se" className="rounded-sm border border-border bg-card p-6 text-center transition-colors hover:border-accent">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">E-post</p>
          <p className="mt-2 break-all font-serif text-lg text-primary">info@nordsjobygghantverk.se</p>
        </a>
        <div className="rounded-sm border border-border bg-card p-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Adress</p>
          <p className="mt-2 font-serif text-lg text-primary">Simonsbo 22</p>
          <p className="text-sm text-foreground/75">743 87 Bälinge</p>
        </div>
      </div>

      <figure className="mt-12 overflow-hidden rounded-sm shadow-[var(--shadow-image)]">
        <iframe
          title="Karta över Simonsbo, Bälinge"
          src="https://www.google.com/maps?q=Simonsbo+22,+743+87+B%C3%A4linge,+Sverige&output=embed"
          width="100%"
          height="360"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, display: "block" }}
        />
      </figure>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Org.nr: 556728-5852 · Innehar F-skattebevis
      </p>
      </div>
    </article>
  );
}