"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function AboutPage() {
  const { t, currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (currentLang) {
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = currentLang
    }
  }, [currentLang])

  // Instead of returning null, show a loading state
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Helper function to safely get string from translation
  const getTranslation = (key: string): string => {
    const translation = t(key)
    return Array.isArray(translation) ? translation.join(' ') : translation || ''
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
                {getTranslation("aboutTitle")}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                {getTranslation("aboutSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {getTranslation("ourMission")}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {getTranslation("missionText1")}
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {getTranslation("missionText2")}
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">500+</div>
                    <div className="text-sm text-slate-600">
                      {getTranslation("companiesSupported")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">10+</div>
                    <div className="text-sm text-slate-600">
                      {getTranslation("yearsExperience")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-office-interior-with-meeting-room.png"
                  alt="Bureau moderne Colab Office"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {getTranslation("ourValues")}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {getTranslation("valuesPrinciples")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {getTranslation("trust")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("trustDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {getTranslation("excellence")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("excellenceDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {getTranslation("responsiveness")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("responsivenessDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {getTranslation("proximity")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("proximityDesc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {getTranslation("readyToStart")}
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              {getTranslation("ctaText")}
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-50">
              {getTranslation("contactUs")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}