import { FC } from 'react'

import { Box, Button, Input, List, ListDivider, ListItem, ListItemButton, ListSubheader } from '@mui/joy'

const InventoryPage: FC = () => {
    const categories = [
        {
            category: 'Bebidas',
            subCategories: ['Aguas', 'Energizantes', 'Gaseosas', 'Jugos', 'Limonadas', 'Michelada', 'Sodas']
        },
        {
            category: 'Cervezas',
            subCategories: ['Artesanales', 'Especiales', 'Importadas', 'Nacionales', 'Premium', 'Refajo']
        },
        {
            category: 'Cervezas',
            subCategories: ['Artesanales', 'Especiales', 'Importadas', 'Nacionales', 'Premium', 'Refajo']
        },
        {
            category: 'Cócteles'
        },
        {
            category: 'Licores',
            subCategories: ['Aguardientes', 'Ginebras', 'Hierbas', 'Ron', 'Tequila', 'Vodka', 'Whisky']
        }
    ]
    return (
        <Box className="bg-white rounded border border-gray-200">
            <Box className="flex bg-drab">
                <button className="bg-dark text-white px-3 py-2">Productos</button>
                <button className="text-white hover:text-dark hover:bg-white px-3 py-2">Ingredientes</button>
                <button className="text-white hover:text-dark hover:bg-white px-3 py-2">Categorías</button>
                <button className="text-white hover:text-dark hover:bg-white px-3 py-2">Stock</button>
            </Box>
            <Box className="grid grid-cols-4" sx={{ height: 'calc(100dvh - 112px)' }}>
                <Box className="col-span-1 bg-dark overflow-y-scroll">
                    <List size="sm">
                        {categories.map((category, indexCategory) => (
                            <ListItem nested key={`ItemCategory${indexCategory}`}>
                                {category.subCategories ? (
                                    <>
                                        <ListSubheader className="!text-primary">{category.category}</ListSubheader>
                                        <List>
                                            {category.subCategories.map((subCategory, indexSubCategory) => (
                                                <ListItem key={`ItemSubCategory${indexCategory}${indexSubCategory}`}>
                                                    <ListItemButton className="!text-white hover:!text-dark hover:!bg-white">
                                                        {subCategory}
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                        <ListDivider />
                                    </>
                                ) : (
                                    <>
                                        <List>
                                            <ListItem>
                                                <ListItemButton className="!text-white hover:!text-dark hover:!bg-white">
                                                    {category.category}
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <ListDivider />
                                    </>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box className="col-span-3 p-4">
                    <Box className="w-full p-3 bg-drab max-w-40">
                        <Input endDecorator={<Button>Buscar</Button>} />
                    </Box>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default InventoryPage
