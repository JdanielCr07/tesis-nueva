import { Box } from "@mui/material";
import Header from "../../components/header";
import { PieChart } from "../../components/PieChart";

export const Pie = () => {
  return (
    <Box m="20px">
        <Header title="Grafico de Mantenimientos" subtitle="Grafico simple"/>
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
  )
}
