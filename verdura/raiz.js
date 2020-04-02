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
var verdura_1 = require("./verdura");
var raiz = /** @class */ (function (_super) {
    __extends(raiz, _super);
    function raiz(a, b, c, d, e) {
        return _super.call(this, a, b, c, d, e) || this;
    }
    raiz.prototype.mostrar = function () {
        _super.prototype.mostrar.call(this);
    };
    raiz.prototype.comestible = function () {
        _super.prototype.comestible.call(this, 'Se puede comer');
    };
    return raiz;
}(verdura_1.verdura));
exports.raiz = raiz;
