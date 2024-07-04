// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '开源阅读',
  tagline: '阅读是一款可以自定义网络来源内容的阅读工具。',
  favicon: 'img/logo.png',
  

  // Set the production url of your site here
  url: 'https://heziyouyi.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'heziyouyi', // Usually your GitHub org/user name.
  projectName: 'heziyouyi.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/heziyouyi/heziyouyi.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/heziyouyi/heziyouyi.github.io/tree/master/',
          // 侧边栏的标题展示所有
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          // 订阅源
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 开源阅读, Inc. Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /* 色彩模式 */
      /*  https://docusaurus.io/zh-CN/docs/api/themes/configuration#color-mode---dark-mode * */
      colorMode: {
        // 首次访问网站时的色彩模式
        defaultMode: 'light',
        // 在导航栏隐藏按钮
        disableSwitch: false,
        // 使用用户系统的首选项
        respectPrefersColorScheme: true,
      },
      /* 告示条  */
      /* https://docusaurus.io/zh-CN/docs/api/themes/configuration#announcement-bar */
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ 如果你喜欢开源阅读，请关注 “开源阅读” 微信公众号',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '开源阅读',
        logo: {
          alt: ' ',
          src: 'img/logo.png',
          href: "/",
          target: "_self",
        },
        items: [
          {
            type: 'doc',
            docId: 'GettingStarted',
            position: 'left',
            label: '文档',
          },
          {
            to: '/blog', 
            label: '博客', 
            position: 'left'},
            {
              to: '/download', 
              label: '下载',
              position: 'left',
            },
          {
            href: 'https://github.com/heziyouyi/heziyouyi.github.io',
            label: 'GitHub',
            position: 'right',
          },

          /* 语言下拉选框 */
          /* {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: 'https://github.com/heziyouyi/heziyouyi.github.io',
                label: '帮助我们翻译',
              },
            ],
          }, */

          /* 按钮 */
          /* {
            type: 'html',
            position: 'right',
            value: '<button>提交反馈</button>',
          }, */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '官网',
            items: [
              /* {
                label: '博客',
                to: '/blog',
              },
              {
                label: '使用教程',
                to: '/docs/intro',
              }, */
              {
                label: '简介',
                to: '/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/2wfRBcXV3H',
              },
              {
                label: 'Telegram（zh_cn）',
                href: 'https://t.me/yueduguanfang',
              },
            ],
          },
          {
            title: '条款',
            items: [
              {
                label: '隐私政策',
                href: '/PrivacyPolicyGenerator',
              },
              {
                label: '免责声明',
                href: '/Disclaimer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 开源阅读, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
