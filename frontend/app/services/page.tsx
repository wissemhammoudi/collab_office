import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Wifi, Coffee, CheckCircle, Volume2, Zap, Building, FileText, Users, MapPin } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                Rise Services - Nos Solutions
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Espace de coworking moderne, assistance administrative et services aux entreprises à Ariana
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>14 Rue Ibn Elheni (Rond-point Borj Louzir), Ariana</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Services Principaux</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Solutions complètes pour votre activité professionnelle dans un environnement moderne
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Coworking Space */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl">Espace de coworking moderne</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    Collaboratif
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Espaces de travail flexibles dans un environnement collaboratif et inspirant
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Espaces ouverts et privés
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      WiFi haut débit gratuit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Salles de réunion équipées
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Café et thé gratuits
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-600">25 DT/heure</span>
                    <Button size="sm" asChild>
                      <a href="/booking">Réserver</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Study Zones */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Zones d'étude silencieuses</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    Concentration
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Espaces dédiés à l'étude dans un environnement calme et concentré
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Silence garanti
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      WiFi haut débit gratuit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Prises électriques à chaque place
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Éclairage optimal
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">15 DT/heure</span>
                    <Button size="sm" asChild>
                      <a href="/booking">Réserver</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Administrative Assistance */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Assistance administrative</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    Support complet
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Support complet pour vos démarches administratives et gestion d'entreprise
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Création d'entreprises
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Formalités administratives
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Conseil juridique
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Accompagnement personnalisé
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">Sur devis</span>
                    <Button size="sm" asChild>
                      <a href="/contact">Consulter</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Domiciliation */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Domiciliation d'entreprise</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    Adresse prestigieuse
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Adresse professionnelle prestigieuse pour votre société à Ariana
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Adresse commerciale prestigieuse
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Réception du courrier
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Permanence téléphonique
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Salle de réunion incluse
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">150 DT/mois</span>
                    <Button size="sm" asChild>
                      <a href="/contact">S'informer</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Services inclus</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tous nos espaces incluent ces services pour votre confort et productivité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wifi className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">WiFi haut débit</h3>
                  <p className="text-sm text-slate-600 mb-4">Connexion internet rapide et stable</p>
                  <span className="text-lg font-bold text-green-600">Gratuit</span>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Café & Thé</h3>
                  <p className="text-sm text-slate-600 mb-4">Boissons chaudes à volonté</p>
                  <span className="text-lg font-bold text-purple-600">Gratuit</span>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Prises électriques</h3>
                  <p className="text-sm text-slate-600 mb-4">À chaque place de travail</p>
                  <span className="text-lg font-bold text-orange-600">Inclus</span>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Environnement calme</h3>
                  <p className="text-sm text-slate-600 mb-4">Zones silencieuses garanties</p>
                  <span className="text-lg font-bold text-red-600">Garanti</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à découvrir Rise Services ?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Travaillez, collaborez, réussissez dans notre espace moderne à Ariana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-50" asChild>
                <a href="/booking">Réserver un espace</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
                asChild
              >
                <a href="/contact">Nous contacter</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
