import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ben Ahmed",
      role: "CEO, TechStart Tunisia",
      content:
        "Rise Services nous a permis d'établir notre présence en Tunisie rapidement et efficacement. Service impeccable !",
      rating: 5,
      initials: "SA",
    },
    {
      name: "Mohamed Trabelsi",
      role: "Fondateur, InnovCorp",
      content:
        "Une adresse prestigieuse aux Berges du Lac pour notre startup. L'équipe est très professionnelle et réactive.",
      rating: 5,
      initials: "MT",
    },
    {
      name: "Leila Mansouri",
      role: "Directrice, ConsultPro",
      content: "Excellent service de domiciliation. Tout s'est fait en 24h comme promis. Je recommande vivement !",
      rating: 5,
      initials: "LM",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ce que disent nos clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 15,000 entrepreneurs nous font confiance pour leur domiciliation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-cyan-100 text-cyan-700 font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
