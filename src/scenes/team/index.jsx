import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Data } from "../../data/data";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/header";
import  { Button } from "@mui/material";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field: "id", headerName: "ID"},
    {field: "name", 
    headerName:"Nombre",
    flex: 1, 
    cellClassName: "name-column--cell",
    },
    {field: "phone", 
    headerName:"Telefono",
    flex : 1,
    },
    {field: "email", 
    headerName:"Email",
    flex : 1,
    },
    {field: "Vehiculo Asignado", 
    headerName:"Vehiculo Asignado",
    flex: 1, 
    cellClassName: "name-column--cell",
    },
    {field: "access", 
    headerName:"Rol",
    flex:1,
    headerAlign: "center",
    renderCell: ({ row: {access} }) =>{
        return(
            <Box 
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
                access === "admin"
                 ? colors.greenAccent[600]
                 : colors.greenAccent[700]
            }
            borderRadius="4px"
            >
                {access === "admin" && <AdminPanelSettingsOutlined/>}
                {access === "manager" && <SecurityOutlined/>}
                {access === "user" && <LockOpenOutlined/>}
                <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                    {access}
                </Typography>

            </Box>
        )
    }
    
    },
  ]
  
  return (
    <Box m="20px">
        <Header title="Registro" subtitle="Registro de Usuarios Asignados" />
        <Box
        m="40px 0 0 0"
        height="70vh" 
        sx={{" & .MuiDataGrid-root":{
            border:"none",
            },
            "& .MuiDataGrid-cell":{
                borderBottom: "none"
            },
            "& .name-column--cell":{
                color : colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor: colors.BlueAccent[700],
                borderBottom: "none"
            },
            "& .MuiDataGrid-VirtualScroller":{
                backgroundColor: colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
                borderTop: "none",
                backgroundColor: colors.BlueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color: `${colors.grey[100]} !important`,
            }
            }}
           > 
           <DataGrid 
                checkboxSelection
                rows={Data}
                columns={columns}
                // components={{Toolbar: GridToolbar}}
            />
             <Box display="flex" justifyContent="flex-end">
                <Button color="secondary" sx={{m: 1}} variant="contained">Editar</Button>
                <Button color="error" sx={{m: 1}} variant="contained">Eliminar</Button>
            </Box>

        </Box>
    </Box>
  )
  
}

export default Team;
