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
var producto_1 = require("../producto");
var fruta = /** @class */ (function (_super) {
    __extends(fruta, _super);
    function fruta(a, b, c, d, e) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.maduracion = e;
        return _this;
    }
    fruta.prototype.mostrar = function () {
        _super.prototype.mostrar.call(this);
        console.log(this.maduracion);
    };
    fruta.prototype.getmaduracion = function () {
        return this.maduracion;
    };
    return fruta;
}(producto_1.producto));
exports.fruta = fruta;
