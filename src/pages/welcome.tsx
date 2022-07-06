import React from 'react'
import { PageProps } from 'gatsby'

// Components
import SEO from '../components/atoms/seo'
import TourInitial from '../components/organisms/TourInitial'

const WelcomePage: React.FC<PageProps> = () => {
    return (
        <>
            <SEO
                title="FastFood es el software #1 en Colombia para la gestión y control de comidas rápidas"
                pathname="welcome"
                description="Software para la gestión de negocios de comidas rápidas"
            />
            <TourInitial />
        </>
    )
}

export default WelcomePage