import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { EcommerceRoute } from './EcommerceRoute'

// Contiene las rutas de la aplicacion
export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<EcommerceRoute/>}/>
            </Routes>
        </>
    )
}