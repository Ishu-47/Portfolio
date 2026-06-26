import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "../../data/portfolio";

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Coding", href: "#coding" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-white"
        >
          {portfolio.personal.firstName}
          <span className="text-sky-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-slate-300 transition hover:text-sky-400"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {mobile && (
        <div className="border-t border-white/10 bg-slate-900 md:hidden">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block px-6 py-4 text-slate-300"
              onClick={() => setMobile(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}