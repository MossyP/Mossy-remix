import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/layout/Header";
import { Home } from "~/components/sections/Home";
import { About } from "~/components/sections/About";
import { Works } from "~/components/sections/Works";
import { Contact } from "~/components/sections/Contact";
export const meta: MetaFunction = () => {
  return [
    { title: "Mossy Portfolio" },
    { name: "description", content: "Mossyのポートフォリオサイトです。" },
  ];
};

export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home", Component: Home },
  { href: "#about", label: "About", Component: About },
  { href: "#works", label: "Works", Component: Works },
  { href: "#contact", label: "Contact", Component: Contact },
] as const;

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {NAVIGATION_ITEMS.map(({ href, Component }) => (
          <section key={href} id={href.slice(1)}>
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
}
