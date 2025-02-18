import { NAVIGATION_ITEMS } from "~/routes/_index";

export function Home() {
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
        <div className="flex items-center justify-between h-screen max-w-7xl mx-auto px-4">
        <h1 className="text-9xl font-bold">
        Mossy Works<span className="text-[#DA5A5A]">.</span>
        </h1>
        <ul className="text-5xl font-bold flex flex-col gap-10">
        {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
            <a
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="relative hover:text-[#DA5A5A] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
            {item.label}
            </a>
            </li>
        ))}
        </ul>
        </div>
    );
}
