import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//Componentes

import { PlataformaComponent } from './components/plataforma/plataforma.component';
import { HomeComponent } from './components/home/home.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarrecursoComponent } from './components/agregarrecurso/agregarrecurso.component';
import { LoginComponent } from './components/login/login.component'; // <-- NgModel lives here

import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RecursodataComponent } from './components/recursodata/recursodata.component';
import { EditrecursoComponent } from './components/editrecurso/editrecurso.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TagComponent } from './components/tag/tag.component';
@NgModule({
  declarations: [
    AppComponent,
    PlataformaComponent,
    HomeComponent,
    RecursosComponent,
    AboutComponent,
    NavbarComponent,
    AgregarrecursoComponent,
    LoginComponent,
    RecursodataComponent,
    EditrecursoComponent,
    BuscarComponent,
    FilterPipe,
    TagComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
