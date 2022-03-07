let x = 371;
let temp = x, sum = 0,rem;
while (x > 0) {
    rem = x % 10;
    sum = sum + (rem * rem * rem);
    x = Math.floor(x / 10);
}
if (sum == temp) {
    console.log("Armstrong No");
}
else {
    console.log("Not an Armstring No");
}