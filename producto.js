"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pest_1 = require("./pest");
var producto = /** @class */ (function (_super) {
    __extends(producto, _super);
    function producto(a, b, c, d) {
        var _this = _super.call(this, 'Producto Alimenticio') || this;
        _this.precio = a;
        _this.nombre = b;
        _this.tamaño = c;
        _this.color = d;
        return _this;
    }
    producto.prototype.mostrar = function () {
        console.log(_super.prototype.getTipo.call(this));
        console.log(this.precio);
        console.log(this.nombre);
        console.log(this.tamaño);
        console.log(this.color);
    };
    producto.prototype.comestible = function (a) {
        console.log(a);
    };
    producto.prototype.getprecio = function () {
        return this.precio;
    };
    producto.prototype.getnombre = function () {
        return this.nombre;
    };
    producto.prototype.gettamaño = function () {
        return this.tamaño;
    };
    producto.prototype.getcolot = function () {
        return this.color;
    };
    return producto;
}(pest_1.pest));
exports.producto = producto;
