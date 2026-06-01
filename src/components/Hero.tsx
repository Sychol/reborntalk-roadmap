import { hero, readinessChecklist } from "../data/roadmap";
import { ChecklistStatusBadge } from "./StatusBadge";

const inProgressItems = readinessChecklist.flatMap((group) =>
  group.items
    .filter((item) => item.status === "in-progress")
    .map((item) => ({
      group: group.group,
      title: item.title,
      status: item.status,
    })),
);

export default function Hero() {
  return (
    <section className="hero" id="summary" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__description">{hero.description}</p>
        <div className="hero__panel hero__panel--progress" aria-label="진행 중인 준비 항목">
          <div className="hero__progress-panel">
            <span className="panel-label">진행 중인 항목</span>
            <ul className="hero__progress-list">
              {inProgressItems.map((item) => (
                <li className="hero__progress-item" key={`${item.group}-${item.title}`}>
                  <span className="hero__progress-group">{item.group}</span>
                  <strong>{item.title}</strong>
                  <ChecklistStatusBadge status={item.status} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
