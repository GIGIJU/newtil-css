import { defineConfig } from "vitepress";

const BASE_PATH = "/newtil-css/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ignoreDeadLinks: true,
  base: BASE_PATH,
  title: "Newtil CSS",
  description: "Utility based CSS",
  appearance: false, // darkmode
  lang: "ko",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/newtil-css@0.1.6/dist/style.css",
      },
    ],
    ["link", { rel: "icon", href: `${BASE_PATH}favicon.ico` }],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/newlecture-corp/newtil-css",
      },
    ],

    search: {
      provider: "local",
    },

    nav: [{ text: "홈", link: "/" }],

    sidebar: [
      {
        text: "소개",
        base: "/guide",
        items: [
          { text: "시작하기", link: "/getting-started" },
          // { text: "newtil-css 맛보기", link: "/example" },
          {
            text: "컴포넌트 시작하기",
            link: "/getting-started-component",
          },
          {
            text: "유틸리티 시작하기",
            link: "/getting-started-utility",
          },
          { text: "스타일 재정의하기", link: "/customizing" },
        ],
      },
      {
        text: "변수",
        base: "/variables",
        items: [
          {
            text: "theme-colors",
            link: "/theme-colors",
          },
          {
            text: "border-color",
            link: "/border-color",
          },
          {
            text: "border-width",
            link: "/border-width",
          },
          {
            text: "border-radius",
            link: "/border-radius",
          },
          {
            text: "box-shadow",
            link: "/box-shadow",
          },
          {
            text: "font-size",
            link: "/font-size",
          },
          {
            text: "font-weight",
            link: "/font-weight",
          },
          {
            text: "gap",
            link: "/gap",
          },
          {
            text: "opacity",
            link: "/opacity",
          },
          {
            text: "order",
            link: "/order",
          },
          {
            text: "z-index",
            link: "/z-index",
          },
        ],
      },

      {
        text: "컴포넌트",
        base: "/component",
        items: [
          {
            text: "모아보기",
            link: "/overview",
          },
          {
            text: "버튼",
            link: "/button",
          },
          {
            text: "토글",
            link: "/toggle",
          },
        ],
      },

      {
        text: "아이콘",
        base: "/icons",
        items: [
          {
            text: "아이콘과 데코 시작하기",
            link: "/getting-started",
          },
          {
            text: "아이콘 목록",
            link: "/list",
          },
        ],
      },

      {
        text: "유틸리티",
        base: "/utility",
        items: [
          {
            text: "align-*",
            collapsed: true,
            items: [
              {
                text: "align-content",
                link: "/align-style/align-content",
              },
              {
                text: "align-items",
                link: "/align-style/align-items",
              },
              {
                text: "align-self",
                link: "/align-style/align-self",
              },
            ],
          },
          {
            text: "background-*",
            collapsed: true,
            items: [
              {
                text: "background-attachment",
                link: "/background/background-attachment",
              },
              {
                text: "background-clip",
                link: "/background/background-clip",
              },
              {
                text: "background-color",
                link: "/background/background-color",
              },
              {
                text: "background-origin",
                link: "/background/background-origin",
              },
              {
                text: "background-position",
                link: "/background/background-position",
              },
              {
                text: "background-repeat",
                link: "/background/background-repeat",
              },
              {
                text: "background-size",
                link: "/background/background-size",
              },
            ],
          },
          {
            text: "border-*",
            collapsed: true,
            items: [
              {
                text: "border",
                link: "/border/border",
              },
              {
                text: "border-color",
                link: "/border/border-color",
              },
              {
                text: "border-radius",
                link: "/border/border-radius",
              },
              {
                text: "border-style",
                link: "/border/border-style",
              },
              {
                text: "border-width",
                link: "/border/border-width",
              },
            ],
          },
          {
            text: "box-shadow",
            link: "/box-shadow",
          },
          {
            text: "box-sizing",
            link: "/box-sizing",
          },
          {
            text: "cursor",
            link: "/cursor",
          },
          { text: "display", link: "/display" },
          {
            text: "flex-*",
            collapsed: true,
            items: [
              {
                text: "flex",
                link: "/flex/flex",
              },
              {
                text: "flex-basis",
                link: "/flex/flex-basis",
              },
              {
                text: "flex-direction",
                link: "/flex/flex-direction",
              },
              {
                text: "flex-flow",
                link: "/flex/flex-flow",
              },
              {
                text: "flex-grow",
                link: "/flex/flex-grow",
              },
              {
                text: "flex-shrink",
                link: "/flex/flex-shrink",
              },
              {
                text: "flex-wrap",
                link: "/flex/flex-wrap",
              },
            ],
          },
          {
            text: "float",
            link: "/float",
          },
          {
            text: "font-*",
            collapsed: true,
            items: [
              {
                text: "font-color",
                link: "/font/font-color",
              },
              {
                text: "font-size",
                link: "/font/font-size",
              },
              {
                text: "font-style",
                link: "/font/font-style",
              },
              {
                text: "font-weight",
                link: "/font/font-weight",
              },
            ],
          },
          {
            text: "gap-*",
            collapsed: true,
            items: [
              {
                text: "gap",
                link: "/gap/gap",
              },
              {
                text: "column-gap",
                link: "/gap/column-gap",
              },
              {
                text: "row-gap",
                link: "/gap/row-gap",
              },
            ],
          },
          {
            text: "grid-*",
            collapsed: true,
            items: [
              {
                text: "grid-auto-flow",
                link: "/grid/grid-auto-flow",
              },
              {
                text: "grid-auto-columns",
                link: "/grid/grid-auto-columns",
              },
              {
                text: "grid-auto-rows",
                link: "/grid/grid-auto-rows",
              },
              {
                text: "grid-template-columns",
                link: "/grid/grid-template-columns",
              },
              {
                text: "grid-template-rows",
                link: "/grid/grid-template-rows",
              },
              {
                text: "grid-column",
                link: "/grid/grid-column",
              },
              {
                text: "grid-row",
                link: "/grid/grid-row",
              },
            ],
          },
          {
            text: "height-*",
            collapsed: true,
            items: [
              {
                text: "height",
                link: "/height/height",
              },
              {
                text: "min-height",
                link: "/height/min-height",
              },
              {
                text: "max-height",
                link: "/height/max-height",
              },
            ],
          },
          {
            text: "justify-*",
            collapsed: true,
            items: [
              {
                text: "justify-content",
                link: "/justify-style/justify-content",
              },
              {
                text: "justify-items",
                link: "/justify-style/justify-items",
              },
              {
                text: "justify-self",
                link: "/justify-style/justify-self",
              },
            ],
          },
          {
            text: "line-height",
            link: "/line-height",
          },
          {
            text: "list-*",
            collapsed: true,
            items: [
              {
                text: "list-style",
                link: "/list-style/list-style",
              },
              {
                text: "list-style-image",
                link: "/list-style/list-style-image",
              },
              {
                text: "list-style-position",
                link: "/list-style/list-style-position",
              },
              {
                text: "list-style-type",
                link: "/list-style/list-style-type",
              },
            ],
          },
          {
            text: "margin-*",
            collapsed: true,
            items: [
              {
                text: "margin",
                link: "/margin/margin",
              },
              {
                text: "margin-top",
                link: "/margin/margin-top",
              },
              {
                text: "margin-right",
                link: "/margin/margin-right",
              },
              {
                text: "margin-bottom",
                link: "/margin/margin-bottom",
              },
              {
                text: "margin-left",
                link: "/margin/margin-left",
              },
              {
                text: "margin-x",
                link: "/margin/margin-x",
              },
              {
                text: "margin-y",
                link: "/margin/margin-y",
              },
            ],
          },
          {
            text: "object-fit",
            link: "/object-fit",
          },
          {
            text: "opacity",
            link: "/opacity",
          },
          {
            text: "order",
            link: "/order",
          },
          {
            text: "overflow-*",
            collapsed: true,
            items: [
              {
                text: "overflow",
                link: "/overflow/overflow",
              },
              {
                text: "overflow-x",
                link: "/overflow/overflow-x",
              },
              {
                text: "overflow-y",
                link: "/overflow/overflow-y",
              },
            ],
          },
          {
            text: "padding-*",
            collapsed: true,
            items: [
              {
                text: "padding",
                link: "/padding/padding",
              },
              {
                text: "padding-top",
                link: "/padding/padding-top",
              },
              {
                text: "padding-right",
                link: "/padding/padding-right",
              },
              {
                text: "padding-bottom",
                link: "/padding/padding-bottom",
              },
              {
                text: "padding-left",
                link: "/padding/padding-left",
              },
              {
                text: "padding-x",
                link: "/padding/padding-x",
              },
              {
                text: "padding-y",
                link: "/padding/padding-y",
              },
            ],
          },
          {
            text: "position-*",
            collapsed: true,
            items: [
              {
                text: "position",
                link: "/position/position",
              },
              {
                text: "top",
                link: "/position/top",
              },
              {
                text: "right",
                link: "/position/right",
              },
              {
                text: "bottom",
                link: "/position/bottom",
              },
              {
                text: "left",
                link: "/position/left",
              },
            ],
          },
          {
            text: "scroll-*",
            collapsed: true,
            items: [
              {
                text: "scroll-behavior",
                link: "/scroll/scroll-behavior",
              },
              {
                text: "scroll-none",
                link: "/scroll/scroll-none",
              },
            ],
          },
          {
            text: "table-layout",
            link: "/table-layout",
          },
          {
            text: "text-*",
            collapsed: true,
            items: [
              {
                text: "hyphens",
                link: "/text/hyphens",
              },
              {
                text: "line-clamp",
                link: "/text/line-clamp",
              },
              {
                text: "overflow-wrap",
                link: "/text/overflow-wrap",
              },
              {
                text: "text-align",
                link: "/text/text-align",
              },
              {
                text: "text-decoration",
                link: "/text/text-decoration",
              },
              {
                text: "text-decoration-style",
                link: "/text/text-decoration-style",
              },
              {
                text: "text-indent",
                link: "/text/text-indent",
              },
              {
                text: "text-transform",
                link: "/text/text-transform",
              },
              {
                text: "white-space",
                link: "/text/white-space",
              },
              {
                text: "word-break",
                link: "/text/word-break",
              },
            ],
          },
          {
            text: "vertical-align",
            link: "/vertical-align",
          },
          {
            text: "visibility",
            link: "/visibility",
          },
          {
            text: "width-*",
            collapsed: true,
            items: [
              {
                text: "width",
                link: "/width/width",
              },
              {
                text: "min-width",
                link: "/width/min-width",
              },
              {
                text: "max-width",
                link: "/width/max-width",
              },
            ],
          },
          {
            text: "z-index",
            link: "/z-index",
          },
        ],
      },
    ],

    outline: {
      label: "컨텐츠",
    },

    footer: {
      copyright: "Copyright © 2024 newlecture",
    },
  },
});
