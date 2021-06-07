import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: string;
  character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    //Basicamente lo que pasa aqui es toma el Id que se guardo en la ruta, lo guarda en profileid
    //despues manda a llamar el http client y buscan en la API junto con el id para seleccionar el personaje
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe(res => this.character=res);
  }

}
