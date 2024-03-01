import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { AppDispatch } from '../../../../store'
import { setTitle } from '../../../../store/slices/vars'

// Components
import Table from '../../../../components/molecules/Table'

// Services
import { Categories, getCategories } from '../../../../services/products'

type CategoriesType = Omit<Categories, 'subCategories' | 'productCategoryId' | 'categoryId'>
interface DataTable extends CategoriesType {
    id: number
    parent: string
}

const ListCategoriesPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [data, setData] = useState<DataTable[]>([])

    useEffect(() => {
        dispatch(setTitle('Categorías de producto'))
    }, [dispatch])

    const getData = useCallback(async () => {
        let mapCategories = new Map<number, string>()
        const getMapCategories = async (category: Categories) => {
            mapCategories.set(category.productCategoryId, category.name)

            if (category.subCategories && category.subCategories.length > 0) {
                await Promise.all(
                    category.subCategories.map(async (subCategory) => {
                        await getMapCategories(subCategory)
                    })
                )
            }
        }

        let listCategories: DataTable[] = []
        const getDataCategories = async (category: Categories) => {
            const { subCategories, productCategoryId, categoryId, ...info } = category
            const parent = mapCategories.get(categoryId ?? 0) ?? ''
            listCategories.push({id: productCategoryId, parent,...info})

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
                await getMapCategories(category)
            })
        )

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
