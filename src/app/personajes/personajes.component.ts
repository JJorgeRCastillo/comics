import { Component } from '@angular/core';
import { ComicService, Personaje } from '../app.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-personajes',
   templateUrl: './personajes.component.html',
   styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

   personajes: Personaje[] = [];

   constructor(private _comicService: ComicService, private _router: Router) {
      this.personajes = this._comicService.getPersonajes();
   }

   buscarPersonaje(texto: string){
      this._router.navigate(['/personaje', texto])
   }

}
