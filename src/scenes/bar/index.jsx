import { Box } from "@mui/material";
import Header from "../../components/header";
import { BarChart } from "../../components/BarChart";

export const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Grafico de Categorias" subtitle="Grafico de Barras"/>
        <Box height="75vh">
            <BarChart/>
        </Box>
    </Box>
  )
}
