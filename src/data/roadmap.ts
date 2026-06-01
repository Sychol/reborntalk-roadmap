export type RoadmapStatus =
  | "completed-base"
  | "in-progress"
  | "planned"
  | "validation-needed"
  | "long-term";

export type TaskCategory =
  | "development"
  | "data-rnd"
  | "validation"
  | "commercialization"
  | "certification"
  | "procurement";

export type Priority = "core" | "important" | "later";
export type ChecklistStatus = "ready" | "in-progress" | "planned" | "later";

export interface RoadmapTask {
  category: TaskCategory;
  title: string;
  description: string;
  priority: Priority;
}

export interface RoadmapOutput {
  title: string;
  description: string;
}

export interface RoadmapStage {
  id: string;
  order: number;
  shortTitle: string;
  title: string;
  timeframe: string;
  status: RoadmapStatus;
  goal: string;
  developmentTasks: RoadmapTask[];
  commercializationTasks: RoadmapTask[];
  outputs: RoadmapOutput[];
  entryCondition: string;
  nextStep: string;
}

export interface MatrixRow {
  id: string;
  area: string;
  development: string;
  commercialization: string;
}

export interface ReadinessGroup {
  group: string;
  items: {
    title: string;
    status: ChecklistStatus;
  }[];
}

export const statusLabels: Record<RoadmapStatus, string> = {
  "completed-base": "보유 기반",
  "in-progress": "설계·고도화",
  planned: "구현 예정",
  "validation-needed": "실증 필요",
  "long-term": "장기 확산",
};

export const statusDescriptions: Record<RoadmapStatus, string> = {
  "completed-base": "현재 보유한 프로토타입과 R&D 기반",
  "in-progress": "시제품 범위로 구체화할 핵심 설계",
  planned: "개발 범위 확정 뒤 구현할 기능",
  "validation-needed": "파일럿 운영으로 확인할 단계",
  "long-term": "기관 공급과 공공조달 확산을 위한 목표",
};

export const checklistStatusLabels: Record<ChecklistStatus, string> = {
  ready: "기반 있음",
  "in-progress": "정리 중",
  planned: "준비 예정",
  later: "후속 과제",
};

