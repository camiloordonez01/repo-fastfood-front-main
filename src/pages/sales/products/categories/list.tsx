import React, { FC } from 'react'

import Table from '../../../../components/molecules/Table'

const ListCategoriesPage: FC = () => {
    const data = [
        {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3
        },
        {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9
        },
    ]
    
    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Dessert (100g serving)'
        },
        {
            id: 'calories',
            numeric: true,
            disablePadding: false,
            label: 'Calories'
        },
        {
            id: 'fat',
            numeric: true,
            disablePadding: false,
            label: 'Fat (g)'
        },
        {
            id: 'carbs',
            numeric: true,
            disablePadding: false,
            label: 'Carbs (g)'
        },
        {
            id: 'protein',
            numeric: true,
            disablePadding: false,
            label: 'Protein (g)'
        }
    ]
    return (
        <>
            <Table data={data} headCells={headCells} />
        </>
    )
}

export default ListCategoriesPage
