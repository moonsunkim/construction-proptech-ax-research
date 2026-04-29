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
      logo: {
        alt: '건설·프롭테크 AX 리서치',
        src: 'img/ax-logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'researchSidebar', position: 'left', label: '목차'},
        {href: 'https://github.com/moonsunkim/construction-proptech-ax-research', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{title: '문서', items: [{label: '0. Overview', to: '/docs/overview'}, {label: '9. 종합 문서', to: '/docs/comprehensive-report'}]}],
      copyright: `© ${new Date().getFullYear()} Moonsun Kim`,
    },
  },
};
module.exports = config;
