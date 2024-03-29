import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { MenuItemI } from './TheAppbar'

const TheAppbarMenuItem: FC<{ item: { item: string; path: string } }> = ({
    item
}) => {
    return (
        <MenuItem sx={{ height: '35px' }}>
            <NavLink to={item.path} style={{ textDecoration: 'none' }}>
                <Typography textAlign="center">{item.item}</Typography>
            </NavLink>
        </MenuItem>
    )
}

export const TheAppbarMenu: FC<any> = ({ items, ...props }) => {
    return (
        <Menu {...props} sx={{ color: '#582A8F' }}>
            {items.map((el: MenuItemI) => (
                <TheAppbarMenuItem item={el} key={el.item}></TheAppbarMenuItem>
            ))}
        </Menu>
    )
}
