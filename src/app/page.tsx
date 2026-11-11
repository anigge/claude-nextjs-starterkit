import { Code2, Layers, Palette, Smartphone } from "lucide-react";

import { FeatureCard } from "@/components/home/feature-card";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const features = [
  {
    icon: Code2,
    title: "TypeScript",
    description: "타입 안정성을 갖춘 Next.js 15 App Router 기반 개발 환경입니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "tailwind.config 없이 CSS에서 테마를 정의하는 최신 설정입니다.",
  },
  {
    icon: Layers,
    title: "shadcn/ui",
    description: "복사해서 쓰는 접근성 높은 컴포넌트를 필요한 만큼만 추가합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 자연스럽게 대응하는 구조를 제공합니다.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16">
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            웹 개발을 빠르게 시작하세요
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Next.js, TypeScript, Tailwind CSS, shadcn/ui가 미리 설정된 스타터킷입니다.
          </p>
          <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <Input type="email" placeholder="이메일을 입력하세요" aria-label="이메일" />
            <Button type="submit">구독하기</Button>
          </form>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
