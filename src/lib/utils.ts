import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 조건부 클래스명을 병합하고 Tailwind 충돌을 해결합니다.
 * shadcn/ui 공식 설치 가이드의 표준 유틸리티입니다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
