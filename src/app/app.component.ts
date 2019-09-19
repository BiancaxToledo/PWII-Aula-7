import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  title = 'Hallo Wolrd ';
  foto = 'favicon.ico';
  peso = 0;
  altura = 0;

  exibir()

  {
    alert(this.title);
  }

  mostrar()

  {
    alert(this.peso/(this.altura * this.altura));
  }


}
