"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import { gsap } from "gsap"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = menuRef.current
    if (!el) return

    gsap.killTweensOf(el)
    if (isOpen) {
      gsap.set(el, { display: "block" })
      gsap.fromTo(
        el,
        { height: 0, opacity: 0, y: -8 },
        { height: "auto", opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        y: -8,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(el, { display: "none" })
      })
    }
  }, [isOpen])

  return (
    <nav className="fixed top-4.5 left-1/2 -translate-x-1/2 z-50 glass-effect border-b border-border/20 rounded-[30px] w-[90vw] sm:w-[75vw] md:w-[70vw] shadow-md md:shadow-lg" id="navbar">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       
          <div className="flex items-center space-x-2">
          <img src="https://i.postimg.cc/DZyPZ49T/photo-6138736463878145930-x-removebg-preview.png" height={60} width={60} />
            <span className="text-xl font-heading font-black text-foreground">Cad Tech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>

            <button className="cssbuttons-io">
              <span>
                Apply Now</span
              >
            </button>

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div
            ref={menuRef}
            aria-hidden={!isOpen}
            className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2 overflow-hidden"
            style={{ display: "none", height: 0 }}
          >
            <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </a>
             <button className="cssbuttons-io sm:w-full">
              <span>
                Apply Now</span
              >
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}
