import { useEffect, useState } from "react"
import { getProducts } from "../Helpers/getProducts";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTopProducts = async () => {
    const results = await getProducts();
    //console.dir(results.products);
    setProducts(results.products);
    setIsLoading(false);
  }

  useEffect(() => {
    getTopProducts();
  }, []);
  
  return {
    products,
    isLoading
  }
}