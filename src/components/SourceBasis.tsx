import { guardrails, hero, sourceBasis } from "../data/roadmap";

export default function SourceBasis() {
  return (
    <section className="section section--split" id="basis" aria-labelledby="basis-title">
      <div className="section__header">
        <p className="eyebrow">Certification and institution-supply readiness track</p>
        <h2 id="basis-title">근거자료와 표현 상 주의점</h2>
        <p>
          리본톡 기획 및 개발에 참고해야 할 주요한 내부 근거자료와,
          프로젝트의 목표와 범위를 명확히 전달하기 위해 표현 상 주의해야 할 사항들을 정리한 항목입니다.
        </p>
      </div>
      <div className="split-grid">
        <article className="info-panel">
          <h3>내부 근거자료</h3>
          <ul>
            {sourceBasis.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="info-panel">
          <h3>표현 상 주의점</h3>
          <ul>
            {guardrails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="disclaimer disclaimer--wide">{hero.disclaimer}</p>
    </section>
  );
}
