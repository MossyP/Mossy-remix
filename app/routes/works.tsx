import { useEffect, useRef, useState } from "react";

type WorkCategory = "3DCG" | "Music" | "MV" | "All";

type Work = {
    id: string;
    title: string;
    category: Exclude<WorkCategory, "All">;
    thumbnail: string;
    description: string;
    youtubeUrl?: string;
    imageUrl?: string;
    date: string;
    url?: string;
};

const WORKS_DATA: Work[] = [
    // 3DCG
    {
        id: "1",
        title: "3DCG作品A",
        category: "3DCG",
        thumbnail: "/work1.jpg",
        description: "3DCGの作品Aの説明ダミー。",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx1",
        date: "2024.01",
        url: "https://example.com/3dcg-a",
    },
    {
        id: "2",
        title: "3DCG作品B",
        category: "3DCG",
        thumbnail: "/work2.jpg",
        description: "3DCGの作品Bの説明ダミー。",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx2",
        date: "2024.02",
        url: "https://example.com/3dcg-b",
    },
    // Music
    {
        id: "3",
        title: "Music作品A",
        category: "Music",
        thumbnail: "/work3.jpg",
        description: "Musicの作品Aの説明ダミー。",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx3",
        date: "2024.03",
        url: "https://example.com/music-a",
    },
    {
        id: "4",
        title: "Music作品B",
        category: "Music",
        thumbnail: "/work4.jpg",
        description: "Musicの作品Bの説明ダミー。",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx4",
        date: "2024.04",
        url: "https://example.com/music-b",
    },
    // MV
    {
        id: "5",
        title: "MV作品A",
        category: "MV",
        thumbnail: "/work5.jpg",
        description: "MVの作品Aの説明ダミー。",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx5",
        date: "2024.05",
        url: "https://example.com/mv-a",
    },
    {
        id: "6",
        title: "MV作品B",
        category: "MV",
        thumbnail: "/work6.jpg",
        description: "MVの作品Bの説明ダミー。",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx6",
        date: "2024.06",
        url: "https://example.com/mv-b",
    },
];

