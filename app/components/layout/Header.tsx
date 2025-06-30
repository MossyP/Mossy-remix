import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "~/routes/_index";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState("", document.title, window.location.pathname);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${isVisible ? "shadow-md translate-y-0" : "-translate-y-full"
        } bg-[#D1D7DA] darkmode-header`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Mossy<span className="text-[#DA5A5A]">.</span>
          </h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="hover:text-[#DA5A5A] transition-colors"
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
