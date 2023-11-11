import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { AppDispatch } from '../store'
import { setTitle } from '../store/slices/vars'

const ServicePage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(setTitle('Servicio'))
    }, [dispatch])
    return (
        <>
            <h1>Services</h1>
        </>
    )
}

export default ServicePage
