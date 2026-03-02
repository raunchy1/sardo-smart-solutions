import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, defaultProducts } from "@/data/products";

interface ProductContextType {
  products: Product[];
  addProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("murgia-products");
    const version = localStorage.getItem("murgia-products-version");
    const CURRENT_VERSION = "4";
    if (saved && version === CURRENT_VERSION) {
      return JSON.parse(saved);
    }
    localStorage.setItem("murgia-products-version", CURRENT_VERSION);
    return defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem("murgia-products", JSON.stringify(products));
  }, [products]);

  const addProduct = (p: Omit<Product, "id">) => {
    setProducts(prev => [...prev, { ...p, id: Date.now().toString() }]);
  };

  const updateProduct = (p: Product) => {
    setProducts(prev => prev.map(x => x.id === p.id ? p : x));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(x => x.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts must be within ProductProvider");
  return ctx;
};
