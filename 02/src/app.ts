

// boolean
let isStart: boolean = true;

//number
let age: number = 25;

//BigInt
// let BigInt: bigint = 5n;

//string
let title: string = "Flowers";

// null
let empty: null = null;

// undefined
let  none: undefined = undefined;

// objecct
let car: {model: string; color: string} = {model: "audi", color: "red"}

// symbol
let sym: symbol = Symbol("id");

// array
let lottoNumbers: number[] = [33,2,5,7,18,35];

// enum
enum Direction {
    Up, Down, Right, Left
}
let move: Direction = Direction.Up

// void
function sayHello(): void {
    console.log("Hello")
}

// any
let whatever: any = 4244;
whatever = "qwerty";
whatever = true;

let value: unknown = "sefse";
value = 32432

function loopForever(): never {
    while (true) {
      console.log("Dziala");
    }
  }

let obj: Object = {lastname: "Kot"}