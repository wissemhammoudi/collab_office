import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Mentions légales</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Informations légales et conditions d'utilisation de nos services
              </p>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Company Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Informations sur l'entreprise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Raison sociale</h3>
                    <p className="text-slate-600">Rise Services SARL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Siège social</h3>
                    <p className="text-slate-600">Avenue Yasser Arafat, Sousse 4054, Tunisie</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Registre de commerce</h3>
                    <p className="text-slate-600">B051234567890</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Matricule fiscal</h3>
                    <p className="text-slate-600">1234567/A/M/000</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Directeur de publication</h3>
                    <p className="text-slate-600">Ahmed Salhi</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
                    <p className="text-slate-600">
                      Email: contact@riseservices.tn
                      <br />
                      Téléphone:{" "}
                      <a
                        href="https://wa.me/21620123456"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 transition-colors"
                      >
                        +216 20 123 456
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Terms of Service */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Conditions générales d'utilisation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">1. Objet</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et
                      conditions d'utilisation des services proposés par Rise Services, ainsi que de définir les droits
                      et obligations des parties dans ce cadre.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">2. Acceptation des conditions</h3>
                    <p className="text-slate-600 leading-relaxed">
                      L'utilisation de nos services implique l'acceptation pleine et entière des présentes CGU. Si vous
                      n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">3. Services proposés</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">Rise Services propose les services suivants :</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Domiciliation d'entreprise</li>
                      <li>Création et modification de sociétés</li>
                      <li>Services juridiques et administratifs</li>
                      <li>Conseil en création d'entreprise</li>
                      <li>Services de secrétariat et comptabilité</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">4. Obligations du client</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">Le client s'engage à :</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Fournir des informations exactes et à jour</li>
                      <li>Respecter la législation en vigueur</li>
                      <li>Régler les factures dans les délais convenus</li>
                      <li>Informer Rise Services de tout changement dans sa situation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">5. Tarifs et paiement</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les tarifs de nos services sont indiqués en dinars tunisiens (DT) et sont révisables. Le paiement
                      s'effectue selon les modalités convenues lors de la signature du contrat. Tout retard de paiement
                      pourra entraîner la suspension des services.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">6. Responsabilité</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Rise Services s'engage à fournir ses services avec diligence et professionnalisme. Notre
                      responsabilité est limitée aux dommages directs et ne peut excéder le montant des sommes versées
                      par le client.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">7. Résiliation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Le contrat peut être résilié par l'une ou l'autre des parties moyennant un préavis d'un mois. La
                      résiliation n'affecte pas les obligations déjà nées du contrat.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">8. Droit applicable</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les présentes CGU sont soumises au droit tunisien. Tout litige sera de la compétence exclusive des
                      tribunaux de Sousse.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Policy */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Politique de confidentialité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Collecte des données</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Nous collectons uniquement les données personnelles nécessaires à la fourniture de nos services :
                      nom, prénom, adresse, téléphone, email, et informations relatives à votre entreprise.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Utilisation des données</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Vos données sont utilisées exclusivement pour la gestion de votre dossier, la facturation, et la
                      communication relative à nos services. Elles ne sont jamais vendues ou transmises à des tiers sans
                      votre consentement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Conservation des données</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Vos données sont conservées pendant la durée de notre relation contractuelle et conformément aux
                      obligations légales de conservation des documents comptables et juridiques.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Vos droits</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Vous disposez d'un droit d'accès, de rectification, et de suppression de vos données personnelles.
                      Pour exercer ces droits, contactez-nous à l'adresse contact@riseservices.tn.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Politique des cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    Notre site web utilise des cookies pour améliorer votre expérience de navigation et analyser le
                    trafic. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                  </p>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Types de cookies utilisés :</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Cookies techniques : nécessaires au fonctionnement du site</li>
                      <li>Cookies analytiques : pour mesurer l'audience et améliorer le site</li>
                      <li>Cookies de préférences : pour mémoriser vos choix</li>
                    </ul>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter
                    le fonctionnement du site.
                  </p>
                </CardContent>
              </Card>

              <Separator />

              <div className="text-center text-sm text-slate-500">
                <p>Dernière mise à jour : Janvier 2024</p>
                <p className="mt-2">
                  Pour toute question concernant ces mentions légales, contactez-nous à{" "}
                  <a href="mailto:contact@riseservices.tn" className="text-cyan-600 hover:underline">
                    contact@riseservices.tn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
