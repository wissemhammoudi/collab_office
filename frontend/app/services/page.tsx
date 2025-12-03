"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Wifi, Coffee, CheckCircle, Volume2, Zap, Building, FileText, Users, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ServicesPage() {
  const { t, currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLang
  }, [currentLang])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                {t("servicesPageTitle") as string}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                {t("servicesPageSubtitle") as string}
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>{t("locationAddress") as string}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("mainServicesTitle") as string}</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t("mainServicesSubtitle") as string}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Coworking Space */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl">{t("coworkingService") as string}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {t("collaborative") as string}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    {t("coworkingDesc") as string}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("openPrivateSpaces") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("freeHighSpeedWifi") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("equippedMeetingRooms") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("freeCoffeeTea") as string}
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-600">25 DT{t("perHour") as string}</span>
                    <Button size="sm" asChild>
                      <a href="/booking">{t("reserve") as string}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Study Zones */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{t("studyZonesTitle") as string}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {t("concentration") as string}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    {t("studyZonesDesc") as string}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("silenceGuaranteed") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("freeHighSpeedWifi") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("electricOutlets") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("optimalLighting") as string}
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">15 DT{t("perHour") as string}</span>
                    <Button size="sm" asChild>
                      <a href="/booking">{t("reserve") as string}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Administrative Assistance */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">{t("adminServiceTitle") as string}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {t("completeSupport") as string}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    {t("adminServiceDesc") as string}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("companyCreationService") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("adminFormalities") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("legalAdvice") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("personalizedSupport") as string}
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{t("onQuote") as string}</span>
                    <Button size="sm" asChild>
                      <a href="/contact">{t("consult") as string}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Domiciliation */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{t("domiciliationTitle") as string}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {t("prestigiousAddress") as string}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    {t("domiciliationDesc") as string}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("prestigiousCommercialAddress") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("mailReception") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("phoneService") as string}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {t("meetingRoomIncluded") as string}
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">150 DT{t("perMonth") as string}</span>
                    <Button size="sm" asChild>
                      <a href="/contact">{t("getInfo") as string}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("includedServicesTitle") as string}</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t("includedServicesSubtitle") as string}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wifi className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t("highSpeedWifiTitle") as string}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t("highSpeedWifiDesc") as string}</p>
                  <span className="text-lg font-bold text-green-600">{t("free") as string}</span>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t("coffeeTea") as string}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t("coffeeTeaDesc") as string}</p>
                  <span className="text-lg font-bold text-purple-600">{t("free") as string}</span>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t("electricOutletsTitle") as string}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t("electricOutletsDesc") as string}</p>
                  <span className="text-lg font-bold text-orange-600">{t("included") as string}</span>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t("quietEnvironmentTitle") as string}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t("quietEnvironmentDesc") as string}</p>
                  <span className="text-lg font-bold text-red-600">{t("guaranteed") as string}</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("readyToDiscover") as string}</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              {t("ctaServicesText") as string}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-50" asChild>
                <a href="/booking">{t("reserveSpace") as string}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
                asChild
              >
                <a href="/contact">{t("contactUs") as string}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}