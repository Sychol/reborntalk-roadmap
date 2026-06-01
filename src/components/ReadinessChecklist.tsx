import { readinessChecklist } from "../data/roadmap";
import { ChecklistStatusBadge } from "./StatusBadge";

export default function ReadinessChecklist() {
  return (
    <section className="section" id="readiness" aria-labelledby="readiness-title">
      <div className="section__header">
        <p className="eyebrow">Service Rediness checklist</p>
        <h2 id="readiness-title">서비스 준비 체크리스트</h2>
        <p>
          제품 완성도, 데이터·실증, 개인정보·보안, 품질·성능, 인증·조달, 제안자료를
          한 번에 점검할 수 있도록 상태를 나눴습니다.
        </p>
      </div>
      <div className="checklist-grid">
        {readinessChecklist.map((group) => (
          <article className="check-card" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <ChecklistStatusBadge status={item.status} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
