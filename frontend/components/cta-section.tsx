'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function CTASection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t('ctaTitle')}</h2>

          <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            {t('ctaDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-cyan-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t('ctaButtonPrimary')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-700 transition-all duration-300 bg-transparent"
            >
              <Phone className="mr-2 h-4 w-4" />
              {t('ctaButtonSecondary')}
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-cyan-200">
            <span>{t('ctaFeature1')}</span>
            <span>{t('ctaFeature2')}</span>
            <span>{t('ctaFeature3')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}