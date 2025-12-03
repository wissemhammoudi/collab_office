"use client"

import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import { Sparkles, Check, Clock, Users, Zap, ArrowRight, Monitor, BookOpen, FileText, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const { t, isMounted } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted || !isMounted) {
    return (
      <section id="services" className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
          <div className="absolute -top-32 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2 mx-auto">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mx-auto"></div>
              <div className="w-40 h-8 bg-gray-200 rounded animate-pulse mx-auto mt-2"></div>
            </h2>
            
            <div className="w-96 h-6 bg-gray-200 rounded animate-pulse mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-200 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
                
                <div className="space-y-3 mb-6">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-24 h-3 bg-gray-200 rounded animate-pulse mt-1"></div>
                    </div>
                    <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const services = [
    {
      id: 1,
      title: t("coworkingService") || "Coworking Space",
      subtitle: t("collaborative") || "Collaborative",
      description: t("coworkingDesc") || "Professional workspace with all amenities included",
      features: [
        t("openPrivateSpaces") || "Open & Private Spaces",
        t("freeHighSpeedWifi") || "High-Speed WiFi",
        t("equippedMeetingRooms") || "Meeting Rooms",
        t("freeCoffeeTea") || "Free Coffee & Tea",
      ],
      price: "25 DT",
      period: t("perHour") || "/hour",
      cta: t("reserve") || "Reserve",
      highlight: true,
      icon: <Monitor className="h-6 w-6" />
    },
    {
      id: 2,
      title: t("studyZonesTitle") || "Study Zones",
      subtitle: t("concentration") || "Focus",
      description: t("studyZonesDesc") || "Quiet zones perfect for studying and deep work",
      features: [
        t("silenceGuaranteed") || "Silent Environment",
        t("freeHighSpeedWifi") || "High-Speed WiFi",
        t("electricOutlets") || "Power Outlets",
        t("optimalLighting") || "Optimal Lighting",
      ],
      price: "15 DT",
      period: t("perHour") || "/hour",
      cta: t("reserve") || "Reserve",
      highlight: false,
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 3,
      title: t("adminServiceTitle") || "Admin Services",
      subtitle: t("completeSupport") || "Full Support",
      description: t("adminServiceDesc") || "Complete administrative and legal support",
      features: [
        t("companyCreationService") || "Company Creation",
        t("adminFormalities") || "Admin Formalities",
        t("legalAdvice") || "Legal Advice",
        t("personalizedSupport") || "Personalized Support",
      ],
      price: t("onQuote") || "Custom Quote",
      period: "",
      cta: t("consult") || "Consult",
      highlight: false,
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 4,
      title: t("domiciliationTitle") || "Virtual Office",
      subtitle: t("prestigiousAddress") || "Prestigious Address",
      description: t("domiciliationDesc") || "Professional business address and mail handling",
      features: [
        t("prestigiousCommercialAddress") || "Commercial Address",
        t("mailReception") || "Mail Reception",
        t("phoneService") || "Phone Service",
        t("meetingRoomIncluded") || "Meeting Room Access",
      ],
      price: "150 DT",
      period: t("perMonth") || "/month",
      cta: t("getInfo") || "Get Info",
      highlight: false,
      icon: <Building className="h-6 w-6" />
    },
  ]

  return (
    <section id="services" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        
        <div className="absolute -top-32 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 font-medium text-sm mb-2">
            <Sparkles className="h-4 w-4" />
            <span>{t("premiumServices") || "Premium Services"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="block text-slate-900">
              {t("mainServicesTitlePart1") || "Our Workspace"}
            </span>
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {t("mainServicesTitlePart2") || "Solutions"}
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("mainServicesSubtitle") || "Flexible plans designed for every professional need"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "group relative p-6 rounded-xl bg-white border border-slate-200 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg",
                service.highlight && "border-cyan-300 shadow-md"
              )}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-md">
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <span className="text-sm font-medium text-cyan-600">
                      {service.subtitle}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-cyan-600" />
                        </div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                          <span className="text-slate-500">{service.period}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Flexible booking</p>
                      </div>
                      
                      <Button 
                        className={cn(
                          "bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-6",
                          service.highlight && "shadow-lg shadow-cyan-500/25"
                        )}
                        onClick={() => window.location.href = `/booking?service=${service.id}`}
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm mt-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-600 text-white mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Flexible Hours</h4>
            <p className="text-sm text-slate-600">8:00 AM - 10:00 PM, 7 days a week</p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-600 text-white mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Community Access</h4>
            <p className="text-sm text-slate-600">Join 50+ professionals and entrepreneurs</p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-600 text-white mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">All Inclusive</h4>
            <p className="text-sm text-slate-600">WiFi, utilities, and amenities included</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Need a custom solution? Contact us for personalized plans
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-600 hover:bg-cyan-500/10 rounded-xl px-8"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  )
}