import { FC } from 'react'

import { Box } from '@mui/joy'
import { SvgIconComponent } from '@mui/icons-material'

interface Props {
    IconElement: SvgIconComponent
    title: string
    selected: boolean
    key?: React.Key | null
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
const ItemMenu: FC<Props> = ({ IconElement, title, selected, key, onClick }) => {
    return (
        <Box
            className={`flex flex-col border rounded-md text-xs px-1 py-1 cursor-pointer text-center ${
                selected
                    ? 'border-primary text-primary bg-primary bg-opacity-10'
                    : 'border-white text-gray-300 hover:border-gray-100 hover:!text-gray-500 hover:bg-gray-100'
            }`}
            onClick={onClick}
            key={key}
        >
            <IconElement className="!m-auto" sx={{ color: `${selected ? '#0367A6' : 'unset'}` }} />
            {title}
        </Box>
    )
}

export default ItemMenu
