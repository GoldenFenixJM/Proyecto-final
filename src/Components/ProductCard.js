import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

// Funcion para mapear los productos y mostrarlos en la pagina principal
export const ProductCard = ({item, handleClick}) => {

  // Item tiene los datos de cada producto ( id, nombre, precio, imagen, descripcion)
  const {id,title,description,price,thumbnail} = item;

// Se reduce el tamaño de la descripcion para que no se vea muy grande en la pagina
  const myDescription = description.length > 100 ? `${description.substring(0, 99)}...` : description;

// Funcion isAuthenticaded que determina si el usuario esta logeado o no
const { isAuthenticated } = useAuth0();

// Se muestrann los productos con su nombre, precio, imagen y descripcion
// Solo en caso de estar logeado se muestra el boton de agregar al carrito
  return (
    <>
        <div class="card-deck">
        <div class="card">
          <img src={thumbnail} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{myDescription}</p>
            <p className='Price'>
              <small>Price: {price}</small>
            </p>
            
            {isAuthenticated ? ( <button className="btn btn-primary" onClick={() => handleClick(item)}>
              Add to cart
            </button>) : null}           
          </div>
        </div>
      </div>
    </>
  )
}