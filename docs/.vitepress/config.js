export default {
  title: "ModuKit 文档",
  description: "ModuKit模块化工具箱使用文档",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/modukit" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/modukit" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yourusername/modukit" }
    ],
    footer: {
      message: "基于 MIT 许可证发布",
      copyright: "Copyright © 2024-present ModuKit"
    }
  }
} 