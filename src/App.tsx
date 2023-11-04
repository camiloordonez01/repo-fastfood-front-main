import { useEffect } from 'react'
import { RouterProvider  } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import router from './routes'

import { AppDispatch } from './store'
import { isLogged } from './store/thunks/auth'


function App() {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(isLogged())
    }, [dispatch])

    return <RouterProvider router={router} />
}

export default App
