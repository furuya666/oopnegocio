   import {pest} from './pest'
   export class producto extends pest{
 protected precio:number;
 protected nombre:string;
 protected tamaño:string;
 protected color:string;
 constructor(a:number,b:string,c:string,d:string ){
   super('Producto Alimenticio');
   this.precio=a;
   this.nombre=b;
   this.tamaño=c;
   this.color=d;
 }
 public mostrar():void{
    console.log(super.getTipo());
    console.log(this.precio);
    console.log(this.nombre);
    console.log(this.tamaño);
    console.log(this.color);
 }
 public comestible(a:string):void{
     console.log(a);
 }
public getprecio():number{
    return this.precio;
}
public getnombre():string{
    return this.nombre;
}
public gettamaño():string{
    return this.tamaño;
}
public getcolot():string{
    return this.color;
}

}
