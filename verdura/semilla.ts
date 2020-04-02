import {verdura} from'./verdura'
import {imple}from '../imple'
 export class semilla extends verdura implements imple{

    constructor(a:number,b:string,c:string,d:string,e:string){
     super(a,b,c,d,e);
    }
    public mostrar():void{
      super.mostrar();
    }
    public comestible():void{
      super.comestible('No se puede comer');
    }

}
