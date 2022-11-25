import { useAuth0 } from '@auth0/auth0-react'

export const Logout = () => { // Funcion para el boton de logout que utiliza la libreria de Auth0
    const { logout } = useAuth0()
    return (
        logout({returnTo: window.location.origin})
    )
}