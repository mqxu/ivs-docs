import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          allow: [".."],
        },
      },
    },
  }),
  lang: "zh-CN",
  title: "智能车载系统",
  description: "智能车载系统项目化教学课程材料文档",

  base: "/ivs-docs/",

  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
  ],

  theme: defaultTheme({
    logo: "/logo.png",

    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "课程设计",
        link: "/course-design/",
      },
      {
        text: "需求调研",
        link: "/requirements/",
      },
      {
        text: "UI设计",
        link: "/ui-design/",
      },
      {
        text: "系统架构",
        link: "/architecture/",
      },
      {
        text: "开发文档",
        link: "/development/",
      },
      {
        text: "测试交付",
        link: "/testing/",
      },
      {
        text: "展示归档",
        link: "/presentation/",
      },
      {
        text: "其他材料",
        link: "/others/",
      },
    ],

    sidebar: {
      "/course-design/": [
        {
          text: "课程教学设计",
          children: [
            "/course-design/README.md",
            "/course-design/课程模块化设计.md",
            "/course-design/课程单元设计.md",
            "/course-design/教学进度表.md",
            "/course-design/教案与学情分析.md",
            "/course-design/考核与评分标准.md",
            "/course-design/课程标准.md",
            "/course-design/单元PPT模板.md",
          ],
        },
      ],

      "/requirements/": [
        {
          text: "需求与调研",
          children: [
            "/requirements/README.md",
            "/requirements/需求规格说明书.md",
            "/requirements/用户调研分析报告.md",
            "/requirements/UML系统建模.md",
          ],
        },
      ],

      "/ui-design/": [
        {
          text: "原型与UI设计",
          children: [
            "/ui-design/README.md",
            "/ui-design/高保真原型设计.md",
            "/ui-design/视觉稿与界面设计规范.md",
            "/ui-design/页面结构与交互说明.md",
          ],
        },
      ],

      "/architecture/": [
        {
          text: "系统架构与数据库设计",
          children: [
            "/architecture/README.md",
            "/architecture/系统架构设计.md",
            "/architecture/数据库设计.md",
          ],
        },
      ],

      "/development/": [
        {
          text: "接口与开发文档",
          children: [
            "/development/README.md",
            "/development/API接口文档.md",
            "/development/Mock数据.md",
            "/development/开发规范.md",
            "/development/端到端功能模块Demo.md",
          ],
        },
      ],

      "/testing/": [
        {
          text: "测试与交付",
          children: [
            "/testing/README.md",
            "/testing/功能测试用例表.md",
            "/testing/性能测试报告.md",
            "/testing/部署说明文档.md",
            "/testing/用户操作手册.md",
          ],
        },
      ],

      "/presentation/": [
        {
          text: "展示与归档",
          children: [
            "/presentation/README.md",
            "/presentation/路演PPT大纲.md",
            "/presentation/视频展示脚本.md",
            "/presentation/对外展示站点.md",
          ],
        },
      ],

      "/others/": [
        {
          text: "其他材料",
          children: [
            "/others/README.md",
            "/others/课程复盘总结.md",
            "/others/课程资源建设.md",
            "/others/AIGC赋能与自动化归档说明.md",
          ],
        },
      ],
    },

    editLink: false,
    contributors: false,
    lastUpdated: true,

    tip: "提示",
    warning: "注意",
    danger: "警告",
  }),
});
