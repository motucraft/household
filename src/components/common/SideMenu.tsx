import React, { CSSProperties } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HouseIcon from '@mui/icons-material/House'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import { NavLink } from 'react-router-dom'

interface SideMenuProps {
  drawerWidth: number,
  mobileOpen: boolean,
  handleDrawerTransitionEnd: () => void
  handleDrawerClose: () => void
}

interface MenuItem {
  text: string,
  path: string,
  icon: React.ComponentType,
}

const SideMenu =
    ({
       drawerWidth,
       mobileOpen,
       handleDrawerTransitionEnd,
       handleDrawerClose
     }: SideMenuProps) => {

      const MenuItems: MenuItem[] = [
        {
          text: 'Home',
          path: '',
          icon: HouseIcon,
        },
        {
          text: 'Report',
          path: '/report',
          icon: EqualizerIcon,
        },
      ]

      const baseLinkStyle: CSSProperties = {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }
      const activeLinkStyle: CSSProperties = {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      }

      const drawer = (
          <div>
            <Toolbar/>
            <Divider/>
            <List>
              {MenuItems.map((item, index) => (
                  <NavLink key={item.text} to={item.path} style={({ isActive }) => {
                    console.log('選択されたメニュー：', item.text, isActive)
                    return {
                      ...baseLinkStyle,
                      ...(isActive ? activeLinkStyle : {})
                    }
                  }}>
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <item.icon/>
                        </ListItemIcon>
                        <ListItemText primary={item.text}/>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
              ))}
            </List>
          </div>
      )

      return (
          <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
          >
            {/*モバイルサイズ用*/}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
              {drawer}
            </Drawer>

            {/*PCサイズ用*/}
            <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
              {drawer}
            </Drawer>
          </Box>
      )
    }
export default SideMenu
