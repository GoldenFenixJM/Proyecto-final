import React  from 'react'
import { ProductCard } from '../Components/ProductCard';
import { useFetchProducts } from '../Hooks/useFetchProducts'




export const Home = ({handleClick}) => {
  
  const { products } = useFetchProducts();
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>    
      { products.map((item) => 
        <ProductCard 
          key={item.id}
          item={item}
          handleClick={handleClick}          
        />
      )}
    </div>
  )
  
}
