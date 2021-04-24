module.exports = {
  title: 'PteroBilling',
  tagline: 'An open-source Laravel 8 online store, client area, and billing software specially made for Pterodactyl panel',
  url: 'https://project.alaister.net',
  baseUrl: '/',
  favicon: 'img/favicon.webp',
  organizationName: 'AlaisterLeung',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'PteroBilling',
      logo: {
        alt: 'PteroBilling Icon',
        src: 'img/icon.webp',
      },
      links: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: '#',
          label: 'Demo',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pterobilling/pterobilling',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/GQ5EWQz6MQ',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/start',
            },
            {
              label: 'Administration',
              to: 'docs/admin',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/GQ5EWQz6MQ',
            },
            {
              label: 'Github Discussions',
              href: 'https://github.com/pterobilling/pterobilling/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Demo',
              href: '#',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pterobilling/pterobilling',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alaister Leung. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pterobilling/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/pterobilling/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
