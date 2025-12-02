"use client"

import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage()

  return (  
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">Colab Office</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t("heroDescription") as string}
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">{t("servicesTitle") as string}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  {t("domiciliationService") as string}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  {t("companyService") as string}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  {t("adminService") as string}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  {t("coworkingService") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">{t("about") as string}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  {t("about") as string}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  {t("contact") as string}
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-white transition-colors">
                  {t("legal") as string}
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-white transition-colors">
                  {t("privacy") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">{t("contact") as string}</h3>
            <div className="text-sm text-slate-300 space-y-2">
              <p>{t("locationAddress") as string}</p>
              <p>contact.colab.office@gmail.com</p>
              <p>
                <a
                  href="https://wa.me/21654824791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +216 54 824 791
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
        {t("copyright") as string}
        </div>
      </div>
    </footer>
  )
}
