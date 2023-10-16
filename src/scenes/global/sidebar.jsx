import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import  PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined";
import  ReceiptOutlinedIcon  from "@mui/icons-material/ReceiptOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  CalendarTodayOutlinedIcon  from "@mui/icons-material/CalendarTodayOutlined";
import  HelpOutlinedIcon  from "@mui/icons-material/HelpOutlined";
import  BarChartOutlinedIcon  from "@mui/icons-material/BarChartOutlined";
import  PieChartOutlineOutlinedIcon  from "@mui/icons-material/PieChartOutlineOutlined";
import  TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import  MapOutlinedIcon  from "@mui/icons-material/MapOutlined";
// import  ContactsOutlinedIcon  from "@mui/icons-material/ContactsOutlined";
import NoCrashIcon from '@mui/icons-material/NoCrash';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandymanIcon from '@mui/icons-material/Handyman';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Gestion } from "../gestion";

const Item = ({ title, to, icon, selected, setSelected}) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
     return(
      <MenuItem 
      active={selected === title} 
      style={{color: colors.grey[100]}} 
      onClick={()=> setSelected(title)} 
      icon={icon}
      > 
        <Typography>{title}</Typography>
        <Link to={to}/>
       
      </MenuItem>
     )
   }
  

const Sidebar = () => {
  const theme = useTheme ();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box 
    sx={{
      "& .pro-sidebar-inner":{
        background: `${colors.primary[400]} !important`
      }, 
      "& .pro-icon-wrapper":{
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover":{
        color: "#868dfb !important" ,
      },
      "& .pro-menu-item.active":{
        color: "#6870fa !important",
      },
    }}
    >
      <ProSidebar>
      <Menu>
        {/* Logo and menu icon */}
        <MenuItem 
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          
        <Typography variant="h3" color={colors.grey[100]}>
            Admin
        </Typography>            
        </MenuItem>
        
        
        {/* MENU ITEM */}
        <Box
        >
          <Item
            title="Inicio"
            to="/"
            icon={<HomeOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}        
          />
          <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{m: "15px 0 5px 20px"}}
          >
            Usuarios
          </Typography>
          <Item
            title="Nuevo Usuario"
            to="/form"
            icon={<PersonOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Gestion de equipo"
            to="/team"
            icon={<PeopleOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          /> 
          <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{m: "15px 0 5px 20px"}}
          >
            Vehiculos
          </Typography>
          <Item
            title="Nuevo Vehiculo"
            to="/vehiculos"
            icon={<NoCrashIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />
          <Item
            title="Gestion de Vehiculos"
            to="/invoices"
            icon={<ReceiptOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />      
          <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{m: "15px 0 5px 20px"}}
          >
            Mantenimientos
          </Typography>
          <Item
            title="Generar Mantenimiento"
            to="/mtto"
            icon={<HandymanIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />
          {/* <Item
            title="Solicitudes"
            to="/team"
            icon={<FactCheckIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />  */}
          <Item
            title="Gestion"
            to="/gestion"
            icon={<EngineeringIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          /> 
          <Item
            title="Calendario"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />
          <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{m: "15px 0 5px 20px"}}
          >
            Datos
          </Typography>
          
          <Item
            title="Grafico 1"
            to="/bar"
            icon={<BarChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />
          <Item
            title="Grafico 2"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />
          {/* <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
           */}
          
          {/* <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          /> */}
          {/* <Item
            title="Geography chart"
            to="/geography"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          /> */}
          <Item
            title="Mapa"
            to="/mapa"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          
          />

        </Box>
      </Menu>     
    </ProSidebar>
   </Box>
   
  );
};

export default Sidebar;
