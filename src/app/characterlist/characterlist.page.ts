import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.page.html',
  styleUrls: ['./characterlist.page.scss'],
})
export class CharacterlistPage implements OnInit {

  //Dentro de la clase creamos el arreglo para los personajes

  characters = []

  constructor(
    private http: HttpClient
  ) { }

  //Este metodo lo que hace es ejecutarse apenas la pagina sea cargada
  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res);
      //Y aqui llenamos el arreglo con el RES osea el objeto
      this.characters = res.results;
    })
  }

}
