import React from 'react'
import { PageProps } from 'gatsby'

// Components
import SEO from '../components/atoms/seo'
import Verify from '../components/organisms/Verify'

const VerifyPage: React.FC<PageProps> = () => {
    return (
        <>
            <SEO
                title="FastFood es el software #1 en Colombia para la gestión y control de comidas rápidas"
                pathname="verify"
                description="Software para la gestión de negocios de comidas rápidas"
            />
            <Verify />
        </>
    )
}

export default VerifyPage