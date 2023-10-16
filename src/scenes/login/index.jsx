import { useDispatch } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link} from "@mui/material"
import { AuthLayout } from './AuthLayout';
import { useForm } from './useForm';
import { checkingAuthentication, startgGoogleSignIn } from './thunks';


export const LoginPage = () => {
  
  const dispatch = useDispatch() 

  const { email, password, onInputChange} = useForm({
    email: 'jose@google.com',
    password: '123456'
  });

  const onSubmit = (event)=>{
    event.preventDefault();

    console.log({email, password})
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () =>{
    console.log('onGoogleSingIn')
    dispatch(startgGoogleSignIn())

  }

  return (
    <AuthLayout title= 'Inicio de sesión'>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Correo' 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />           
            </Grid>

            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Contraseña' 
                type="password" 
                placeholder="contraseña" 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button type='submit' variant="contained" fullWidth>
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button onClick={ onGoogleSignIn } variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } underline="none" to='/auth/Register' >
              {"Crear una cuenta"}
            </Link>
          </Grid>
      </form>
    </AuthLayout>
        
  )
}
