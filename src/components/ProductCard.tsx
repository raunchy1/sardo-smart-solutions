import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const waMsg = encodeURIComponent(`Ciao Murgia F.lli, sono interessato a ${product.name} al prezzo €${product.discountPrice || product.price}. Potete darmi più informazioni? Grazie!`);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-card border border-border rounded-lg overflow-hidden group glow-orange-hover"
    >
      <Link to={`/prodotto/${product.id}`}>
        <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden relative cursor-pointer">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          ) : (
            <div className="text-muted-foreground text-4xl font-display">{product.brand[0]}</div>
          )}
          {product.offer && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">OFFERTA</span>
          )}
        </div>
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</p>
          <span className="text-[9px] text-muted-foreground/60 uppercase">{product.category}</span>
        </div>
        <Link to={`/prodotto/${product.id}`}>
          <h3 className="font-display text-sm font-semibold leading-tight hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          {product.discountPrice ? (
            <>
              <span className="text-lg font-bold text-primary">€{product.discountPrice}</span>
              <span className="text-sm text-muted-foreground line-through">€{product.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold">€{product.price}</span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{product.stock > 0 ? `Disponibili: ${product.stock}` : "Esaurito"}</p>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={(e) => { e.preventDefault(); addToCart(product); }}>
            <ShoppingCart className="w-3 h-3 mr-1" /> Aggiungi
          </Button>
          <a href={`https://wa.me/393207690096?text=${waMsg}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Button size="sm" className="text-xs bg-green-600 hover:bg-green-500 border-none">
              <MessageCircle className="w-3 h-3" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
