import React from 'react'
import { PageProps } from 'gatsby'

// Components
import SEO from '../components/atoms/seo'
import SignUp from '../components/organisms/SignUp'

const RegisterPage: React.FC<PageProps> = () => {
    return (
        <>
            <SEO
                title="FastFood es el software #1 en Colombia para la gestión y control de comidas rápidas"
                pathname="register"
                description="Software para la gestión de negocios de comidas rápidas"
            />
            <SignUp />
        </>
    )
}

export default RegisterPage
