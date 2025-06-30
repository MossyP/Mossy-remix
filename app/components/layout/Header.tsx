import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "~/routes/_index";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);

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
    setIsMenuOpen(false); // メニューを閉じる
  };

  const handleWorksCategoryClick = (category: string) => {
    // Worksページにスクロールしてカテゴリを選択
    const worksSection = document.querySelector("#works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
      // カテゴリ選択のイベントを発火（Worksコンポーネントで監視）
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('selectWorksCategory', { detail: category }));
      }, 500);
    }
    setIsMenuOpen(false);
    setIsWorksDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${isVisible ? "shadow-md translate-y-0" : "-translate-y-full"
        } bg-[#D1D7DA] darkmode-header`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            Mossy<span className="text-[#DA5A5A]">.</span>
          </h1>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
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

        {/* ハンバーガーメニューボタン */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#D1D7DA] darkmode-header shadow-lg border-t border-gray-200">
          <nav className="px-4 py-4">
            <ul className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  {item.label === "Works" ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsWorksDropdownOpen(!isWorksDropdownOpen)}
                        className="flex items-center justify-between w-full text-left hover:text-[#DA5A5A] transition-colors"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isWorksDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isWorksDropdownOpen && (
                        <ul className="mt-2 ml-4 space-y-2">
                          <li>
                            <button
                              onClick={() => handleWorksCategoryClick("All")}
                              className="hover:text-[#DA5A5A] transition-colors text-sm"
                            >
                              All
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleWorksCategoryClick("3DCG")}
                              className="hover:text-[#DA5A5A] transition-colors text-sm"
                            >
                              3DCG
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleWorksCategoryClick("Music")}
                              className="hover:text-[#DA5A5A] transition-colors text-sm"
                            >
                              Music
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleWorksCategoryClick("MV")}
                              className="hover:text-[#DA5A5A] transition-colors text-sm"
                            >
                              MV
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="block hover:text-[#DA5A5A] transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
