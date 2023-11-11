import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { AppDispatch } from '../store'
import { setTitle } from '../store/slices/vars'

const DashboardPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(setTitle('Panel'))
    }, [dispatch])
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

export default DashboardPage
