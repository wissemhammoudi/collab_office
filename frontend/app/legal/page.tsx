"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/hooks/use-language"  

export default function LegalPage() {
  const { t, currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLang
  }, [currentLang])

  // Prevent hydration mismatch by not rendering until mounted
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
                {t("legal_title") as string }
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                {t("legal_description") as string}
              </p>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("company_info_title") as string}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("company_name_label") as string}</h3>
                    <p className="text-slate-600">{t("company_name") as string}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("company_address_label") as string}</h3>
                    <p className="text-slate-600">{t("company_address") as string}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("company_registry_label") as string}</h3>
                    <p className="text-slate-600">{t("company_registry") as string}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("tax_id_label") as string}</h3>
                    <p className="text-slate-600">{t("tax_id") as string}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("publication_director_label") as string}</h3>
                    <p className="text-slate-600">{t("publication_director") as string}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("contact_label") as string}</h3>
                    <p className="text-slate-600">
                      {t("email_label") as string}:{" "}
                      <a
                        href={`mailto:${t("contact_email") as string}`}
                        className="hover:text-cyan-600 transition-colors"
                      >
                        {t("contact_email") as string}
                      </a>
                      <br />
                      {t("phone_label") as string}:{" "}
                      <a
                        href={`https://wa.me/${(Array.isArray(t("contact_phone_number")) ? (t("contact_phone_number") as string[])[0] : (t("contact_phone_number") as string)).replace(/\s/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 transition-colors"
                      >
                        {t("contact_phone_number") as string}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Conditions générales d'utilisation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("cgu_title") as string}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[1,2,3,4,5,6,7,8].map((i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-slate-900 mb-3">{t(`cgu_section_${i}_title`) as string}</h3>
                      <p className="text-slate-600 leading-relaxed">{t(`cgu_section_${i}_content`) as string}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Privacy Policy */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("privacy_title") as string}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[1,2,3,4].map((i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-slate-900 mb-3">{t(`privacy_section_${i}_title`) as string}</h3>
                      <p className="text-slate-600 leading-relaxed">{t(`privacy_section_${i}_content`) as string}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("cookies_title") as string}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{t("cookies_intro") as string}</p>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{t("cookies_types_label") as string}</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>{t("cookie_type_technical") as string}</li>
                      <li>{t("cookie_type_analytics") as string}</li>
                      <li>{t("cookie_type_preferences") as string}</li>
                    </ul>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{t("cookies_disable_note") as string}</p>
                </CardContent>
              </Card>

              <Separator />

              <div className="text-center text-sm text-slate-500">
                <p>{t("last_updated") as string}</p>
                <p className="mt-2">
                  {t("contact_questions") as string}{" "}
                  <a href={`mailto:${t("contact_email")}`} className="text-cyan-600 hover:underline">
                    {t("contact_email") as string}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
