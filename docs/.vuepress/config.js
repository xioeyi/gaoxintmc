module.exports = {
  title: "高新头马中文演讲俱乐部（济南）",
  description: "高新头马中文演讲俱乐部",
  dest: "./dist",
  base: '/gaoxintmc/',
  port: "8088",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      {
        text: "什么是头马",
        link: "/guide/",
      },
      {
        text: "Meeting的组成",
        link: "/meeting/",
      },
      {
        text: "会员内容",
        link: "/member/",
        items: [
          { text: "会议记录", link: "/member/record/" },
          { text: "Passways", link: "/member/passways/" },
          { text: "精彩内容", link: "/member/exciting/" },
        ],
      },
      {
        text: "加入我们",
        link: "/joinus/",
      },
    ],
    sidebar: {
      "/member/record/": [
        '',
        '123',
        '124'
      ]
    },
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },
};
