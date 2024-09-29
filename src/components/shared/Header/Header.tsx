// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//     const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="#app-bar-with-responsive-menu"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LOGO
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="a"
//                         href="#app-bar-with-responsive-menu"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LOGO
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'white', display: 'block' }}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>
//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default ResponsiveAppBar;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from 'material-ui-search-bar';

import MealMuseLogo from '../../../assets/mealmuse-icon.png';
import './header.scss';
import { Grid } from '@mui/material/Grid2';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Header() {
    return (
        <AppBar position="static" className='header' >
            <Container>
                <Toolbar>
                    <Box component={"img"} src={MealMuseLogo} className="meal-muse-logo" alt="MealMuse logo" />

                    {/* <SearchIcon></SearchIcon> */}
                    <Box sx={{ flexGrow: 1 }}>
                        <h4 className='title'>Search</h4>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SearchBar
                            className='search-bar'
                            value={''}
                            onChange={() => console.log('onChange')}
                            onRequestSearch={() => console.log('onRequestSearch')}
                        />
                    </Box>
                    <Box>
                        <Tooltip title="Add a recipe">
                            <IconButton>
                                <AddCircleIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Profile">
                            <IconButton>
                                <Avatar
                                    img src="/static/images/avatar/2.jpg" alt="Default User" />
                            </IconButton>
                        </Tooltip>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header;