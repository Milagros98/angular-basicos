import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Thor','Hulk','Hawkeye'];
  heroeBorrado: string = '';

 borrarHeroe():void {
   const borrado = this.heroes.pop() || '';
   this.heroeBorrado = borrado;
   console.log(borrado);

 }

}
