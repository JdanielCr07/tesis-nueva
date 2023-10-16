import * as React from 'react';
import { Box, Button, TextField } from "@mui/material"
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
const phoneRegExp =
/^((\+[1-9]{1,4}[  -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstNam: yup.string().required("required"),
    lastNam: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().min(8, "invalid password").required("required"),
    contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    address1: yup.string().required("required"),
})

export const Perfil = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) =>{
    console.log(values);
  }

  return (
    <Box m="20px">
        <Header title="Perfil" subtitle="Perfil de Usuario"/>
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
                handleSubmit 
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                    display="grid" 
                    gap="30px" 
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": {gridColumn: isNonMobile ? undefined : "span 4"},
                    }}
                    >
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Nombre" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          error={!!touched.firstName && !!errors.firstName} 
                          helperText={touched.firstName && errors.firstName}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Apellido" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          error={!!touched.lastName && !!errors.lastName} 
                          helperText={touched.lastName && errors.lastName}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="email"
                          label="Email" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          error={!!touched.email && !!errors.email} 
                          helperText={touched.email && errors.email}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="password"
                          label="Contraseña" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password}
                          name="password"
                          error={!!touched.password && !!errors.password} 
                          helperText={touched.password && errors.password}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Telefono" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contact}
                          name="contact"
                          error={!!touched.contact && !!errors.contact} 
                          helperText={touched.contact && errors.contact}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Direccion" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.address1}
                          name="address1"
                          error={!!touched.address1 && !!errors.address1} 
                          helperText={touched.address1 && errors.address1}
                          sx={{ gridColumn: "span 2" }}
                        />
                        {/* <Box
                            component="form"
                            sx={{
                              gridColumn: "span 1", 
                            }}
                            noValidate
                            autoComplete="off"
                        >
                          <TextField
                            fullWidth
                            id="filled-select-currency"
                            select
                            label="Rol"
                            variant="filled"
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
                            label="Vehiculo"
                            variant="filled"
                            fullWidth
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box> */}
                    </Box>
                    
                    <Box display="flex" justifyContent="end" mt="20px">
                <Box>
                    <Button component={Link} to="/" sx={{marginRight: "10px"}} type="submit" color="secondary" variant="contained">
                    Salir
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
  )
}
