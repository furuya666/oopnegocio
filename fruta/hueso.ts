import {fruta} from'./fruta'
import {imple} from '../imple'
 export class hueso extends fruta implements imple{

    constructor(a:number,b:string,c:string,d:string,e:string){
     super(a,b,c,d,e);
    }
    public mostrar():void{
      super.mostrar();
    }
    public comestible():void{
      super.comestible('Algun dia  se puede comer');
    }

}

