import React from 'react'

export const ProductCard = (props) => {

  const {
    id,
    title,
    description,
    price,
    thumbnail
  } = props;

  console.dir(props)
  const myDescription = description.length > 100 ? `${description.substring(0, 99)}...` : description;

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
            <button class="btn btn-primary">Add to cart</button>
          </div>
        </div>
        </div>
    </>
  )
}