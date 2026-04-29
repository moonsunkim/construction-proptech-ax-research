---
title: 건설 워크플로우 AX 적용처 지도
---

# 건설 산업 가치사슬 전반의 AX(AI 전환) 적용 맵 및 투자 전략 보고서


<div className="doc-disclaimer"><strong>면책 조항</strong> — 본 보고서는 정보 제공 및 전략적 의사결정 지원만을 목적으로 작성되었으며, 전문적인 재무 투자 자문이나 법적 자문이 아닙니다. 특히 한국의 중대재해처벌법 등과 관련된 AI 안전 솔루션의 도입이 사업주나 경영진의 법적 책임을 완전히 면제하거나 포괄적 면책을 보장하는 것은 아니며, 개별 현장의 특성에 따른 추가적인 법률 검토가 필요합니다.</div>

---

**핵심 요약 (Key Points):**
*   **생산성 정체와 AX의 필요성:** 전 세계 경제 생산성 증가율이 연평균 2%인 반면, 건설업은 0.4%에 불과합니다. 맥킨지(McKinsey)에 따르면 AI 도입은 프로젝트 비용을 15%~20% 절감하고, 생산성을 최대 20%까지 향상시킬 수 있는 것으로 분석됩니다.
*   **한국 시장의 강력한 규제 동인:** 2022년 시행 및 2024년 50인 미만 사업장으로 확대 적용된 '중대재해처벌법'으로 인해 안전 관리 부문의 AI 도입은 단순한 비용 절감이 아닌 기업 생존과 직결된 경영진의 핵심 KPI로 자리 잡았습니다.
*   **초기 진입 장벽과 최적의 쐐기(Wedge) 전략:** 건설업은 보수적이며 데이터 파편화가 심합니다. 따라서 대규모 시스템 통합(SI)보다는 2D 도면 인식(물량 산출), 360도 카메라 기반 진척도 모니터링, 비전 AI 기반 안전 관제 등 기존 워크플로우를 방해하지 않으면서 단기 ROI를 증명할 수 있는 '가벼운 서비스형 소프트웨어(SaaS)' 형태가 초기 진입에 유리한 것으로 평가됩니다.
*   **노사 갈등 및 개인정보 보호 리스크:** AI CCTV 및 비전 감시 도구의 도입은 한국 건설 현장 노조의 극심한 반발과 개인정보보호법 충돌이라는 현실적 장벽에 직면해 있으며, 이를 우회하기 위한 엣지(Edge) AI 기반의 비식별화 기술이 필수적으로 요구됩니다.

본 보고서는 한국 건설 부문의 투자자 및 건설사 C-레벨 경영진을 대상으로, 건설 프로젝트의 전체 가치사슬(Value Chain) 내에서 AI 전환(AX, AI Transformation)이 구체적으로 어느 지점에 어떻게 적용될 수 있는지 분석합니다. 건설 산업은 그 특성상 현장의 불확실성이 크고 이해관계자가 복잡하게 얽혀 있어 전면적인 기술 도입이 어렵습니다. 따라서 본 분석은 AI의 적용 가능성을 과장하기보다는, 실제 기술적 실현 가능성, 데이터의 구득성, 그리고 한국 건설 시장의 특수성(법적 규제 및 인구구조 변화)을 종합적으로 고려하여 구체적이고 실증적인 도입 전략을 제시합니다. 제한적인 비상장 스타트업의 실시간 매출 데이터 등은 벤처캐피털 투자 동향 및 기관 리서치를 바탕으로 한 추정치로 대체되었음을 일러둡니다.

---

## 1. 투자자 대상 요약: 건설 AX, 왜 지금이며 어디에 투자해야 하는가?

전 산업군에서 인공지능 전환(AX) 열풍이 불고 있는 가운데, 건설업계 역시 생존을 위한 필수 과제로 AI를 주목하고 있습니다. 과거 건설업의 기술 도입은 3D BIM(건축정보모델)이나 ERP(전사적 자원 관리) 중심의 무거운 인프라 구축에 머물렀으나, 현재의 AX 트렌드는 컴퓨터 비전, 자연어 처리(NLP), 생성형 AI 등을 활용하여 '특정 실무 현업의 병목(Pain point)'을 즉각적으로 해소하는 '포인트 솔루션' 중심으로 진화하고 있습니다.

특히 한국 건설 시장은 두 가지 거대한 구조적 위협에 직면해 있으며, 이는 곧 AI 스타트업에게 강력한 '진입 쐐기(Entry Wedge)'를 제공합니다. 첫째는 **중대재해처벌법의 전면 확대**입니다. 사망 사고 발생 시 사업주가 직접 형사처벌을 받을 수 있는 환경에서, 대우건설, HDC현대산업개발, SK에코플랜트 등 주요 대형 건설사들은 AI CCTV와 드론 관제 플랫폼 등 '예방형 스마트 세이프티' 시스템 구축에 막대한 예산을 투입하고 있습니다. 2019년부터 시작된 정부의 스마트 안전장비 정책은 공공공사 입찰 조건으로 확대되며 현재 민간 시장까지 사실상의 의무로 자리 잡고 있습니다. 둘째는 **현장 숙련 인력의 고령화와 외국인 근로자 의존도 급증**입니다. 언어 장벽으로 인한 소통 오류와 작업 지시의 비효율을 해결하기 위해 AI 실시간 통번역 에이전트 등이 전면 도입되고 있습니다. 

또한 초기 단계 스타트업 벤처 투자가 전반적으로 위축된 2025년 기준 상황에서도, 업력 1년 이내 스타트업 대상 투자 금액의 절반 이상이 AI 분야에 몰리는 등 자본의 '쏠림 현상'이 명확히 관찰되고 있습니다. 이는 곧, 시장의 페인포인트를 정확히 타격하는 기술력 있는 소규모 AX 기업이 대형 건설사의 벤처 투자(CVC)나 협업을 이끌어낼 최적의 타이밍임을 시사합니다.

---

## 2. 건설 가치사슬 기회 히트맵 (Value-Chain Heatmap)

건설 산업의 가치사슬은 토지 매입부터 시설 운영까지 길고 복잡합니다. 각 단계별로 AI가 창출할 수 있는 경제적 가치(ROI)와 구현의 난이도(Friction)는 크게 다릅니다. 이 히트맵은 경영진이 한정된 예산을 어느 단계에 우선적으로 배치해야 할지 결정하는 기초 자료로 활용될 수 있습니다. 

<figure className="doc-figure">
  <img src={require('./assets/visualizations/construction-workflow-heatmap.png').default} alt="Construction Value Chain AI X Opportunity Heatmap" />
  <figcaption><strong>Construction Value Chain AI X Opportunity Heatmap</strong> — 건설 가치사슬 단계별 AX 기회, ROI 잠재력, 구현 마찰을 한눈에 비교한 히트맵입니다.</figcaption>
</figure>

**[평가 지표 레전드 (Legend)]**
*   **매력도 (ROI):** High = 15% 이상의 직접적인 프로젝트 비용/시간 절감 또는 완전한 법적 리스크 사전 차단, Medium = 5~15% 절감, Low = 5% 미만의 간접 비용 절감.
*   **구현 난이도 (Friction):** High = 복잡한 레거시 ERP API 연동 필요 및 고가의 하드웨어 인프라 설치 요구, Medium = 단일 데이터 소스 연동 및 가벼운 장비(스마트폰/360카메라) 필요, Low = 웹/SaaS 기반으로 플러그 앤 플레이(Plug-and-play) 즉시 구동.
*   **한국 시장 적합성 (Korean Market Fit):** High = 법적 강제성이 있거나 한국 하도급 시장의 페인포인트와 직결됨, Low = 한국 특유의 파편화된 데이터 환경으로 인해 알고리즘 구동이 실질적으로 제한됨.

