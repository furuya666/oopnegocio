"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raiz_1 = require("./verdura/raiz");
var semilla_1 = require("./verdura/semilla");
var grano_1 = require("./fruta/grano");
var hueso_1 = require("./fruta/hueso");
var Zanahoria = new raiz_1.raiz(2, 'Zanahoria', 'Mediano', 'Naranja', 'Culinarios');
var Haba = new semilla_1.semilla(1, 'Haba', 'Mediano', 'Verde', 'Culinarios');
var Higo = new grano_1.grano(1, 'Higo', 'Mediano', 'Verde', 'Climatericas');
var Durazno = new hueso_1.hueso(1, 'Durazno', 'Mediano', 'Verde', 'Climatericas');
Zanahoria.mostrar();
Zanahoria.comestible();
console.log("**********************");
Haba.mostrar();
Haba.comestible();
console.log("**********************");
Higo.mostrar();
Higo.comestible();
console.log("**********************");
Durazno.mostrar();
Durazno.comestible();
