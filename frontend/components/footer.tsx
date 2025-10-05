import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">Colab Office</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Votre partenaire de confiance pour vos besoins d'entreprise en Tunisie.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Nos services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Domiciliation
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Création de société
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services juridiques
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Comptabilité
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">À propos</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Qui sommes-nous ?
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Nous contacter
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-white transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="text-sm text-slate-300 space-y-2">
              <p>Av. de Yasser Arafat, Sousse 4054</p>
              <p>contact@riseservices.tn</p>
              <p>
                <a
                  href="https://wa.me/21620123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +216 20 123 456
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/21670987654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +216 70 987 654
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Votre email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button variant="secondary" size="sm">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
          © 2025 Colab Office - Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
