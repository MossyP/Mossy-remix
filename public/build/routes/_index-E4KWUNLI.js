import {
  createHotContext
} from "/build/_shared/chunk-WOXUFWS7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/layout/Header.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout\\\\Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout\\Header.tsx"
  );
  import.meta.hot.lastModified = "1740893135721.663";
}
function Header() {
  _s();
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
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
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    window.history.pushState("", document.title, window.location.pathname);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `fixed top-0 left-0 right-0 h-16 bg-[#D1D7DA] z-50 transition-all duration-300 ${isVisible ? "shadow-md translate-y-0" : "-translate-y-full"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 h-full flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Mossy",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#DA5A5A]", children: "." }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 51,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex items-center gap-10", children: NAVIGATION_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, onClick: (e) => handleClick(e, item.href), className: "hover:text-[#DA5A5A] transition-colors", children: item.label }, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this) }, item.href, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 56,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Header, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/home.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home.tsx"
  );
  import.meta.hot.lastModified = "1740896299042.7754";
}
function Home() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    window.history.pushState("", document.title, window.location.pathname);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between h-screen max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-9xl font-bold", children: [
      "Mossy Works",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#DA5A5A]", children: "." }, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 33,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "text-5xl font-bold flex flex-col gap-10", children: NAVIGATION_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, onClick: (e) => handleClick(e, item.href), className: "relative hover:text-[#DA5A5A] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full", children: item.label }, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, item.href, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 36,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = Home;
var _c2;
$RefreshReg$(_c2, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/about.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\about.tsx"
  );
  import.meta.hot.lastModified = "1740896299040.7146";
}
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen flex items-center -mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-7xl font-bold mb-16", children: "About" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/icon_trans.png", alt: "Mossy Icon", className: "w-96 h-96 object-contain" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/2 space-y-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-7xl font-bold", children: "Mossy" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://twitter.com/Mossy_tw", target: "_blank", rel: "noopener noreferrer", className: "hover:text-[#DA5A5A]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/twitter.svg", alt: "Twitter", className: "w-12 h-12" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-4xl font-bold mb-2", children: "\u97F3\u697D\u3001\u6620\u50CF\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-2xl font-bold mb-4", children: "\u30B9\u30AD\u30EB:" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-2 text-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u4F5C\u66F2/\u7DE8\u66F2" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u6620\u50CF\u5236\u4F5C" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "3DCG\u30E2\u30C7\u30EA\u30F3\u30B0" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 47,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 48,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c3 = About;
var _c3;
$RefreshReg$(_c3, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/works.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\works.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\works.tsx"
  );
  import.meta.hot.lastModified = "1740896654382.2434";
}
var WORKS_DATA = [
  {
    id: "1",
    title: "\u4F5C\u54C11",
    category: "3DCG",
    thumbnail: "/work1.jpg",
    description: "3DCG\u306E\u4F5C\u54C1\u8AAC\u660E",
    youtubeUrl: "https://www.youtube.com/embed/xxxxx",
    date: "2024.01",
    url: "https://example.com"
  }
  // 他の作品データも追加
];
function Works() {
  _s2();
  const [selectedCategory, setSelectedCategory] = (0, import_react2.useState)("All");
  const [selectedWork, setSelectedWork] = (0, import_react2.useState)(null);
  const filteredWorks = WORKS_DATA.filter((work) => selectedCategory === "All" || work.category === selectedCategory);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-screen flex items-center -mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 w-full mb-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-7xl font-bold mb-16", children: "Works" }, void 0, false, {
        fileName: "app/routes/works.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-8 mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-4xl font-bold", children: "Category :" }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-4", children: ["All", "3DCG", "Music", "MV"].map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => setSelectedCategory(category), className: `
                                                px-6 py-2 rounded-full border-2 border-black 
                                                transition-all duration-300
                                                ${selectedCategory === category ? "bg-black text-white" : "hover:bg-black hover:text-white"}
                            `, children: category }, category, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 47,
          columnNumber: 77
        }, this)) }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/works.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-3 gap-8", children: filteredWorks.map((work) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { role: "button", tabIndex: 0, className: "bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow", onClick: () => setSelectedWork(work), onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSelectedWork(work);
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: work.thumbnail, alt: work.title, className: "w-full h-48 object-cover rounded-md mb-4" }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 64,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-xl font-bold mb-2", children: work.title }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 65,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-600 line-clamp-2", children: work.description }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 66,
          columnNumber: 33
        }, this)
      ] }, work.id, true, {
        fileName: "app/routes/works.tsx",
        lineNumber: 58,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "app/routes/works.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/works.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/works.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    selectedWork && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { role: "dialog", "aria-modal": "true", className: "fixed inset-0 flex items-center justify-center z-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "absolute inset-0 w-full h-full bg-black/50 animate-fadeIn", onClick: () => setSelectedWork(null), "aria-label": "Close modal" }, void 0, false, {
        fileName: "app/routes/works.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative bg-white rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-2/3", children: selectedWork.youtubeUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "aspect-video", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("iframe", { title: `${selectedWork.title} - YouTube video`, src: selectedWork.youtubeUrl, className: "w-full h-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }, void 0, false, {
            fileName: "app/routes/works.tsx",
            lineNumber: 82,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/works.tsx",
            lineNumber: 81,
            columnNumber: 60
          }, this) : selectedWork.imageUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: selectedWork.imageUrl, alt: selectedWork.title, className: "w-full h-auto rounded-lg" }, void 0, false, {
            fileName: "app/routes/works.tsx",
            lineNumber: 83,
            columnNumber: 70
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: selectedWork.thumbnail, alt: selectedWork.title, className: "w-full h-auto rounded-lg" }, void 0, false, {
            fileName: "app/routes/works.tsx",
            lineNumber: 83,
            columnNumber: 170
          }, this) }, void 0, false, {
            fileName: "app/routes/works.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-1/3 space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-3xl font-bold", children: selectedWork.title }, void 0, false, {
              fileName: "app/routes/works.tsx",
              lineNumber: 88,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-600", children: selectedWork.date }, void 0, false, {
                fileName: "app/routes/works.tsx",
                lineNumber: 90,
                columnNumber: 37
              }, this),
              selectedWork.url && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: selectedWork.url, target: "_blank", rel: "noopener noreferrer", className: "text-[#DA5A5A] hover:underline", children: selectedWork.url }, void 0, false, {
                fileName: "app/routes/works.tsx",
                lineNumber: 91,
                columnNumber: 58
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/works.tsx",
              lineNumber: 89,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-800 whitespace-pre-wrap", children: selectedWork.description }, void 0, false, {
              fileName: "app/routes/works.tsx",
              lineNumber: 95,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/works.tsx",
            lineNumber: 87,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/works.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700", onClick: () => setSelectedWork(null), "aria-label": "Close modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 104,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 103,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/works.tsx",
          lineNumber: 102,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/works.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/works.tsx",
      lineNumber: 72,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/works.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s2(Works, "ycJMZgy8/QQTUZFUVlMx6XVRcKI=");
_c4 = Works;
var _c4;
$RefreshReg$(_c4, "Works");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/contact.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\contact.tsx"
  );
  import.meta.hot.lastModified = "1740896299041.7488";
}
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-screen flex items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-7xl font-bold mb-16", children: "Contact" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-4xl font-bold mb-4", children: "SNS" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 28,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "https://twitter.com/Mossy_tw", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-xl hover:text-[#DA5A5A] transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "/twitter.svg", alt: "Twitter", className: "w-8 h-8" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 31,
            columnNumber: 33
          }, this),
          "Twitter"
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 30,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 29,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-4xl font-bold mb-4", children: "Email" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:contact@example.com", className: "text-xl hover:text-[#DA5A5A] transition-colors", children: "contact@example.com" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-4xl font-bold mb-4", children: "\u304A\u4ED5\u4E8B\u306E\u3054\u4F9D\u983C" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xl", children: [
          "\u304A\u4ED5\u4E8B\u306E\u3054\u4F9D\u983C\u306F\u4E0A\u8A18\u306ESNS\u307E\u305F\u306FEmail\u306B\u3066\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this),
          "\u5185\u5BB9\u3092\u78BA\u8A8D\u6B21\u7B2C\u3001\u3054\u8FD4\u4FE1\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002"
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c5 = Contact;
var _c5;
$RefreshReg$(_c5, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1740896455985.7756";
}
var meta = () => {
  return [{
    title: "Mossy Portfolio"
  }, {
    name: "description",
    content: "Mossy\u306E\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8\u3067\u3059\u3002"
  }];
};
var NAVIGATION_ITEMS = [{
  href: "#home",
  label: "Home",
  Component: Home
}, {
  href: "#about",
  label: "About",
  Component: About
}, {
  href: "#works",
  label: "Works",
  Component: Works
}, {
  href: "#contact",
  label: "Contact",
  Component: Contact
}];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: NAVIGATION_ITEMS.map(({
      href,
      Component
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { id: href.slice(1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Component, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this) }, href, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-E4KWUNLI.js.map
