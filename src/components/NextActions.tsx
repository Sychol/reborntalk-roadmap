import { nextActions } from "../data/roadmap";

export default function NextActions() {
  return (
    <section className="next-actions" id="next" aria-labelledby="next-title">
      <div>
        <p className="eyebrow">Final callout</p>
        <h2 id="next-title">다음 목표는 “실증 가능한 시제품”입니다.</h2>
        <p>
          통합 선별, RAG 회복사례, 고위험 알림, 관리자 대시보드를 실제 파일럿에 적용하고,
          그 결과를 품질·보안·인증·조달 준비자료로 연결해야 합니다.
        </p>
      </div>
      <ol>
        {nextActions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ol>
    </section>
  );
}
