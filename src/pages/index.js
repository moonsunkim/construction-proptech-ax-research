import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const docs = [
  ['글로벌 대기업·엔터프라이즈 사례', '/docs/global-enterprise-cases'],
  ['국내 건설사·프롭테크 사례', '/docs/korea-domestic-cases'],
  ['중소기업·스타트업·프로젝트 단위 사례', '/docs/sme-startup-project-cases'],
  ['ROI Proof Bank — 상세 사례', '/docs/roi-proof-bank'],
  ['건설 워크플로우 AX 적용처 지도', '/docs/construction-workflow-map'],
  ['프롭테크 Money Map', '/docs/proptech-money-map'],
  ['AX 포지셔닝·가격·GTM', '/docs/ax-positioning-pricing-gtm'],
  ['투자 Thesis·시장 지도', '/docs/investor-thesis-market-map'],
];

export default function Home() {
  return (
    <Layout title="건설·프롭테크 AX 리서치" description="Deep Research Markdown 원본 보존 및 열람 사이트">
      <main className="heroMain">
        <section className="heroSection">
          <p className="eyebrow">Construction · PropTech · AX</p>
          <h1>건설·프롭테크 AX 리서치</h1>
          <p className="lead">원본 Markdown을 최대한 보존하면서 웹에서 읽기 쉽게 배포한 Deep Research 문서 모음입니다.</p>
          <Link className="button button--primary button--lg" to="/docs/global-enterprise-cases">문서 보기</Link>
        </section>
        <section className="docGrid">
          {docs.map(([title, to], idx) => (
            <Link className="docCard" to={to} key={to}>
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
