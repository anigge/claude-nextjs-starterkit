import { SiteHeader } from "@/components/layout/site-header";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">소개</h1>
        <p className="mt-4 text-muted-foreground">
          이 페이지는 라우팅 예시입니다. 새 페이지는 <code>src/app</code> 아래에 폴더를 만들고
          <code> page.tsx</code>를 추가하면 됩니다.
        </p>
      </main>
    </div>
  );
}
