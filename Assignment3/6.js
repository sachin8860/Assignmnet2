function myFunction(str) {
    let max = 0;
    var y = str.split(" ");
    var word = null;

    for (let i = 0; i < y.length; i++) {
        if ((y[i].length) > max) {
            max = y[i].length;
            word = y[i];
        }
    }
    return word;
}

console.log(myFunction("Web Development Tutorial"));