import { Box, Button, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import { useMediaQuery} from "@mui/material"
import Header from "../../components/header";

const initialValues ={
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const userSchema = yup.object().shape({
    marca: yup.string().required("required"),
    modelo: yup.string().required("required"),
    year: yup.number().required('Por favor, ingresa el año')
    .integer('Por favor, ingresa un número entero')
    .min(1960, 'El año debe ser mayor o igual a 1960')
    .max(2100, 'El año debe ser menor o igual a 2100'),
    matricula: yup.string().required("required"),
})

export const Vehiculos = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) =>{
    console.log(values);
  }

  return (
    <Box m="20px">
        <Header title="Registro" subtitle="Registar un nuevo Vehiculo"/>
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
                          label="Marca" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="marca"
                          error={!!touched.marca && !!errors.marca} 
                          helperText={touched.marca && errors.marca}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Modelo" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.modelo}
                          name="modelo"
                          error={!!touched.modelo && !!errors.modelo} 
                          helperText={touched.modelo && errors.modelo}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Matricula" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.matricula}
                          name="matricula"
                          error={!!touched.matricula && !!errors.matricula} 
                          helperText={touched.matricula && errors.matricula}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="year"
                          label="Año" 
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.matricula}
                          name="year"
                          error={!!touched.year && !!errors.year} 
                          helperText={touched.year && errors.year}
                          sx={{ gridColumn: "span 2" }}
                        />
                    </Box>
                    <Box 
                        display="flex"
                        justifyContent="end"
                        mt="20px"
                        >
                        <Button type="submit" color="secondary" variant="contained">
                            Registrar Vehiculo
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}
