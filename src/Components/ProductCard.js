import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

export const ProductCard = ({item, handleClick}) => {

  const {id,title,description,price,thumbnail} = item;


  const myDescription = description.length > 100 ? `${description.substring(0, 99)}...` : description;


const { isAuthenticated } = useAuth0();
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