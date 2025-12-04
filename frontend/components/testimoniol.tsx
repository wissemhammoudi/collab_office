"use client"

import { useLanguage } from "@/hooks/use-language"
import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  date: string
}

export function TestimonialSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t("testimonial1Name") as string || "Alex Johnson",
      role: t("testimonial1Role") as string || "Freelance Developer",
      company   :    t("testimonial1Company") as string || "TechFlow",
      content: t("testimonial1Content") as string || "This workspace has transformed how I work. The high-speed internet and quiet environment helped me increase my productivity by 40%. The community is amazing!",
      rating: 5,
      date: "March 2024"
    },
    {
      id: 2,
      name: t("testimonial2Name") as string || "Maria Rodriguez",
      role: t("testimonial2Role") as string || "Marketing Director",
      company: t("testimonial2Company") as string || "GrowthLab",
      content: t("testimonial2Content") as string || "Our team loves the meeting rooms here. Fully equipped with everything we need, and the support staff is incredibly helpful. Highly recommended for any business!",
      rating: 5,
      date: "February 2024"
    },
    {
      id: 3,
      name: t("testimonial3Name") as string || "David Chen",
      role: t("testimonial3Role") as string || "Startup Founder",
      company: t("testimonial3Company") as string || "NexusAI",
      content: t("testimonial3Content") as string || "The best coworking space in the city. The premium amenities, networking events, and professional atmosphere have been crucial for our startup's growth.",
      rating: 5,
      date: "January 2024"
    },
    {
      id: 4,
      name: t("testimonial4Name") as string || "Sarah Williams",
      role: t("testimonial4Role") as string || "Remote Project Manager",
      company: t("testimonial4Company") as string ||  "GlobalTech",
      content: t("testimonial4Content") as string || "As a remote worker, finding the perfect workspace was challenging until I discovered this place. The 24/7 access and reliable facilities are exactly what I needed.",
      rating: 5,
      date: "December 2023"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        
        <div className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
            <Sparkles className="h-4 w-4" />
            <span>{t("trustedByProfessionals") || "Trusted by Professionals"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="block text-slate-900">
              {t("testimonialsTitlePart1") || "What Our"}
            </span>
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("testimonialsTitlePart2") || "Members Say"}
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("testimonialsSubtitle") || "Join 50+ professionals who transformed their work experience with our premium workspace solutions."}
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-12">
          
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-8 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Rating & Content */}
              <div className="flex-1 space-y-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-6 w-6",
                        i < testimonials[currentIndex].rating
                          ? "fill-primary text-primary"
                          : "fill-slate-200 text-slate-200"
                      )}
                    />
                  ))}
                  <span className="ml-3 text-sm font-medium text-primary">
                    {testimonials[currentIndex].rating}.0
                  </span>
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.9/5</div>
                    <div className="text-sm text-slate-600 mt-1">{t("averageRating") || "Average Rating"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-slate-600 mt-1">{t("testimonialsCount") || "Testimonials"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-slate-600 mt-1">{t("wouldRecommend") || "Would Recommend"}</div>
                  </div>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="lg:w-1/3 flex flex-col items-center text-center lg:text-left lg:items-start space-y-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    {testimonials[currentIndex].company}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mt-3">
                    <span>Member Since</span>
                    <span>{testimonials[currentIndex].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-slate-300 hover:border-primary hover:bg-primary/5"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-slate-300 hover:border-primary hover:bg-primary/5"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "group relative p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer",
                index === 0 && "md:col-span-2 lg:col-span-1"
              )}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-slate-600 line-clamp-3 mb-4">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "fill-slate-200 text-slate-200"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>


      </div>

      <style jsx global>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}