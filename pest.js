"use strict";
// Super clase Abstracta
Object.defineProperty(exports, "__esModule", { value: true });
var pest = /** @class */ (function () {
    function pest(tipo) {
        this.tipo = tipo;
    }
    pest.prototype.getTipo = function () {
        return this.tipo;
    };
    ;
    return pest;
}());
exports.pest = pest;
