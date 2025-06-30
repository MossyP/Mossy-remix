import { useEffect, useRef, useState } from "react";

export function About() {
  // タイトル用
  const [showTitle, setShowTitle] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // 内容用
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // タイトルの監視
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowTitle(entry.intersectionRatio > 0);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px" // 完全に消えるまでtrue
      }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  // 内容の監視
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowContent(entry.intersectionRatio > 0);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px" // 完全に消えるまでtrue
      }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center -mt-16">
      <div className="max-w-7xl mx-auto px-4 w-full py-8 md:py-0">
        {/* タイトル */}
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16"
          style={{
            opacity: showTitle ? 1 : 0,
            transform: showTitle ? "translateX(0)" : "translateX(-60px)",
            transition: "all 0.5s cubic-bezier(.16,1,.3,1)"
          }}
        >
          About
        </h2>
        {/* 内容 */}
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateX(0)" : "translateX(-60px)",
            transition: "all 0.5s cubic-bezier(.16,1,.3,1)"
          }}
        >
          {/* ここに画像やテキストなど内容を入れる */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/icon_trans.png"
              alt="Mossy Icon"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Mossy</h2>
              <a
                href="https://twitter.com/Mossy_tw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DA5A5A]"
              >
                <img src="/twitter.svg" alt="Twitter" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </a>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2">音楽、映像クリエイター</h3>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">スキル:</h3>
              <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg md:text-xl">
                <li>作曲/編曲</li>
                <li>映像制作</li>
                <li>3DCGモデリング</li>
                <li>コーディング</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
