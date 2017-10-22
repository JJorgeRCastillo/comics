import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService, Personaje } from '../app.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: []
})
export class PersonajeComponent implements OnInit {

  personaje: Personaje;
  filtro: string = "";

  constructor(private _activatedRoute: ActivatedRoute, private _comicService: ComicService) { 
    this._activatedRoute.params.subscribe(params => {
      this.personaje = this._comicService.getPersonaje(params['cmp']);
      this.filtro = params['cmp'];
    });
  }

  ngOnInit() {
  }

}
