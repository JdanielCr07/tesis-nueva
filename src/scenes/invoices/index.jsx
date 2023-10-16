import { Box, Typography, useTheme  } from "@mui/material";
import { DataGrid,  GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/header";
import { Porfis } from "../../data/dato";
import { Button } from "@mui/material";

export const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field: "id", headerName: "ID"},
    {field: "Marca", 
    headerName:"Marca",
    headerAlign: "center",
    align: "center",
    flex: 1, 
    cellClassName: "name-column--cell",
    },
    {field: "Modelo", 
    headerName:"Modelo",
    headerAlign: "center",
    align: "center",
    flex: 1, 
    cellClassName: "name-column--cell",
    },
    {field: "year", 
    headerName:"Año",
    headerAlign: "center",
    align: "center",
    flex : 1,
    },
    {field: "Matricula", 
    headerName: "Matricula",
    headerAlign: "center",
    align: "center",
    flex : 1,
    }
  ]
  
  return (
    <Box m="20px">
        <Header 
        title="Vehiculos" 
        subtitle="Lista de Vehiculos"
        />
        <Box
        m="40px 0 0 0"
        height="60vh" 
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
            "& .MuiCheckbox-root":{
                color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color: `${colors.grey[100]} !important`,
            }
            }}
           > 
           <DataGrid 
                checkboxSelection
                rows={Porfis}
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

