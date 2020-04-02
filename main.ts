import { raiz } from './verdura/raiz';
import { semilla } from './verdura/semilla';
import { grano } from './fruta/grano';
import { hueso } from './fruta/hueso';

const Zanahoria=new raiz(2,'Zanahoria','Mediano','Naranja','Culinarios');
const Haba=new semilla(1,'Haba','Mediano','Verde','Culinarios');
const Higo=new grano(1,'Higo','Mediano','Verde','Climatericas');
const Durazno=new hueso(1,'Durazno','Mediano','Verde','Climatericas');
Zanahoria.mostrar();
Zanahoria.comestible();
Haba.mostrar();
Haba.comestible();
Higo.mostrar();
Higo.comestible();
Durazno.mostrar();
Durazno.comestible();

