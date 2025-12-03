// app/components/services-section.tsx
export function ServicesSection() {
    const services = [
      {
        id: 1,
        title: "Espace de coworking moderne",
        subtitle: "Collaboratif",
        description: "Espaces de travail flexibles dans un environnement collaboratif et inspirant",
        features: [
          "Espaces ouverts et privés",
          "WiFi haut débit gratuit",
          "Salles de réunion équipées",
          "Café et thé gratuits"
        ],
        price: "25 DT/heure",
        cta: "Réserver",
        color: "blue",
        icon: "💼"
      },
      {
        id: 2,
        title: "Zones d'étude silencieuses",
        subtitle: "Concentration",
        description: "Espaces dédiés à l'étude dans un environnement calme et concentré",
        features: [
          "Silence garanti",
          "WiFi haut débit gratuit",
          "Prises électriques à chaque place",
          "Éclairage optimal"
        ],
        price: "15 DT/heure",
        cta: "Réserver",
        color: "green",
        icon: "📚"
      },
      {
        id: 3,
        title: "Assistance administrative",
        subtitle: "Support complet",
        description: "Support complet pour vos démarches administratives et gestion d'entreprise",
        features: [
          "Création d'entreprises",
          "Formalités administratives",
          "Conseil juridique",
          "Accompagnement personnalisé"
        ],
        price: "Sur devis",
        cta: "Consulter",
        color: "purple",
        icon: "📋"
      },
      {
        id: 4,
        title: "Domiciliation d'entreprise",
        subtitle: "Adresse prestigieuse",
        description: "Adresse professionnelle prestigieuse pour votre société à Ariana",
        features: [
          "Adresse commerciale prestigieuse",
          "Réception du courrier",
          "Permanence téléphonique",
          "Salle de réunion incluse"
        ],
        price: "150 DT/mois",
        cta: "S'informer",
        color: "orange",
        icon: "🏢"
      }
    ];
  
    const colorClasses = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700"
    };
  
    const buttonClasses = {
      blue: "bg-blue-600 hover:bg-blue-700",
      green: "bg-green-600 hover:bg-green-700",
      purple: "bg-purple-600 hover:bg-purple-700",
      orange: "bg-orange-600 hover:bg-orange-700"
    };
  
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Nos Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions de <span className="text-blue-600">Travail Flexibles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos différents espaces et services conçus pour répondre à tous vos besoins professionnels
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Color Bar */}
                <div className={`h-2 ${service.color === 'blue' ? 'bg-blue-500' : 
                                service.color === 'green' ? 'bg-green-500' : 
                                service.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'}`}></div>
                
                <div className="p-8 flex-1">
                  {/* Icon & Subtitle */}
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses[service.color]} text-xl mr-4`}>
                      {service.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClasses[service.color]}`}>
                      {service.subtitle}
                    </span>
                  </div>
  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
  
                  {/* Price & CTA */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      </div>        
                      <button className={`px-6 py-3 ${buttonClasses[service.color as keyof typeof buttonClasses]} text-white font-semibold rounded-lg hover:shadow-lg transition-all`}>
                        {service.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              🔄 <strong>Flexibilité totale :</strong> Réservation à l'heure, à la journée ou au mois
            </p>
            <p className="text-gray-600 mt-2">
              💳 <strong>Paiement sécurisé :</strong> Cartes bancaires, mobile money et espèces acceptés
            </p>
          </div>
        </div>
      </section>
    );
  }