import {producto} from'../producto'
 export class verdura extends producto {
 private uso:string;

 constructor(a:number,b:string,c:string,d:string,e:string){
   super(a,b,c,d);
   this.uso=e;
 }
 public mostrar():void{
  super.mostrar();
  console.log(this.uso);
 }
 public getuso():string{
     return this.uso;
 }
}
