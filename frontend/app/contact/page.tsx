import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Contactez-nous</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos
                projets
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input id="firstName" placeholder="Votre prénom" required className="h-11" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input id="lastName" placeholder="Votre nom" required className="h-11" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre.email@exemple.com"
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" type="tel" placeholder="+216 XX XXX XXX" className="h-11" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise</Label>
                        <Input id="company" placeholder="Nom de votre entreprise" className="h-11" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service souhaité</Label>
                        <select
                          id="service"
                          className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="domiciliation">Domiciliation d'entreprise</option>
                          <option value="creation">Création d'entreprise</option>
                          <option value="juridique">Services juridiques</option>
                          <option value="comptabilite">Comptabilité</option>
                          <option value="consultation">Consultation gratuite</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget approximatif</Label>
                        <select
                          id="budget"
                          className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="">Sélectionnez votre budget</option>
                          <option value="moins-500">Moins de 500 DT</option>
                          <option value="500-1000">500 - 1000 DT</option>
                          <option value="1000-2000">1000 - 2000 DT</option>
                          <option value="plus-2000">Plus de 2000 DT</option>
                          <option value="mensuel">Abonnement mensuel</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Décrivez votre projet ou vos besoins en détail..."
                          rows={5}
                          required
                          className="resize-none"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="urgent" className="rounded border-gray-300" />
                        <Label htmlFor="urgent" className="text-sm text-slate-600">
                          Demande urgente (réponse sous 2h pendant les heures ouvrables)
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Envoyer le message
                      </Button>

                      <p className="text-sm text-slate-500 text-center">
                        * Champs obligatoires. Nous vous répondrons dans les 24h (2h pour les demandes urgentes).
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Nos coordonnées</h2>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-cyan-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Adresse</h3>
                            <p className="text-slate-600">
                              Avenue Yasser Arafat
                              <br />
                              Sousse 4054, Tunisie
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Téléphone</h3>
                            <p className="text-slate-600">
                              <a
                                href="https://wa.me/21620123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-600 transition-colors"
                              >
                                +216 20 123 456
                              </a>
                              <br />
                              <a
                                href="https://wa.me/21670987654"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-600 transition-colors"
                              >
                                +216 70 987 654
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                            <p className="text-slate-600">
                              contact@riseservices.tn
                              <br />
                              info@riseservices.tn
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Horaires d'ouverture</h3>
                            <div className="text-slate-600 space-y-1">
                              <p>Lundi - Vendredi: 8h00 - 18h00</p>
                              <p>Samedi: 8h00 - 13h00</p>
                              <p>Dimanche: Fermé</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Quick Contact */}
                <Card className="bg-cyan-50 border-cyan-200">
                  <CardHeader>
                    <CardTitle className="text-cyan-900">Besoin d'une réponse rapide ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-800 mb-4">
                      Pour une consultation urgente, appelez-nous directement ou envoyez-nous un WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-cyan-300 text-cyan-700 hover:bg-cyan-100 bg-transparent"
                        asChild
                      >
                        <a href="https://wa.me/21620123456" target="_blank" rel="noopener noreferrer">
                          <Phone className="h-4 w-4 mr-2" />
                          Appeler maintenant
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-cyan-300 text-cyan-700 hover:bg-cyan-100 bg-transparent"
                        asChild
                      >
                        <a href="https://wa.me/21620123456" target="_blank" rel="noopener noreferrer">
                          <Mail className="h-4 w-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nous trouver</h2>
              <p className="text-lg text-slate-600">Situés au cœur de Sousse, nous sommes facilement accessibles</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Carte interactive</p>
                    <p className="text-sm">Avenue Yasser Arafat, Sousse 4054</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
              <p className="text-lg text-slate-600">Les réponses aux questions les plus courantes</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Combien de temps faut-il pour obtenir une adresse de domiciliation ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Une fois votre dossier complet reçu, nous pouvons vous fournir votre attestation de domiciliation
                    sous 24 à 48 heures ouvrables. Pour les demandes urgentes, nous proposons un service express sous 4
                    heures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quels documents sont nécessaires pour la domiciliation ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Vous aurez besoin de vos statuts de société, d'une copie de votre CIN, du formulaire de demande de
                    domiciliation dûment rempli, et d'un justificatif d'activité. Notre équipe vous accompagne dans la
                    constitution du dossier.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous des services dans d'autres villes ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Oui, nous avons des partenaires dans les principales villes de Tunisie : Tunis, Sfax, Monastir,
                    Nabeul, et Gabès. Nous proposons les mêmes services avec la même qualité dans toutes ces villes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Puis-je changer de formule en cours d'abonnement ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Absolument ! Vous pouvez upgrader ou downgrader votre formule à tout moment. Les changements
                    prennent effet le mois suivant et nous ajustons la facturation au prorata.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Offrez-vous une consultation gratuite ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Oui, nous offrons une consultation gratuite de 30 minutes pour évaluer vos besoins et vous
                    conseiller sur la meilleure solution. Prenez rendez-vous via notre formulaire de contact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
