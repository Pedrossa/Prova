import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';


import {FormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CategoriaService } from './services/categoria.service';
import { CategoriaComponent } from './categoria/categoria.component';

import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './services/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    
   CategoriaComponent,
   ClientesComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientesService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
