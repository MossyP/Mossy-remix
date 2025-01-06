import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mossy Portfolio" },
    { name: "description", content: "Mossyのポートフォリオサイトです。" },
  ];
};

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="qq">About</a>
        </li>
        <li>
          <a href="q">Services</a>
        </li>
        <li>
          <a href="qq">Home</a>
        </li>
        <li>
          <a href="qq">Contact</a>
        </li>
      </ul>
    </header>
  );
}

function Footer() {
  return <div>Footer</div>;
}

export default function Index() {
  return (
    <div>
      <Header />
      <main>
        <p>Hello World</p>
      </main>
      <Footer />
    </div>
  );
}
