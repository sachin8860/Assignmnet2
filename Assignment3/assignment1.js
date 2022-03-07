// let no = prompt("Enter Your no: ")

// let no1 = no + ""
// console.log(no1.split("").reverse().join(""))

let n = 123, rem ,rev=0;

while (n != 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n/10);
}
console.log(rev);

