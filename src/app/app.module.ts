import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PersonajesComponent } from './personajes/personajes.component';

// servicio
import { ComicService } from './app.service';
import { AboutComponent } from './about/about.component';

// rutas
import { APP_ROUTING } from './app.routes';
import { PersonajeComponent } from './personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonajesComponent,
    AboutComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
