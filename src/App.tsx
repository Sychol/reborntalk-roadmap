import Hero from "./components/Hero";
import NextActions from "./components/NextActions";
import ReadinessChecklist from "./components/ReadinessChecklist";
import RoadmapDetail from "./components/RoadmapDetail";
import RoadmapTimeline from "./components/RoadmapTimeline";
import SourceBasis from "./components/SourceBasis";
import TaskMatrix from "./components/TaskMatrix";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

const navItems = [
  { href: "#summary", label: "요약" },
  { href: "#overview", label: "로드맵" },
  { href: "#readiness", label: "체크리스트" },
  { href: "#basis", label: "가이드라인" },
  { href: "#stages", label: "단계별 세부 내용" },
  { href: "#matrix", label: "개발-공급 연결" },
  { href: "#next", label: "다음 목표" },
];

export default function App() {
  return (
    <>
      <header className="site-header" aria-label="리본톡 로드맵 내비게이션">
        <a className="brand" href="#summary" aria-label="리본톡 통합 로드맵 홈">
          <span>re;borntalk</span>
          <strong>로드맵</strong>
        </a>
        <nav>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <Hero />
        <RoadmapTimeline />
        <ReadinessChecklist />
        <SourceBasis />
        <RoadmapDetail />
        <TaskMatrix />
        <NextActions />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
