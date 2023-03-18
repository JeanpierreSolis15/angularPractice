import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  valordelcambio:any = "";
  restuladoDelCambio:any = 0;

  constructor(){
    console.log('muelita')
  }

  enviarDato(){
    this.restuladoDelCambio =  this.valordelcambio * 3.74;
    console.log(this.restuladoDelCambio)
  }

  resetearValores(){
    console.log("se activo la funcion del padre ")
    this.valordelcambio = 0;
    this.restuladoDelCambio = 0;
  }
}
