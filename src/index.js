import React from 'react';
import ReactDOM from 'react-dom/client';
import { EcommerceApp } from './EcommerceApp';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Auth0Provider domain = "dev-1d71ktzrjds03tyw.us.auth0.com" 
      clientId="T7VM4LqWn0yUE4icZTJq4rsLoqzkdN15" 
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <EcommerceApp/>
      </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>
);