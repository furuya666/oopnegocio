// Super clase Abstracta

export abstract class pest {

   
    constructor(public tipo: string) {
    }
    protected getTipo(): string{
        return this.tipo;
    };

}