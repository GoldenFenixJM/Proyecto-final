import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// Carrito de compras
export const Cart = ({ cart, setCart, handleChange }) => {

const [price, setPrice] = useState(0); // Permite calcular el precio total de los productos en el carrito

const handleRemove = (id) => { // Elimina un producto del carrito
  const arr = cart.filter((item) => item.id !== id);
  setCart(arr);
  handlePrice();
};

const handlePrice = () => { // Calcula el precio total de los productos en el carrito
  let ans = 0;
  cart.map((item) => (ans += item.amount * item.price));
  setPrice(ans);
  
};

useEffect(() => { // Actualiza el precio total de los productos en el carrito
  handlePrice();
});
    return (
      <article>
        <h1>Cart</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Amount</th>
                                <th scope='col'>Total</th>
                                <th scope='col'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => ( // Muestra los productos en el carrito
                                <tr key={item.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleChange(item, -1)} // Resta 1 a la cantidad de productos
                                        >
                                            -
                                        </button>
                                        {item.amount}
                                        <button
                                            onClick={() => handleChange(item, +1)} // Suma 1 a la cantidad de productos
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>{item.amount * item.price}</td> 
                                    <td>
                                        <button

                                            onClick={() => handleRemove(item.id)} // Elimina un producto del carrito
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h3>Total: {price}</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Link to='/'>
                        <button className='btn btn-primary'>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </div>
        </article>

    )
}