export const hero = {
  title: "리본톡 통합 로드맵",
  eyebrow: "re;borntalk",
  subtitle:
    "재난임무종사자의 도덕손상 기반 AI 정신건강 관리 시스템을 시제품, 실증, 인증, 기관 공급까지 연결하는 개발·사업화 로드맵입니다.",
  description:
    "리본톡은 소방공무원 등 재난임무종사자가 겪는 도덕손상, 외상 반응, 직무 스트레스를 통합 선별 문항을 통해 조기에 확인하고, 안정화 중심 초기개입과 자기자비 기반 회복 지원, 전문가 연계, 기관 단위 예방관리로 확장하는 AI 기반 정신건강 관리 서비스입니다.",
  finalGoal:
    "최종 목표는 소방본부·소방서가 기관 단위로 검토하고 도입할 수 있는 공공기관 공급형 서비스 패키지를 완성하는 것입니다.",
  currentStage: "현재 단계: 보유 기반 정리 및 v1.0 시제품 범위 설정",
  disclaimer:
    "리본톡은 전문가의 평가나 응급의료를 대체하지 않으며, 고위험 신호가 확인되는 경우 전문가 또는 기관 위기대응 체계와의 연계를 전제로 합니다.",
  keywords: [
    "도덕손상",
    "소방공무원",
    "자가점검",
    "위험 신호 확인",
    "RAG 회복사례",
    "파일럿 실증",
    "기관 공급",
    "공공조달 준비",
  ],
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "foundation",
    order: 1,
    shortTitle: "기반 정리",
    title: "현재 제품 기반 및 시제품 범위 설정",
    timeframe: "2026 Q2",
    status: "completed-base",
    goal: "현재 구현된 웹앱, LLM, RAG, 관리자 대시보드 기반을 정리하고 리본톡 v1.0 시제품 범위를 설정합니다.",
    developmentTasks: [
      {
        category: "development",
        title: "현재 기능 인벤토리 작성",
        description:
          "사용자 웹앱, 관리자 대시보드, LLM 대화, RAG 파이프라인, 데이터 저장 구조를 기능 단위로 정리합니다.",
        priority: "core",
      },
      {
        category: "development",
        title: "v1.0 시제품 범위 확정",
        description:
          "통합 선별, 위험분류, 라우팅, 초기개입, 자기자비 개입, 고위험 알림을 최소 기능 범위로 정의합니다.",
        priority: "core",
      },
    ],
    commercializationTasks: [
      {
        category: "commercialization",
        title: "비의료기기형 포지셔닝 정리",
        description:
          "자가점검, 위험 신호 확인, 초기개입, 전문가 연계, 기관 단위 예방관리 서비스로 설명합니다.",
        priority: "core",
      },
      {
        category: "commercialization",
        title: "기관 도입 메시지 정리",
        description:
          "소방본부·소방서 담당자가 이해할 수 있도록 문제, 해결, 실증, 공급 흐름을 정리합니다.",
        priority: "important",
      },
    ],
    outputs: [
      {
        title: "리본톡 v1.0 범위 정의서",
        description: "시제품 제작과 홈페이지 로드맵 구현의 기준 문서입니다.",
      },
      {
        title: "기관 공급용 핵심 메시지",
        description: "홈페이지 Hero와 제안서에 반복 사용될 핵심 문구입니다.",
      },
    ],
    entryCondition: "현재 기능과 미구현 기능이 구분되어야 합니다.",
    nextStep: "통합 선별·라우팅 모델 설계로 이동합니다.",
  },
  {
    id: "model-and-data",
    order: 2,
    shortTitle: "모델·데이터",
    title: "통합 선별모델 및 RAG 데이터 구조 설계",
    timeframe: "2026 Q2-Q3",
    status: "in-progress",
    goal: "단축형 선별 모듈과 RAG 회복사례 구조를 설계합니다.",
    developmentTasks: [
      {
        category: "development",
        title: "통합 위험분류 로직 설계",
        description:
          "도덕손상, PTSD, 우울, 자기자비, 위기 문항을 통합해, 사용자의 위험도와 개입 경로를 분기합니다.",
        priority: "core",
      },
      {
        category: "data-rnd",
        title: "RAG 태그 체계 설계",
        description:
          "사건, 감정, 도덕손상 유형, 대처, 회복 단계, 권장 개입 모듈을 기준으로 회복사례를 태깅합니다.",
        priority: "core",
      },
    ],
    commercializationTasks: [
      {
        category: "commercialization",
        title: "차별성 문구 정리",
        description:
          "일반 상담 앱과 달리 도덕손상과 재난임무 특성을 반영한다는 차별성을 정리합니다.",
        priority: "core",
      },
      {
        category: "validation",
        title: "실증 설계 초안 작성",
        description:
          "윤리검토, 참여자 동의, 사전·사후 측정, 위기대응 기준을 파일럿 전 단계에서 초안화합니다.",
        priority: "important",
      },
    ],
    outputs: [
      {
        title: "통합 선별·라우팅 설계서",
        description: "위험도별 개입 분기를 설명하는 핵심 설계 문서입니다.",
      },
      {
        title: "RAG 태그 체계",
        description: "회복사례 데이터 정제와 벡터 검색 품질을 관리하는 기준입니다.",
      },
    ],
    entryCondition: "척도별 위험 기준과 위기 문항 처리가 정의되어야 합니다.",
    nextStep: "핵심 기능을 통합 시제품으로 구현합니다.",
  },
  {
    id: "prototype",
    order: 3,
    shortTitle: "시제품 구현",
    title: "통합 시제품 및 관리자 대시보드 구현",
    timeframe: "2026 Q3",
    status: "planned",
    goal: "사용자 화면과 관리자 화면에서 선별, 개입, 추적, 알림을 실제로 확인할 수 있도록 구현합니다.",
    developmentTasks: [
      {
        category: "development",
        title: "사용자 웹앱 고도화",
        description:
          "자가점검, 결과 안내, 안정화 개입, 자기자비 개입, 감정 기록, 회복 이력을 하나의 흐름으로 통합합니다.",
        priority: "core",
      },
      {
        category: "development",
        title: "관리자 대시보드 고도화",
        description:
          "이용 현황, 위험군 추세, 고위험 알림, 개입 이행 현황, 익명·집계 리포트를 구현합니다.",
        priority: "core",
      },
    ],
    commercializationTasks: [
      {
        category: "commercialization",
        title: "데모 시나리오 작성",
        description:
          "기관 담당자에게 보여줄 사용자 흐름과 관리자 흐름을 데모 시나리오로 작성합니다.",
        priority: "core",
      },
      {
        category: "commercialization",
        title: "매뉴얼 초안 작성",
        description: "사용자 매뉴얼과 관리자 운영 매뉴얼 초안을 작성합니다.",
        priority: "important",
      },
    ],
    outputs: [
      {
        title: "리본톡 v1.0 통합 시제품",
        description: "파일럿 실증과 기관 제안에 활용할 데모 가능한 버전입니다.",
      },
      {
        title: "관리자 대시보드",
        description: "기관 단위 익명·집계 모니터링을 보여주는 핵심 화면입니다.",
      },
    ],
    entryCondition:
      "선별부터 개입, 기록, 관리자 확인까지 end-to-end 흐름이 작동해야 합니다.",
    nextStep: "소방공무원 파일럿 실증으로 이동합니다.",
  },
  {
    id: "pilot",
    order: 4,
    shortTitle: "실증 검증",
    title: "파일럿 실증 및 개선",
    timeframe: "2026 Q4 - 2027 Q1",
    status: "validation-needed",
    goal: "소방공무원 대상 파일럿을 통해 사용성, 수용성, 운영 가능성, 조기 위험 신호 확인 가능성을 검증합니다.",
    developmentTasks: [
      {
        category: "validation",
        title: "파일럿 운영(효과성 검증)",
        description:
          "20명 이상, 2주 이상 운영을 목표로 사전·사후 측정과 사용 로그 수집 구조를 준비합니다.",
        priority: "core",
      },
      {
        category: "development",
        title: "실증 기반 기능 개선",
        description:
          "문항 이해도, 프롬프트, 알림 기준, 관리자 지표, UX 불편 요소를 개선합니다.",
        priority: "core",
      },
    ],
    commercializationTasks: [
      {
        category: "commercialization",
        title: "파일럿 결과보고서 작성",
        description:
          "성과 과장이 아니라 사용성, 수용성, 조기 위험 신호 확인, 기관 운영 가능성 중심으로 정리합니다.",
        priority: "core",
      },
      {
        category: "commercialization",
        title: "논문·특허 성과화 준비",
        description:
          "KCI급 논문과 특허 보완자료로 활용 가능한 데이터와 로그를 정리합니다.",
        priority: "important",
      },
    ],
    outputs: [
      {
        title: "파일럿 결과보고서",
        description: "기관 제안과 후속 지원사업에 활용할 핵심 근거자료입니다.",
      },
      {
        title: "개선 요구사항 백로그",
        description: "제품 안정화와 GS 인증 준비 전 수정해야 할 항목 목록입니다.",
      },
    ],
    entryCondition:
      "윤리검토, 동의서, 개인정보 처리, 위기대응 절차가 준비되어야 합니다.",
    nextStep: "품질·보안·인증 준비 단계로 이동합니다.",
  },
  {
    id: "quality-certification",
    order: 5,
    shortTitle: "품질·인증",
    title: "품질·보안·성능 검증 및 인증 준비",
    timeframe: "2027 H1-H2",
    status: "planned",
    goal: "기관 공급과 조달 진입을 위해 품질, 보안, 개인정보, AI 성능, 데이터 품질을 검증 가능한 문서와 시험자료로 준비합니다.",
    developmentTasks: [
      {
        category: "certification",
        title: "GS 인증 준비",
        description:
          "제품설명서, 사용자취급설명서, 기능 목록, 운영환경, 백업·복구, 유지보수 정책을 정리합니다.",
        priority: "core",
      },
      {
        category: "certification",
        title: "AI·데이터 성능 검증 준비",
        description:
          "위험분류, 고위험 발화 감지, 라우팅 적절성, 데이터 품질에 대한 시험 가능 지표를 설계합니다.",
        priority: "important",
      },
    ],
    commercializationTasks: [
      {
        category: "commercialization",
        title: "기관 보안 검토 패키지 작성",
        description:
          "접근권한, 로그, 암호화, 파기정책, 위탁관리, 침해사고 대응 기준을 문서화합니다.",
        priority: "core",
      },
      {
        category: "procurement",
        title: "조달 진입 사전 준비",
        description:
          "나라장터, 벤처나라, 물품식별번호, 중소기업확인서, SW사업자 관련 서류 등을 검토합니다.",
        priority: "important",
      },
    ],
    outputs: [
      {
        title: "GS 인증 준비 패키지",
        description: "소프트웨어 품질 인증을 위한 제품 문서 묶음입니다.",
      },
      {
        title: "보안·개인정보 관리 문서",
        description: "공공기관 검토와 SaaS 공급 검토에 필요한 기본 자료입니다.",
      },
    ],
    entryCondition: "기능 범위와 제품 버전이 고정되어야 합니다.",
    nextStep: "기관 공급 패키지화와 조달 진입으로 이동합니다.",
  },
  {
    id: "institution-supply",
    order: 6,
    shortTitle: "기관 공급",
    title: "기관 공급 패키지화 및 공공조달 확산",
    timeframe: "2027 H2 - 2028",
    status: "long-term",
    goal: "소방본부·소방서가 실제 구매 검토할 수 있는 상품, 제안서, 가격, 운영 문서, 조달 등록 경로를 완성합니다.",
    developmentTasks: [
      {
        category: "development",
        title: "기관형 운영 구조 안정화",
        description:
          "기관별 데이터 분리, 관리자 권한, 익명·집계 리포트, 유지보수, 장애 대응 정책을 정리합니다.",
        priority: "core",
      },
      {
        category: "development",
        title: "버전 업데이트 체계 구축",
        description:
          "기관 피드백, 기능 개선, 인증 유지, 보안 패치를 관리할 수 있는 운영 체계를 만듭니다.",
        priority: "important",
      },
    ],
    commercializationTasks: [
      {
        category: "procurement",
        title: "벤처나라·나라장터 진입",
        description:
          "GS 인증과 상품설명서, 납품확약서, 품질관리계획서, 조달 기본서류를 기반으로 조달 진입을 추진합니다.",
        priority: "core",
      },
      {
        category: "procurement",
        title: "우수조달제품 준비",
        description:
          "등록특허, 품질소명자료, 실증 결과, 납품 실적, 유지보수 체계를 심사 패키지로 정리합니다.",
        priority: "later",
      },
    ],
    outputs: [
      {
        title: "기관 도입 제안서",
        description: "소방본부·소방서 대상 제안과 파일럿 확산에 활용합니다.",
      },
      {
        title: "조달 준비 패키지",
        description: "벤처나라, 나라장터, 후속 우수조달 준비를 위한 문서 묶음입니다.",
      },
    ],
    entryCondition: "최소 하나 이상의 실증 또는 기관 검토 레퍼런스가 있어야 합니다.",
    nextStep: "소방기관 레퍼런스를 기반으로 공공안전 직군 확산을 추진합니다.",
  },
];

