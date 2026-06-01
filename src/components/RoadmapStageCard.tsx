import type { RoadmapStage, RoadmapTask } from "../data/roadmap";
import { StatusBadge } from "./StatusBadge";

interface RoadmapStageCardProps {
  stage: RoadmapStage;
}

function TaskList({ title, tasks }: { title: string; tasks: RoadmapTask[] }) {
  return (
    <div className="task-group">
      <h4>{title}</h4>
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>
            <strong>{task.title}</strong>
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RoadmapStageCard({ stage }: RoadmapStageCardProps) {
  return (
    <article className="stage-card" id={stage.id}>
      <div className="stage-card__header">
        <span className="stage-card__order">0{stage.order}</span>
        <div>
          <p className="stage-card__time">{stage.timeframe}</p>
          <h3>{stage.title}</h3>
        </div>
        <StatusBadge status={stage.status} />
      </div>
      <p className="stage-card__goal">{stage.goal}</p>
      <div className="stage-card__tasks">
        <TaskList title="개발 과제" tasks={stage.developmentTasks} />
        <TaskList title="상품화·기관 공급 과제" tasks={stage.commercializationTasks} />
      </div>
      <div className="outputs" aria-label={`${stage.shortTitle} 주요 산출물`}>
        <h4>주요 산출물</h4>
        <ul>
          {stage.outputs.map((output) => (
            <li key={output.title}>
              <strong>{output.title}</strong>
              <span>{output.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage-card__footer">
        <p>
          <strong>진입 조건</strong>
          <span>{stage.entryCondition}</span>
        </p>
        <p>
          <strong>다음 단계</strong>
          <span>{stage.nextStep}</span>
        </p>
      </div>
    </article>
  );
}
