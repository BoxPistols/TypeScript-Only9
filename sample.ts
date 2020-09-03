/**
 * develop by Quokka
 */

// bool number string
let a: string ="string"
let b = true
a

// function
function func(r: number, y: boolean) :number {
      let x  = r * 2
    return x
}
console.log(func(12, false))

// Array
let ar :number[] = [10, 30]
ar

// Ogject
interface Hoge {
    a: number,
    // b: string | null
    // ? = or none
    b?: string
}

let v: Hoge = { a: 10, b: "Huge" }
v

let v2: Hoge = { a: 10}
v2