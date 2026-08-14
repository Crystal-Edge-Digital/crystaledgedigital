import Image from "next/image"
import { cn } from "@/lib/utils"

export function CrystalIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/ced-logo.png"
      alt="Crystal Edge Digital logo"
      width={1046}
      height={1650}
      className={cn("h-8 w-auto", className)}
    />
  )
}
