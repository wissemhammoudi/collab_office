"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle, Star, ArrowRight, Users, Building, Clock, Wifi, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Users,
      label: "Coworking Professionnel",
      description: "Espaces collaboratifs équipés"
    },
    {
      icon: Building,
      label: "Zones d'Étude",
      description: "Environnement calme et concentré"
    },
    {
      icon: Clock,
      label: "Accès 24/7",
      description: "Flexibilité totale d'accès"
    },
    {
      icon: Wifi,
      label: "WiFi Haute Vitesse",
      description: "Connexion fibre optique 1Gbps"
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-50 to-transparent rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Colab Office • Ariana</span>
                </div>
                <Badge variant="outline" className="border-green-200 text-green-700">
                  <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                  Disponible
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Votre Espace de Travail{" "}
                <span className="relative">
                  <span className="relative z-10">Moderne</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-100 to-cyan-100 -z-0"></span>
                </span>
                <br />
                à{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Ariana
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Un environnement professionnel conçu pour la productivité, la collaboration et la croissance de votre entreprise.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.label}</h3>
                    <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-6 text-base rounded-lg font-semibold"
              >
                Réserver une Visite
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 px-8 py-6 text-base rounded-lg"
              >
                Consulter les Tarifs
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">500+ Membres</span>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Colab Office</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-gray-300 mr-2" />
                      <span className="text-gray-300">Ariana, Avenue de la République</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                    <span className="text-sm font-medium text-white">Premium</span>
                  </div>
                </div>
              </div>

              {/* Pricing Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Pricing Item 1 */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Coworking</h4>
                        <p className="text-sm text-gray-500">Espace collaboratif</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">25 DT</div>
                      <p className="text-xs text-gray-500">/ heure</p>
                    </div>
                  </div>

                  {/* Pricing Item 2 */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-white rounded-lg border border-green-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Building className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Zone d'Étude</h4>
                        <p className="text-sm text-gray-500">Espace silencieux</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">15 DT</div>
                      <p className="text-xs text-gray-500">/ heure</p>
                    </div>
                  </div>

                  {/* Pricing Item 3 */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Domiciliation</h4>
                        <p className="text-sm text-gray-500">Adresse commerciale</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">150 DT</div>
                      <p className="text-xs text-gray-500">/ mois</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-base rounded-lg">
                  Réserver Maintenant
                </Button>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl rotate-12 opacity-10 -z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}