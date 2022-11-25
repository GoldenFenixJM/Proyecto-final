import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { LoginB } from '../Components/Login'
import {Logout} from '../Components/LogOut'
import { Profile } from '../Components/Profile'
import { Cart } from '../Components/Cart'
import {useState} from 'react'

// Contiene las rutas de la aplicacion
export const EcommerceRoute = () => {
	
	const [cart, setCart] = useState([]); // Estado que contiene el carrito de compras
 
	const handleClick = (item) => { // Funcion que se pasa a ProductCard para agregar productos al carrito
	  if (cart.indexOf(item) !== -1) return;
	  setCart([...cart, item]);
	};
  
	
	const handleChange = (item, d) => {	 // Funcion que se pasa a Cart para cambiar la cantidad de productos en el carrito
		const ind = cart.indexOf(item);
		const arr = cart;
		// Inicializando el valor de arr[index].amount
		if (arr[ind].amount === undefined) {
			arr[ind].amount = 1;
		}
		arr[ind].amount += d;		
		setCart([...arr]);
	  };

// Se establecen las rutas de la aplicacion y se les establecen los componentes que se mostraran en cada ruta
// Se le pasa la funcion handleClick a Home para agregar productos al carrito
// Se le pasa cart, setcart y la funcion handleChange a Cart para cambiar la cantidad de productos en el carrito
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