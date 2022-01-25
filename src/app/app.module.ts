import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ServiciosComponent } from './servicios/servicios.component'
import { FichaJugadorComponent } from './ficha/ficha.component'
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    PerfilComponent,
    ServiciosComponent,
    FichaJugadorComponent,
    NotFoundComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
