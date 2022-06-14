import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule ,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