export function Works() {
    const [selectedCategory, setSelectedCategory] = useState<WorkCategory>("All");
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    // アニメーション用
    const [show, setShow] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setShow(entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: "-40% 0px -40% 0px"
            }
        );
        if (rootRef.current) observer.observe(rootRef.current);
        return () => observer.disconnect();
    }, []);

    // カテゴリ切り替え時のグリッドアニメーション
    const [gridKey, setGridKey] = useState(0);
    useEffect(() => {
        setGridKey((k) => k + 1);
        // カテゴリ切り替え時にグリッド全体を一度非表示→再表示
        setShow(false);
        const timer = setTimeout(() => setShow(true), 10);
        return () => clearTimeout(timer);
    }, [selectedCategory]);

    const filteredWorks = WORKS_DATA.filter(
        (work) => selectedCategory === "All" || work.category === selectedCategory
    );
    const maxGridItems = WORKS_DATA.length;
    const emptyCount = Math.max(0, maxGridItems - filteredWorks.length);

    // アニメーションディレイ
    const delays = [0, 0.18, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26, 1.44];
    const duration = "0.8s";

    // グリッド全体のアニメーション
    const gridAnimStyle = {
        opacity: show ? 1 : 0,
        transform: show ? "translateX(0)" : "translateX(60px)",
        filter: show ? "blur(0)" : "blur(16px)",
        transition: "all 0.4s cubic-bezier(.16,1,.3,1)"
    };

    return (
        <>
            <div ref={rootRef} className="min-h-screen flex items-center pt-32">
                <div className="max-w-7xl mx-auto px-4 w-full mb-32">
                    {/* タイトル */}
                    <h2
                        className="text-7xl font-bold mb-16"
                        style={{
                            opacity: show ? 1 : 0,
                            transform: show ? "translateX(0)" : "translateX(-60px)",
                            transition: `all ${duration} cubic-bezier(.16,1,.3,1) ${delays[0]}s`
                        }}
                    >
                        Works
                    </h2>
                    {/* カテゴリ */}
                    <div
                        className="flex items-center gap-8 mb-12"
                        style={{
                            opacity: show ? 1 : 0,
                            transform: show ? "translateX(0)" : "translateX(-60px)",
                            transition: `all ${duration} cubic-bezier(.16,1,.3,1) ${delays[1]}s`
                        }}
                    >
                        <h2 className="text-4xl font-bold">Category :</h2>
                        <div className="flex gap-4">
                            {(["All", "3DCG", "Music", "MV"] as const).map((category, idx) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`
                                        px-6 py-2 rounded-full border-2 border-black
                                        transition-all duration-150
                                        ${selectedCategory === category
                                            ? "bg-black text-white"
                                            : "hover:bg-black hover:text-white"
                                        }
                                    `}
                                    style={{
                                        opacity: show ? 1 : 0,
                                        transform: show ? "translateX(0)" : "translateX(-60px)",
                                        transition: `all 0.15s cubic-bezier(.16,1,.3,1) 0s`
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 作品グリッド */}
                    <div key={gridKey} className="grid grid-cols-3 gap-8" style={gridAnimStyle}>
                        {filteredWorks.map((work, i) => (
                            <div
                                key={work.id}
                                role="button"
                                tabIndex={0}
                                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => setSelectedWork(work)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedWork(work);
                                    }
                                }}
                                style={{
                                    opacity: show ? 1 : 0,
                                    transform: show ? "translateX(0)" : "translateX(-60px)",
                                    filter: show ? "blur(0)" : "blur(8px)",
                                    transition: `all 0.5s cubic-bezier(.16,1,.3,1) ${i * 0.08}s`
                                }}
                            >
                                <img
                                    src={work.thumbnail}
                                    alt={work.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                                <p className="text-gray-600 line-clamp-2">{work.description}</p>
                            </div>
                        ))}
                        {/* 空きマスを透明なダミーで埋める */}
                        {Array.from({ length: emptyCount }).map((_, i) => (
                            <div
                                key={`empty-${i}`}
                                className="invisible p-4 rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {selectedWork && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    {/* オーバーレイ用のボタン */}
                    <button
                        className="absolute inset-0 w-full h-full bg-black/50 animate-fadeIn"
                        onClick={() => setSelectedWork(null)}
                        aria-label="Close modal"
                    />

                    {/* モーダルコンテンツ */}
                    <div
                        className="relative bg-white rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp"
                    >
                        <div className="flex gap-8">
                            {/* 左側：メディア */}
                            <div className="w-2/3">
                                {selectedWork.youtubeUrl ? (
                                    <div className="aspect-video">
                                        <iframe
                                            title={`${selectedWork.title} - YouTube video`}
                                            src={selectedWork.youtubeUrl}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                ) : selectedWork.imageUrl ? (
                                    <img
                                        src={selectedWork.imageUrl}
                                        alt={selectedWork.title}
                                        className="w-full h-auto rounded-lg"
                                    />
                                ) : (
                                    <img
                                        src={selectedWork.thumbnail}
                                        alt={selectedWork.title}
                                        className="w-full h-auto rounded-lg"
                                    />
                                )}
                            </div>

                            {/* 右側：情報 */}
                            <div className="w-1/3 space-y-6">
                                <h3 className="text-3xl font-bold">{selectedWork.title}</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-600">{selectedWork.date}</p>
                                    {selectedWork.url && (
                                        <a
                                            href={selectedWork.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#DA5A5A] hover:underline"
                                        >
                                            {selectedWork.url}
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-800 whitespace-pre-wrap">
                                    {selectedWork.description}
                                </p>
                            </div>
                        </div>

                        {/* 閉じるボタン */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedWork(null)}
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
