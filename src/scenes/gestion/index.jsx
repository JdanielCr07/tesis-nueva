import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { tokens } from "../../theme";
import { useTheme } from '@emotion/react';
import { OutlinedCard } from '../../components/card';



export function Gestion() {
  const [spacing, setSpacing] = React.useState(2);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const columnas = [
    { id: 1, titulo: "Columna 1" },
    { id: 2, titulo: "Columna 2" },
    { id: 3, titulo: "Columna 3" },
    { id: 4, titulo: "Columna 4" },
  ];
  return (
    <Grid sx={{ flexGrow: 1 }} >
      <Grid item xs={12} m={5}>
        <Grid container justifyContent="space-evenly" spacing={spacing}>
        {columnas.map((columna) => (
            <Grid key={columna.id} item>
              <OutlinedCard/>
              <Paper
                sx={{
                  height: 700,
                  width: 400,
                  backgroundColor: colors.primary[400]
                }}/>
                <h2>{columna.titulo}</h2>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}