import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Contacts } from "../../data/contacts";
import Header from "../../components/header";
import { useTheme } from "@emotion/react";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {field: "id", headerName: "ID", flex: 0.5},
    {field: "registrarId", headerName: "Registrar ID"},
    {field: "name", 
    headerName:"Name",
    flex: 1, 
    cellClassName: "name-column--cell",
    },
    {field: "age", 
    headerName:"Age",
    type: "number",
    headerAlign:"left",
    align: "left",
    },
    {field: "phone", 
    headerName:"Phone Number",
    flex : 1,
    },
    {field: "email", 
    headerName:"Email",
    flex : 1,
    },
    {field: "address", 
    headerName: "Address",
    flex : 1,
    },
    {field: "zipCode", 
    headerName:"ZipCode",
    type: "number",
    flex : 1,
    },
    {field: "city", 
    headerName:"Ciity",
    flex : 1,
    },
  ]
  
  return (
    <Box m="20px">
        <Header title="Contacts" subtitle="List of Contacts for future reference " />
        <Box
        m="40px 0 0 0"
        height="75vh" 
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
                rows={Contacts}
                columns={columns}
                components={{Toolbar: GridToolbar}}
            />
        </Box>
    </Box>
  )
  
}

export default Team;