| 가치사슬 단계 (Phase) | 핵심 도입 영역 (AX Use Case) | 매력도 (ROI) | 구현 난이도 | 주요 아키타입 (Archetype) | 한국 시장 적합성 |
| --- | --- | --- | --- | --- | --- |
| **1. 토지 매입/타당성** | 상권/입지 분석, 프롭테크 데이터 수집 | Medium | Low | 컨설팅 / 프로세스 자동화 | Medium |
| **2. 설계 (Design)** | 3D 렌더링, 제너레이티브 디자인 | High | Medium | AI 에이전트 / 생성형 AI | Medium |
| **3. 견적/물량 산출** | 2D 도면 자동 물량 산출 (Takeoffs) | **Very High** | Low | 컴퓨터 비전 / 자동화 | **High** |
| **4. 입찰/조달** | 도면 검토, 계약 분석, 단가 예측 | High | Medium | AI 코파일럿 (NLP) / 비전 | Medium |
| **5. 공정 스케줄링** | 제너레이티브 스케줄링 (경로 최적화) | High | High | 최적화 알고리즘 | Low |
| **6. 현장 진척도 관리** | 360도 카메라/드론 기반 진척률 자동 분석 | **Very High** | Medium | 컴퓨터 비전 / 디지털 트윈 | **High** |
| **7. 안전 관리 (Safety)** | 위험 구역 침범, 보호구 미착용 실시간 감지 | **Very High** | Medium | 컴퓨터 비전 / 비전 AI | **Very High** |
| **8. 품질 관리 (Quality)** | 시공 오차(BIM vs As-built) 자동 검측 | High | High | 컴퓨터 비전 / 디지털 트윈 | Medium |
| **9. 클레임/설계 변경** | RFI(설계 질의) 및 도면 변경 자동 추적 | Medium | Low | AI 에이전트 (NLP) | Low |
| **10. 준공/인수인계** | As-built 문서 자동화 및 분류 | Medium | Low | 프로세스 자동화 / OCR | Medium |
| **11. 시설 운영 (O&M)** | 스마트 빌딩 에너지 최적화, 예지 보전 | High | Medium | 디지털 트윈 / IoT 분석 | High |

위 표에서 보듯, **견적/물량 산출**, **현장 진척도 관리**, **안전 관리** 영역이 상대적으로 구현 난이도가 낮으면서도 단기적으로 매우 높은 ROI를 기대할 수 있는 '스위트 스폿(Sweet Spot)'입니다. 특히 한국은 안전 관리 영역이 단순한 생산성 지표를 넘어 중대재해처벌법이라는 법적 강제성과 맞물려 있어 폭발적인 성장세를 보입니다. 반면 스케줄링 최적화의 경우, ALICE Technologies와 같은 글로벌 우수 사례가 존재하나 한국 특유의 현장 하도급 구조와 불투명한 데이터 기록 관행으로 인해 구현 난이도가 매우 높게 평가됩니다.

---

## 3. ROI 잠재력 vs 도입 마찰 (Implementation Friction) 2x2 매트릭스

솔루션의 경제적 잠재력과 현장에서 실제 작동하기까지의 마찰(데이터 준비도, 저항감, 시스템 통합 난이도)을 교차 분석하여, 기업이 어떤 순서로 AX를 도입해야 하는지 시각화합니다.

<figure className="doc-figure">
  <img src={require('./assets/visualizations/construction-roi-friction-matrix.png').default} alt="Prioritizing Construction AI: ROI vs. Implementation Friction" />
  <figcaption><strong>Prioritizing Construction AI: ROI vs. Implementation Friction</strong> — ROI와 구현 마찰을 기준으로 초기 쐐기와 장기 전략 투자 영역을 구분한 2x2 우선순위 매트릭스입니다.</figcaption>
</figure>

*   **2사분면 (좌상단) - 퀵 윈 / 초기 쐐기 (High ROI / Low Friction):** 마찰이 적고 즉각적인 효과를 내므로 소규모 스타트업이 가장 먼저 노려야 할 시장입니다.
    *   *해당 워크플로우:* 비전 AI 기반 안전 모니터링, 2D 도면 자동 견적 산출(Takeoffs), 360도 카메라/드론 진척도 기록, 사전 도면 검토 AI.
    *   *전략:* 바텀업(Bottom-up) 방식. 현장 소장이나 공무팀장에게 1개월 내 PoC(개념 검증)로 결과를 보여주어 예산을 확보합니다.
*   **1사분면 (우상단) - 전략적 투자 (High ROI / High Friction):** 장기적인 경쟁력 강화를 위해 필수적이나 도입에 전사적 노력이 필요한 영역입니다.
    *   *해당 워크플로우:* 제너레이티브 스케줄링(공정 최적화), BIM 기반 품질/하자 검측, 통합 ERP/EAM 기반 현장 자원 자동 할당.
    *   *전략:* 톱다운(Top-down) 방식의 C-레벨 결단과 컨설팅이 결합된 형태의 진입이 필요합니다.
*   **3사분면 (좌하단) - 유틸리티 (Low ROI / Low Friction):** 큰 비용 절감은 없지만 실무자의 소소한 불편을 개선합니다.
    *   *해당 워크플로우:* AI 실시간 통번역 에이전트(외국인 근로자용), 계약서 요약 챗봇, 단순 OCR 준공 서류 철.
    *   *전략:* 기존 소프트웨어의 애드온(Add-on) 플러그인이나 저렴한 SaaS 구독 모델로 판매.
*   **4사분면 (우하단) - 보류/연구 (Low ROI / High Friction):** 현 단계에서는 투자 대비 효용이 떨어지거나 현장 저항이 극심한 영역입니다.
    *   *해당 워크플로우:* 완전 자율주행 건설 중장비(직접 시공 로봇).

결과적으로, 초기 자원이 부족한 소규모 AX 스타트업은 철저하게 **2사분면(퀵 윈)** 영역의 '가벼운 도구'로 현장에 침투한 뒤, 점진적으로 1사분면의 '통합 플랫폼'으로 진화하는 랜드앤익스팬드(Land and Expand) 전략을 구사해야 합니다.

---

## 4. 구조적 리스크 점검: 한국 시장의 노조 반발 및 개인정보보호법(PIPA) 이슈

건설 현장에서의 AX, 특히 AI CCTV 및 컴퓨터 비전을 활용한 근로자 모니터링 시스템을 도입할 때 한국 시장에서 가장 큰 허들은 기술력이 아닌 **제도적/사회적 저항**입니다. 이를 간과한 채 투자를 집행하거나 영업을 시도하면 반드시 실패합니다.

*   **노동조합의 반발 (Surveillance & Job Security):** 최근 현대차 등 제조 현장뿐만 아니라 건설 현장에서도 타워크레인 원격 조종기, 외벽 도장 로봇 등 무인화 장비와 감시 목적의 AI CCTV 도입에 대해 건설노조의 강한 반대가 이어지고 있습니다. 노조는 이를 '안전을 빙자한 과도한 노동 감시'로 규정하며, '노란봉투법' 시행 이후 신기술 도입에 따른 근로 조건 변화가 쟁의 대상에 포함되어 사측의 부담이 가중되었습니다. 
*   **개인정보보호법 (PIPA) 제약:** 직원 등 자격을 갖춘 사람만 출입하는 비공개 작업장의 경우 개인정보보호법의 엄격한 적용을 받습니다. 근로자의 명시적 동의 없이 CCTV 영상을 수집하는 것은 원칙적으로 불법입니다. 단, 법률상 의무를 준수하기 위해 불가피한 경우(중대재해처벌법 등)나 시설 안전이라는 정당한 이익이 정보 주체의 권리보다 우선할 경우 예외적으로 인정될 여지가 있으나, 분쟁의 소지가 매우 큽니다.
*   **AX 스타트업의 우회 전략 (기술적 해결책):**
    1.  **비식별화 및 마스킹:** 지능형 시스템은 인물 얼굴을 블러 처리하거나, 근로자를 단순한 '객체(점이나 실루엣)'로 인식하도록 알고리즘을 설계하여 인권 침해 소지를 차단해야 합니다.
    2.  **데이터 즉시 폐기 및 로컬 엣지 처리:** 중앙 서버로 영상을 전송하지 않고 카메라 단말기(Edge)에서 연산 후 위험 상황의 '경고 텍스트/알람' 지표만 전송하고 원본 영상은 즉시 폐기하는 구조를 취해야 합니다.
    3.  **포지셔닝:** 경영진 감시 도구가 아닌, 근로자의 생명을 지켜주는 '방패'로 포지셔닝해야 합니다. 실제로 현장 작업자들은 자신이 사고를 당했을 때 이를 증명하고 즉각 구호를 받을 수 있다는 측면에서 안전 장비 착용 여부 실시간 알림을 선호하는 경향도 관찰됩니다.

---

## 5. 건설 가치사슬 11대 상세 워크플로우 분석 (Workflow Cards)

