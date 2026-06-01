import { hero } from "../data/roadmap";

export default function Hero() {
  return (
    <section className="hero" id="summary" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__description">{hero.description}</p>
        <div className="hero__panel" aria-label="프로젝트 요약">
          <div>
            <span className="panel-label">최종 목표</span>
            <strong>{hero.finalGoal}</strong>
          </div>
          <div>
            <span className="panel-label">현재 단계</span>
            <strong>{hero.currentStage}</strong>
          </div>
        </div>
        <p className="disclaimer">{hero.disclaimer}</p>
      </div>
      <div className="hero__aside" aria-label="주요 키워드">
        <span className="aside-label">핵심 키워드</span>
        <div className="chip-list">
          {hero.keywords.map((keyword) => (
            <span className="chip" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
