import {producto} from'../producto'

 export class fruta  extends producto {
 private maduracion:string;

 constructor(a:number,b:string,c:string,d:string,e:string){
   super(a,b,c,d);
   this.maduracion=e;
 }

public mostrar():void{
super.mostrar();
console.log(this.maduracion);
}
public getmaduracion():string{
    return this.maduracion;
}
}