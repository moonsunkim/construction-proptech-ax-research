const config = {
  title: "문선 김's Wiki",
  tagline: '건설·프롭테크 AX 리서치',
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
      title: "문선 김's Wiki",
      items: [
        {type: 'docSidebar', sidebarId: 'researchSidebar', position: 'left', label: '건설·프롭테크 AX 리서치'},
        {href: 'https://github.com/moonsunkim/construction-proptech-ax-research', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{title: '문서', items: [{label: '개요', to: '/docs/overview'}, {label: '종합 분석', to: '/docs/comprehensive-report'}]}],
      copyright: `© ${new Date().getFullYear()} Moonsun Kim`,
    },
  },
};
module.exports = config;
