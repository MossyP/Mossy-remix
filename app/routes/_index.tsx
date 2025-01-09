import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mossy Portfolio" },
    { name: "description", content: "Mossyのポートフォリオサイトです。" },
  ];
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 shadow-sm">
      <ul className="flex items-center justify-center gap-10 h-full">
        <li>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#home"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
    </div>
  );
}

function Services() {
  return <div>Services</div>;
}

function Home() {
  return <div>Home</div>;
}

function Contact() {
  return <div>Contact</div>;
}

function Footer() {
  return <div>Footer</div>;
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="home">
          <Home />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
