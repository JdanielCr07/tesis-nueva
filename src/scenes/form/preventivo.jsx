import * as React from 'react';
import { Box, Button, TextField, TextareaAutosize } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import { useMediaQuery} from "@mui/material"
import Header from "../../components/header";
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const currencies = [
  {
    value: 'Tecnico',
    label: 'Tecnico',
  },
  {
    value: 'Conductor',
    label: 'Conductor',
  },
  {
    value: '',
    label: '',
  },
];
const initialValues ={
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const userSchema = yup.object().shape({
    Titulo: yup.string().required("Titulo Requerido"),
    fechaInicio: yup.date().min(new Date(), 'La fecha debe ser igual o posterior a hoy').required('La fecha es requerida'),
    vehiculo: yup.date().required("required"),
})

export const Preventivo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) =>{
    console.log(values);
  }

  return (
    <Box m="20px">
      <Header
        title="Preventivo"
        subtitle="Genera un nuevo Mantenimiento Preventivo"
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Titulo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Titulo}
                name="Titulo"
                error={!!touched.Titulo && !!errors.Titulo}
                helperText={touched.Titulo && errors.Titulo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fechaInicio}
                name="fechaInicio"
                error={!!touched.fechaInicio && !!errors.fechaInicio}
                helperText={touched.fechaInicio && errors.fechaInicio}
                sx={{ gridColumn: "span 1 " }}
              />
              <Box
                component="form"
                sx={{
                  gridColumn: "span 1",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-select-currency"
                  select
                  label="Vehiculo"
                  variant="filled"
                  //     onBlur={handleBlur}
                  //   onChange={handleChange}
                  value={values.vehiculo}
                  name="vehiculo"
                  error={!!touched.vehiculo && !!errors.vehiculo}
                  helperText={touched.vehiculo && errors.vehiculo}
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box
                component="form"
                sx={{
                  gridColumn: "span 1",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-select-currency"
                  select
                  label="Categoria"
                  variant="filled"
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box
                component="form"
                sx={{
                  gridColumn: "span 1",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-select-currency"
                  select
                  label="Tecnico"
                  variant="filled"
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box
                component="form"
                sx={{
                  gridColumn: "span 1",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-select-currency"
                  select
                  label="Solicitud"
                  variant="filled"
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box
                component="form"
                sx={{
                  gridColumn: "span 1",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-select-currency"
                  select
                  label="Tipo de Repeticion"
                  variant="filled"
                  //     onBlur={handleBlur}
                  //   onChange={handleChange}
                  value={values.vehiculo}
                  name="vehiculo"
                  error={!!touched.vehiculo && !!errors.vehiculo}
                  helperText={touched.vehiculo && errors.vehiculo}
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <TextareaAutosize
                fullWidth
                style={{ gridColumn: "span 2", height: "200px" }}
                aria-label="textarea"
                placeholder="Descripcion del Problema"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <Box
                component="form"
                sx={{
                  gridColumn: "span 1",
                }}
                noValidate
                autoComplete="off"
              ></Box>
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
                <Box>
                    <Button component={Link} to="/mtto" sx={{marginRight: "10px"}} type="submit" color="secondary" variant="contained">
                    Regresar
                    </Button>
                </Box>
                <Box>
                   <Button type="submit" color="secondary" variant="contained">
                        Nuevo Manteniento
                    </Button> 
                </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
