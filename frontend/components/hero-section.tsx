"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle, Star, ArrowRight, BookOpen, Wifi, Users, Building } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-cyan-50 via-white to-amber-50 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 border-cyan-200">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Colab Office
              </Badge>
              <Badge variant="outline" className="text-amber-700 border-amber-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Ariana
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">{t("heroTitle")}</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">{t("heroSubtitle")}</p>

            <p className="text-lg text-muted-foreground leading-relaxed">{t("heroDescription")}</p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Coworking</p>
                  <p className="text-sm text-muted-foreground">Espaces collaboratifs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Étude</p>
                  <p className="text-sm text-muted-foreground">Zones silencieuses</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Building className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Assistance administrative 🏢</p>
                  <p className="text-sm text-muted-foreground">Création de sociétés</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Domiciliation</p>
                  <p className="text-sm text-muted-foreground">Services aux entreprises</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href="/booking">
                  {t("getStarted")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="/services">{t("learnMore")}</a>
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>
                Assistance administrative & création de sociétés 🏢 • Domiciliation & services aux entreprises
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Colab Office Ariana</h3>
                  <Badge className="bg-green-100 text-green-800">{t("available")}</Badge>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-amber-50 rounded-2xl p-6 text-center">
                  <MapPin className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                  <p className="font-medium text-foreground">{t("locationName")}</p>
                  <p className="text-sm text-muted-foreground">{t("locationAddress")}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-green-600">15DT</p>
                    <p className="text-xs text-muted-foreground">Étude{t("perHour")}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-cyan-600">25DT</p>
                    <p className="text-xs text-muted-foreground">Coworking{t("perHour")}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-amber-600">150DT</p>
                    <p className="text-xs text-muted-foreground">Domiciliation{t("perMonth")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
