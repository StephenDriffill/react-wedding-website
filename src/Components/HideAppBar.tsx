import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide, { SlideProps } from '@mui/material/Slide';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './HideAppBar.css';

export interface HideOnScrollProps  { 
  children: SlideProps['children']
}

function HideOnScroll({children}: HideOnScrollProps) {

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface HideAppBarProps {
  menuItems: { href: string, name: string }[];
}

export default function HideAppBar({ menuItems }: HideAppBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<MenuProps['anchorEl']>(null);
  const open = Boolean(anchorEl);
  const handleClick: IconButtonProps['onClick'] = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='HideAppBar'>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {
                menuItems.map(({ href, name }) => (
                  <MenuItem key={name} className="HideAppBar__item" onClick={handleClose}>
                    <a href={href}>{name}</a>
                  </MenuItem>
                ))
              }
            </Menu>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}