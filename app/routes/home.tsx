import { useEffect, useRef, useState } from "react";
import { NAVIGATION_ITEMS } from "~/routes/_index";

export function Home() {
    // タイトル1文字ずつアニメ用
    const title = "Mossy Works.";
    const [showTitle, setShowTitle] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // タイトル監視
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setShowTitle(entry.isIntersecting),
            { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    // スムーススクロール
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
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
            <h1
                ref={titleRef}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold flex gap-0.5 justify-center md:justify-start"
                style={{
                    lineHeight: 1.1,
                    letterSpacing: "-0.04em"
                }}
            >
                {title.split("").map((char, i) => (
                    <span
                        key={i}
                        style={{
                            display: "inline-block",
                            opacity: showTitle ? 1 : 0,
                            transform: showTitle
                                ? "translateY(0)"
                                : "translateY(-60px)",
                            transition:
                                "all 0.5s cubic-bezier(.16,1,.3,1) " +
                                (showTitle ? i * 0.06 : 0) +
                                "s",
                            color: char === "." ? "#DA5A5A" : undefined,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
            {/* デスクトップのみナビゲーションを表示 */}
            <ul className="hidden md:flex text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex-col gap-6 sm:gap-8 md:gap-10">
                {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className="relative hover:text-[#DA5A5A] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] sm:after:h-[3px] md:after:h-[4px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
