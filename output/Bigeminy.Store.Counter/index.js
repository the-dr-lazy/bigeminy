"use strict";
var Bigeminy_Redux = require("../Bigeminy.Redux/index.js");
var Data_Function = require("../Data.Function/index.js");
var Increment = (function () {
    function Increment() {

    };
    Increment.value = new Increment();
    return Increment;
})();
var Decrement = (function () {
    function Decrement() {

    };
    Decrement.value = new Decrement();
    return Decrement;
})();
var Reset = (function () {
    function Reset(value0) {
        this.value0 = value0;
    };
    Reset.create = function (value0) {
        return new Reset(value0);
    };
    return Reset;
})();
var reset = function ($5) {
    return Bigeminy_Redux.mkAction(Reset.create($5));
};
var reducer$prime = function (v) {
    if (v instanceof Increment) {
        return function (v1) {
            return v1 + 1 | 0;
        };
    };
    if (v instanceof Decrement) {
        return function (v1) {
            return v1 - 1 | 0;
        };
    };
    if (v instanceof Reset) {
        return Data_Function["const"](v.value0);
    };
    throw new Error("Failed pattern match at Bigeminy.Store.Counter (line 24, column 1 - line 24, column 37): " + [ v.constructor.name ]);
};
var initialState = 0;
var reducer = Bigeminy_Redux.mkReducer(reducer$prime)(initialState);
var increment = Bigeminy_Redux.mkAction(Increment.value);
var decrement = Bigeminy_Redux.mkAction(Decrement.value);
module.exports = {
    increment: increment,
    decrement: decrement,
    reset: reset,
    reducer: reducer
};
