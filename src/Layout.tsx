import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navItems = [
  { to: "/", label: "Hem", end: true },
  { to: "/om-foretaget", label: "Om företaget", end: false },
  { to: "/vi-utfor", label: "Vi utför", end: false },
  { to: "/projekt", label: "Våra projekt", end: false },
  { to: "/kontakt", label: "Kontakta oss", end: false },
];

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center" aria-label="Nordsjö Bygghantverk AB – startsida">
            <img
              src="/logo.png"
              alt="Nordsjö Bygghantverk AB"
              className="h-24 w-auto md:h-28 mix-blend-multiply"
            />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground/80 transition-colors hover:text-accent"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl">Nordsjö Bygghantverk AB</h3>
            <p className="mt-2 text-sm opacity-80">
              Traditionellt timmermanshantverk och varsam renovering av kulturhistoriska byggnader.
            </p>
          </div>
          <div className="text-sm opacity-90">
            <h4 className="mb-2 font-serif text-lg">Kontakt</h4>
            <p>Simonsbo 22, 743 87 Bälinge</p>
            <p>Tel: 073-708 26 69</p>
            <p>
              <a href="mailto:info@nordsjobygghantverk.se" className="underline-offset-4 hover:underline">
                info@nordsjobygghantverk.se
              </a>
            </p>
          </div>
          <div className="text-sm opacity-80">
            <h4 className="mb-2 font-serif text-lg">Organisation</h4>
            <p>Org.nr: 556728-5852</p>
            <p>Innehar F-skattebevis</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Nordsjö Bygghantverk AB
        </div>
      </footer>
    </div>
  );
}