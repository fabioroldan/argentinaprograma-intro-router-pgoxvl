import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ServiciosComponent } from './servicios/servicios.component'
import { FichaJugadorComponent } from './ficha/ficha.component'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mi-perfil', component: PerfilComponent },
  { path: 'sobre-nosotros', component: AboutComponent },
  { path: 'jugador/:nombre', component: FichaJugadorComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }