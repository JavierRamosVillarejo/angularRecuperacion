import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"loteria",component:LoteriaComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"multiplicar/:factor",component:MultiplicarComponent},
  {path:"hola/:nombre/:apellido",component:HolaComponent},
  {path:"estructuras",component:EstructurasComponent},
  {path:"formulario",component:FormularioClaseComponent},
  {path:"crud-local", component:CrudLocalComponent},
  
  {path:"**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
