import React  from 'react'
import { ProductCard } from '../Components/ProductCard';
import { useFetchProducts } from '../Hooks/useFetchProducts'




export const Home = ({handleClick}) => { // Funcion que muestra los productos de la base de datos, se le pasa la funcion handleClick para agregar productos al carrito
  
  const { products } = useFetchProducts(); // Obtiene los productos con el hook useFetchProducts
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>    
      { products.map((item) => // Mapea los productos y los muestra en la pagina principal
        <ProductCard 
          key={item.id}
          item={item}
          handleClick={handleClick}   // Se le pasa la funcion handleClick para agregar productos al carrito       
        />
      )}
    </div>
  )
  
}
