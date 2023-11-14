import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { AppDispatch } from '../../../../store'
import { setTitle } from '../../../../store/slices/vars'

// Components
import Table from '../../../../components/molecules/Table'

// Services
import { Categories, getCategories } from '../../../../services/products'

const ListCategoriesPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [data, setData] = useState<Omit<Categories, 'subCategories'>[]>([])

    useEffect(() => {
        dispatch(setTitle('Categorías de producto'))
    }, [dispatch])

    const getData = useCallback(async () => {
        let listCategories: Omit<Categories, 'subCategories'>[] = []
        const getDataCategories = async (category: Categories) => {
            const { subCategories, ...info } = category
            listCategories.push(info)

            if (subCategories && subCategories.length > 0) {
                await Promise.all(
                    subCategories.map(async (subCategory) => {
                        await getDataCategories(subCategory)
                    })
                )
            }
        }

        const categories = getCategories()

        await Promise.all(
            categories.map(async (category) => {
                await getDataCategories(category)
            })
        )

        setData(listCategories)
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Nombre'
        },
        {
            id: 'description',
            numeric: false,
            disablePadding: true,
            label: 'Descripción'
        },
        {
            id: 'parent',
            numeric: false,
            disablePadding: true,
            label: 'Categoría padre'
        }
    ]
    return <><Table data={data} headCells={headCells} /></>
}

export default ListCategoriesPage
