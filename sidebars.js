const sidebars = {
  researchSidebar: [
    {type: 'doc', id: 'overview', label: '개요'},
    {type: 'doc', id: 'comprehensive-report', label: '종합'},
    {
      type: 'category',
      label: '리서치 데이터',
      collapsed: false,
      items: [
        {type: 'doc', id: 'global-enterprise-cases', label: '글로벌 대기업·엔터프라이즈 사례'},
        {type: 'doc', id: 'korea-domestic-cases', label: '국내 건설사·프롭테크 사례'},
        {type: 'doc', id: 'sme-startup-project-cases', label: '중소기업·스타트업·프로젝트 단위 사례'},
        {type: 'doc', id: 'roi-proof-bank', label: 'ROI Proof Bank — 상세 사례'},
        {type: 'doc', id: 'construction-workflow-map', label: '건설 워크플로우 AX 적용처 지도'},
        {type: 'doc', id: 'proptech-money-map', label: '프롭테크 Money Map'},
        {type: 'doc', id: 'ax-positioning-pricing-gtm', label: 'AX 포지셔닝·가격·GTM'},
        {type: 'doc', id: 'investor-thesis-market-map', label: '투자 Thesis·시장 지도'},
      ],
    },
  ],
};
module.exports = sidebars;
