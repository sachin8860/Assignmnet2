// 1st Pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string)

// 2nd Pattern

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 3rd Pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// 4th Pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let k = 0; k < i; k++) {
//         string += " ";
//     }
//     for (let j = i; j <= n; j++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// 5th Pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         string += "* ";
//     }
//     string += "\n";
// }
// console.log(string);

// 6th Pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += "*";
//     }
//     string += "\n";
// }
// for (let k = 1; k <= n - 1; k++) {
//     for (let l = 0; l < n - k; l++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);


// // 7th Pattern

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n-i; j++) {
//         string += " ";
//     }
//     for (let j = 0; j < i; j++) {
//         string += "*";
//     }
//     string += "\n";
// }
// for (let k = 1; k <= n - 1; k++) {
//     for (let l = 0; l < k; l++) {
//         string += " ";
//     }
//     for (let l = 0; l < n - k; l++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// 1st Pattern

let n = 5;
let num = 1;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string+=`${num++} `;
  }
  string += "\n";
}
console.log(string)
