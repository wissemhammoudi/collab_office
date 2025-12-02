"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function LocationsSection() {
  const { t } = useLanguage()

  const features = [
    "Espace de coworking moderne",
    "Assistance administrative",
    "Création d'entreprises",
    "Services de domiciliation",
    "Parking disponible",
    "Transport public accessible",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("locationTitle") as string}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("locationSubtitle") as string}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src="/modern-office-building-in-tunis-business-district.png"
                  alt="Rise Services Ariana"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t("locationName") as string}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {t("locationAddress") as string}
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full">
                    <Building className="h-8 w-8 text-cyan-600" />
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">{t("locationDescription") as string}</p>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">{t("advantages") as string} :</p>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm justify-center py-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{t("available") as string}</span>
                    </div>
                    <p className="text-xl font-bold text-cyan-600">
                      {t("startingFrom") as string} 15 DT{t("perHour") as string}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