export const taskMatrix: MatrixRow[] = [
  {
    id: "model",
    area: "모델·엔진",
    development: "통합 선별, 위험분류, 라우팅 규칙, 초기개입 모듈",
    commercialization: "비의료기기형 서비스 포지셔닝과 기관 도입 메시지",
  },
  {
    id: "data",
    area: "RAG·데이터",
    development: "통합 선별 기준, 회복사례 태그, 벡터 검색 품질, 고위험 발화 기준",
    commercialization: "실증 근거 및 논문화, 데이터 품질관리, 안전한 AI 운영 원칙",
  },
  {
    id: "product",
    area: "웹앱·관리자",
    development: "사용자 흐름, 관리자 지표, 익명·집계 리포트",
    commercialization: "데모 시나리오, 기관 제안서, 운영 매뉴얼",
  },
  {
    id: "quality",
    area: "품질·보안",
    development: "버전 고정, 시험 지표, 접근권한, 로그, 파기정책",
    commercialization: "GS 인증 준비, 보안 검토, 개인정보 관리 문서",
  },
  {
    id: "supply",
    area: "기관 공급",
    development: "기관별 설정, 유지보수, 업데이트와 장애 대응 체계",
    commercialization: "서비스 카탈로그, 가격 정책, 조달 진입 준비",
  },
];

