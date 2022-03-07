function myFunction(str) {
    var y = str.toLowerCase().split(" ");
    for (var i = 0; i < y.length; i++) {
        y[i] = y[i].charAt(0).toUpperCase() + y[i].substring(1);     
    }
    return y.join(" ");
 }
 
console.log(myFunction("the quick brown fox"));