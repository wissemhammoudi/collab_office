"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export function Header() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">Colab Office</div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              {mounted ? t("home") : ""}
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              {mounted ? t("about") : ""}
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">
              {mounted ? t("services") : ""}
            </a>
            <a href="/booking" className="text-foreground hover:text-primary transition-colors">
              {mounted ? t("booking") : ""}
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              {mounted ? t("contact") : ""}
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            {mounted && <LanguageSwitcher />}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 bg-transparent" 
              asChild
            >
              <a href="https://wa.me/21620123456" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                +216 20 123 456
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}