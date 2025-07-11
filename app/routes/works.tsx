import { useEffect, useRef, useState } from "react";
import ChromaGrid, { type ChromaItem } from "~/components/ChromaGrid";

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
    title: "エレキギターとエフェクターボード",
    category: "3DCG",
    thumbnail: "/public/works/3dcg/guitars.jpg",
    description: "3DCG演習基礎Ⅱ 最終課題",
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

const categoryStyles: {
  [key in Exclude<WorkCategory, "All">]: {
    borderColor: string;
    gradient: string;
  };
} = {
  "3DCG": {
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg,#06B6D4,#000)",
  },
  Music: {
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
  },
  MV: {
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#000)",
  },
};

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
        rootMargin: "-40% 0px -40% 0px",
      }
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // ヘッダーからのカテゴリ選択イベントを監視
  useEffect(() => {
    const handleCategorySelect = (event: CustomEvent) => {
      const category = event.detail as WorkCategory;
      setSelectedCategory(category);
    };

    window.addEventListener(
      "selectWorksCategory",
      handleCategorySelect as EventListener
    );
    return () => {
      window.removeEventListener(
        "selectWorksCategory",
        handleCategorySelect as EventListener
      );
    };
  }, []);

  const filteredWorks = WORKS_DATA.filter(
    (work) => selectedCategory === "All" || work.category === selectedCategory
  );

  const chromaItems: ChromaItem[] = filteredWorks.map((work) => ({
    id: work.id,
    image: work.thumbnail,
    title: work.title,
    subtitle: work.description,
    url: work.url,
    ...categoryStyles[work.category],
  }));

  const handleWorkClick = (item: ChromaItem) => {
    const work = WORKS_DATA.find((w) => w.id === item.id);
    if (work) {
      setSelectedWork(work);
    }
  };

  // アニメーションディレイ
  const delays = [0, 0.18];
  const duration = "0.8s";

  // ダークモード判定をリアルタイムで反映
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.body.dataset.theme === "dark");
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        className="pt-8 sm:pt-16 md:pt-24 lg:pt-32 pb-16 sm:pb-32 md:pb-48"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full mb-8 sm:mb-16 md:mb-24">
          {/* タイトル */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateX(0)" : "translateX(-60px)",
              transition: `all ${duration} cubic-bezier(.16,1,.3,1) ${delays[0]}s`,
            }}
          >
            Works
          </h2>
          {/* カテゴリ */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-12"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateX(0)" : "translateX(-60px)",
              transition: `all ${duration} cubic-bezier(.16,1,.3,1) ${delays[1]}s`,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Category :
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {(["All", "3DCG", "Music", "MV"] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                                        px-4 sm:px-6 py-2 rounded-full border-2 border-black text-sm sm:text-base
                                        transition-all duration-150
                                        ${
                                          selectedCategory === category
                                            ? "bg-black text-white"
                                            : "hover:bg-black hover:text-white"
                                        }
                                    `}
                  style={{
                    opacity: show ? 1 : 0,
                    transform: show ? "translateX(0)" : "translateX(-60px)",
                    transition: `all 0.15s cubic-bezier(.16,1,.3,1) 0s`,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 作品グリッド */}
          <ChromaGrid
            items={chromaItems}
            onItemClick={handleWorkClick}
            isDark={isDark}
          />
        </div>
      </div>

      {selectedWork && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
        >
          {/* オーバーレイ用のボタン */}
          <button
            className="absolute inset-0 w-full h-full bg-black/50 animate-fadeIn"
            onClick={() => setSelectedWork(null)}
            aria-label="Close modal"
          />

          {/* モーダルコンテンツ */}
          <div
            className={`relative rounded-lg p-4 sm:p-6 md:p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp ${
              isDark ? "bg-[#253447] text-[#efefef]" : "bg-white"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
              {/* 左側：メディア */}
              <div className="w-full lg:w-2/3">
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
              <div className="w-full lg:w-1/3 space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {selectedWork.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-gray-600">
                    {selectedWork.date}
                  </p>
                  {selectedWork.url && (
                    <a
                      href={selectedWork.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-[#DA5A5A] hover:underline"
                    >
                      {selectedWork.url}
                    </a>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-800 whitespace-pre-wrap">
                  {selectedWork.description}
                </p>
              </div>
            </div>

            {/* 閉じるボタン */}
            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 p-2"
              onClick={() => setSelectedWork(null)}
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
