// app/components/how-it-works-section.tsx
export function HowItWorksSection() {
    const steps = [
      {
        number: "01",
        title: "Choisissez votre espace",
        description: "Parcourez nos différents espaces et sélectionnez celui qui correspond le mieux à vos besoins",
        details: [
          "Coworking collaboratif",
          "Zones d'étude silencieuses",
          "Bureau privé",
          "Salle de réunion"
        ],
        icon: "📍"
      },
      {
        number: "02",
        title: "Réservez en ligne",
        description: "Réservez votre place directement via notre plateforme en quelques clics",
        details: [
          "Sélectionnez la durée",
          "Choisissez votre créneau",
          "Option récurrente disponible",
          "Réservation immédiate"
        ],
        icon: "📱"
      },
      {
        number: "03",
        title: "Travaillez sereinement",
        description: "Profitez de nos installations et services pour travailler dans les meilleures conditions",
        details: [
          "Accès 24/7 sur réservation",
          "Équipements haut de gamme",
          "Services inclus",
          "Support sur place"
        ],
        icon: "💻"
      },
      {
        number: "04",
        title: "Gérez facilement",
        description: "Accédez à votre espace client pour gérer vos réservations et facturations",
        details: [
          "Historique des réservations",
          "Factures détaillées",
          "Modification facile",
          "Support client dédié"
        ],
        icon: "📊"
      }
    ];
  
    return (
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              Comment ça marche
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Réservez en <span className="text-green-600">4 étapes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour accéder à nos espaces de travail
            </p>
          </div>
  
          {/* Steps Container */}
          <div className="relative">
            {/* Connecting Line (for desktop) */}
            <div className="hidden lg:block absolute left-0 right-0 top-20 h-0.5 bg-gray-300"></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Step Number Badge with Connecting Line */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full text-xl font-bold shadow-lg flex items-center justify-center">
                        {step.number}
                      </div>
                      <div className="h-16"></div> {/* Spacer */}
                    </div>
  
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-3xl">
                        {step.icon}
                      </div>
                    </div>
  
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
  
                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-center text-sm">
                      {step.description}
                    </p>
  
                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 text-sm">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
  
                  {/* Arrow between steps (mobile) */}
                  {index < steps.length - 1 && (
                    <>
                      <div className="md:hidden flex justify-center my-6">
                        <div className="w-8 h-8 text-gray-300">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          {/* CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl text-lg">
              Commencer maintenant
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-gray-600 mt-4">
              Pas de frais d'inscription • Première heure gratuite pour les nouveaux membres
            </p>
          </div>
        </div>
      </section>
    );
  }