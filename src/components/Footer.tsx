import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-murgia.png";
import expertLogo from "@/assets/logo-expert-city.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Murgia F.lli" className="w-12 h-12 rounded-full" />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Expert_logo.svg/1200px-Expert_logo.svg.png"
                alt="Expert City"
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
            <p className="font-display text-lg font-semibold mb-2">Murgia F.lli S.n.c.</p>
            <p className="text-sm text-muted-foreground">Expert City Arzana</p>
            <p className="text-sm text-muted-foreground mt-1">Da oltre 20 anni al servizio della Sardegna.</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary">Navigazione</h4>
            <div className="flex flex-col gap-2">
              {[["/" , "Home"], ["/chi-siamo", "Chi Siamo"], ["/servizi", "Servizi"], ["/galleria", "Galleria"], ["/negozio", "Negozio"], ["/contatti", "Contatti"]].map(([to, label]) => (
                <Link key={to} to={to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary">Contatti</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 0782 37363</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +39 320 769 0096</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> murgiafratellisnc@legalmail.it</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Via Lanusei snc, 08040 Arzana (NU)</span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary">Orari</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Lun – Ven: 8:30 – 13:00 / 15:30 – 19:30</p>
              <p>Sabato: 8:30 – 13:00</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Murgia F.lli S.n.c. – Expert City Arzana. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
