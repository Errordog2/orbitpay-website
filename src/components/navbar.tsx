"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="OrbitPay home" className="flex shrink-0 items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
            <Send className="text-primary-foreground" size={14} />
          </div>
          <span className="text-lg font-semibold tracking-tight">OrbitPay</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button render={<Link href="https://orbitpay-frontend.vercel.app" />} nativeButton={false}>
            Launch App
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <SheetHeader><SheetTitle>OrbitPay</SheetTitle></SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === link.href ? "text-foreground bg-muted" : "text-muted-foreground"
                }`}>{link.label}</Link>
              ))}
            </div>
            <div className="mt-auto pb-6">
              <Button render={<Link href="https://orbitpay-frontend.vercel.app" />} nativeButton={false} className="w-full">
                Launch App
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
