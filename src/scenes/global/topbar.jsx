import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsModeOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import  PersonModeOutlinedIcon  from "@mui/icons-material/PersonOutlined";
// import { Link } from '@mui/material';
import { useState } from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);
    const [anchorEl, setAnchorEl] = useState(null);

  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (
    <Box display= 'flex' justifyContent='flex-end' p={2}>      
      {/*Icons */}
      <Box display="flex" >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon fontSize='large'/>
          ): (
            <DarkModeOutlinedIcon fontSize='large'/>
          )}
        </IconButton>
        <IconButton>
            <NotificationsModeOutlinedIcon fontSize='large'/>
        </IconButton>
        <div>
          <IconButton onClick={handleClick}>
            <PersonModeOutlinedIcon fontSize='large'/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <a href="/perfil"><MenuItem onClick={handleClose}>Perfil</MenuItem></a>

            <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
          </Menu>
        </div>

      </Box>
    </Box>
  );
}

export default Topbar;

// <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>