투자자와 건설 경영진이 구체적인 도입 타당성을 논의할 수 있도록 모든 가치사슬 워크플로우를 완벽히 동일한 구조로 심층 해체합니다. 각 솔루션이 해결하는 페인포인트부터, 실재하는 솔루션의 스펙(가격 및 안티-유즈 케이스 포함), 구체적인 KPI, 위험 요소까지 망라합니다.

### 5.1. 토지 매입 및 사업 타당성 검토 (Land Acquisition & Feasibility)
*   **Workflow:** 타당성 조사, 프롭테크 데이터 수집, 상권/입지 분석.
*   **Pain (문제점):** 파편화된 부동산 규제, 지형 데이터, 시장 수요 예측의 어려움으로 타당성 검토에 수 주가 소요되며 인적 직관에 크게 의존함.
*   **Buyer (예산권자):** 시행사(Developer) 대표, 건설사 개발사업본부장.
*   **Solution Archetype (솔루션 아키타입):** 컨설팅 / 프로세스 자동화, 프롭테크 데이터 분석 알고리즘.
*   **Example Products/Cases (사례 및 제품 스펙):** 한국프롭테크포럼 소속 부동산 AI 스타트업들의 입지 및 포트폴리오 전략 수립 솔루션.
    *   *Pricing Model:* 연간 데이터 구독형 SaaS 또는 건당 컨설팅 수수료.
    *   *Anti-Use Case:* 소규모 개인 단독 주택 신축이나 단순 인테리어 사업에는 데이터 구매 비용 대비 효용이 낮음.
*   **Target KPI (핵심 성과 지표):** 부지 검토 소요 시간(Time-to-decision) 단축, 초기 분양률 예측 오차율 감소.
*   **Implementation Timeline (구현 소요 기간):** API 연동 및 데이터 세팅에 1~2주 소요.
*   **ROI Logic (투자 대비 수익 논리):** 수십억 원이 오가는 부지 매입 단계에서 상권/수요 예측 오류로 인한 좌초 자산(Stranded Asset) 리스크를 초기 단계에 예방.
*   **Data/Integration (필요 데이터 및 통합):** 지적도, 토지이용계획확인원, 도시계획 조례, 상권/유동인구 데이터. 공공 API 크롤링 선행 필수.
*   **Korean GTM Angle (한국 시장 진입 전략):** 부동산 PF(프로젝트 파이낸싱) 부실 우려가 큰 현재 한국 경제 상황에서, 금융권과 연계하여 객관적이고 철저한 '사업성 검증 방어 도구'로 포지셔닝.
*   **Risk (위험 요인):** 공공 데이터의 질(Garbage In, Garbage Out)에 크게 의존하며, 대관 업무 등 인간의 직관적 영업력이 중시되는 분야라 AI 산출물에 대한 전적인 신뢰도가 아직 낮음.

### 5.2. 설계 및 엔지니어링 (Design & Engineering)
*   **Workflow:** 3D 렌더링, 제너레이티브 디자인, 시각화.
*   **Pain (문제점):** 고객과의 커뮤니케이션 과정에서 2D 평면도만으로는 최종 공간을 직관적으로 이해시키기 어려우며, 외부 V-Ray 등 고품질 3D 렌더링 작업에는 막대한 외주 비용과 대기 시간이 소모됨.
*   **Buyer (예산권자):** 설계사무소 대표, 대형 건설사 설계팀장.
*   **Solution Archetype (솔루션 아키타입):** 생성형 AI (Generative AI) / AI 렌더링 에이전트.
*   **Example Products/Cases (사례 및 제품 스펙):** Rendair AI. 2D 스케치나 평면도를 업로드하면 복잡한 모델링 없이 사실적인 렌더링 이미지 생성.
    *   *Pricing Model:* Student 요금제 월 $9.5, AI Creator 월 $19, Pro 요금제 월 $49(1,500 크레딧/사적 모드 지원), Team Pro 요금제 월 $200.
    *   *Anti-Use Case:* 정밀한 물리 기반(Physics-based) 빛/그림자 분석이 필요한 고사양 렌더링이나 BIM(Revit 등)과 직접적인 쌍방향 통합이 필수적인 대규모 복합 시설 설계.
*   **Target KPI (핵심 성과 지표):** 렌더링 이미지 장당 산출 소요 시간(수 일 -> 수 분), 외주 용역 비용 절감액.
*   **Implementation Timeline (구현 소요 기간):** 웹 기반 SaaS로 가입 즉시 사용 가능(0일).
*   **ROI Logic (투자 대비 수익 논리):** 렌더링 외주 비용 절감, 고객 커뮤니케이션 속도 증가에 따른 수주율(Pre-sales) 향상.
*   **Data/Integration (필요 데이터 및 통합):** 2D CAD 평면도, 스케치 이미지, PDF 입면도. 특별한 레거시 연동 없이 Stand-alone으로 구동 가능.
*   **Korean GTM Angle (한국 시장 진입 전략):** 소규모 주택 건축주나 리모델링 고객을 상대하는 중소형 건축사무소/인테리어 시공사를 타깃으로 한 저비용-고효율 시각화 도구로 세일즈.
*   **Risk (위험 요인):** 디자인 지식재산권(IP) 논란 및 실제 시공이 불가능한 구조적 '환각(Hallucination)' 형태가 도출될 가능성.

### 5.3. 견적 및 물량 산출 (Estimating & Takeoffs)
*   **Workflow:** 2D 도면 기반의 자동 면적 측정 및 물량 산출(Takeoffs).
*   **Pain (문제점):** 견적 직원이 수백 장의 2D PDF 도면을 보며 마우스로 일일이 클릭해 벽체 길이, 바닥 면적, 자재 수량을 산출하는 막대한 중노동과 휴먼 에러 발생.
*   **Buyer (예산권자):** 견적팀장(Chief Estimator), 공무팀장.
*   **Solution Archetype (솔루션 아키타입):** 컴퓨터 비전 / 패턴 인식 알고리즘.
*   **Example Products/Cases (사례 및 제품 스펙):** Togal.AI. 딥러닝 기반으로 도면의 공간/벽체를 최대 98% 정확도로 자동 인식. 미국 Coastal Construction은 이를 통해 약 100만 달러 비용 절감.
    *   *Pricing Model:* Growth 플랜 월 $299 (유저당, 무제한 산출), 엔터프라이즈 맞춤형 요금제.
    *   *Anti-Use Case:* 2D 도면을 거치지 않고 순수 100% 3D BIM 데이터만으로 견적을 뽑는 극소수의 턴키 전위 프로젝트.
*   **Target KPI (핵심 성과 지표):** 도면 당 적산(산출) 소요 시간(기존 대비 5배 단축), 견적 정확도(98% 도달률).
*   **Implementation Timeline (구현 소요 기간):** SaaS 계정 발급 후 교육 포함 1~3일 이내.
*   **ROI Logic (투자 대비 수익 논리):** 수일이 걸리던 산출 작업을 수 분~수 시간으로 단축. 확보된 시간만큼 더 많은 입찰에 참여하여 매출 증대 창출 (연간 20시간 작업 단축 시 구독료 회수 가능).
*   **Data/Integration (필요 데이터 및 통합):** PDF, JPEG 등 표준 도면 파일 업로드. 기존 엑셀 양식으로의 Data Export 기능 통합 필요.
*   **Korean GTM Angle (한국 시장 진입 전략):** 한국 특유의 '적산 전문 외주 하도급' 업체들의 1인당 생산성을 극대화하는 도구로 팔거나, 원청 건설사의 하도급 적산 결과 '크로스체크(검증)' 도구로 어필.
*   **Risk (위험 요인):** 한국식 도면 기호와 한글 약어에 대한 로컬라이징(현지화) 학습이 필수적 진입 장벽임.

### 5.4. 입찰, 계약 및 조달 (Bidding & Procurement)
*   **Workflow:** 입찰 서류 분석, 계약서 독소 조항 검토, 설계 도면 선제 검토.
*   **Pain (문제점):** 수백 페이지에 달하는 방대한 계약서 내 독소 조항 파악 누락, 입찰 도면 내의 수많은 설계 오류를 착공 전에 걸러내지 못해 발생하는 잦은 설계 변경(RFI)과 공사 지연.
*   **Buyer (예산권자):** 법무팀, 구매/조달팀, 시공 전(Pre-con) 담당자.
*   **Solution Archetype (솔루션 아키타입):** AI 코파일럿 / 자연어 처리(NLP) / 도면 비전 AI.
*   **Example Products/Cases (사례 및 제품 스펙):** InspectMind AI (시공 전 PDF 도면을 AI로 스캔하여 잠재적 설계 결함/오류 사전 적발), Document Crunch (계약서 독소 조항 분석).
    *   *Pricing Model:* InspectMind의 경우 리뷰 1건당 $100부터 시작하는 셀프 서브 모델.
    *   *Anti-Use Case:* 매우 정형화되고 수정 불가능한 표준 국가 계약서만을 다루는 영세 업체, 또는 착공이 이미 완전히 완료된 후반부 공정.
