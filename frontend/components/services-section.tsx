"use client"

import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import { Sparkles, CheckCircle, Clock, Users, Zap, ArrowRight, Briefcase, BookOpen, FileText, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

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
      icon: Briefcase,
      color: "bg-blue-500/10 text-blue-600"
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
      icon: BookOpen,
      color: "bg-green-500/10 text-green-600"
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
      icon: FileText,
      color: "bg-purple-500/10 text-purple-600"
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
      icon: Building,
      color: "bg-orange-500/10 text-orange-600"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
            <Sparkles className="h-4 w-4" />
            <span>{t("premiumServices") || "Premium Services"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="block text-slate-900">
              {t("mainServicesTitlePart1") || "Our Workspace"}
            </span>
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("mainServicesTitlePart2") || "Solutions"}
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("mainServicesSubtitle") || "Flexible plans designed for every professional need"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={cn(
                  "group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden",
                  service.highlight && "md:col-span-2 lg:col-span-1 border-primary/20 shadow-md"
                )}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                    {t("mostPopular") || "Most Popular"}
                  </div>
                )}

                <div className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={cn("flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10")}>
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm text-primary font-medium mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-cyan-600" />
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
                        <p className="text-xs text-slate-500 mt-1">
                          {t("flexibleBooking") || "Flexible booking"}
                        </p>
                      </div>
                      
                      <Button 
                        className={cn(
                          "bg-primary hover:bg-primary/90 text-white rounded-lg px-6",
                          service.highlight && "shadow-lg shadow-primary/25"
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
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">
              {t("flexibleHours") || "Flexible Hours"}
            </h4>
            <p className="text-sm text-slate-600">
              {t("hoursDescription") || "8:00 AM - 10:00 PM, 7 days a week"}
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">
              {t("communityAccess") || "Community Access"}
            </h4>
            <p className="text-sm text-slate-600">
              {t("communityDescription") || "Join 50+ professionals and entrepreneurs"}
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">
              {t("allInclusive") || "All Inclusive"}
            </h4>
            <p className="text-sm text-slate-600">
              {t("allInclusiveDescription") || "WiFi, utilities, and amenities included"}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            {t("customSolution") || "Need a custom solution? Contact us for personalized plans"}
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 rounded-xl px-8"
            onClick={() => window.location.href = '/contact'}
          >
            {t("contactOurTeam") || "Contact Our Team"}
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