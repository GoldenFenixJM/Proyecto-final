import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//Funcion que muestra el perfil del usuario logeado
export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    // Cargando
    if (isLoading) {
        return <div>Loading...</div>;
    }
// Se muestra el nombre, email y foto del usuario logeado
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture
                } alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};