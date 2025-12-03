import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap, Target, Award } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Flexibilité Professionnelle",
      description: "Adaptez votre espace de travail à vos besoins spécifiques sans engagement contraignant",
      icon: TrendingUp,
      features: [
        "Réservation à l'heure, journée ou mois",
        "Accès 24/7 sur réservation",
        "Annulation flexible",
        "Changement d'espace selon disponibilité"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Optimisation des Coûts",
      description: "Réduction significative des frais fixes avec une facturation transparente et modulable",
      icon: Target,
      features: [
        "Pas de frais d'installation",
        "Équipements haut de gamme inclus",
        "Consommables fournis",
        "Facturation détaillée et claire"
      ],
      color: "green"
    },
    {
      id: 3,
      title: "Réseau d'Affaires",
      description: "Intégrez une communauté d'entrepreneurs et profitez d'opportunités de collaboration",
      icon: Users,
      features: [
        "Événements networking mensuels",
        "Plateforme communautaire exclusive",
        "Rencontres B2B organisées",
        "Base de données de partenaires"
      ],
      color: "purple"
    },
    {
      id: 4,
      title: "Productivité Maximisée",
      description: "Environnement conçu selon les principes d'ergonomie et de concentration optimale",
      icon: Zap,
      features: [
        "WiFi fibre optique 1Gbps",
        "Éclairage LED ergonomique",
        "Isolation acoustique premium",
        "Qualité de l'air contrôlée"
      ],
      color: "orange"
    },
    {
      id: 5,
      title: "Services Intégrés",
      description: "Accédez à l'ensemble des services nécessaires au fonctionnement de votre activité",
      icon: Shield,
      features: [
        "Service de réception professionnel",
        "Équipements de reprographie",
        "Assistance administrative",
        "Support technique dédié"
      ],
      color: "red"
    },
    {
      id: 6,
      title: "Croissance Accompagnée",
      description: "Évoluez avec des solutions échelonnées adaptées à chaque phase de développement",
      icon: Award,
      features: [
        "Forfaits évolutifs sans contrainte",
        "Conseil business stratégique",
        "Accès réseau partenaires premium",
        "Programmes de développement"
      ],
      color: "teal"
    }
  ];

  const iconColors = {
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    green: "text-green-600 bg-green-50 border-green-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100",
    orange: "text-orange-600 bg-orange-50 border-orange-100",
    red: "text-red-600 bg-red-50 border-red-100",
    teal: "text-teal-600 bg-teal-50 border-teal-100"
  };

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-6">
            <Award className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Valeurs Ajoutées</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Avantages{" "}
            <span className="relative">
              <span className="relative z-10">Stratégiques</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-100 to-cyan-100 -z-0"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez les bénéfices concrets qui positionnent notre espace comme la solution optimale
            pour la croissance de votre entreprise.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id} 
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Top Decorative Bar */}
                <div className={`h-1 w-full ${
                  benefit.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  benefit.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  benefit.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  benefit.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                  benefit.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                  'bg-gradient-to-r from-teal-500 to-teal-600'
                }`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border ${iconColors[benefit.color]} mb-6`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {benefit.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Stats & CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Stats */}
            <div className="p-12 border-r border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-8">Indicateurs de Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-300">Entreprises Membres</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-gray-300">Taux de Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-300">Disponibilité</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-gray-300">Économie Réalisée</div>
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Prêt à Optimiser Votre Espace de Travail ?</h3>
              <p className="text-gray-300 mb-8">
                Programmez une visite privée et découvrez comment nous pouvons soutenir la croissance de votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 rounded-lg">
                  Planifier une Visite
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg">
                  Télécharger la Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}