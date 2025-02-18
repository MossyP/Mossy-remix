import { useState } from "react";

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
    {
        id: "1",
        title: "作品1",
        category: "3DCG",
        thumbnail: "/work1.jpg",
        description: "3DCGの作品説明",
        youtubeUrl: "https://www.youtube.com/embed/xxxxx",
        date: "2024.01",
        url: "https://example.com",
    },
    // 他の作品データも追加
];

export function Works() {
    const [selectedCategory, setSelectedCategory] = useState<WorkCategory>("All");
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    const filteredWorks = WORKS_DATA.filter(
        (work) => selectedCategory === "All" || work.category === selectedCategory
    );

    return (
        <>
            <div className="h-screen flex items-center -mt-16">
                <div className="max-w-7xl mx-auto px-4 w-full mb-32">
                    <h2 className="text-7xl font-bold mb-16">Works</h2>
                    <div className="flex items-center gap-8 mb-12">
                        <h2 className="text-4xl font-bold">Category :</h2>
                        <div className="flex gap-4">
                            {(["All", "3DCG", "Music", "MV"] as const).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`
                                                px-6 py-2 rounded-full border-2 border-black 
                                                transition-all duration-300
                                                ${selectedCategory === category
                                            ? "bg-black text-white"
                                            : "hover:bg-black hover:text-white"
                                        }
                            `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {filteredWorks.map((work) => (
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
