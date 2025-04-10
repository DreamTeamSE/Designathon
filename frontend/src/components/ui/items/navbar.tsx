"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/items/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/items/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Designathon
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <Link href="/schedule" className="hover:text-primary">Schedule</Link>
        <Link href="/application" className="hover:text-primary">Application</Link>
        <Link href="/prizes" className="hover:text-primary">Prizes</Link>
        <Link href="/sponsors" className="hover:text-primary">Sponsors</Link>
        <Link href="/faq" className="hover:text-primary">FAQ</Link>
        <Link href="/contact" className="hover:text-primary">Contact</Link>
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
