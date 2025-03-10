"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-6 bg-background">
      {/* Logo */}
      <Link href="/" className="text-xl">
      <span className="flex flex-row font-bayon select-none">
        <h1 className="text-[24px] relative group">
          DESIGNATH
        </h1>
        <Image
          src="/assets/transparent_heart.png"
          alt="X"
          width={24}
          height={24}
          className="object-contain animate-move relative -translate-y-[3px]"
        />
        <h1 className="text-[24px]">N</h1>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <Link href="/schedule" className="hover:text-secondary">Schedule</Link>
        <Link href="/application" className="hover:text-secondary">Application</Link>
        <Link href="/prizes" className="hover:text-secondary">Prizes</Link>
        <Link href="/sponsors" className="hover:text-secondary">Sponsors</Link>
        <Link href="/faq" className="hover:text-secondary">FAQ</Link>
        <Link href="/contact" className="hover:text-secondary">Contact</Link>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col space-y-6 p-6">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
          <Link href="/schedule" onClick={() => setIsOpen(false)} className="text-lg">Schedule</Link>
          <Link href="/application" onClick={() => setIsOpen(false)} className="text-lg">Application</Link>
          <Link href="/prizes" onClick={() => setIsOpen(false)} className="text-lg">Prizes</Link>
          <Link href="/sponsors" onClick={() => setIsOpen(false)} className="text-lg">Sponsors</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg">FAQ</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg">Contact</Link>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
