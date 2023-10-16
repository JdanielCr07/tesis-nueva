import { Box, IconButton, Button, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import { Transactions } from "../../data/transactions";
import { Construction, DownloadOutlined, DriveEta, Handyman, PersonOutlined } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Traffic } from "@mui/icons-material";
import { LineChart } from "../../components/LineChart"
import { BarChart } from "../../components/BarChart"
import { GeographyChart } from "../../components/GeographyChart"
import { StatBox } from "../../components/StatBox"
import { ProgressCircle } from "../../components/ProgressCircle";
import { Mapax } from "../mapa/mapa";
import Header from "../../components/header";

const dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
      <Box m="20px">
            <Box 
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                  <Header title="Inicio" subtitle="Bienvenido al Inicio"/>
                
            </Box>
        {/* Grid y charts*/}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
            {/* Row 1 */}
            <Box 
                  gridColumn="span 3" 
                  backgroundColor= {colors.primary[400]} 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <StatBox
                    title="12"
                    subtitle="Total Conductores"
                    progress="0.75"
                    increase="+14%"
                    icon={
                      <PersonOutlined sx={{ color:colors.greenAccent[600], fontSize: "26px"}}
                    />
                  }
              />
              
          </Box>
          <Box 
                gridColumn="span 3" 
                backgroundColor= {colors.primary[400]} 
                display="flex"
                alignItems="center"
                justifyContent="center"
               >
                <StatBox
                  title="4"
                  subtitle="Total Tecnicos"
                  progress="0.5"
                  increase="+21%"
                  icon={
                    <Handyman sx={{ color:colors.greenAccent[600], fontSize: "26px"}}/>
                }

                />
              
          </Box>
          <Box 
                  gridColumn="span 3" 
                  backgroundColor= {colors.primary[400]} 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <StatBox
                    title="12"
                    subtitle="Cantidad de Vehiculos"
                    progress="0.30"
                    increase="+5%"
                    icon={
                      <DriveEta sx={{ color:colors.greenAccent[600], fontSize: "26px"}}/>
                  }
                  />
          </Box>
          <Box 
                  gridColumn="span 3" 
                  backgroundColor= {colors.primary[400]} 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <StatBox
                    title="15"
                    subtitle="Cantidad de Mantenimientos"
                    progress="0.80"
                    increase="+43%"
                    icon={
                      <Construction sx={{ color:colors.greenAccent[600], fontSize: "26px"}}/>
                  }
                />
          </Box>
          {/* Row 2 */}
          <Box
            gridColumn="span 6"
            gridRow="span 4"
            backgroundColor= {colors.primary[400]}
          >
            <Box 
              mt="25px"
              p="0 10px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                  Grafico de Categorias
                </Typography>
              </Box>
            </Box>

              <Box height="550px" mt="20px">
                <BarChart isDashboard={true} />
              </Box>
            </Box>
            {/* Transaction */}
            <Box 
            gridColumn="span 6" 
            gridRow="span 4"
            backgroundColor={colors.primary[400]}
            overflow="hidden"
            >
                <Mapax  style={{ width: "100%", height: "100%" }} isDashboard={true}/>
                  
            </Box>
          {/* Row 3 */}
          {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          > */}
            {/* <Typography variant="h5" fontWeight="600">
              Campaing
            </Typography> */}
            {/* <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            > */}
                {/* <ProgressCircle size="125"/>
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
                  $48,352 revenue Generated
                </Typography>
                <Typography >Includes extra misc  expenditure and cost</Typography> */}
            {/* </Box>
          </Box> */}
{/* 
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          
          >
            <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px"}}>
              Grafico de Categorias
            </Typography>
            <Box 
            height="250px"
            mt="-20px"
            >
                <BarChart isDashboard={true} />
            </Box>

          </Box> */}

          {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          
          > */}
            {/* <Typography variant="h5" fontWeight="600" sx={{ mb: "15px"}}>
              Geography Based Traffic
            </Typography> */}
            {/* <Box 
            height="2"
            > */}
                {/* <GeographyChart isDashboard={true} /> */}
            {/* </Box>

          </Box> */}


          {/*  */}

      </Box>
    </Box>
  );
};

export default dashboard;
