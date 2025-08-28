"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon, ChevronDown, Sun, Moon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// Optional: add your logo path here if you have one
const LOGO_SRC = "/logo.png"; // e.g., "/logo.svg"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PRODUCT_ITEMS = [
  { href: "/products/ai-tools", label: "AI Tools" },
  { href: "/products/apis", label: "APIs" },
  { href: "/pricing", label: "Pricing" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      {LOGO_SRC ? (
        <Image src={LOGO_SRC} alt="Alnnovate" width={28} height={28} className="rounded-lg" />
      ) : (
        <Hexagon className="h-6 w-6" />
      )}
      <span className="font-semibold tracking-tight">Alnnovate</span>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-2xl"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span key="sun" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
            <Sun className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span key="moon" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
            <Moon className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-1">
      {/* Products dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="rounded-2xl">
            Products <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-56">
          <DropdownMenuLabel>Build with Alnnovate</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {PRODUCT_ITEMS.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className="w-full">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <Link key={link.href} href={link.href} className="px-2 py-2">
            <span className={`text-sm ${active ? "font-semibold" : ""}`}>{link.label}</span>
            {active && (
              <motion.div
                layoutId="active-underline"
                className="h-0.5 rounded-full"
                style={{ width: "100%" }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

function DesktopActions() {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input placeholder="Search docs, tools, APIs" className="pl-8 w-64 rounded-2xl" />
      </div>
      <ThemeToggle />
      <Button asChild className="rounded-2xl">
        <Link href="/get-started">Get Started</Link>
      </Button>
    </div>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden rounded-2xl" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SheetHeader className="px-4 py-3 text-left">
          <SheetTitle className="flex items-center gap-2">
            <Hexagon className="h-5 w-5" /> Alnnovate
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <nav className="p-3">
          <div className="grid gap-1">
            <Link href="/products" onClick={close} className="px-3 py-2 rounded-xl flex items-center justify-between">
              <span>Products</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
            {PRODUCT_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} onClick={close} className="px-5 py-2 rounded-xl text-sm">
                {item.label}
              </Link>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="grid">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`px-3 py-2 rounded-xl ${pathname === link.href ? "font-semibold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="flex items-center gap-2 px-3">
            <Input placeholder="Search" className="rounded-2xl" />
            <ThemeToggle />
            <Button asChild className="rounded-2xl">
              <Link href="/get-started">Start</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu" className="ml-auto">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MobileMenu />
            <Logo />
          </div>

          <DesktopNav />
          <DesktopActions />
        </div>
      </div>
    </header>
  );
}

/*
How to use:
1) Ensure shadcn/ui is installed and the following components are generated:
   button, input, dropdown-menu, sheet, separator
2) Ensure you have ThemeProvider from next-themes set up in app/layout.tsx.
3) Save this file as components/navbar.tsx and import it in app/layout.tsx above your <main>.
4) Update links (NAV_LINKS, PRODUCT_ITEMS) as needed. No hard-coded colors are used, theme controls appearance.
*/
