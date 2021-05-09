module.exports = {
  title: 'PteroBilling',
  tagline: 'An open-source Laravel 8 online store, client area, and billing software specially made for Pterodactyl panel',
  url: 'https://project.alaister.net',
  baseUrl: '/',
  favicon: 'img/favicon.webp',
  organizationName: 'pterobilling',
  projectName: 'docs',
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    navbar: {
      title: 'PteroBilling',
      logo: {
        alt: 'PteroBilling Icon',
        src: 'img/icon.webp',
      },
      links: [
        {
          to: 'docs/welcome',
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
              to: 'docs/start/require',
            },
            {
              label: 'Administration',
              to: 'docs/admin/admin-area',
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
              label: 'GitHub',
              href: 'https://github.com/pterobilling/pterobilling',
            },
            {
              label: 'Demo',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alaister Leung. All rights reserved.`,
    },
    googleAnalytics: { trackingID: 'G-1F81FF3R4S' },
  },
  scripts: [
    {
      src:
        'https://arc.io/widget.min.js#pZbCgsXG',
      async: true,
    },
  ],
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
