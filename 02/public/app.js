"use strict";
// boolean
let isStart = true;
//number
let age = 25;
//BigInt
// let BigInt: bigint = 5n;
//string
let title = "Flowers";
// null
let empty = null;
// undefined
let none = undefined;
// objecct
let car = { model: "audi", color: "red" };
// symbol
let sym = Symbol("id");
// array
let lottoNumbers = [33, 2, 5, 7, 18, 35];
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
let move = Direction.Up;
// void
function sayHello() {
    console.log("Hello");
}
// any
let whatever = 4244;
whatever = "qwerty";
whatever = true;
let value = "sefse";
value = 32432;
function loopForever() {
    while (true) {
        console.log("Dziala");
    }
}
let obj = { lastname: "Kot" };
