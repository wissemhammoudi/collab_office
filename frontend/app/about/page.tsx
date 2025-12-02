import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                À propos de Colab Office
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Votre partenaire de confiance pour tous vos besoins d'entreprise en Tunisie. Nous accompagnons les
                entrepreneurs dans leur réussite depuis plus de 10 ans.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre Mission</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Chez Colab Office, nous croyons que chaque entrepreneur mérite un accompagnement professionnel et
                  personnalisé. Notre mission est de simplifier les démarches administratives et juridiques pour
                  permettre aux entreprises de se concentrer sur leur cœur de métier.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Nous offrons des solutions complètes incluant l'assistance administrative & création de sociétés 🏢,
                  la domiciliation & services aux entreprises, ainsi qu'un espace de coworking moderne à Ariana pour
                  favoriser la collaboration et la réussite professionnelle.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">500+</div>
                    <div className="text-sm text-slate-600">Entreprises accompagnées</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">10+</div>
                    <div className="text-sm text-slate-600">Années d'expérience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-office-interior-with-meeting-room.png"
                  alt="Bureau moderne Colab Office"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Certifié ISO 9001</div>
                      <div className="text-sm text-slate-600">Qualité garantie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Valeurs</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Confiance</h3>
                  <p className="text-sm text-slate-600">Transparence et intégrité dans toutes nos relations clients</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Excellence</h3>
                  <p className="text-sm text-slate-600">Qualité de service irréprochable et expertise reconnue</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Réactivité</h3>
                  <p className="text-sm text-slate-600">Réponses rapides et traitement efficace de vos demandes</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Proximité</h3>
                  <p className="text-sm text-slate-600">Accompagnement personnalisé et relation de proximité</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Bénéficiez de notre assistance administrative & création de sociétés 🏢, domiciliation & services aux
              entreprises dans notre espace moderne à Ariana
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-50">
              Nous contacter
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