*   **Target KPI (핵심 성과 지표):** 착공 전 도면 오류 적발 건수(수백~수천 건의 잠재적 RFI 예방), 계약서 리뷰 리드타임 단축.
*   **Implementation Timeline (구현 소요 기간):** SaaS 기반으로 업로드 후 수 시간 내 결과 산출.
*   **ROI Logic (투자 대비 수익 논리):** 변호사 검토 시간 수십 시간 절감 및 착공 전 오류 적발로 수천만 원 규모의 재작업(Rework) 및 자재 과발주 예방.
*   **Data/Integration (필요 데이터 및 통합):** 과거 입찰 내역, PDF 계약 문서, PDF 도면 세트.
*   **Korean GTM Angle (한국 시장 진입 전략):** 원자재 가격 에스컬레이션(물가 변동) 조항을 둘러싼 원청과 하도급 간의 극심한 분쟁 리스크를 줄이기 위한 '공정 계약 스캐너'로 접근.
*   **Risk (위험 요인):** 복잡한 한국 건설 법규와 판례 데이터를 충분히 학습하지 못한 LLM은 잘못된 법적 가이드를 줄 위험이 있음.

### 5.5. 공정 관리 및 스케줄링 (Project Scheduling)
*   **Workflow:** 인력, 자재, 장비를 고려한 프로젝트 스케줄 생성 및 지연 시나리오 재계산.
*   **Pain (문제점):** 정적인 간트(Gantt) 차트에 의존하여, 특정 공종 지연이나 악천후 발생 시 전체 공정에 미치는 파급 효과를 실시간으로 재계산하거나 대안을 찾지 못함.
*   **Buyer (예산권자):** 현장 소장, 프로젝트 디렉터, 본사 공사관리팀.
*   **Solution Archetype (솔루션 아키타입):** 최적화 알고리즘 / 제너레이티브 AI 시뮬레이션.
*   **Example Products/Cases (사례 및 제품 스펙):** ALICE Technologies. 제약 조건을 기반으로 수백만 개의 잠재적 스케줄을 시뮬레이션하여 최적 경로 도출.
    *   *Pricing Model:* 프로젝트 규모 기반 맞춤형 연간 구독(사용자 수 무제한).
    *   *Anti-Use Case:* 500억 원(약 $50M) 미만의 소규모 상업/주거 시설이나 영세 하도급 업체의 국소 공정. 대규모 산업/인프라/EPC 원청사에 적합.
*   **Target KPI (핵심 성과 지표):** 공기(프로젝트 소요 기간) 단축률 (최대 17%), 노무비 절감률 (최대 14%), 장비대 절감률 (최대 12%).
*   **Implementation Timeline (구현 소요 기간):** 마스터 스케줄 및 제약 조건 데이터 매핑에 1~3개월 소요.
*   **ROI Logic (투자 대비 수익 논리):** 대규모 공기 지연으로 인한 막대한 지체상금(LD) 방어 및 직접 노무/장비비용 효율화.
*   **Data/Integration (필요 데이터 및 통합):** Oracle Primavera P6 또는 MS Project 스케줄 데이터, 인력/장비 단위 시간당 단가 및 수량 데이터.
*   **Korean GTM Angle (한국 시장 진입 전략):** 대형 건설사의 해외 메가 프로젝트(중동 플랜트 등)를 1차 타깃으로 삼아야 함.
*   **Risk (위험 요인):** 한국 특유의 <strong>‘다단계 하도급 구조’</strong>로 인해 원청(GC)이 매일 투입되는 상세 인원 및 자원 데이터를 정밀하게 통제하거나 파악하지 못해, AI 시뮬레이션에 필요한 입력 데이터 확보가 사실상 불가능하다는 치명적인 마찰이 존재함.

### 5.6. 현장 진척도 관리 (Site Progress & Documentation)
*   **Workflow:** 현장 시공 상태 기록, 도면 비교, As-built 문서화.
*   **Pain (문제점):** 현장 기사가 도면을 들고 다니며 사진을 찍고 수동으로 폴더에 분류하는 데 매주 막대한 시간 소모. 분쟁 시 특정 시점의 시공 상태 증거를 찾기 어려움.
*   **Buyer (예산권자):** 현장 소장, 공무/공사팀장.
*   **Solution Archetype (솔루션 아키타입):** 컴퓨터 비전 / 360도 공간 매핑 / 디지털 트윈.
*   **Example Products/Cases (사례 및 제품 스펙):** OpenSpace (오픈스페이스). 작업자가 안전모에 360 카메라를 달고 걸으면 AI가 동영상을 도면 및 BIM에 자동 위치 매핑.
    *   *Pricing Model:* 프로젝트 연간 공사 규모(Volume)에 비례한 Core/Enterprise 연간 구독 (가상 투어 및 캡처 무제한).
    *   *Anti-Use Case:* 평면 구조가 너무 단순하거나 육안으로 한눈에 파악되는 소형 단독주택 현장.
*   **Target KPI (핵심 성과 지표):** 현장 기록 및 문서화 소요 시간 단축(15%~95%), 본사 출장(Travel) 빈도 및 비용 감소.
*   **Implementation Timeline (구현 소요 기간):** 초기 셋업 및 도면 캘리브레이션에 1주 이내. 영상 업로드 후 평균 15분 내 처리 완료.
*   **ROI Logic (투자 대비 수익 논리):** 관리 직원의 불필요한 현장 순찰 및 사진 정리 시간 절감, 시각적 증거(타임머신 기능) 확보를 통한 분쟁 책임 소재 명확화 및 재작업 억제.
*   **Data/Integration (필요 데이터 및 통합):** 시중 360도 카메라 영상, 드론 데이터, BIM(Revit/Navisworks) 모델.
*   **Korean GTM Angle (한국 시장 진입 전략):** 주 52시간제 안착으로 인한 현장 관리 인력의 시간 부족을 보완하는 생산성 도구이자, 원격지에 있는 본사 임원들의 투명한 '현장 장악력'을 높여주는 도구로 어필.
*   **Risk (위험 요인):** 지하 등 통신/GPS 음영 지역에서의 정확한 매핑 오차율 관리.

### 5.7. 안전 관리 (Safety Monitoring) ★한국 시장 최우선 영역
*   **Workflow:** 현장 위험 구역 통제, 보호구 착용 감지, 중장비 충돌 방지 모니터링.
*   **Pain (문제점):** 중대재해처벌법 시행으로 단 1건의 인명 사고가 경영진 형사 처벌 및 전사 영업 정지로 직결되나, 수백 명의 근로자를 소수 안전관리자가 통제 불가.
*   **Buyer (예산권자):** 최고안전보건책임자(CSO), 현장 소장.
*   **Solution Archetype (솔루션 아키타입):** 비전 AI / 머신 러닝 / 엣지 컴퓨팅.
*   **Example Products/Cases (사례 및 제품 스펙):** 인텔리빅스 (지게차 충돌, 속도 감지), 알체라 (추락 징후 및 보호구 미착용 24시간 실시간 감지), 세이지리서치.
    *   *Pricing Model:* 카메라 대당 연동 수수료(SaaS) + 엣지 AI 하드웨어 장비 렌탈 혼합 모델. 정부의 중소사업장 스마트 안전장비 보조금 적용 가능.
    *   *Anti-Use Case:* 전력이나 기본적인 CCTV 케이블 인프라조차 확보되지 않은 완전 초기 토공사 현장.
