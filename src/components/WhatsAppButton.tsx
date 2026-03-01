import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const msg = encodeURIComponent("Ciao Murgia F.lli, vorrei avere informazioni sui vostri prodotti e servizi. Grazie!");
  return (
    <a
      href={`https://wa.me/393207690096?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 glow-orange-hover"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-foreground" />
    </a>
  );
}
