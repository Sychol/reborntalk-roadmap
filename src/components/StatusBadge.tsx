import {
  checklistStatusLabels,
  statusDescriptions,
  statusLabels,
  type ChecklistStatus,
  type RoadmapStatus,
} from "../data/roadmap";

interface StageStatusBadgeProps {
  status: RoadmapStatus;
}

interface ChecklistStatusBadgeProps {
  status: ChecklistStatus;
}

export function StatusBadge({ status }: StageStatusBadgeProps) {
  return (
    <span
      className={`badge badge--${status}`}
      title={statusDescriptions[status]}
      aria-label={`${statusLabels[status]}: ${statusDescriptions[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

export function ChecklistStatusBadge({ status }: ChecklistStatusBadgeProps) {
  return <span className={`check-badge check-badge--${status}`}>{checklistStatusLabels[status]}</span>;
}