*   **Target KPI (핵심 성과 지표):** 근로자 보호구 미착용 적발 및 조치 건수, 중장비 충돌 아차사고(Near-miss) 발생 빈도율.
*   **Implementation Timeline (구현 소요 기간):** 기존 CCTV 라인에 엣지 박스 연결 시 1~2주 내 구동.
*   **ROI Logic (투자 대비 수익 논리):** 사고 발생율을 혁신적으로 낮춰 막대한 산업 재해 비용 및 경영진 처벌에 따른 천문학적 리스크 비용을 보험처럼 사전 억제. 입찰 시 스마트안전 가점 및 재해공제료 할인.
*   **Data/Integration (필요 데이터 및 통합):** 현장 설치 CCTV 스트리밍 영상, 중장비 센서 데이터.
*   **Korean GTM Angle (한국 시장 진입 전략):** 공공 및 대형 민간 공사에서 사실상 필수화된 규제 수요 흡수. 외국인 근로자를 위한 AI 다국어 경보/통번역 시스템 동반 도입 시 매우 효과적.
*   **Risk (위험 요인):** 극심한 노조 반발 및 개인정보보호법 충돌 리스크. (얼굴 비식별화 기술 필수). 과도한 '거짓 오람(False Alarm)'으로 인한 현장 피로도 증가.

### 5.8. 품질 관리 (Quality Control)
*   **Workflow:** 시공 오차 감지, 철근 배근 간격 검사, 하자 누락 확인.
*   **Pain (문제점):** 철근 누락 등 치명적 시공 오류가 콘크리트 타설 등 후속 공정 이후에 뒤늦게 발견되면 이를 파쇄하고 다시 짓는 막대한 재작업(Rework) 비용 발생.
*   **Buyer (예산권자):** 품질관리팀장, 현장 소장.
*   **Solution Archetype (솔루션 아키타입):** 3D 비전 AI / 디지털 트윈 정합 모델.
*   **Example Products/Cases (사례 및 제품 스펙):** Buildots. 360 카메라로 찍은 실측 공간과 원본 BIM 데이터를 밀리미터 단위로 오버레이 비교하여 누락 검출.
    *   *Pricing Model:* 총 공사비 비율 기준 계약 또는 현장당 정액 라이선스.
    *   *Anti-Use Case:* BIM(3D 설계) 기반으로 시공되지 않고 2D 도면으로만 진행되는 전통적 현장.
*   **Target KPI (핵심 성과 지표):** 시공 오차율(BIM Deviation %), 재작업 소요 비용 감소액.
*   **Implementation Timeline (구현 소요 기간):** BIM 데이터 정합 및 로직 설정에 1~2개월 소요.
*   **ROI Logic (투자 대비 수익 논리):** 치명적인 하자를 선제적으로 발견하여 재작업 비용 극감 및 준공 후 입주자 집단 클레임 예방.
*   **Data/Integration (필요 데이터 및 통합):** 초고해상도 영상 데이터, 클라우드 기반 BIM 플랫폼과의 양방향 동기화.
*   **Korean GTM Angle (한국 시장 진입 전략):** 최근 잇따른 '순살 아파트(철근 누락)' 사태로 추락한 대형 건설사의 아파트 브랜드 신뢰도를 복구하기 위한 마케팅 및 품질 보증 도구로 제안.
*   **Risk (위험 요인):** 현장에 완벽하게 업데이트된 최종 BIM(As-built BIM)이 존재하지 않으면 AI가 정상 시공을 '오류'로 잘못 판별하는 한계.

### 5.9. 클레임 및 설계 변경 관리 (Claims & Change Orders)
*   **Workflow:** RFI(설계 질의서) 추적, 도면 변경 이력 검색, 책임 소명 증빙.
*   **Pain (문제점):** 현장 상황으로 수시로 설계가 변경되나, 이력 관리가 이메일이나 카카오톡 등으로 파편화되어 있어 훗날 하도급 정산 소송 발생 시 책임 소명을 입증하기 매우 어려움.
*   **Buyer (예산권자):** 공사/공무팀, 법무팀.
*   **Solution Archetype (솔루션 아키타입):** AI 지식 검색 에이전트(RAG) / 자연어 처리 챗봇.
*   **Example Products/Cases (사례 및 제품 스펙):** Procore Copilot 등. "B구역 기둥 철근 굵기 변경 지시 이력 찾아줘" 등 방대한 이력 대화형 탐색.
    *   *Pricing Model:* 모 플랫폼(Procore 등)의 추가 Add-on 구독료 기반.
    *   *Anti-Use Case:* 전사적 자원 관리(ERP)나 문서 관리 시스템(EDMS)이 전무하여 문서를 수기로만 결재하는 조직.
*   **Target KPI (핵심 성과 지표):** RFI 답변 리드타임 단축률, 과거 이력 검색 시간(시간 단위에서 분 단위로 단축).
*   **Implementation Timeline (구현 소요 기간):** 사내 지식 베이스(DB) 데이터 학습에 1~3개월.
*   **ROI Logic (투자 대비 수익 논리):** 설계 변경 합의 지연에 따른 공사 중단(Downtime) 예방 및 하도급 소송/클레임 시 유리한 입증 자료 확보로 손해 배상액 방어.
*   **Data/Integration (필요 데이터 및 통합):** 사내 인트라넷, 이메일 아카이브, 기존 프로젝트 관리 플랫폼과의 API 연동 및 데이터 토큰화.
*   **Korean GTM Angle (한국 시장 진입 전략):** 수십 년치 서버에 쌓인 활용 불가능한 시방서와 과거 도면을 검색 가능하게 만들어주는 '엔터프라이즈 RAG 구축 사업'으로 세일즈.
*   **Risk (위험 요인):** 데이터 보안 이슈(권한이 없는 하위 직급자가 임원급 기밀 정보에 AI로 접근하는 문제).

### 5.10. 준공 및 인수인계 (Handover & Commissioning)
*   **Workflow:** 준공 도면(As-built) 자동 생성, 자재 보증서 및 시공 기록물 취합 분류.
*   **Pain (문제점):** 수년간 쌓인 수천 장의 사진, 납품 증명서, 시험 성적서, 수정된 도면들을 수작업으로 취합하여 발주처에 제출 가능한 형태로 분류하는 데 막대한 행정력 소모.
*   **Buyer (예산권자):** 현장 소장, 품질/공무 관리자, 건축주(Owner).
*   **Solution Archetype (솔루션 아키타입):** 광학문자인식(OCR) / 프로세스 자동화 / 분류 알고리즘.
*   **Example Products/Cases (사례 및 제품 스펙):** 건설 특화 AI 문서 자동 분류 솔루션. 스캔된 종이 송장이나 성적서를 읽어 자재 품목, 날짜별로 자동 메타태깅.
    *   *Pricing Model:* 연간 처리 문서 용량(GB) 또는 건수(Token) 기반 종량제 과금.
    *   *Anti-Use Case:* 처음부터 끝까지 100% 디지털 트윈 플랫폼 내에서만 작업이 이루어져 수집할 오프라인 문서가 없는 현장.
*   **Target KPI (핵심 성과 지표):** 준공 서류 취합 및 편철 작업 인시(Man-hour) 단축률, 제출 지연으로 인한 페널티 발생 건수.
*   **Implementation Timeline (구현 소요 기간):** 표준 양식 학습 및 구축에 2~4주.
*   **ROI Logic (투자 대비 수익 논리):** 공사 막바지에 서류 작업에 투입되는 행정 보조 인건비 절감 및 준공 승인 단축을 통한 조기 자금 회수.
*   **Data/Integration (필요 데이터 및 통합):** 혼재된 PDF, 이미지 형태의 납품서, 시험성적서. 발주처(정부기관 등) 제출 포맷으로의 출력 연동.
*   **Korean GTM Angle (한국 시장 진입 전략):** 세움터(한국 건축행정시스템) 제출 표준 양식에 최적화된 로컬라이징 솔루션으로 제공하여 실무자의 압도적인 지지 획득.
*   **Risk (위험 요인):** 흐릿하게 복사된 송장이나 수기 서명의 경우 OCR 인식 오류(가독성 한계) 발생 가능성.

### 5.11. 시설 운영 및 예지 보전 (Facility Operations & O&M)
*   **Workflow:** 입주 후 에너지 효율 관리, HVAC(냉난방) 제어, 설비 고장 사전 예측.
*   **Pain (문제점):** 건물의 노후화로 인한 에너지 낭비가 심각하며, 펌프나 엘리베이터 고장 시 사후 수리로 대응하여 입주자의 불만이 폭증함.
*   **Buyer (예산권자):** 부동산 자산운용사, 자산관리(PM) 및 시설관리(FM) 전문 기업.
*   **Solution Archetype (솔루션 아키타입):** 사물인터넷(IoT) 시계열 데이터 분석 / 디지털 트윈.
*   **Example Products/Cases (사례 및 제품 스펙):** IFS Cloud EAM, 스마트 빌딩 솔루션 등. 거주자 패턴 및 기상 정보를 학습해 공조기를 자율 조절하고 이상 진동을 감지해 고장 전 수리 지시.
    *   *Pricing Model:* 관리 면적(sqft) 비례 혹은 설비 대수 비례 엔터프라이즈 SaaS 구독.
    *   *Anti-Use Case:* 중앙 제어식 공조 장치나 기본 센서 네트워크(BMS)가 없는 노후화된 중소형 상가 건물.
