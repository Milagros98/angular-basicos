import { Component } from "@angular/core";


@Component({
    selector: "heroe-component",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{

    public nombre : string = 'Ironman';
    public edad: number = 20;
    public nombreVerdadero: string = 'Tony';

    get nombreReal() : string {
        return this.nombreVerdadero.toUpperCase();
    }

    cambiarNombre () : void{
        this.nombre = "Spiderman";
        this.nombreVerdadero = 'Peter';
    }
    cambiarEdad() : void{
        this.edad = 15;
    }
    
}