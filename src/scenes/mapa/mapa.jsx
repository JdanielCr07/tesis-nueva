import React from 'react'
import { Mapa } from '../../components/Mapa';
import { Box } from "@mui/material"
import Header from "../../components/header";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import 'leaflet/dist/leaflet.css';
import '../mapa/mapa.css'


export const Mapax = ({ isDashboard = false }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {isDashboard ? null : <Header title="Datos Geograficos" subtitle="Mapa" />}
      <Box
        height= {isDashboard ? null :"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Mapa />
      </Box>
    </Box>
  );
}
;

