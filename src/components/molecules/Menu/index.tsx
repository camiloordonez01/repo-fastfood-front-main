import React, { FC } from 'react'
import { PointOfSale, Timeline, Phone, Favorite, PersonPin, } from '@mui/icons-material'
import { ListItemDecorator, Sheet, Tab, TabList, Tabs, Typography } from '@mui/joy'

const Menu: FC = () => {
    return (
        <>
            <Tabs aria-label="Icon tabs" defaultValue={0}>
                <TabList tabFlex="auto">
                    <Tab orientation="vertical">
                        <ListItemDecorator>
                            <PointOfSale />
                        </ListItemDecorator>
                        Servicio
                    </Tab>
                    <Tab orientation="vertical">
                        <ListItemDecorator>
                            <Timeline />
                        </ListItemDecorator>
                        Ventas
                    </Tab>
                    <Tab orientation="vertical">
                        <ListItemDecorator>
                            <PersonPin />
                        </ListItemDecorator>
                        Nearby
                    </Tab>
                </TabList>
            </Tabs>
        </>
    )
}

export default Menu