export const readinessChecklist: ReadinessGroup[] = [
  {
    group: "제품 완성도",
    items: [
      { title: "사용자 웹앱 v1.0 범위", status: "in-progress" },
      { title: "관리자 대시보드 지표", status: "in-progress" },
      { title: "통합 선별·라우팅 엔진", status: "planned" },
      { title: "고위험 알림 흐름", status: "later" },
    ],
  },
  {
    group: "데이터·실증",
    items: [
      { title: "RAG 데이터 300건 이상 목표", status: "in-progress" },
      { title: "회복사례 태그 체계", status: "planned" },
      { title: "파일럿 운영계획", status: "later" },
      { title: "파일럿 결과보고서", status: "later" },
    ],
  },
  {
    group: "개인정보·보안",
    items: [
      { title: "민감정보 처리 원칙", status: "in-progress" },
      { title: "접근권한과 로그 정책", status: "in-progress" },
      { title: "파기와 위탁관리 기준", status: "planned" },
      { title: "기관 보안 검토 자료", status: "later" },
    ],
  },
  {
    group: "품질·성능",
    items: [
      { title: "기능 범위와 버전 고정", status: "planned" },
      { title: "AI 성능평가 계획", status: "planned" },
      { title: "데이터 품질관리 계획", status: "planned" },
      { title: "웹 취약점 점검 계획", status: "later" },
    ],
  },
  {
    group: "인증·조달",
    items: [
      { title: "GS 인증 준비 문서", status: "later" },
      { title: "물품식별번호 등록", status: "later" },
      { title: "나라장터·벤처나라 등록", status: "later" },
      { title: "우수조달 준비 패키지", status: "later" },
    ],
  },
  {
    group: "제안·영업자료",
    items: [
      { title: "기관 도입 제안서", status: "later" },
      { title: "서비스 카탈로그", status: "later" },
      { title: "가격 정책", status: "later" },
      { title: "운영·유지보수 정책", status: "later" },
    ],
  },
];

export const sourceBasis = [
  "'공감 기반 트라우마 회복 시뮬레이션 AI 시스템' 특허 출원서",
  "기본 목표 및 구성: RISE 2차년도 연구개발계획",
  "통합 선별 문항: K-PHQ-9, K-PCL-5, K-MIES, K-SCS",
  "데이터 수집 및 실증: 국립소방연구원 119리빙랩",
];

export const guardrails = [
  "완료된 성과와 준비해야 할 항목을 구분합니다.",
  "AI를 통한 상담 대체가 아닌, 상담과 상담 사이의 일상생활에서의 상담 보조도구로써의 포지셔닝을 강조합니다.",
  "정신건강 자가점검, 위험 신호 확인, AI를 통한 적절한 개입 추천, 비대면 AI 상담을 중심으로 설명합니다.",
  "고위험 신호는 AI 단독 판단이 아니라 전문가 연계와 기관 위기대응 절차의 맥락에서 다룹니다.",
];

export const nextActions = [
  "리본톡 v1.0 시제품 범위 확정",
  "통합 선별·라우팅 데이터 구조 확정",
  "RAG 회복사례 태그 체계 확정",
  "관리자 대시보드 지표 확정",
  "파일럿 실증 프로토콜 초안 작성",
];
