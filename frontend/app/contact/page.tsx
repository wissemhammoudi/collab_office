"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useState, useEffect } from "react"

export default function ContactPage() {
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
                {t("contactTitle") as string}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                {t("contactSubtitle") as string}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {t("contactFormTitle") as string}
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{t("firstName") as string}</Label>
                          <Input
                            id="firstName"
                            placeholder={t("firstNamePlaceholder") as string}
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{t("lastName") as string}</Label>
                          <Input
                            id="lastName"
                            placeholder={t("lastNamePlaceholder") as string}
                            required
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t("email") as string}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("emailPlaceholder") as string}
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("phone") as string}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t("phonePlaceholder") as string}
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">{t("company") as string}</Label>
                        <Input
                          id="company"
                          placeholder={t("companyPlaceholder") as string}
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">{t("service") as string}</Label>
                        <select
                          id="service"
                          className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="">{t("selectService") as string}</option>
                          <option value="domiciliation">{t("serviceDomiciliation") as string}</option>
                          <option value="creation">{t("serviceCreation") as string}</option>
                          <option value="juridique">{t("serviceJuridique") as string}</option>
                          <option value="comptabilite">{t("serviceComptabilite") as string}</option>
                          <option value="consultation">{t("serviceConsultation") as string}</option>
                          <option value="autre">{t("serviceOther") as string}</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">{t("budget") as string}</Label>
                        <select
                          id="budget"
                          className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="">{t("selectBudget") as string}</option>
                          <option value="moins-500">{t("budgetLess500") as string}</option>
                          <option value="500-1000">{t("budget5001000") as string}</option>
                          <option value="1000-2000">{t("budget10002000") as string}</option>
                          <option value="plus-2000">{t("budgetMore2000") as string}</option>
                          <option value="mensuel">{t("budgetMonthly") as string}</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t("message") as string}</Label>
                        <Textarea
                          id="message"
                          placeholder={t("messagePlaceholder") as string}
                          rows={5}
                          required
                          className="resize-none"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="urgent" className="rounded border-gray-300" />
                        <Label htmlFor="urgent" className="text-sm text-slate-600">
                          {t("urgentRequest") as string}
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        {t("sendMessage") as string}
                      </Button>

                      <p className="text-sm text-slate-500 text-center">
                        {t("requiredFieldsNotice") as string}
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">{t("contactInfoTitle") as string}</h2>
                <div className="space-y-6">
                  {/* Address */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">{t("address") as string}</h3>
                          <p className="text-slate-600">
                            {t("addressLine1") as string}
                            <br />
                            {t("addressLine2") as string}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">{t("phone") as string}</h3>
                          <p className="text-slate-600">
                            <a
                              href={`https://wa.me/${t("contact_phone_number").replace(/\s/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan-600 transition-colors"
                            >
                              {t("contact_phone_number") as string}
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">{t("email") as string}</h3>
                          <p className="text-slate-600">
                            {t("contact_email") as string}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Opening Hours */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">{t("openingHours") as string}</h3>
                          <div className="text-slate-600 space-y-1">
                            <p>{t("hoursWeekdays") as string}</p>
                            <p>{t("hoursSaturday") as string}</p>
                            <p>{t("hoursSunday") as string}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Contact */}
                <Card className="bg-cyan-50 border-cyan-200">
                  <CardHeader>
                    <CardTitle className="text-cyan-900">{t("quickContactTitle") as string}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-800 mb-4">
                      {t("quickContactText") as string}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-cyan-300 text-cyan-700 hover:bg-cyan-100 bg-transparent"
                        asChild
                      >
                        <a href="https://wa.me/21620123456" target="_blank" rel="noopener noreferrer">
                          <Phone className="h-4 w-4 mr-2" />
                          {t("callNow") as string}
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-cyan-300 text-cyan-700 hover:bg-cyan-100 bg-transparent"
                        asChild
                      >
                        <a href="https://wa.me/21620123456" target="_blank" rel="noopener noreferrer">
                          <Mail className="h-4 w-4 mr-2" />
                          {t("whatsapp") as string}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("findUsTitle") as string}</h2>
            <p className="text-lg text-slate-600">{t("findUsSubtitle") as string}</p>
          </div>

          <Card>
            <CardContent className="p-0">
              {/* Carte Google Maps stylisée */}
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.947431648145!2d10.198630215361184!3d36.862834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzQ2LjIiTiAxMMKwMTInMDQuMyJF!5e0!3m2!1sfr!2sfr!4v1700000000000&q=ColabOffice&zoom=17&maptype=roadmap&language=fr&style=feature:all|element:labels|visibility:simplified&style=feature:administrative|element:geometry.fill|color:0xf0f9ff&style=feature:administrative|element:geometry.stroke|color:0xc9e6ff&style=feature:landscape|element:geometry.fill|color:0xe8f5ff&style=feature:poi|element:geometry.fill|color:0xe3f2fd&style=feature:road|element:geometry.fill|color:0xc9e6ff&style=feature:road|element:geometry.stroke|color:0x93c5fd&style=feature:water|element:geometry.fill|color:0xbfdbfe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - ColabOffice"
                  className="w-full h-full"
                />
              </div>
              
              {/* Informations supplémentaires sous la carte */}
              <div className="p-6 bg-white">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-lg shadow-sm">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{t("mapTitle") as string}</h3>
                    <p className="text-slate-600 mt-1">{t("mapAddress") as string}</p>
                    <p className="text-slate-500 text-sm mt-1">{t("mapCity") as string}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {/* Bouton Get Directions - Même couleur que Send Message */}
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=ColabOffice&ll=36.862834,10.201205"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        {t("getDirections") as string}
                      </a>
                      
                      <a
                        href={`tel:${t("contact_phone_number").replace(/\s/g, "")}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium border border-slate-200"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {t("callUs") as string}
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("faqTitle") as string}</h2>
              <p className="text-lg text-slate-600">{t("faqSubtitle") as string}</p>
            </div>

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