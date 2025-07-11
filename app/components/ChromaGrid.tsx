import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export interface ChromaItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  onItemClick?: (item: ChromaItem) => void;
  isDark?: boolean;
  highlightTrigger?: number;
}

type SetterFn = (v: number | string) => void;

// カード1枚を管理する新しいコンポーネント
const GridItem = ({
  item,
  onItemClick,
}: {
  item: ChromaItem;
  onItemClick: (item: ChromaItem) => void;
}) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // スマホの時だけIntersectionObserverを有効にする
    const mql = window.matchMedia("(max-width: 768px)");
    if (!mql.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // is-visibleクラスを付け外しして、CSSで見た目を制御する
        el.classList.toggle("is-visible", entry.isIntersecting);
      },
      {
        // 画面の上下40%を除いた中央の20%のエリアを監視
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const mql = window.matchMedia("(max-width: 768px)");
    if (mql.matches) return; // スマホの時は何もしない

    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleCardMove}
      onClick={() => onItemClick(item)}
      // is-highlightedクラスで一時的に色付け
      className="group relative flex flex-col w-[350px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer hover:border-[var(--card-border)] grayscale md:grayscale-0 [&.is-visible]:grayscale-0 [&.is-highlighted]:grayscale-0"
      style={
        {
          "--card-border": item.borderColor || "transparent",
          background: item.gradient,
          "--spotlight-color": "rgba(255,255,255,0.3)",
          transition: "filter 0.4s ease-in-out", // 白黒アニメーションを滑らかに
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100 hidden md:block" // スマホでは非表示
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
        }}
      />
      <div className="relative z-10 flex-1 p-[10px] box-border">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-[220px] object-cover rounded-[10px]"
        />
      </div>
      <footer className="relative z-10 p-4 text-white font-sans grid grid-cols-1">
        <h3 className="m-0 text-lg font-semibold">{item.title}</h3>
        <p className="m-0 text-base opacity-85">{item.subtitle}</p>
      </footer>
    </article>
  );
};

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onItemClick = () => {},
  isDark = false,
  highlightTrigger = 0,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 画面サイズを監視してisMobileステートを更新
    const mql = window.matchMedia("(max-width: 768px)");
    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", handleResize);
    return () => mql.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || isMobile) return; // PCの時だけGSAPを初期化
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, [isMobile]);

  useEffect(() => {
    if (highlightTrigger === 0) return; // 初回マウント時は実行しない

    const cards = rootRef.current?.querySelectorAll("article");

    if (isMobile) {
      // スマホの場合: クラスを付け外し
      if (!cards) return;
      cards.forEach((card) => card.classList.add("is-highlighted"));
      const timer = setTimeout(() => {
        cards.forEach((card) => card.classList.remove("is-highlighted"));
      }, 500); // 0.5秒後にクラスを削除
      return () => clearTimeout(timer);
    } else {
      // PCの場合: fromToを使い、よりクリーンなアニメーションに
      if (!fadeRef.current) return;
      gsap.killTweensOf(fadeRef.current); // 既存のアニメーションを強制停止
      gsap.fromTo(
        fadeRef.current,
        { opacity: 0 }, // 開始: 完全にカラー
        {
          opacity: 1, // 終了: 完全に白黒
          duration: 0.5,
          ease: "power2.out",
          delay: 0.5, // 0.5秒間カラーの状態を維持
        }
      );
    }
  }, [highlightTrigger, isMobile]);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    // アニメーション開始前に、必ず既存のアニメーションを強制停止
    gsap.killTweensOf(fadeRef.current);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0 });
  };

  const handleLeave = () => {
    // アニメーション開始前に、必ず既存のアニメーションを強制停止
    gsap.killTweensOf(fadeRef.current);
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const data = items?.length ? items : [];

  return (
    <div
      ref={rootRef}
      onPointerMove={isMobile ? undefined : handleMove}
      onPointerLeave={isMobile ? undefined : handleLeave}
      className={`relative w-full flex flex-wrap justify-center items-start gap-8 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c) => (
        <GridItem key={c.id} item={c} onItemClick={onItemClick} />
      ))}
      {!isMobile && (
        <>
          <div
            className="absolute inset-0 pointer-events-none z-30 rounded-[20px]"
            style={{
              backdropFilter: "grayscale(1) brightness(0.78)",
              WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
              background: "rgba(0,0,0,0.001)",
              maskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
              WebkitMaskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
            }}
          />
          <div
            ref={fadeRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40 rounded-[20px]"
            style={{
              backdropFilter: "grayscale(1) brightness(0.78)",
              WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
              background: "rgba(0,0,0,0.001)",
              maskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
              opacity: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ChromaGrid;
