import React, { useState, useEffect, useRef } from "react";
import Button from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Our Story", id: "story" },
    { name: "Gallery", id: "gallery" },
    { name: "RSVP", id: "rsvp" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu on navigation
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide/show navbar on scroll
      gsap.to(navRef.current, {
        y: -100, // Move up to hide
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "body",
          start: "top -=100", // Start hiding when scrolled 100px down
          end: "bottom top",
          toggleActions: "play reverse play reverse", // Play on scroll down, reverse on scroll up
          onUpdate: (self) => {
            if (self.direction === -1) { // Scrolling up
              gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.3 });
            } else if (self.direction === 1 && !isMenuOpen) { // Scrolling down and menu is closed
              gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.3 });
            }
          }
        }
      });

      // Initial navbar reveal
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      });
    }, navRef); // Scope GSAP animations to navRef

    return () => ctx.revert();
  }, [isMenuOpen]); // Re-run effect if menu state changes to control hide/show

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-[var(--font-heading)] font-bold text-[var(--foreground)]">
          Micaela & Tim
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="text-[var(--foreground)] hover:text-[var(--primary)] text-base font-semibold transition-colors duration-200"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-[var(--foreground)]" /> : <Menu className="h-6 w-6 text-[var(--foreground)]" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-[var(--background)] border-t border-[var(--border)] shadow-lg transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="flex flex-col items-center py-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full text-center py-3 text-[var(--foreground)] hover:text-[var(--primary)] text-lg font-semibold"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
