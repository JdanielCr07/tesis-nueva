import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Dashboard from "./scenes/dashboard/index";
import Sidebar from "./scenes/global/sidebar";
import Team from "./scenes/team";
import { Invoices } from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import { Form } from "./scenes/form";
import { Vehiculos } from "./scenes/form/vehiculos";
import { Calendar } from "./scenes/calendar";
import { Bar } from "./scenes/bar";
import { Pie } from "./scenes/pie";
import { FAQ } from "./scenes/faq";
import { Line } from "./scenes/line";
import { Geography } from "./scenes/geography";
import { Mapax } from "./scenes/mapa/mapa";
import { Mtto } from "./scenes/form/mtto";
import { Perfil } from "./scenes/perfil";
import { Correctivo } from "./scenes/form/correctivo";
import { Preventivo } from "./scenes/form/preventivo";
import { Gestion } from "./scenes/gestion";
// import { LoginPage } from "./scenes/login";


function App() {
  const [theme, colorMode]= useMode();
  
  return (<colorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar/>
              <main className="content">
                <Topbar />
                <Routes>
                  {/* <Route path="/" element={<LoginPage/>} exacts/> */}
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="/team" element={<Team/>}/> 
                  <Route path="/contacts" element={<Contacts/>}/> 
                  <Route path="/invoices" element={<Invoices/>}/> 
                  <Route path="/form" element={<Form/>}/> 
                  <Route path="/vehiculos" element={<Vehiculos/>}/> 
                  <Route path="/mtto" element={<Mtto/>}/> 
                  <Route path="/correctivo" element={<Correctivo/>}/> 
                  <Route path="/perfil" element={<Perfil/>}/> 
                  <Route path="/preventivo" element={<Preventivo/>}/> 
                  <Route path="/gestion" element={<Gestion/>}/> 
                  {/* <Route path="/login" element={<LoginPage/>}/>  */}
                  <Route path="/faq" element={<FAQ/>}/>
                  <Route path="/mapa" element={<Mapax/>}/>
                  <Route path="/bar" element={<Bar/>}/>
                  <Route path="/pie" element={<Pie/>}/>
                  <Route path="/line" element={<Line/>}/>
                  <Route path="/geography" element={<Geography/>}/>
                  <Route path="/calendar" element={<Calendar/>}/>
                </Routes>
              </main>
            </div>
          </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App;
