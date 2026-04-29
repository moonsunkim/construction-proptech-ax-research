const config = {
  title: '건설·프롭테크 AX 리서치',
  tagline: 'Deep Research Markdown 원본 보존 및 열람 사이트',
  favicon: 'img/favicon.ico',
  url: 'https://moonsunkim.github.io',
  baseUrl: '/construction-proptech-ax-research/',
  organizationName: 'moonsunkim',
  projectName: 'construction-proptech-ax-research',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'ko', locales: ['ko'] },
  presets: [
    ['classic', {
      docs: { sidebarPath: require.resolve('./sidebars.js'), routeBasePath: 'docs' },
      blog: false,
      theme: { customCss: require.resolve('./src/css/custom.css') },
    }],
  ],
  themeConfig: {
    navbar: {
      title: '건설·프롭테크 AX 리서치',
      items: [
        {type: 'docSidebar', sidebarId: 'researchSidebar', position: 'left', label: '문서'},
        {href: 'https://github.com/moonsunkim/construction-proptech-ax-research', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{title: '문서', items: [{label: '전체 문서', to: '/docs/global-enterprise-cases'}]}],
      copyright: `© ${new Date().getFullYear()} Moonsun Kim`,
    },
  },
};
module.exports = config;
