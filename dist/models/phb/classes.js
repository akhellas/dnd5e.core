"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Class = (function () {
    function Class() {
        this.level = 1;
    }
    return Class;
}());
exports.Class = Class;
var Barbarian = (function (_super) {
    __extends(Barbarian, _super);
    function Barbarian() {
        _super.call(this);
    }
    return Barbarian;
}(Class));
exports.Barbarian = Barbarian;
var Fighter = (function (_super) {
    __extends(Fighter, _super);
    function Fighter() {
        _super.call(this);
    }
    return Fighter;
}(Class));
exports.Fighter = Fighter;
