"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap, Target, Award, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function BenefitsSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

  const benefits = [
    {
      id: 1,
      title: t("professionalFlexibility") || "Professional Flexibility",
      description: t("flexibilityDesc") || "Adapt your workspace to your specific needs without binding commitments",
      icon: TrendingUp,
      features: [
        t("hourlyDailyMonthly") || "Hourly, daily, or monthly booking",
        t("access247") || "24/7 access by reservation",
        t("flexibleCancellation") || "Flexible cancellation",
        t("spaceChangeAvailability") || "Space change based on availability"
      ]
    },
    {
      id: 2,
      title: t("costOptimization") || "Cost Optimization",
      description: t("costOptimizationDesc") || "Significant reduction in fixed costs with transparent, modular billing",
      icon: Target,
      features: [
        t("noInstallationFees") || "No installation fees",
        t("premiumEquipmentIncluded") || "Premium equipment included",
        t("consumablesProvided") || "Consumables provided",
        t("detailedBilling") || "Detailed and clear billing"
      ]
    },
    {
      id: 3,
      title: t("businessNetwork") || "Business Network",
      description: t("networkDesc") || "Join a community of entrepreneurs and benefit from collaboration opportunities",
      icon: Users,
      features: [
        t("monthlyNetworkingEvents") || "Monthly networking events",
        t("exclusiveCommunityPlatform") || "Exclusive community platform",
        t("organizedB2BMeetings") || "Organized B2B meetings",
        t("partnerDatabase") || "Partner database"
      ]
    },
    {
      id: 4,
      title: t("maximizedProductivity") || "Maximized Productivity",
      description: t("productivityDesc") || "Environment designed according to ergonomic and optimal concentration principles",
      icon: Zap,
      features: [
        t("fiberOpticWifi") || "1Gbps fiber optic WiFi",
        t("ergonomicLighting") || "Ergonomic LED lighting",
        t("acousticIsolation") || "Premium acoustic isolation",
        t("airQualityControlled") || "Controlled air quality"
      ]
    },
    {
      id: 5,
      title: t("integratedServices") || "Integrated Services",
      description: t("servicesDesc") || "Access all services necessary for your business operations",
      icon: Shield,
      features: [
        t("professionalReception") || "Professional reception service",
        t("reproductionEquipment") || "Reprography equipment",
        t("adminAssistance") || "Administrative assistance",
        t("dedicatedTechSupport") || "Dedicated technical support"
      ]
    },
    {
      id: 6,
      title: t("growthSupport") || "Growth Support",
      description: t("growthDesc") || "Evolve with scalable solutions adapted to each development phase",
      icon: Award,
      features: [
        t("scalablePlans") || "Scalable packages without constraints",
        t("strategicBusinessAdvice") || "Strategic business advice",
        t("premiumPartnerAccess") || "Premium partner network access",
        t("developmentPrograms") || "Development programs"
      ]
    }
  ]

  return (
    <section id="benefits" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        
        <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
            <Sparkles className="h-4 w-4" />
            <span>{t("whyChooseUs") || "Why Choose Us"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="block text-slate-900">
              {t("ourValuesPart1") || "Our Core"}
            </span>
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("ourValuesPart2") || "Values & Benefits"}
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("valuesPrinciples") || "We're committed to providing the best workspace experience through our core values"}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.id}
                className="group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary group-hover:from-primary group-hover:to-primary/70 transition-all duration-300" />
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            {t("performanceIndicators") || "Performance Indicators"}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: t("memberCompanies") || "Member Companies" },
              { value: "98%", label: t("satisfactionRate") || "Satisfaction Rate" },
              { value: "24/7", label: t("availability") || "Availability" },
              { value: "40%", label: t("costSavings") || "Average Cost Savings" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-slate-50">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="flex-1 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("readyToOptimize") || "Ready to Optimize Your Workspace?"}
              </h3>
              <p className="text-white/90 mb-6">
                {t("scheduleVisitDesc") || "Schedule a private tour and discover how we can support your business growth."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-6 font-semibold"
                  onClick={() => window.location.href = '/tour'}
                >
                  {t("scheduleTour") || "Schedule a Tour"}
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold"
                  onClick={() => window.location.href = '/brochure'}
                >
                  {t("downloadBrochure") || "Download Brochure"}
                </Button>
              </div>
            </div>
            
            {/* Right Content - Additional Info */}
            <div className="lg:w-1/3 bg-white/10 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{t("noCommitment") || "No Commitment"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{t("fullyEquipped") || "Fully Equipped"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{t("communityAccess") || "Community Access"}</span>
                </div>
              </div>
            </div>
          </div>
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