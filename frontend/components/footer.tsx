"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function Footer() {
  const { t, currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/profile.php?id=61580835989690",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-slate-800"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/colab_office/",
      color: "hover:bg-pink-600 hover:text-white",
      bgColor: "bg-slate-800"
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@colab_office",
      color: "hover:bg-black hover:text-white",
      bgColor: "bg-slate-800"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/21654824791",
      color: "hover:bg-green-600 hover:text-white",
      bgColor: "bg-slate-800"
    }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      text: t("locationAddress") as string,
      href: null
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "contact.colab.office@gmail.com",
      href: "mailto:contact.colab.office@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+216 54 824 791",
      href: "https://wa.me/21654824791"
    }
  ]

  return (  
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-primary">Colab Office</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t("heroDescription") as string}
            </p>
            <div className="space-y-4">
              <h4 className="font-medium text-white text-sm uppercase tracking-wider">
                {t("followUs") || "Follow Us"}
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} ${social.color} p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    aria-label={`Follow us on ${social.name}`}
                    title={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">{t("servicesTitle") as string}</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a 
                  href="/services" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("domiciliationService") as string}
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("companyService") as string}
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("adminService") as string}
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("coworkingService") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">{t("quickLinks") || "Quick Links"}</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a 
                  href="/about" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("about") as string}
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("contact") as string}
                </a>
              </li>
              <li>
                <a 
                  href="/booking" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("booking") as string}
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t("faq") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">{t("contact") as string}</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-0.5 flex-shrink-0">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              {t("copyright") as string}
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="/legal" className="hover:text-white transition-colors">
                {t("legal") as string}
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                {t("privacy") as string}
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                {t("terms") || "Terms"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}