let x = "wowhn";

let y = x.toString().split("").reverse().join("");
if(x==y){
    console.log("Palindrom");
}
console.log("Not a Palindrom");