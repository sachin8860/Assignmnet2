var x = 9807, sum = 0;
while (x > 0) {
    var rem = x % 10;
    sum = Math.floor(sum + rem);
    x = x / 10;
}
console.log("Sum of Digits = " + sum);