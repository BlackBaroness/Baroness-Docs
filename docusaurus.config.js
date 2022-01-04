const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Baroness` Docs',
  tagline: '',
  url: 'https://baronessdev.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Baroness` Dev', // Usually your GitHub org/user name.
  projectName: 'Baroness` Dev', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: undefined
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Baroness` Docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: 'Copyright © 2020-2022 Baroness` Dev. <br> Сделано с ❤ <a href="https://vk.com/xiliken" target="_blank">Евгений Базоров</a>',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
    "i18n": {
      "defaultLocale": "ru",
      "locales": [
        "ru"
      ],
    }
});
