"use client"

import { useLanguage } from "@/hooks/use-language"
import { useState } from "react"
import { MapPin, Wifi, Clock, Users, ArrowRight, Phone, Sparkles, ChevronDown, Coffee, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted] = useState(true)

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features-section')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] py-20 md:py-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute bottom-1/4 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              <Sparkles className="h-4 w-4" />
              <span>{t("premiumWorkspace")}</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-slate-900">
                  {t("heroTitlePart1")}
                </span>
                <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {t("heroTitlePart2")}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base font-semibold rounded-xl shadow-lg"
                onClick={() => window.location.href = '/booking'}
              >
                <span>{t("reserve")}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group border-2 border-slate-300 hover:border-primary text-slate-800 hover:text-primary px-6 py-5 text-base font-semibold rounded-xl"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t("contact")}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-slate-600 mt-1">{t("satisfactionRate")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-slate-600 mt-1">{t("availability")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-slate-600 mt-1">{t("happyMembers")}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Wifi className="h-5 w-5" />,
                title: t("freeHighSpeedWifi"),
                subtitle: "1Gbps Fiber Optic",
                description: t("wifiDescription")
              },
              {
                icon: <Monitor className="h-5 w-5" />,
                title: t("equippedMeetingRooms"),
                subtitle: "HD Screens & Audio",
                description: t("meetingRoomsDescription")
              },
              {
                icon: <Coffee className="h-5 w-5" />,
                title: t("refreshmentsIncluded"),
                subtitle: "Free Coffee & Tea",
                description: t("refreshmentsDescription")
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-lg bg-white border border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={scrollToFeatures}
              >
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-cyan-600 flex items-center justify-center shadow">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-cyan-600 font-medium mt-0.5">{feature.subtitle}</p>
                    <p className="text-sm text-slate-600 mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <div className="text-sm font-medium">{t("locationAddress")}</div>
                <div className="text-xs text-slate-500">{t("easyAccess")}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-600">
                <Clock className="h-4 w-4" />
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-600">
                <Users className="h-4 w-4" />
                <span>50+ Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToFeatures}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll down"
      >
        <div className="w-8 h-12 rounded-full border border-primary/30 flex items-center justify-center">
          <ChevronDown className="h-5 w-5 text-primary" />
        </div>
      </button>

      <style jsx global>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  )
}