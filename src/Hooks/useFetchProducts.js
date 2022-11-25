import { useEffect, useState } from "react"
import { getProducts } from "../Helpers/getProducts";

// Hook para obtener los productos de la base de datos
export const useFetchProducts = () => {
  const [products, setProducts] = useState([]); // Array de productos
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  const getTopProducts = async () => {
    const results = await getProducts(); // Obtiene los productos de la base de datos
    //console.dir(results.products);
    setProducts(results.products); // Guarda los productos en el estado
    setIsLoading(false); // Cambia el estado de carga
  }

// useEffect para obtener los productos de la base de datos
  useEffect(() => {
    getTopProducts();
  }, []);
  // Retorna los productos y el estado de carga
  return {
    products,
    isLoading
  }
}