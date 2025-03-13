"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/items/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/items/sheet"
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
      <div className="hidden md:flex">
        <Link href="/about" className="hover:text-secondary mx-[12px]">ABOUT</Link>
        <Link href="/schedule" className="hover:text-secondary mx-[12px]">SCHEDULE</Link>
        <Link href="/prizes" className="hover:text-secondary mx-[12px]">PRIZES</Link>
        <Link href="/sponsors" className="hover:text-secondary mx-[12px]">SPONSORS</Link>
        <a href="https://form.typeform.com/to/SX2PnmnU" target="_blank">
          <Button variant="default" size="sm" className="hover:bg-secondary mx-[10px]">REGISTER</Button>
        </a>
        
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col space-y-6 p-6">
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg">About</Link>
          <Link href="/schedule" onClick={() => setIsOpen(false)} className="text-lg">Schedule</Link>
          <Link href="/prizes" onClick={() => setIsOpen(false)} className="text-lg">Prizes</Link>
          <Link href="/sponsors" onClick={() => setIsOpen(false)} className="text-lg">Sponsors</Link>
          <a href="https://form.typeform.com/to/SX2PnmnU" onClick={() => setIsOpen(false)} className="text-lg">Register</a>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
