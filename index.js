//1
// let A = 25, B = 6;
// let count = 0;

// while (A >= B) {
//   A -= B;
//   count++;
// }

// console.log("Joylashgan B lar soni:", count);
// console.log("Qoldiq:", A);

//2
// let A = 25, B = 6;
// let count = 0;

// while (A >= B) {
//   A -= B;
//   count++;
// }

// console.log("B kesmalar soni:", count);

//3
// let A = 25, B = 6;
// let count = 0;

// while (A >= B) {
//   A -= B;
//   count++;
// }

// console.log("B kesmalar soni:", count);

//4
// let n = 81;
// let isPower = true;

// while (n > 1) {
//   if (n % 3 !== 0) {
//     isPower = false;
//     break;
//   }
//   n /= 3;
// }

// console.log(isPower ? "3 ning darajasi!" : "3 ning darajasi emas!");

//5
// let n = 32;
// let k = 0;

// while (n > 1) {
//   n /= 2;

// }

// console.log("k =", k);
//6
// let n = 9;
// let answer = 1;

// while (n > 1) {
//   answer *= n;
//   n -= 2;
// }

// console.log("Natija:", answer);

//7
// let n = 20;
// let k = 1;

// while (k * k <= n) {
//   k++;
// }

// console.log("Natija k =", k);

//8
// let n = 20;
// let k = 1;

// while ((k + 1) * (k + 1) <= n) {
//   k++;
// }

// console.log("Natija k =", k);
//9
// let n = 50;
// let k = 0;
// let pow = 1;

// while (pow <= n) {
//   pow *= 3;
//   k++;
// }

// console.log("k =", k);

//10
// let n = 50;
// let k = 0;
// let pow = 1;

// while ((pow * 3) <= n) {
//   pow *= 3;
//   k++;
// }

// console.log("k =", k);
// //11
// let n = 20;
// let k = 0;
// let sum = 0;

// while (sum + (k + 1) < n) {
//   k++;
//   sum += k;
// }

// console.log("k =", k, "Yig'indi =", sum);

//12
// let n = 20;
// let k = 0;
// let sum = 0;

// while (sum + (k + 1) < n) {
//   k++;
//   sum += k;
// }

// console.log("k =", k, "Yig'indi =", sum);

//13
// let n = 2.5;
// let k = 0;
// let sum = 0;

// while (sum < n) {
//   k++;
//   sum += 1 / k;
// }

// console.log("k =", k, "Yig'indi =", sum);

//14
// let n = 2.5;
// let k = 0;
// let sum = 0;

// while (sum + 1 / (k + 1) < n) {
//   k++;
//   sum += 1 / k;
// }

// console.log("k =", k, "Yig'indi =", sum);

//16
// let p = 10;
// let distance = 10;
// let total = 10;
// let days = 1;

// while (total <= 200) {
//   days++;
//   distance += distance * p / 100;
//   total += distance;
// }

// console.log("Kunlar soni:", days);
// console.log("Jami masofa:", total.toFixed(2), "km");

//17
// let n = 58, m = 7;
// let q = 0;

// while (n >= m) {
//   n -= m;
//   q++;
// }

// console.log("Butun qism:", q);
// console.log("Qoldiq:", n);

//18

//19
// let n = 98765;
// let count = 0;
// let sum = 0;

// while (n > 0) {
//   sum += n % 10;
//   n = Math.floor(n / 10);
//   count++;
// }

// console.log("Raqamlar soni:", count);
// console.log("Raqamlar yig'indisi:", sum);

//20
// let n = 751234;
// let hasTwo = false;

// while (n > 0) {
//   if (n % 10 === 2) {
//     hasTwo = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }

// console.log(hasTwo ? "Son ichida 2 bor" : "Son ichida 2 yo'q");

// 21
//n >0 ichidagi toq sonlarni yuqligini chiqaruvchi dastur kerak

let n = 312;
let toqSonbor = false;
while (n > 0) {
  let qoldiq = n % 10;
  if (qoldiq % 2 !== 0) {
    toqSonbor = true;
    break;
  }
  n = Math.floor(n / 10);
}

if (toqSonbor === true) {
  console.log("Toq son bor");
} else if (toqSonbor === false) {
  console.log("toq Son yuq");
}

// let a = 12;
// console.log(a);
