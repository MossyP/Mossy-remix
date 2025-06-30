import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useState } from "react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
  },
];

export default function App() {
  const [customTheme, setCustomTheme] = useState(false);

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        data-theme={customTheme ? "dark" : "light"}
        style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', position: 'relative' }}
        className="transition-colors duration-300 overflow-x-hidden"
      >
        {/* ノイズテクスチャ */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 noise-bg"
        />
        {/* STYLEボタン */}
        <button
          className="fixed bottom-8 right-8 z-20 px-6 py-2 rounded-full font-bold border-2 border-[#efefef] bg-transparent hover:bg-[#efefef] hover:text-[#1e2c39] transition-all duration-200"
          style={{ color: customTheme ? "#efefef" : "#1e2c39", borderColor: customTheme ? "#efefef" : "#1e2c39" }}
          onClick={() => setCustomTheme(!customTheme)}
        >
          STYLE
        </button>
        <div className="relative z-10 min-h-screen">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
