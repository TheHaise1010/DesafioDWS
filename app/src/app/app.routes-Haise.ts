import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NavComponent } from './nav/nav.component';
import { REntradaComponent } from './r-entrada/r-entrada.component';
import { RSalidaComponent } from './r-salida/r-salida.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'nav',component:NavComponent},
    {path:'r-entrada',component:REntradaComponent},
    {path:'r-salida',component:RSalidaComponent}
];
