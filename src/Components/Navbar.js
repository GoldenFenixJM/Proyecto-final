import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = () => {
  
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav>
          <Link className="Links" to="/">
            EcommerceApp
          </Link>
  
          {isAuthenticated ? ( <Link className="Links" to="/profile">
            Profile
          </Link>
          ) : null}
          {isAuthenticated ? ( <Link className="Links" to="/cart">
            Cart
            </Link>
            ) : null}
          {isAuthenticated ? ( <Link className="Links" to="/logout">
            Logout
          </Link>
          ) : (
            <Link className="Links" to="/login">
              Login
            </Link>
          )}

      </nav>
    </>
  )
}