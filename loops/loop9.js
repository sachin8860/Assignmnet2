// let x = 9807;
// let y = x.toString().split("").reverse().join("");
// console.log("Reversed No is: "+ y);

let x = 9807;
var rem , rev = 0;
while (x > 0) {
    rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
}
console.log("Reversed No is: "+ rev);