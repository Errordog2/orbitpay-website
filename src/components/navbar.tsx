"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Send } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full border-b bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="OrbitPay home" className="shrink-0">
          <Logo />
        </Link>

        <div className="sg-glass hidden items-center gap-1 rounded-full border px-2 py-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button render={<Link href="https://orbitpay-frontend.vercel.app" />} nativeButton={false}>
            <Send data-icon="inline-start" />
            Launch App
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden" aria-label="Open menu">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto pb-6">
              <Button render={<Link href="https://orbitpay-frontend.vercel.app" />} nativeButton={false} className="w-full">
                <Send data-icon="inline-start" />
                Launch App
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
