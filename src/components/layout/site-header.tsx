import Link from "next/link";
import { Menu, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
];

/**
 * 사이트 상단 헤더입니다.
 * 모바일에서는 드롭다운 메뉴, 데스크톱에서는 가로 내비게이션을 보여줍니다.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="size-5" aria-hidden />
          Starter Kit
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm">시작하기</Button>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="메뉴 열기">
                <Menu />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href} render={<Link href={item.href} />}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
