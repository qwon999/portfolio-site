export type ProjectLinkType = "demo" | "github" | "paper" | "ppt" | "slides" | "video" | "notion" | "blog" | "other"

export interface ProjectLink {
  label: string
  url: string
  type?: ProjectLinkType
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  fullDescription?: string
  features?: string[]
  challenges?: string[]
  solutions?: string[]
  outcomes?: string[]
  year: string
  duration: string
  role: string
  problem?: string
  approach?: string[]
  learned?: string[]
  demoUrl?: string
  githubUrl?: string
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: "see-you-letter",
    title: "See You Letter",
    description:
      "음성으로 일상을 기록하면 AI가 감정을 분석해 편지를 만들고, NFT 형태의 디지털 타임캡슐로 선물할 수 있는 서비스",
    tags: ["Kotlin", "Android", "Wear OS", "LLM", "NFT", "IPFS", "STT"],
    image: "/see_you_letter.png",
    fullDescription:
      "음성으로 일상을 기록하면 AI가 감정을 분석해 편지를 만들어주고, 이를 NFT 형태의 디지털 타임캡슐로 선물할 수 있는 서비스입니다. '내일 갑자기 모든 게 끝난다면, 지금의 마음을 어떻게 남길 수 있을까?'라는 질문에서 시작되었으며, 상대에게 원하는 시점에 전할 수 있는 기록을 남기는 방법을 제시합니다.",
    features: [
      "갤럭시 워치 음성 녹음 및 STT 텍스트 변환",
      "LLM 기반 감정, 키워드, 대상 자동 추출",
      "AI 생성 편지 초안 및 사용자 수정 기능",
      "Kotlin 기반 Android 및 Wear OS 연동",
      "IPFS 기반 분산 스토리지에 파일 저장",
      "NFT로 디지털 타임캡슐 구현",
    ],
    challenges: [
      "복잡한 AI 처리를 사용자에게 단순하게 보이도록 UX 설계",
      "음성-텍스트-감정분석-편지생성의 비동기 파이프라인 구현",
      "프라이빗한 내용을 온체인에 노출하지 않으면서 NFT로 관리",
    ],
    solutions: [
      "비동기 플로우로 복잡한 AI 처리를 백그라운드에서 처리하고, 사용자는 '녹음 → 결과 확인'만 경험하도록 설계",
      "STT → LLM 감정/키워드 추출 → 편지 생성 파이프라인을 순차적으로 구성하고 각 단계별 에러 핸들링 구현",
      "IPFS에 실제 파일 업로드 후, NFT에는 IPFS 주소만 저장하여 지정된 사람만 열람 가능한 구조 설계",
    ],
    outcomes: [
      "SSAFY 프로젝트 우수상 수상",
      "복잡한 AI·블록체인 파이프라인의 사용자 경험 단순화 성공",
      "감정·기억·유산이라는 추상적 가치의 서비스화 달성",
    ],
    year: "2025",
    duration: "2025.09(4주)",
    role: "AI 파이프라인 설계 및 Kotlin/Android 개발",
    problem:
      "'내일 갑자기 모든 게 끝난다면, 지금의 마음을 어떻게 남길 수 있을까?'라는 질문에서 시작했습니다. 감정과 기억을 디지털로 보존하고, 원하는 시점에 소중한 사람에게 전달할 수 있는 방법이 필요했습니다.",
    approach: [
      "**비동기 AI 파이프라인 설계** - 갤럭시 워치 음성 녹음 → STT 변환 → LLM 감정/키워드 추출 → 편지 생성의 복잡한 플로우를, 사용자는 '녹음 → 결과 확인'만 하도록 UX 단순화",
      "**Kotlin 기반 Android/Wear OS 통합** - 워치와 스마트폰 앱 간 실시간 데이터 동기화 구현",
      "**IPFS + NFT 프라이빗 타임캡슐** - IPFS에 실제 편지 저장, NFT에는 IPFS 주소만 기록해 지정된 사람만 열람 가능한 구조 설계",
      "**LLM 기반 감정 분석 및 편지 생성** - 사용자의 음성 데이터를 분석해 감정, 키워드, 대상을 추출하고 자동으로 편지 초안 생성",
    ],
    learned: [
      "복잡한 AI·블록체인 파이프라인을 사용자가 체감하지 못할 정도로 단순화하는 UX 설계의 중요성",
      "비동기 처리와 에러 핸들링을 통해 안정적인 서비스 경험 제공",
      "추상적 가치(감정, 기억, 유산)를 기술로 구현하는 방법론",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/SeeY0uLetter/SeeYouLetter", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAGz2Rc7FMY/x96ehzGOsQSt35aA7T2VPQ/view?utm_content=DAGz2Rc7FMY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf72ab5af50", type: "ppt" },
    ]
  },
  {
    id: "apilog",
    title: "APILog",
    description: "서비스 로그를 수집해 AI 리포트와 커스텀 위젯을 자동으로 생성하는 오픈소스 로그 분석 플랫폼",
    tags: ["Python", "FastAPI", "LLM", "InfluxDB", "Pydantic", "Agent"],
    image: "/apilog.png",
    fullDescription:
      "서비스 로그를 수집해 AI 리포트와 커스텀 위젯을 자동으로 만들어주는 오픈소스 로그 분석 플랫폼입니다. 운영자가 직접 쿼리를 짜고 지표를 조합하던 일을, LLM 기반 에이전트가 대신 수행하도록 설계했습니다.",
    features: [
      "InfluxDB 기반 로그 수집 및 저장",
      "LLM 기반 자동 운영 리포트 생성",
      "FastAPI 라우터 자동 스캔 및 응답 샘플 수집",
      "Pydantic 스키마 기반 구조적 LLM 응답 파싱",
      "세션 통계, 이탈률, 인기 페이지 등 기본 위젯 제공",
      "자연어 요청으로 커스텀 위젯 자동 생성",
    ],
    challenges: [
      "LLM에게 효과적으로 컨텍스트를 전달하는 방법",
      "LLM 응답의 불안정성을 실서비스에서 사용 가능한 수준으로 개선",
      "다양한 사용자 요구사항에 맞는 위젯을 자동으로 생성",
    ],
    solutions: [
      "FastAPI 라우터를 코드 레벨에서 스캔하고 실제 응답 샘플을 자동 수집해 LLM 컨텍스트로 전달",
      "Pydantic 기반 스키마로 LLM 응답을 검증하고, 일부 필드 오류 시 목업 값으로 대체하는 폴백 로직 구현",
      "사용자의 자연어 요청 + DB 스키마 정보를 LLM에 전달해 쿼리와 위젯 스펙을 자동 생성하고 대시보드에 등록",
    ],
    outcomes: [
      "LLM을 답변 봇이 아닌 쿼리/스펙/코드 생성 에이전트로 활용하는 패턴 확립",
      "스키마, 폴백, 샘플 기반 컨텍스트로 실사용 가능한 안정성 확보",
      "운영자의 로그 분석 시간 대폭 단축",
    ],
    year: "2025",
    duration: "2025.10 - 2025.11 (7주)",
    role: "AI 리포트 파이프라인 및 위젯 생성 시스템 설계·구현",
    problem:
      "운영자는 수많은 로그와 대시보드를 가지고 있지만, '그래서 지금 서비스가 어떤 상태인지, 뭐가 문제인지'를 이해하기 위해 매번 수동으로 쿼리를 짜고 지표를 조합해야 했습니다. 저는 이 과정을 에이전트가 대신해 줄 수 없을까?라는 질문에서 APILog를 시작했습니다.",
    approach: [
      "**AI 리포트 파이프라인 설계 및 구현** - InfluxDB 로그 기반으로 LLM에게 질의해 운영 리포트를 자동 생성. FastAPI 백엔드의 모든 라우터를 코드 레벨에서 스캔하고 실제 응답 샘플을 자동 수집해 LLM 컨텍스트로 전달하는 구조 설계",
      "**신뢰도 높은 LLM 응답 설계** - Pydantic 기반 스키마로 LLM 응답을 구조적으로 파싱하고 검증. 일부 필드 오류 시 목업 값으로 대체하는 폴백 로직 구현으로 실서비스 안정성 확보",
      "**기본 위젯 및 AI 커스텀 위젯 생성** - 세션 통계, 이탈률, 인기 페이지 등 핵심 운영 지표 위젯을 직접 설계·구현. 사용자의 자연어 요청 + DB 스키마 정보를 LLM에 전달해 필요한 쿼리와 위젯 스펙을 자동 생성하고 대시보드에 등록",
    ],
    learned: [
      "LLM을 '답변 봇'이 아니라, 쿼리/스펙/코드를 생성하는 에이전트로 활용하는 패턴",
      "'LLM은 항상 틀릴 수 있다'는 전제를 두고, 스키마, 폴백, 샘플 기반 컨텍스트를 통해 사용 가능한 수준의 안정성을 확보하는 방법",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/SeeY0uLetter/SeeYouLetter", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAG4oFjJl9Y/h1VaeP9nFl9Kj3oilzTrCg/view?utm_content=DAG4oFjJl9Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4735151f64", type: "ppt" },
      { label: "Site", url: "https://apilog.kr", type: "blog" },
    ]
  },
  {
    id: "yemaehaetyyang",
    title: "예매했냥",
    description:
      "공연 정보를 제공하는 웹 서비스를 짧은 기간 안에 고품질로 구축하고 팀의 개발 문화를 함께 설계한 프로젝트",
    tags: ["Minio", "React","SpringBoot", "JIRA", "GitLab"],
    image: "/ymhn.png",
    fullDescription:
      "공연 정보를 제공하는 웹 서비스를 짧은 기간 안에 고품질로 구축하고, 팀의 개발 문화를 함께 설계한 프로젝트입니다. SSAFY 프로젝트에서 우수 프로젝트 3등을 수상했습니다.",
    features: [
      "Object Storage(Minio) 기반 이미지 리소스 처리",
      "AI 에이전트를 활용한 프론트엔드 목업 제작",
      "JIRA, GitLab, 칸반 보드 기반 이슈 관리",
      "코드 리뷰 및 배포 프로세스 정립",
      "재사용 가능한 협업 템플릿 구축",
      "기술-비즈니스 통합 프레젠테이션",
    ],
    challenges: [
      "이미지 리소스 처리로 인한 서버 부하",
      "짧은 개발 기간 내 고품질 결과물 도출",
      "팀 협업 프로세스의 효율화",
    ],
    solutions: [
      "Object Storage(Minio) 도입으로 이미지 렌더링을 서버에서 분리해 페이지 로딩 성능 약 70% 개선",
      "AI 에이전트를 프론트엔드 목업 제작에 활용해 초기 UI 제작 기간을 약 50% 단축",
      "JIRA, GitLab, 칸반 보드를 통한 애자일 프로세스 정립으로 이후 프로젝트에서도 재사용 가능한 협업 템플릿 구축",
    ],
    outcomes: [
      "SSAFY 우수 프로젝트 3등 수상",
      "페이지 로딩 체감 성능 약 70% 개선",
      "UI 제작 기간 약 50% 단축",
      "재사용 가능한 팀 협업 프로세스 확립",
    ],
    year: "2025",
    duration: "2025.08 - 2025.09 (5주)",
    role: "백엔드 아키텍처, 성능 최적화, 협업 문화 설계",
    problem:
      "공연 정보 서비스를 제한된 시간 내에 완성도 있게 구축해야 했고, 이미지 리소스 처리로 인한 성능 문제와 팀 협업의 효율성이 주요 과제였습니다.",
    approach: [
      "**Object Storage(Minio) 도입** - 이미지 렌더링을 서버에서 분리해 페이지 로딩 성능 약 70% 개선",
      "**AI 에이전트 활용 목업 제작** - 프론트엔드 목업 제작에 AI를 활용해 초기 UI 제작 기간을 약 50% 단축",
      "**애자일 프로세스 정립** - JIRA, GitLab, 칸반 보드를 통한 이슈 관리 및 코드 리뷰 프로세스를 구축해 이후 프로젝트에서도 재사용 가능한 협업 템플릿 확립",
    ],
    learned: [
      "적절한 인프라 선택이 서비스 성능에 미치는 영향",
      "AI 도구를 활용한 개발 생산성 향상 방법",
      "체계적인 협업 프로세스의 중요성과 팀 문화 설계 경험",
    ],
    links: [
      { label: "PPT", url: "https://www.canva.com/design/DAGv7KsMcls/GxSJUQEcBvD7xOikrE93rw/view?utm_content=DAGv7KsMcls&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8018652872", type: "ppt" },
    ]
  },
  {
    id: "kist-quantum-control",
    title: "Single Qubit Optimal Control",
    description:
      "노이즈가 있는 환경에서 단일 큐비트를 가장 빠르게 목표 상태로 보내기 위한 최적 제어 알고리즘 설계 연구",
    tags: ["Python", "NumPy", "Quantum Computing", "A* Algorithm", "Optimization"],
    image: "/kist.png",
    fullDescription:
      "KIST 양자정보연구단에서 진행한 연구로, 노이즈가 있는 환경에서 단일 큐비트를 가장 빠르게 목표 상태로 전환하는 최적 제어 알고리즘을 설계했습니다. Quantum Speed Limit 이론과 A* 알고리즘을 결합하여 이론적 한계에 근접한 성능을 달성했습니다.",
    features: [
      "Quantum Speed Limit(QSL) 계산 모델 구현",
      "A* 기반 최적 경로 탐색 알고리즘 설계",
      "노이즈 환경에서의 효율적인 상태 공간 탐색",
      "Python + NumPy 기반 행렬 연산 최적화",
      "실험 장비 적용 가능한 알고리즘 개발",
    ],
    challenges: [
      "단순 이산화 방식의 경로 수 폭발 문제 (TLE)",
      "'최대한 빠른'이라는 목표의 정량화 필요",
      "노이즈가 있는 상태 공간에서의 효율적 탐색",
    ],
    solutions: [
      "Quantum Speed Limit을 제어 시간의 이론적 하한선으로 활용",
      "QSL 기반 휴리스틱 함수를 설계하여 A* 알고리즘 적용",
      "NumPy 행렬 연산 최적화로 시뮬레이션 성능 개선",
    ],
    outcomes: [
      "제어 시간 110μs → 48μs (56% 단축) 달성",
      "계산된 QSL 값에 근접한 결과로 이론적 한계 검증",
      "실험 장비 적용 가능한 알고리즘으로 평가됨",
      "후속 논문 실험 설계에 참고 모델로 활용",
    ],
    year: "2023",
    duration: "2023.03 - 2023.08 (6개월)",
    role: "Research Intern",
    problem:
      "양자 컴퓨터의 기본 단위인 큐비트를 제어할 때, 노이즈가 있는 실제 환경에서 '최대한 빠르게' 목표 상태로 전환하는 것이 핵심 과제입니다. 단순 이산화 방식은 경로 수가 폭발적으로 증가해 계산이 불가능했습니다.",
    approach: [
      "**Quantum Speed Limit(QSL) 활용** - QSL을 제어 시간의 이론적 하한선으로 계산하고, 이를 휴리스틱 함수로 활용해 A* 알고리즘 설계",
      "**효율적인 상태 공간 탐색** - 노이즈 환경을 고려한 상태 공간에서 QSL 기반 휴리스틱으로 최적 경로를 효율적으로 탐색",
      "**NumPy 행렬 연산 최적화** - Python + NumPy 기반으로 실험 장비에 적용 가능한 수준의 성능 확보",
    ],
    learned: [
      "이론적 한계(QSL)와 실용적 알고리즘(A*)을 결합해 실제 문제를 해결하는 방법",
      "계산 복잡도를 줄이기 위한 휴리스틱 설계의 중요성",
      "실험 장비 적용을 고려한 알고리즘 최적화 경험",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/qwon999/kist_nv_spin_control", type: "github" },
    ]
  },
  {
    id: "skku-quantum-metrology",
    title: "Quantum Metrology with Saturable Absorber",
    description: "양자 상태의 빛을 활용해 Saturable Absorber 시스템에서 전송 측정 정밀도를 향상시키는 방법 연구",
    tags: ["Python", "SciPy", "Quantum Metrology", "Numerical Analysis", "Monte Carlo"],
    image: "/three-level.png",
    fullDescription:
      "성균관대학교 화학과 졸업논문으로 진행한 양자 측정학 연구입니다. Two-level/Three-level Saturable Absorber 시스템에서 Fisher Information을 활용하여 양자 상태 빛의 측정 정밀도 향상을 수치적으로 검증했습니다.",
    features: [
      "비선형 미분방정식 수치 해석 모델 구축",
      "LSODA 알고리즘 기반 자동 경직성 감지 및 동적 스텝 조절",
      "Monte-Carlo 시뮬레이션을 통한 측정 오차 반영",
      "Coherent, Squeezed, Fock State의 Fisher Information 비교",
      "Three-level Model 수치해석 방법론 제시",
    ],
    challenges: [
      "비선형 미분방정식의 수치적 불안정성",
      "다양한 양자 상태별 측정 오차 모델링",
      "해석적 해가 없는 Three-level Model 분석",
    ],
    solutions: [
      "SciPy의 LSODA 알고리즘으로 경직성을 자동 감지하고 동적 스텝 조절을 통해 안정적인 수치 해 도출",
      "각 양자 상태 특성에 맞는 Monte-Carlo 오차 모델 적용해 현실적인 측정 환경 반영",
      "Two-level 경험을 기반으로 Three-level 미분방정식 정의 및 수치 해석 절차 제안",
    ],
    outcomes: [
      "Fock State가 가장 높은 Fisher Information 달성 확인",
      "양자 상태 빛이 고전 상태 대비 측정 정밀도 향상 수치적 검증",
      "Three-level 모델 분석을 위한 방법론 토대 마련",
      "복잡한 양자 시스템 수치해석 방법 확립",
    ],
    year: "2024",
    duration: "2024.02 - 2024.06 (5개월)",
    role: "학부연구생 (졸업논문)",
    problem:
      "Two-level/Three-level Saturable Absorber 시스템에서 양자 상태 빛이 고전 상태 대비 측정 정밀도를 향상시킬 수 있는지 수치적으로 검증하는 것이 목표였습니다. 비선형 미분방정식의 수치적 불안정성과 해석적 해가 없는 Three-level 모델 분석이 주요 과제였습니다.",
    approach: [
      "**LSODA 알고리즘 기반 안정적 수치 해석** - SciPy의 LSODA 알고리즘으로 경직성을 자동 감지하고 동적 스텝 조절을 통해 안정적인 수치 해 도출",
      "**Monte-Carlo 시뮬레이션** - 각 양자 상태(Coherent, Squeezed, Fock) 특성에 맞는 측정 오차 모델을 적용해 현실적인 측정 환경 반영",
      "**Three-level Model 방법론 제시** - Two-level 경험을 기반으로 Three-level 미분방정식 정의 및 수치 해석 절차 제안",
    ],
    learned: [
      "복잡한 비선형 시스템을 수치적으로 안정적으로 해석하는 방법",
      "이론과 실험 사이의 간극을 Monte-Carlo 시뮬레이션으로 메우는 접근법",
      "해석적 해가 없는 문제에 대한 수치적 방법론 설계 경험",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/qwon999/thesis-3level-transmittance", type: "github" },
    ]
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
