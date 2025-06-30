import { useEffect, useRef, useState } from "react";

export function About() {
  // アニメーション用
  const [show, setShow] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // ダークモード判定をリアルタイムで反映
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.body.dataset.theme === 'dark');
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -40% 0px" // 完全に消えたらfalse
      }
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  // アニメーションディレイ設定
  const delays = [0, 0.12, 0.24, 0.36, 0.48];
  const duration = "0.8s";
  const getTransition = (idx: number) =>
    `all ${duration} cubic-bezier(.16,1,.3,1) ${delays[idx]}s`;

  return (
    <div ref={rootRef} className="min-h-screen flex items-center -mt-16">
      <div className="max-w-7xl mx-auto px-4 w-full py-8 md:py-0">
        {/* タイトル */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateX(0)" : "translateX(-60px)",
            transition: getTransition(0)
          }}
        >
          About
        </h2>
        {/* 内容 */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"
        >
          {/* アイコン */}
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateX(0)" : "translateX(-60px)",
              transition: getTransition(1)
            }}
          >
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              style={{ color: isDark ? "#efefef" : "#000000" }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
            >
              <use href="/MossyIcons.svg#main" />
            </svg>
          </div>
          {/* テキストブロック */}
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-center md:text-left">
            {/* 名前＋SNS */}
            <div
              className="flex items-center justify-center md:justify-start gap-4"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(-60px)",
                transition: getTransition(2)
              }}
            >
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
            {/* 肩書き */}
            <div
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(-60px)",
                transition: getTransition(3)
              }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2">音楽、映像クリエイター</h3>
            </div>
            {/* スキルリスト */}
            <div
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(-60px)",
                transition: getTransition(4)
              }}
            >
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
