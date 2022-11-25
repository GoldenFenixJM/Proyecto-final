
import { useAuth0 } from '@auth0/auth0-react'

export const LoginB = () => { // Funcion para el boton de login que utiliza la libreria de Auth0
    const { loginWithRedirect } = useAuth0()
    return (
     loginWithRedirect() 
    )
}