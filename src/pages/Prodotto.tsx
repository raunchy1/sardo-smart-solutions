import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, ShoppingCart, Tag, Package, ChevronRight } from "lucide-react";
import { useProducts } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";

export default function Prodotto() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <SectionWrapper>
        <SEO title="Prodotto non trovato" description="Il prodotto cercato non è disponibile." />
        <div className="text-center py-20">
          <h1 className="font-display text-3xl font-bold mb-4">Prodotto non trovato</h1>
          <Link to="/negozio"><Button>Torna al Negozio</Button></Link>
        </div>
      </SectionWrapper>
    );
  }

  const waMsg = encodeURIComponent(
    `Ciao Murgia F.lli, sono interessato a ${product.name} al prezzo €${product.discountPrice || product.price}. Potete darmi più informazioni? Grazie!`
  );

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.discountPrice && product.price > product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : null;

  return (
    <div>
      <SEO
        title={`${product.name} – ${product.brand}`}
        description={product.description || `${product.name} di ${product.brand} disponibile da Expert City Arzana.`}
        image={product.image}
        type="product"
      />

      {/* Breadcrumb */}
      <div className="pt-20 pb-2 px-4">
        <div className="container mx-auto max-w-6xl flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/negozio" className="hover:text-foreground transition-colors">Negozio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      <SectionWrapper className="pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-secondary rounded-xl flex items-center justify-center aspect-square overflow-hidden relative"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            ) : (
              <div className="text-muted-foreground text-8xl font-display">{product.brand[0]}</div>
            )}
            {product.offer && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded">
                OFFERTA
              </span>
            )}
            {discount && (
              <span className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-sm font-bold px-3 py-1.5 rounded">
                -{discount}%
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{product.brand}</span>
                <span className="text-xs text-muted-foreground/50">•</span>
                <span className="text-xs text-muted-foreground/60 uppercase">{product.category}</span>
              </div>
              <h1 className="font-display text-2xl md:text-4xl font-bold leading-tight">{product.name}</h1>
            </div>

            <div className="flex items-end gap-3">
              {product.discountPrice ? (
                <>
                  <span className="text-4xl font-bold text-primary">€{product.discountPrice}</span>
                  <span className="text-xl text-muted-foreground line-through">€{product.price}</span>
                </>
              ) : (
                <span className="text-4xl font-bold">€{product.price}</span>
              )}
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4" />
                {product.stock > 0 ? (
                  <span className="text-green-500">Disponibili: {product.stock}</span>
                ) : (
                  <span className="text-destructive">Esaurito</span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>{product.category}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" /> Aggiungi al Carrello
              </Button>
              <a
                href={`https://wa.me/393207690096?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-500 border-none">
                  <MessageCircle className="w-4 h-4 mr-2" /> Chiedi info su WhatsApp
                </Button>
              </a>
            </div>

            <Button variant="ghost" size="sm" className="self-start" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Torna indietro
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Related */}
      {related.length > 0 && (
        <SectionWrapper className="bg-card/50">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Ti potrebbe interessare</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Prodotti Simili</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}
