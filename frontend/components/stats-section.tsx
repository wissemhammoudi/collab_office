import { TrendingUp, Shield, Clock, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "15,000+",
      label: "Entreprises accompagnées",
      description: "Depuis 2018",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Conformité légale",
      description: "Garantie totale",
    },
    {
      icon: Clock,
      value: "24h",
      label: "Activation rapide",
      description: "Service express",
    },
    {
      icon: Award,
      value: "12+",
      label: "Adresses premium",
      description: "Dans toute la Tunisie",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Pourquoi choisir Rise Services ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes et témoignent de notre expertise
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="h-8 w-8 text-cyan-600" />
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="font-semibold text-gray-900">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
