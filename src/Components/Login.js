
import { useAuth0 } from '@auth0/auth0-react'

export const LoginB = () => {
    const { loginWithRedirect } = useAuth0()
    return (
     loginWithRedirect() 
    )
}