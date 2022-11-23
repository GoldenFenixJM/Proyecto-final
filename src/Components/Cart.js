import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export const Cart = ({ cart, setCart, handleChange }) => {



const [price, setPrice] = useState(0);

const handleRemove = (id) => {
  const arr = cart.filter((item) => item.id !== id);
  setCart(arr);
  handlePrice();
};

const handlePrice = () => {
  let ans = 0;
  cart.map((item) => (ans += item.amount * item.price));
  setPrice(ans);
  
};

useEffect(() => {
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
                            {cart.map((item, index) => (
                                <tr key={item.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleChange(item, -1)}
                                        >
                                            -
                                        </button>
                                        {item.amount}
                                        <button
                                            onClick={() => handleChange(item, +1)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>{item.amount * item.price}</td>
                                    <td>
                                        <button

                                            onClick={() => handleRemove(item.id)}
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