import { Component } from '@angular/core';
//Import para el plugin share
import { Share, ShareOptions } from '@capacitor/share';
//Import para el plugin toast
import { Toast } from '@capacitor/toast';
import { ToastController } from '@ionic/angular';
//Import para el plugin del navegador
import { Browser } from '@capacitor/browser';
//Import para plugin de la camara
import {Camera, CameraOptions, CameraResultType} from '@capacitor/camera';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  src:string="";

  constructor(public toastContro:ToastController) {}
  
  //Funcion share que crea lo que se compartira y 
  //se disparará cuando se presione el boton en la pantalla principal
  share(){
    let options:ShareOptions={
      title:"Compartir App",
      text:"Comparte la app",
      dialogTitle:"Proyecto Web App",
      url:"https://www.youtube.com/watch?v=WMweEpGlu_U"
    }
    Share.share(options);
  }

  //Codigo necesario de una funcion para llamar el toast dando el texto desea
  async toast(){
    
    const toast = await this.toastContro.create({
        message: 'Toast Nativo desde Ionic',
        duration: 3000
      }); 
    toast.present();
  }

  //Codigo de la funcion para abrir un navegador, en este caso, en la pagina del sicenet
  browser(){
       Browser.open({ url: 'https://sicenet.itsur.edu.mx/' });
  }

  //Funcion para tomar foto
  takePic(){
    let options:CameraOptions={
      quality:100,
      resultType:CameraResultType.DataUrl,
      saveToGallery:true
    }
    Camera.getPhoto(options).then((result)=>{
      if(result.dataUrl){
        this.src = result.dataUrl;
      }

    },(err)=>{
      alert(JSON.stringify(err));
    })
  }
}
