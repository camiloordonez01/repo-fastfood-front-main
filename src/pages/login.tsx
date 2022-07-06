import React from 'react'
import { PageProps } from 'gatsby'

// Components
import SEO from '../components/atoms/seo'
import SignIn from '../components/organisms/SignIn'

const LoginPage: React.FC<PageProps> = () => {
    return (
        <>
            <SEO
                title="FastFood es el software #1 en Colombia para la gestión y control de comidas rápidas"
                pathname="login"
                description="Software para la gestión de negocios de comidas rápidas"
            />
            <SignIn />
        </>
    )
}

export default LoginPage
