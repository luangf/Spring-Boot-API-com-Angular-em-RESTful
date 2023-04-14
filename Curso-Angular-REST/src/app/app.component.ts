import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-REST';
  
  //variavel, como se fosse um array/json/obj, atributo login... inicia ele zerado, toda vez q instancia a classe inicia ele instancia com o valor zerado
  usuario={login: '', senha: ''};
  
  public login(){
    console.log("Login: "+this.usuario.login+" Senha: "+this.usuario.senha);
  }
  
}