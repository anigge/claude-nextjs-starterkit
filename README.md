# Next.js Starter Kit

Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react로 구성된 웹 개발 스타터킷입니다.

## 기술 스택

| 기술 | 버전 | 비고 |
|---|---|---|
| Next.js | 15.x (App Router) | Turbopack 사용 |
| React | 19 | |
| TypeScript | 5.x | |
| Tailwind CSS | 4.x | `tailwind.config` 없이 `globals.css`에서 설정 |
| shadcn/ui | CLI 기반 | `components.json`, `base-nova` 스타일 |
| lucide-react | 아이콘 | |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 주요 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 프로젝트 구조

```
src/
├─ app/                  # App Router 라우트
│  ├─ layout.tsx         # 루트 레이아웃 (폰트, 메타데이터)
│  ├─ page.tsx           # 홈 페이지
│  ├─ about/page.tsx     # 소개 페이지 (라우팅 예시)
│  └─ globals.css        # Tailwind 진입점 + shadcn 테마 변수
├─ components/
│  ├─ ui/                # shadcn/ui 컴포넌트 (CLI로 추가)
│  ├─ layout/            # 헤더 등 레이아웃 컴포넌트
│  └─ home/              # 홈 전용 컴포넌트
└─ lib/
   └─ utils.ts           # cn() 클래스명 병합 유틸리티
```

## 컴포넌트 추가하기

shadcn/ui 컴포넌트는 CLI로 프로젝트에 복사합니다.

```bash
npx shadcn@latest add dialog
```

추가된 파일은 `src/components/ui/`에 생성되며, `@/components/ui/dialog`로 import합니다.

## 테마 변경하기

Tailwind v4는 설정 파일 대신 CSS에서 테마를 정의합니다. 색상 변수는 `src/app/globals.css`의 `:root`(라이트)와 `.dark`(다크)에서 수정하세요.

## 참고 문서

- [Next.js 설치 가이드](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS Next.js 가이드](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [shadcn/ui 설치 가이드](https://ui.shadcn.com/docs/installation)
