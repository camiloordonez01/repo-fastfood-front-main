import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { AppDispatch } from '../../../../store'
import { setTitle } from '../../../../store/slices/vars'

import Table from '../../../../components/molecules/Table'

const ListCategoriesPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setTitle('Categorías de producto'))
    }, [dispatch])
    const mock = [
        {
            productCategoryId: 1,
            name: 'Cervezas',
            description: null,
            categoryId: null,
            subCategories: [
                {
                    productCategoryId: 2,
                    name: 'Nacionales',
                    description: null,
                    categoryId: 1,
                    subCategories: [
                        {
                            productCategoryId: 7,
                            name: 'Tipo 1',
                            description: null,
                            categoryId: 2,
                            subCategories: [
                                {
                                    productCategoryId: 9,
                                    name: 'Tipo 1.1',
                                    description: null,
                                    categoryId: 7,
                                    subCategories: []
                                },
                                {
                                    productCategoryId: 10,
                                    name: 'Tipo 1.2',
                                    description: null,
                                    categoryId: 7,
                                    subCategories: []
                                }
                            ]
                        },
                        {
                            productCategoryId: 8,
                            name: 'Tipo 2',
                            description: null,
                            categoryId: 2,
                            subCategories: [
                                {
                                    productCategoryId: 11,
                                    name: 'Tipo 2.1',
                                    description: null,
                                    categoryId: 8,
                                    subCategories: []
                                },
                                {
                                    productCategoryId: 12,
                                    name: 'Tipo 2.2',
                                    description: null,
                                    categoryId: 8,
                                    subCategories: []
                                }
                            ]
                        }
                    ]
                },
                {
                    productCategoryId: 3,
                    name: 'Artesanales',
                    description: null,
                    categoryId: 1,
                    subCategories: [
                        {
                            productCategoryId: 13,
                            name: 'Cartago',
                            description: null,
                            categoryId: 3,
                            subCategories: []
                        },
                        {
                            productCategoryId: 14,
                            name: 'Resto de colombia',
                            description: null,
                            categoryId: 3,
                            subCategories: []
                        }
                    ]
                },
                {
                    productCategoryId: 4,
                    name: 'Importadas',
                    description: null,
                    categoryId: 1,
                    subCategories: []
                },
                {
                    productCategoryId: 5,
                    name: 'Premium',
                    description: null,
                    categoryId: 1,
                    subCategories: [
                        {
                            productCategoryId: 15,
                            name: 'Colombia',
                            description: null,
                            categoryId: 5,
                            subCategories: []
                        },
                        {
                            productCategoryId: 16,
                            name: 'Usa',
                            description: null,
                            categoryId: 5,
                            subCategories: []
                        },
                        {
                            productCategoryId: 17,
                            name: 'Alemania',
                            description: null,
                            categoryId: 5,
                            subCategories: [
                                {
                                    productCategoryId: 19,
                                    name: 'Tipo alemana 1',
                                    description: null,
                                    categoryId: 17,
                                    subCategories: []
                                },
                                {
                                    productCategoryId: 20,
                                    name: 'Tipo alemana 2',
                                    description: null,
                                    categoryId: 17,
                                    subCategories: []
                                }
                            ]
                        }
                    ]
                },
                {
                    productCategoryId: 6,
                    name: 'Refajoo',
                    description: 'Esta es la descripcion',
                    categoryId: 1,
                    subCategories: []
                }
            ]
        },
        {
            productCategoryId: 18,
            name: 'Bebidas',
            description: null,
            categoryId: null,
            subCategories: []
        }
    ]

    const getDataCategories = (data) => {

    }

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
        },
    ]
    return (
        <>
            <Table data={data} headCells={headCells} />
        </>
    )
}

export default ListCategoriesPage
