import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const missingFiles = [];
const read = (path) => {
  const absolutePath = resolve(root, path);
  if (!existsSync(absolutePath)) {
    missingFiles.push(path);
    return "";
  }
  return readFileSync(absolutePath, "utf8");
};

const files = {
  app: read("src/App.tsx"),
  data: read("src/data/roadmap.ts"),
  css: read("src/styles/global.css"),
};

const collectSourceFiles = (dir) =>
  readdirSync(resolve(root, dir))
    .flatMap((entry) => {
      const path = `${dir}/${entry}`;
      const absolutePath = resolve(root, path);
      if (statSync(absolutePath).isDirectory()) {
        return collectSourceFiles(path);
      }
      return /\.(ts|tsx|css)$/.test(path) ? [path] : [];
    });

const sourceFiles = Object.fromEntries(
  collectSourceFiles("src").map((path) => [path, read(path)]),
);

const heroSource = read("src/components/Hero.tsx");
const timelineSource = read("src/components/RoadmapTimeline.tsx");
const combined = Object.values({ ...files, ...sourceFiles }).join("\n");

const requiredSections = [
  "Hero",
  "IntegratedRoadmap",
  "RoadmapTimeline",
  "TaskMatrix",
  "ReadinessChecklist",
  "SourceBasis",
  "NextActions",
];

const requiredPhrases = [
  "AI 기반 정신건강 관리 서비스",
  "자가점검",
  "위험 신호 확인",
  "초기개입",
  "전문가 연계",
  "기관 단위 예방관리",
  "소방본부·소방서",
  "공공조달",
];

const forbiddenPhrases = [
  ["AI가", "\uc9c4\ub2e8"].join(" "),
  ["AI가", "\uce58\ub8cc"].join(" "),
  ["AI가", "\ucc98\ubc29"].join(" "),
  ["PTSD를", "\uce58\ub8cc"].join(" "),
  ["우울증을", "\uce58\ub8cc"].join(" "),
  ["자살 예방", "보장"].join(" "),
  ["임상효과", "입증"].join(" "),
  ["완", "치"].join(""),
  ["의학적", "판단"].join(" "),
  ["조달 등록", "완료"].join(" "),
  ["특허 등록", "완료"].join(" "),
];

const failures = [];

for (const path of missingFiles) {
  failures.push(`Missing required file: ${path}`);
}

for (const section of requiredSections) {
  if (!combined.includes(section)) {
    failures.push(`Missing section/component marker: ${section}`);
  }
}

for (const phrase of requiredPhrases) {
  if (!combined.includes(phrase)) {
    failures.push(`Missing required phrase: ${phrase}`);
  }
}

for (const phrase of forbiddenPhrases) {
  if (combined.includes(phrase)) {
    failures.push(`Forbidden phrase found: ${phrase}`);
  }
}

const stageCount = (files.data.match(/id: "/g) || []).length;
if (stageCount < 6) {
  failures.push(`Expected at least 6 roadmap stages, found ${stageCount}`);
}

const roadmapBlockStart = files.data.indexOf("export const roadmapStages");
const roadmapBlockEnd = files.data.indexOf("export const taskMatrix");
const roadmapBlock =
  roadmapBlockStart >= 0 && roadmapBlockEnd > roadmapBlockStart
    ? files.data.slice(roadmapBlockStart, roadmapBlockEnd)
    : "";
const roadmapStageStatuses = [...roadmapBlock.matchAll(/status: "([^"]+)"/g)].map(
  (match) => match[1],
);
const expectedRoadmapStageStatuses = [
  "in-progress",
  "planned",
  "later",
  "later",
  "later",
  "later",
];

if (
  roadmapStageStatuses.length < expectedRoadmapStageStatuses.length ||
  expectedRoadmapStageStatuses.some((status, index) => roadmapStageStatuses[index] !== status)
) {
  failures.push(
    `Expected roadmap stage statuses ${expectedRoadmapStageStatuses.join(", ")}, found ${roadmapStageStatuses.join(", ")}`,
  );
}

for (const legacyStatus of ["completed-base", "validation-needed", "long-term"]) {
  if (files.data.includes(legacyStatus)) {
    failures.push(`Legacy roadmap status remains in roadmap.ts: ${legacyStatus}`);
  }
}

const checklistGroups = (files.data.match(/group: "/g) || []).length;
if (checklistGroups < 6) {
  failures.push(`Expected at least 6 readiness groups, found ${checklistGroups}`);
}

if (!files.css.includes("@media")) {
  failures.push("Responsive CSS media queries are missing");
}

if (!heroSource.includes("readinessChecklist")) {
  failures.push("Hero must source its summary cards from readinessChecklist");
}

if (!heroSource.includes('status === "in-progress"')) {
  failures.push('Hero must filter checklist items by status === "in-progress"');
}

if (heroSource.includes("hero.finalGoal") || heroSource.includes("hero.currentStage")) {
  failures.push("Hero must not render the old finalGoal/currentStage summary cards");
}

if (heroSource.includes("roadmapStages") || heroSource.includes("hero__roadmap")) {
  failures.push("Hero must not render the roadmap progress panel");
}

if (!timelineSource.includes('stage.status === "in-progress"')) {
  failures.push('RoadmapTimeline must detect active stages with stage.status === "in-progress"');
}

if (!timelineSource.includes("timeline__item--active")) {
  failures.push("RoadmapTimeline must apply an active class to in-progress stages");
}

if (!timelineSource.includes("현재 진행 중")) {
  failures.push("RoadmapTimeline must label the active stage as currently in progress");
}

if (heroSource.includes("hero.keywords")) {
  failures.push("Hero must not render the old keyword chips in the right-side panel");
}

if (failures.length > 0) {
  console.error("Content verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Content verification passed.");
