import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type CoverSize = "S" | "M" | "L"

export function getCoverUrl(
  coverId?: number,
  size: CoverSize = "M"
) {
  if (!coverId) return "/covers/placeholder.webp"

  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`
}
