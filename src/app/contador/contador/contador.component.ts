import { Component } from "@angular/core";

@Component({
    selector: 'appcontador',
    template: `
    <!-- <h1>Holi Mundo</h1> -->
        <h1>{{ titulo }}</h1>

        <h3>La base es: {{ base }}</h3>

        <button (click)="acumular(+base);" >+ {{ base }}</button>

        <span>{{ numero }}</span>

        <button (click)="acumular(-base);">- {{ base  }}</button>
            `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base : number = 51;
  
    acumular( valor : number){
      this.numero += valor;
    }
}
