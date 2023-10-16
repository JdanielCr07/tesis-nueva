import * as React from 'react';
import { Box, Button, TextField, TextareaAutosize } from "@mui/material"
import Header from "../../components/header";
import { Link } from 'react-router-dom';

export const Mtto = () => {
  
  return (
    <Box m="20px">
      <Header
        title="Nuevo Mantenimiento"
        subtitle="Determine el Mantenimiento"
      /> 
            <Box display="flex" justifyContent="initial" mt="20px" mb="20px">
              <Box sx={{ marginRight: "10px" }}>
                <Button component={Link} to='/preventivo' type="submit" color="secondary" variant="contained"
                sx={{ fontSize: "20px", padding: "10px 20px" }}>
                  Preventivo
                </Button>
              </Box>
              <Box sx={{ marginRight: "10px" }}>
                <Button component={Link} to='/correctivo' type="submit" color="secondary" variant="contained" 
                sx={{ fontSize: "20px", padding: "10px 20px" }}>
                  Correctivo
                </Button>
              </Box>
            </Box>
    </Box>
  );
}
