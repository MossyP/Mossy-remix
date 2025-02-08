import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Mossy Portfolio" },
    { name: "description", content: "Mossyのポートフォリオサイトです。" },
  ];
};

const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home", Component: Home },
  { href: "#about", label: "About", Component: About },
  { href: "#services", label: "Services", Component: Services },
  { href: "#contact", label: "Contact", Component: Contact },
] as const;

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight * 0.2) {
        // 画面の20%スクロールしたら表示
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 bg-[#D1D7DA] shadow-sm transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mossy Works.</h1>
        <nav>
          <ul className="flex items-center gap-10">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div className="flex items-center justify-between h-screen max-w-7xl mx-auto px-4">
      <h1 className="text-9xl font-bold">
        Mossy Works<span className="text-[#DA5A5A]">.</span>
      </h1>
      <ul className="text-5xl font-bold flex flex-col gap-10">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return <div className="h-screen">About</div>;
}

function Services() {
  return <div className="h-screen">Services</div>;
}

function Contact() {
  return <div className="h-screen">Contact</div>;
}

function Footer() {
  return <div>Footer</div>;
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {NAVIGATION_ITEMS.map((item) => (
          <section key={item.href} id={item.href.slice(1)}>
            <item.Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
