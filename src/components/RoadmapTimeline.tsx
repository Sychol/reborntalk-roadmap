import { roadmapStages } from "../data/roadmap";
import { StatusBadge } from "./StatusBadge";

export default function RoadmapTimeline() {
  return (
    <section className="section" id="overview" aria-labelledby="overview-title">
      <div className="section__header">
        <p className="eyebrow">IntegratedRoadmap · RoadmapTimeline</p>
        <h2 id="overview-title">통합 로드맵 한눈에 보기</h2>
        <p>
          현재 제품 기반에서 시작해 시제품 구현, 파일럿 실증, 품질·인증 준비,
          기관 공급과 공공조달 확산으로 이어지는 흐름입니다.
        </p>
      </div>
      <ol className="timeline" aria-label="리본톡 로드맵 요약 단계">
        {roadmapStages.map((stage) => {
          const isActive = stage.status === "in-progress";

          return (
            <li
              className={`timeline__item${isActive ? " timeline__item--active" : ""}`}
              key={stage.id}
              aria-current={isActive ? "step" : undefined}
            >
              <span className="timeline__number">{stage.order}</span>
              <div>
                <h3>{stage.shortTitle}</h3>
                <p>{stage.timeframe}</p>
                <StatusBadge status={stage.status} />
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