*   **Target KPI (핵심 성과 지표):** 에너지 소비량 절감률(%), 예기치 않은 설비 가동 중단(Downtime) 시간 감소.
*   **Implementation Timeline (구현 소요 기간):** IoT 센서 망 구축 및 머신러닝 베이스라인 확보에 3~6개월.
*   **ROI Logic (투자 대비 수익 논리):** 전력 및 가스 요금 등 지속적인 O&M 직접 비용 감축(친환경 탄소 규제 대응 포함) 및 자산 가치 유지.
*   **Data/Integration (필요 데이터 및 통합):** IoT 센서(온/습도, 진동) 실시간 스트림 데이터, 과거 유지보수 정비 이력 데이터.
*   **Korean GTM Angle (한국 시장 진입 전략):** ESG 경영이 화두인 대기업 보유 사옥이나, 전기료 인상에 민감한 대형 상업용 데이터센터/물류센터를 타깃으로 한 에너지 감축 솔루션으로 포지셔닝.
*   **Risk (위험 요인):** 초기 센서 설치 및 네트워크 공사(하드웨어) 비용이 수반되어 초기 투자비 회수(Payback) 기간이 긴 편임.

---

## 6. 최우선 추천 진입 쐐기(Top 7 Recommended Wedges)와 한국 시장 Why-Now 논리

초기 자원이 제한적인 AX 스타트업이 한국 건설 시장에 진입할 때 즉시 추진해야 할 <strong>‘7대 우선 진입 쐐기’</strong>입니다. 이들은 도입 마찰이 적고, 구매 명분이 확실하며, 기술 검증이 빠른 아이템들입니다.

1.  **중대재해 방지 비전 AI (Edge Vision AI) ★최우선:** 
    *   **Why-now:** 2024년 50인 미만 사업장까지 중대재해처벌법이 확대되며 9조 원 시장 개화.
    *   **접근 논리:** 고가 서버망 없이 엣지 박스로 현장 CCTV 화상 내 위험 요소(안전모 미착용, 장비 접근)를 적발. 얼굴 마스킹 기술로 노조 이슈를 우회하며 생명 보호 장치로 설득 가능.
2.  **외국인 근로자 소통 통번역 에이전트:**
    *   **Why-now:** 인구 고령화로 한국 건설 현장의 절반가량이 다국적 외국인 노동자로 채워지며 소통 오류로 인한 시공 사고 급증.
    *   **접근 논리:** 스마트폰만으로 구동되며 건설 은어를 학습한 특화 번역기. 안전 관리 예산으로 집행 가능.
3.  **2D 기반 자동 물량 산출 솔루션 (Computer Vision):**
    *   **Why-now:** 자재비 폭등 시대, 단 1%의 입찰 단가 오류도 영세 하도급 업체의 파산으로 직결.
    *   **접근 논리:** 시스템 연동 없이 웹에서 즉시 사용 가능(Togal.AI 모델). 실무자의 야근을 즉각적으로 줄여주어 바텀업 세일즈(Bottom-up sales)의 교과서.
4.  **360 카메라 기반 진척도 추적 (Digital Twin):**
    *   **Why-now:** 주 52시간 근무제로 현장 관리자의 순찰 여력이 부족하고 분쟁 증가.
    *   **접근 논리:** 안전모 위에 카메라를 달고 걷기만 하는 플러그앤플레이(Plug-and-play) 방식(OpenSpace 모델). 직관적 시각화로 본사 C-레벨에게 보여주기 가장 좋은 혁신 PR 아이템.
5.  **사전 도면 검토 AI (Pre-con AI Review):**
    *   **Why-now:** 착공 후 RFI 발생으로 인한 재작업 지출 감당이 불가능한 원가 압박 환경.
    *   **접근 논리:** InspectMind처럼 도면 업로드 1건당 과금하여 수천 개의 오차를 착공 전 즉각 집어내는 자가 진단형(Self-serve) 솔루션.
6.  **AI 교육 및 노코드(No-code) 컨설팅 (Service Wedge):**
    *   **Why-now:** 경영진은 AI를 원하지만, 실무진은 역량이 부족하여 실제 도입률(5%)이 바닥임.
    *   **접근 논리:** 무거운 소프트웨어를 팔기 전에, 비개발자 공무 직원이 챗GPT를 활용해 데이터를 엑셀로 뽑는 법 등을 교육하며 자사의 솔루션 필요성을 세뇌(Inbound)시키는 쐐기.
7.  **과거 도면/계약서 RAG 지식 검색기:**
    *   **Why-now:** 하도급/원자재 비용 증가로 클레임 소송이 늘어나 증빙 자료가 절실함.
    *   **접근 논리:** 법무팀, 공사팀의 단순 검색 시간을 파격적으로 줄여주어 ROI를 즉시 계량 가능.

---

## 7. 결론 및 AX 로드맵 우선순위 제안 (Prioritized Wedge Roadmap)

앞서 분석한 내용을 바탕으로, 스타트업과 투자자는 다음과 같은 '3단계 로드맵'을 통해 랜드앤익스팬드(Land and Expand) 전략을 구사해야 합니다.

<figure className="doc-figure">
  <img src={require('./assets/visualizations/construction-workflow-roadmap.png').default} alt="Construction AX Implementation Roadmap" />
  <figcaption><strong>Construction AX Implementation Roadmap</strong> — 현장 가시화에서 예측 분석, 생성형 최적화까지 이어지는 건설 AX 단계별 실행 로드맵입니다.</figcaption>
</figure>

*   **Phase 1 (1~12개월): 현장의 가시적 통제 (See the Field)**
    *   **전략 목표:** 법적 책임 보호 및 실무자의 명확한 시간 절감 체감.
    *   **실행 과제:** 비전 AI 기반 안전망, 360 카메라 현장 기록, 2D 자동 견적 도입.
*   **Phase 2 (1~3년): 능동적 리스크 예측 (Predict the Risk)**
    *   **전략 목표:** 데이터 융합을 통한 비용 출혈 원천 차단.
    *   **실행 과제:** InspectMind를 활용한 사전 도면 오류 감지, Buildots 류의 BIM 시공 오차 실시간 검측, 자재/원가 변동 데이터 예측.
*   **Phase 3 (3년 이상): 최적화 및 자율 제어 (Optimize & Control)**
    *   **전략 목표:** 전사적 프로젝트 지휘 및 장비 자율화.
    *   **실행 과제:** 제너레이티브 공정 스케줄링(ALICE) 도입, 무인 자율주행 건설 중장비 연동.

초기 시장 진입은 한국 건설업 특유의 다단계 하도급 구조와 노조 저항이라는 독특한 장벽을 고려할 때, 소프트웨어의 우수성보다 **'현장 작업자의 불편함을 건드리지 않으면서 책임을 분산시켜 주는(CYA, Cover Your Assets)' 속성**에 좌우됩니다. '로봇이 다 지어주는 미래'가 아니라 '견적 직원의 야근 10시간을 줄여주는 AI 마우스'에서 진정한 건설 AX 혁신이 시작됨을 유념해야 합니다.


