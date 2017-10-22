import { Component } from '@angular/core';
import { ComicService, Personaje } from '../../app.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   personaje: Personaje;

   constructor(private _comicService:ComicService, private _router: Router) { }

   buscarPersonaje(texto: string) {
      if (texto.length > 0) {
         this._router.navigate(['/personaje', texto]);
      }
   }

}
