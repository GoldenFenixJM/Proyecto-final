import React from 'react'
import { ProductCard } from '../Components/ProductCard';
import { useFetchProducts } from '../Hooks/useFetchProducts'


export const Home = () => {

  const { products } = useFetchProducts();
  console.dir(products);
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      { products.map((product) => 
        <ProductCard 
          key={product.id}
          { ...product }
        />
      )}
    </div>
  )
}