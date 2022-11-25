import React from 'react';
import ReactDOM from 'react-dom/client';
import { EcommerceApp } from './EcommerceApp';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Index de la aplicacion
const root = ReactDOM.createRoot(document.getElementById('root')); // Crea el elemento raiz de la aplicacion
root.render(
    <React.StrictMode>
      <Auth0Provider domain = "dev-1d71ktzrjds03tyw.us.auth0.com"  // Dominio de la aplicacion de Auth0
      clientId="T7VM4LqWn0yUE4icZTJq4rsLoqzkdN15"  // ID de la aplicacion de Auth0
      // Redirecciona al usuario a la pagina de inicio despues de logearse
      redirectUri={window.location.origin}> 
      <BrowserRouter>
        <EcommerceApp/>
      </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>
);