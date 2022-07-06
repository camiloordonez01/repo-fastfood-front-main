import React from 'react'
import { PageProps } from 'gatsby'

// Components
import SEO from '../components/atoms/seo'
import ResendCode from '../components/organisms/ResendCode'

const ResenCodePage: React.FC<PageProps> = () => {
    return (
        <>
            <SEO
                title="FastFood es el software #1 en Colombia para la gestión y control de comidas rápidas"
                pathname="resendcode"
                description="Software para la gestión de negocios de comidas rápidas"
            />
            <ResendCode />
        </>
    )
}

export default ResenCodePage