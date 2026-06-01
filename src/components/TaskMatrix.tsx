import { taskMatrix } from "../data/roadmap";

export default function TaskMatrix() {
  return (
    <section className="section section--contrast" id="matrix" aria-labelledby="matrix-title">
      <div className="section__header">
        <p className="eyebrow">Development vs Commercialization task matrix</p>
        <h2 id="matrix-title">개발 관점과 기관 공급 관점의 연결</h2>
        <p>
          제품 구현 과제가 기관 도입 자료, 보안 검토, 인증 준비, 조달 진입 준비로 어떻게
          이어지는지 같은 행에서 비교합니다.
        </p>
      </div>
      <div className="matrix" role="table" aria-label="개발 및 상품화 과제 비교표">
        <div className="matrix__row matrix__row--head" role="row">
          <span role="columnheader">구분</span>
          <span role="columnheader">개발 관점</span>
          <span role="columnheader">상품화·기관 공급 관점</span>
        </div>
        {taskMatrix.map((row) => (
          <div className="matrix__row" role="row" key={row.id}>
            <strong role="cell">{row.area}</strong>
            <span role="cell">{row.development}</span>
            <span role="cell">{row.commercialization}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
