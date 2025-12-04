"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export function Header() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Close mobile menu when clicking outside or on a link
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/services", label: "services" },
    { href: "/booking", label: "booking" },
    { href: "/faq", label: "faq" },
    { href: "/contact", label: "contact" },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">Colab Office</div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                {mounted ? t(item.label) : ""}
              </a>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {mounted && (
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
            )}
            
            {/* Phone button - Hidden on small screens, visible on medium+ */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 bg-transparent" 
              asChild
            >
              <a href="https://wa.me/21620123456" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+216 20 123 456</span>
                <span className="lg:hidden">Call</span>
              </a>
            </Button>

            {/* Mobile Language Switcher - Visible on small screens */}
            {mounted && (
              <div className="sm:hidden">
                <LanguageSwitcher />
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(!isMenuOpen)
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background absolute left-0 right-0 top-16 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {mounted ? t(item.label) : ""}
                </a>
              ))}
              
              {/* Phone link for mobile */}
              <a
                href="https://wa.me/21620123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>+216 20 123 456</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}