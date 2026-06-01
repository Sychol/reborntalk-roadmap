import { roadmapStages } from "../data/roadmap";
import RoadmapStageCard from "./RoadmapStageCard";

export default function RoadmapDetail() {
  return (
    <section className="section" id="stages" aria-labelledby="stages-title">
      <div className="section__header">
        <p className="eyebrow">Stage-by-stage roadmap cards</p>
        <h2 id="stages-title">단계별 로드맵 카드</h2>
        <p>
          각 단계는 개발 과제와 상품화 과제를 함께 보여주어, 기술 구현과 기관 공급 준비가
          분리되지 않도록 구성했습니다.
        </p>
      </div>
      <div className="stage-grid">
        {roadmapStages.map((stage) => (
          <RoadmapStageCard key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  );
}
