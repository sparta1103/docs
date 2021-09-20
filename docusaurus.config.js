module.exports = {
  title: "PteroBilling",
  tagline:
    "An open-source Laravel 8 online store, client area, and billing software specially made for Pterodactyl panel",
  url: "https://docs.pterobilling.org",
  baseUrl: "/",
  favicon: "img/favicon.webp",
  organizationName: "pterobilling",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "PteroBilling",
      logo: {
        alt: "PteroBilling Icon",
        src: "img/icon.webp",
      },
      items: [
        {
          href: "https://pterobilling.org",
          label: "Website",
          position: "left",
        },
        {
          to: "docs/welcome",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://demo.pterobilling.org",
          label: "Demo",
          position: "left",
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/pterobilling/pterobilling",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/GQ5EWQz6MQ",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Useful Links",
          items: [
            {
              href: "https://pterobilling.org",
              label: "Website",
            },
            {
              label: "Documentation",
              to: "docs/welcome",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/GQ5EWQz6MQ",
            },
            {
              label: "Github Discussions",
              href: "https://github.com/pterobilling/pterobilling/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/pterobilling/pterobilling",
            },
            {
              label: "Demo",
              href: "https://demo.pterobilling.org",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alaister Leung. All rights reserved.`,
    },
    gtag: {
      trackingID: "G-D37Y7G2S6Q",
      anonymizeIP: true,
    },
  },
  scripts: [
    {
      src: "https://arc.io/widget.min.js#qtir15bF",
      async: true,
    },
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      "data-cf-beacon": "{'token': '43934bd6f50a42f3bbc4b6a27ea97eec'}",
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/pterobilling/docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/pterobilling/docs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
