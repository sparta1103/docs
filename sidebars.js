module.exports = {
  docs: [
    'welcome',
    {
      'Getting Started': [
        'start/require',
        'start/install',
        'start/config',
        'start/mysql',
        'start/webserver',
        'start/pterodactyl',
      ]
    },
    {
      'Upgrading': [
        'upgrade/dev'
      ]
    },
    'faq',
    {
      'Administration': [
        'admin/admin-area',
      ]
    },
    {
      'Extensions': [
        'extensions/intro',
        {
          'Gateways': [
            'extensions/gateways/paypal',
          ]
        },
        {
          'Subdomains': [
            'extensions/subdomains/cloudflare',
          ]
        }
      ],
    },
    {
      'Miscellaneous': [
        'misc/contribute',
      ]
    }
  ],
};
