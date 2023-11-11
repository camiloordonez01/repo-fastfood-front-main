import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { AppDispatch } from '../../../store'
import { setTitle } from '../../../store/slices/vars'

const ListProductsPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(setTitle('Productos'))
    }, [dispatch])
    return (
        <>
            <h1>Sales</h1>
        </>
    )
}

export default ListProductsPage
