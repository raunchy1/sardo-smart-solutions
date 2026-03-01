import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, MessageCircle, ShoppingCart } from "lucide-react";

export default function Carrello() {
  const { items, removeFromCart, updateQty, clearCart, total, count } = useCart();

  const sendWhatsApp = () => {
    const lines = items.map(i => `• ${i.product.name} x${i.qty} – €${((i.product.discountPrice || i.product.price) * i.qty).toFixed(2)}`);
    const msg = `Ciao Murgia F.lli, vorrei ordinare:\n\n${lines.join("\n")}\n\nTotale: €${total.toFixed(2)}\n\nGrazie!`;
    window.open(`https://wa.me/393207690096?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <SectionWrapper>
        <div className="text-center py-20">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">Il tuo carrello è vuoto</h1>
          <p className="text-muted-foreground mb-8">Esplora il nostro negozio per trovare i prodotti che cerchi.</p>
          <Link to="/negozio"><Button>Vai al Negozio</Button></Link>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <div>
      <section className="pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold mb-2">Il Tuo Carrello</motion.h1>
          <p className="text-muted-foreground">{count} {count === 1 ? "articolo" : "articoli"}</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center shrink-0">
                {item.product.image ? (
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover rounded" />
                ) : (
                  <span className="text-2xl font-display text-muted-foreground">{item.product.brand[0]}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{item.product.name}</p>
                <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                <p className="text-sm font-bold text-primary">€{((item.product.discountPrice || item.product.price) * item.qty).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => updateQty(item.product.id, item.qty - 1)}>
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => updateQty(item.product.id, item.qty + 1)}>
                  <Plus className="w-3 h-3" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 text-destructive" onClick={() => removeFromCart(item.product.id)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}

          <div className="bg-card border border-border rounded-lg p-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-display text-xl font-bold">Totale</span>
              <span className="font-display text-2xl font-bold text-primary">€{total.toFixed(2)}</span>
            </div>
            <Button onClick={sendWhatsApp} className="w-full text-base glow-orange" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" /> Invia l'ordine via WhatsApp
            </Button>
            <Button variant="outline" className="w-full mt-2" onClick={clearCart}>Svuota Carrello</Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
