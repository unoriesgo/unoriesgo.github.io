import { EditrecursoComponent } from './components/editrecurso/editrecurso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PlataformaComponent } from "./components/plataforma/plataforma.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RecursosComponent } from './components/recursos/recursos.component';
import { AgregarrecursoComponent } from "./components/agregarrecurso/agregarrecurso.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthGuard } from './guard/auth.guard';
import { RecursodataComponent } from './components/recursodata/recursodata.component';
import { BuscarComponent } from './components/buscar/buscar.component';
// import { HeroListComponent } from './hero-list/hero-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TagComponent } from "./components/tag/tag.component";
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'recursos', component: RecursosComponent },
  { path: 'agregarrecursos', component: AgregarrecursoComponent  ,canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'recurso/:id',
    component: RecursodataComponent,
  },
  {
    path: 'tag/:tag',
    component: TagComponent,
  },
  { path: 'editrecurso/:id', component: EditrecursoComponent },
  { path: 'buscar/:termino', component:  BuscarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }