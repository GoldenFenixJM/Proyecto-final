import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login', {
      replace: true
    })
  }
  return (
    <>
      <nav>
          <Link className="Links" to="/">
            EcommerceApp
          </Link>
          <Link 
            className="Links Login" 
            to="/login"
            onClick={handleLogout}
          >
            Login
          </Link>
      </nav>
    </>
  )
}