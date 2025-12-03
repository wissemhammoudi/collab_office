"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export default function FAQPage() {
  const { t, currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = currentLang
  }, [currentLang])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                {t("faqTitle") as string}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                {t("faqSubtitle") as string}
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("faq1Question") as string}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t("faq1Answer") as string}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("faq2Question") as string}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t("faq2Answer") as string}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("faq3Question") as string}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t("faq3Answer") as string}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("faq4Question") as string}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t("faq4Answer") as string}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("faq5Question") as string}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t("faq5Answer") as string}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
