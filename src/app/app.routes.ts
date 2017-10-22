import { Routes, RouterModule } from '@angular/router';

import { PersonajesComponent } from './personajes/personajes.component';
import { AboutComponent } from './about/about.component';
import { PersonajeComponent } from './personaje/personaje.component';


const ROUTES: Routes = [
   { path: 'home', component: PersonajesComponent },
   { path: 'about', component: AboutComponent },
   { path: 'personaje/:cmp', component: PersonajeComponent },
   { path: '**',   pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
