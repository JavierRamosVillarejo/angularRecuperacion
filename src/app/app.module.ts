import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarLoteriaComponent } from './componentes/generar-loteria/generar-loteria.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarLoteriaComponent,
    CalculadoraComponent,
    MultiplicarComponent,
    HolaComponent,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    RegistroComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
