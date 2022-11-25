import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { LoginB } from '../Components/Login'
import {Logout} from '../Components/LogOut'
import { Profile } from '../Components/Profile'
import { Cart } from '../Components/Cart'
import {useState} from 'react'


export const EcommerceRoute = () => {
	const [cart, setCart] = useState([]);

	const handleClick = (item) => {
	  if (cart.indexOf(item) !== -1) return;
	  setCart([...cart, item]);
	};
  
	
	const handleChange = (item, d) => {				 				
		const ind = cart.indexOf(item);
		const arr = cart;
		// Inicializando el valor de arr[index].amount
		if (arr[ind].amount === undefined) {
			arr[ind].amount = 1;
		}
		arr[ind].amount += d;		
		setCart([...arr]);
	  };


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home handleClick={handleClick} />} />
        <Route path='/login' element={<LoginB/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
      </Routes>      
    </>
  )
}