<div className="source-inline"><span className="source-label">출처</span><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHagj8kGyA87n8OQ7S0diI68fHt5_kq4o_3En1mVwcfQi0g2TL4kN-Z8DuEB9Yz6FqwsbznXkfbHgLFfalJLyGkRIf5ArCC4zBQc48RPWqfssyHiyjcwGJutStESmv9UxGEv9HbGBKq6oh98IR2UFmB_uM9AdO9Z3bW9ju73DnWKP8=" target="_blank" rel="noreferrer">1. netsuite.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFe3G1cQYxulrBieMCKQoBC-t3TVgghjFKXr7mRKd3A46t6XtQyP0mulOUQdpelJ7PZ3XJO0eLNkB6ON4azmhD2XutNtsSYxv_-hgvHRpwXXRcadQz52mjY0W2MJB7fvRxc8F3DH8EkMA==" target="_blank" rel="noreferrer">2. smartdev.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGPfIjHop_efE4-NWRWftHn5MBoFGBM9BrZzq7WOWZRu_WTBKAdOWDYD8QD_Db21cNlBwjVkz6SciQHk2TSRYAatFe-UaoUNKrgnbjmlUHoMw5lKuApM-J1T4O_3NboVCnVelfbpZ1h4AFASJL9NkXoviY72nU=" target="_blank" rel="noreferrer">3. electimes.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE2jwzk1kHozvCh0TxXkF5a3t7iXBykrIwB0J1mtnTGk9dqVsU7wCCZab0dtYJqf8u36gF6K6dIk_3KN3YaK34VCvRLx2Ds8zWV-AcSjQtDgZCwg6HPHJoF" target="_blank" rel="noreferrer">4. tistory.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdhthB_1esJR7Ta4xOrrg8wocKq6YDukOgSFp9KIoQ_cYh7KSzgMK1c4dn1yhg6I2bVGJtDN4RNt2moV0HXJVcLPfX71X2dRTcTDLmqSTfpgt6WpnPI0RzvOrxD3XjOdbZ_ZLRDInCdV3VH9TOHKEqHw==" target="_blank" rel="noreferrer">5. saige.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVcHs9R7s59CPfRi7L7qqQKYwOhvkNoMPGP8adoaw1c7IfRghHWGQ3GsYzfeRYrVH-Pw__9RKa5oSQncTUiIv2O6FOemvc9hgRmtdcCIS1gOEz2x0pMvQdyWuTjQ==" target="_blank" rel="noreferrer">6. daum.net</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErthKbxTHFuI1tJMDbHaY_UAVmJU7ZPr9LKRB4h9qC_raHrYYtEAHz2vSd5TFg_A23ZewQEVi_uaglOOoaVckCynMKlOwjM-pHPkNLn9htyjJMi9DnXomdS5uJMUfKARzeo6O41Vby_zEsXr61DBtq8vGycw==" target="_blank" rel="noreferrer">7. worklaw.co.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHeyc4Xa5KPbDkTxtGFmNJjS-a2Q-0Cgp5vi-CfL8ObgXTT5y5R9IGdzqJSMfe22F7DllHfDOjO4YsZIxFd2o3zfEp39HcMjeuU_BqqjjoIvoaP7KHa" target="_blank" rel="noreferrer">8. daum.net</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHViZvqLXWwDsOMkggmAZEiH5unRYdtmFPKyKagic6MQf6gB-SFTKcC-ElSodv-dnjmlNzH-aYHnad11DGzLbX-CkcUFEOOKl9g574NV1WHq_MEHPnJo2tAKnlNXmhsb-vLEEBuJyjBZe3m6X1Z_ik=" target="_blank" rel="noreferrer">9. newstheai.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJp_WlONADfcauUvn3Nlt44lxSmnbwsPLzWmmbXcvUVUjgGz08Mokz3QMsT9kUnIAtMhq5UMG8zdbT0c7G0VYHSZpoZ-AfCs9VGfq4KG_81Duel7ROGeZuB5hFmEie" target="_blank" rel="noreferrer">10. sedaily.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu7C7x6rnd5u37WaRwNM3OMSfFl51g0wenteXwIS-KfwA2xQcKmoNSpvlvfpiFTG7n-dVRbPJzEKnpKjn0oSPIKnqT5Q6jpBMDRUXkkOin7xmobQnZBt2Hbw==" target="_blank" rel="noreferrer">11. webzinekoita.or.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFCYElGozcjX8xUNl6mG5sOxqrWnq1HJgX8gZbB1SuD9okMQJMy0Y-rnjfDbWI9g5q7tEFzFE2C_Cz9XB-SM9I1G-5fFlb0l18TemE21Kl33OVjJzC54QpHxcCgwm5QgmO8vvvwOi9tUhS_hOXmYj9R" target="_blank" rel="noreferrer">12. thevc.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHuehJNYeBhfpsXpcy7wMTDXLuqpHeoMxhvujF4Ty6KFi88-GqIAAKpgvTt0apuQswxyYy0R6B4CcICkUo73G6iUXAFHWyBkTUi9qY7BivtKgndPOloQqWy6GQrPdxT9-Pd6lyspbDnyFa2iijkg8M9_vk=" target="_blank" rel="noreferrer">13. unicornfactory.co.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEgK7rM2rGsErtF5T8CB_57xLn39LwBGKpFosf1S2427UEB5-tglcloHk911c_P8nSe3aS4yiFwBArsapkWTNajjp6H-vfDFI0CksRn6G_iDHrKy3RU2UHYFnzPodne5Z-qjQNfGU9GTb8ji_78WRQSHFGNkJPM_ckswy-ONiXblUf99da11Vzad4jaIL0D" target="_blank" rel="noreferrer">14. rendair.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHgJpaoN3HepS0zqbsRj3vTPwQniuZ4T5egBgvU8neFhvCK3b_4kG2NTrcSaBmYXrtQq1cysq83jDh7TIN9Eiqfw611G9eGqDau8rXx8_Gvkkp7N5Tt" target="_blank" rel="noreferrer">15. tistory.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHD7KDK2TWj3xD27wFZo8B-fuEDyDViryav8aNhtSPRh4asKMrTd9IPZGi6YHLtHHpbV6oi1s5pNUgSKobqm35oiJh37K9O1SWLEBuxwnGTWS3Q8PvjrNCSxdx_MpEtIwNh" target="_blank" rel="noreferrer">16. joongang.co.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQED1xfoodiYmsneXoj53eXBHPqYQNRa1KFgQoXkA3vbZbh5mgi7Z6Ic7LNU9ev-rhUUmU_kHaCW05IHl-6K-oEBr3ZROqsqvZIZd63qjnRVW6jn-NEU5ismwUNg6Q4K2-TOOmV2sxN9L8E2tbOWMEQEyt_MxGM=" target="_blank" rel="noreferrer">17. enewstoday.co.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFW1RCujVeK-728EpTaQEKrn4R2wG3X8uZELZa4ePp0K2FgcZrk968f3p8qMypt1TVj2DjtMz2Zt6scx6fE0vYv6UUMTV9TdvghzNPfeDSSZAppynryZgnj_1DEslRMn8Lt5hbaedKjMQjVBTPMMo3ZfIjT7GiY2zZpLIVG" target="_blank" rel="noreferrer">18. chaos.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTpT4TCWlzY9Qc3_p61qChir85vtmB6L5VN0ZBcCpxMMnY5W538Z7VdrYoJ-xklPQUGF11t0IL917lGeLDezI29nExKNSMklG4RtJUtpOk3VkrveyqDZFq" target="_blank" rel="noreferrer">19. tenereteam.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGClCedot-yey0LgPtaYqKv2qelU8cYujSZrBoYSe3xC2sqCPnkB-GYYgB_oKestxAZe24_YjD3llSdB3o-nfoU40VPe-L6XU-_Hx6qtSD8KyB56weqvjOeDNfHzZd9ESyB_KY852XbeHmmqb-Rnwc42zEICZ_Zqil0_ZUSXw==" target="_blank" rel="noreferrer">20. rendair.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUvmbhWenundugOeOpfLYj2ljqY-qLOTTkWbcAasAbIMsIUUXXoKf8WU9PuoiZvIo8W1BQ0N4NpCt-uSla3HFzLEww4Y1vYX3ebs7vJvrHPA==" target="_blank" rel="noreferrer">21. rendair.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxasFAoemLwOhXUkY6Cdme6DwMCqO0gnux0B6IomWXkCGjXY7rRQISZmsl9aKfYFuc8r8Eqgvni-LDFw3T7wG7H0o2Q-pvybKP-IaLueNaWNa-S3Z0nVWnMnKCb4h56n2j3pWy6l-awOoLSOXsDKY=" target="_blank" rel="noreferrer">22. colormango.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_7_VQgLeFaL3GuH02H7KNRRdfYqHnX9zqxK5NUWQrEibgRGsD2VaYY-tq_ueRT7WikiCAH9SdvYfUbTeVB8Icv9fTQ8V6yl9tgKRrYnj06YmeLlPvgs38PrqPMb-80coRGFa5NeQTlB88RCEP6ut3YwijqtUg_FEMBKkJbrdh" target="_blank" rel="noreferrer">23. relayfi.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7bNKisdv63CGdXV9XUgLbl6pvnadSdDTp6SFWzvm02Mwv_dwP_A6ew1cEQ8gk6I3hfV5ImGHCb74aQrCcEzLZYudg3Mp4U219GXTIgME=" target="_blank" rel="noreferrer">24. togal.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-AjzTcEWOL9kwi9wbnTvWh9LlsD4octtcus0Rf2U2NdLkH1gKiHkzG7DIYqhxy4zIIdkuIiYRpaYKAYU8oietLazywGYdm_4Fg1M=" target="_blank" rel="noreferrer">25. togal.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJYrH6H45j6k0mOQ7jLAsXIsQSZTbx9vSl3tZYgrUY-BEGtt08idYXcXt21kpY_6E16aV9Q_Eiu3etHozM4L_54AToW5ejjVpoWRgEnq3EV58S" target="_blank" rel="noreferrer">26. togal.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF24qf33ffd60o6wzvh9CquylhXMBdc3d0lBm0lydlFKufLTHNbW4ZxhLCVVEiN1Os2s7dvCtXh_L0HzTc8qaKXv7nmUyEdwaUiT0lEeIouDTl8mgQCgD564gH3UQlvmMcFiQ==" target="_blank" rel="noreferrer">27. inspectmind.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEadIxfs69JYiaJZYw2DNxW9sW7oAjjkg0PNnK2rVAeaCy8USp94Z8NeMIK76YnQIeAcNSpJmhph6pNvAMGeouMVIfeh3NUypJOaHqmTPZWXqStHkTzA-VNZ0jR1x3LCwqXlbuYRUPA2nu0jHZ0zXo64ZhfbFRgOgQ4b4lT1YXRmILi4MoFI806QiUeA1e3-3TRjCjwTWJ6EpNVo_hw8SgUYpvXA_ao6QnPBzQaPiKYgrtc" target="_blank" rel="noreferrer">28. mckinsey.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGU40JborXQ6ZRwua77Amd_OXgQT3dG5iqeQII1b26kyvfeSRE_no8_DxGA_76we-BEIS4oM0wJXzCnSIi3ngzll0wizF4eIjae7qvxDXPYTuh4ccUGmrLHtjGHm0O1z3xRO9Du0urEkUhaIqbMrFa8M0cNMZNdcdg6CXKtRMai8A3G76jA1O5s" target="_blank" rel="noreferrer">29. ifs.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDuAE9cKk_lFCCe0_h26SmycMpyatoCFvvq7QoiaMdw3Nsytxoqx6Yfh549EEq5n2oT0UvSwrwzHMHPsEO47XN3CnzFNPkVO257Xz_tWgmrDov-Dc1IQJPPXPEQ3Ddf-ko8lWcwsZgMcOBQEgsTv8xZN5zTfAaaspMlcYV5tXe2m-ehHpLPmb1zexubCgRB2A3_T_smZsdjBciraPbH2UpE9rDgSj2iXJOgys9jeIQwTJFfsi2e4vtfCfDnuOb7r1WsjWdZPfNzNyo5w==" target="_blank" rel="noreferrer">30. ironpros.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9AQErazU-Pk8vR2IpEYBpfzNRF9lt9Ow8kTpEOaa-mdNltczVTlm10N4WMYUggR0P3-VoqDNfxez4d8GIk-AQMzR7NUOfAE7mTzOvUppjiQpLZ4BoewyGnwqX_V2uRg==" target="_blank" rel="noreferrer">31. alicetechnologies.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcgOJRalbdoXRdgCr_J_jEKs69LWv2Tjw2s9TiUF2pIfqGKYeIz_D9p3rNid-fIxYDk0nE9ao1EcJTquaK2ZE9jx_Enzz3EsmV04tFz9wQeyw3B3wNC5s8ddMgAGmF8Q9g43Y-5CBCNcKtI-mCu6uMjygh" target="_blank" rel="noreferrer">32. alicetechnologies.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTbTlKgPdTLoZFp8LRQddJ7IeoyV8EmB8-xKO2ERPGn484bZNYMCjzDXcPsfJLvnRCC6u2s57RfmphuN4aLhdZ2-5GXUrzKQjlTE6lESfLX7v5l_cbTrthfOoliBwINMTYbZ1NawG89ho5lxqEE6vEc-St4WC9AdXXKPQ3GbPcxQ==" target="_blank" rel="noreferrer">33. alicetechnologies.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH64B6hin-NIOEFuw4mElEC1yXraICP1vitXJ5ROIXYJA4BwnHIRoyJxxRM_5egXfxSuQYRNWxGcIjV0o-b6I68w9PrIAc9EL9F1QiBhov68vs8Rxfvc9cDM4RpL1NJWDWaU2R8RDGE_348" target="_blank" rel="noreferrer">34. dfinite.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEMFZUOUJEAJmhuHBakZDuHjohSDrtdt2qlGMWmt7nCHbxQNHA1f7poSFx-Ve1vQ46iOG_5xD6X9TGfwnpFhqJi8eMz0Jbgb-87itAnR7EAQM5W-eTbP4Yj5wJSDH9a_i4=" target="_blank" rel="noreferrer">35. openspace.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcgygYSIKofht_LAF-QXlm46mGv3lyUpQdN_Ic_GEs7NVFYFuV0395jmoneiieg070P1Q-HlBOuiWNmUhTWIG8dMQrbCy0Qu7rWzF2N_5eLeCFXiPTw78QzgmPFJdk29fi9CwdnI7I" target="_blank" rel="noreferrer">36. softwarefinder.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwrooxBNY5rWQc1hGb7_QUTjhm-HvN-N59b89EPPu5odnDrCXAMDtnRVWVA7nmYsdfWni3IaMU2kwwkFkprzv-FeeeI-5P8p7r1H3fvUbJ2nTrdr1Qn1B1vCqLg4mTqpJu2MGo" target="_blank" rel="noreferrer">37. openspace.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG36CnX6es9c8by961it6-qqFbfuxFFwq8lvvQM6s-5ZvXSiJfsni4wr5pAG12zBmAD3_y3NxxRbprOdAt-aplpV5JzHJT-YL3YS9eQsZnTvyAo8fR1SBw3RA8Mcub8G8Nj" target="_blank" rel="noreferrer">38. youtube.com</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHBWGGy_nykNm-EeQTK4ij1ep-5ybe0TZYUyVFRRKQBFZD03Rx94A6lDgFD0HorHbWMYgpQNCjKbUuvhmUjKStOVAo0oBH8HZqyzqNVE-I" target="_blank" rel="noreferrer">39. openspace.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvBJqyV5sQvyMkUGilGEoSGAGA8b6rl8j8gM-Xr_2tEeuY8HM-e1RspPbTy4BHp0ClXVhUlIj3iiQD3aT40xVWMC_dLEkENn9CE_5KgZC6L7nQ0gvoQxHqMnyCskkCX9E4kbdrQe-Fs8dtsz2uxBQ1GthLdvwzp5rdNkVUCKnpUlkXNQ==" target="_blank" rel="noreferrer">40. alchera.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdbw8QFIaT5uVaMe-3_r2DE6FI2f8ozSWIDsNIawEWcM2nsJxsQ9jSGH6OGtDJXUOTyq7g3rmN7Wtx2L3KmWKqZFQ1iVzmGOK79TEftL2yLkuf1xZ3y92TJpZqhYPDQtPZh2rQiA==" target="_blank" rel="noreferrer">41. yna.co.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQ1n5_MsOAR-zu4ae9-VQldn8ZhtPjIgoG-6U8eYmHbvO12f-J5LwaekJGNVLGN-9Q5BR8fW03votX5XcbktheCMmijAKxUVhTSUecvf4iwkxJS6bb1-fkw2otrZH6LmMdbsGWA37qI1-KKKo4NT0Fjuo=" target="_blank" rel="noreferrer">42. kmecnews.co.kr</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGSf7KcfQwhiUtnzUN8aY-pP7ZDHdf2k1N5Sw_qr64wx05skPUoUrMJuO7y2YwXpZSrbjYKabgxCu-UPNn1QKDjz9snhYENTiIOWBmaW3_TgE8DUG0XOMyIbKCNJIVHKPyRERQeMc197LRv_I6gLaSf1jURup4i4pf43tc=" target="_blank" rel="noreferrer">43. socialmed.ai</a><a href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFosBWDEEHKRPvzwLydP7hDB8GW4wzgSU-TwnT2WBVt0mP1gHi6wptWyMXP4nzmpDMQZlMl_P8POEnDyGtKoxupemcdwXORWZjYZ6qs5capGpX4MpU_FDVqq54l8EJSS-rujA==" target="_blank" rel="noreferrer">44. startuprecipe.co.kr</a></div>
