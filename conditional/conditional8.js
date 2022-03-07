function happyNum(num) {
    let al = [];
    while (true) {
        arr = num.toString().split('');
        sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += (parseInt(arr[i]) * parseInt(arr[i]));
        } console.log("sum: ", sum)
        if (sum === 1) {
            return true;
        } if (al.includes(sum)) {
            return false;
        } else {
            al.push(sum)
        }
        num = sum;
    }
    return false;
}
console.log(happyNum(20));