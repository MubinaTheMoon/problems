let a = 2;
let b = 9;
let c = -7;
let d = 5;
let e = 7;

// 1-problem
if(a > 0){
    console.log("Positive number!")
}else{
    console.log("Negative number!")
}

// 2-problem
if(a % 2 == 0){
    console.log("Even number!")
}else{
    console.log("Odd number!")
}


// 3-problem
if(a > 2 && b <= 3){
    console.log(`True: ${a} > 2 & ${b} <= 3`);
}else{
    console.log(`False: ${a} > 2 & ${b} <= 3`);
}

// 4-problem
if(a <= b && b <= c){
    console.log(`True : ${a} <= ${b} <= ${c}`)
}else{
    console.log("False");
}


// 5-problem
if(a % 2 == 0 && b % 2 == 0){
    console.log("Even numbers!");
}else {
    console.log("Odd numbers!");
}


// 6-problem
if(a > 0 && b > 0 && c > 0){
    console.log("All are positive!");
}else{
    console.log("There is a negative number!");
}



// 7-problem
let bigNum = 315;

let firstNum = bigNum % 10;
let secondNum = ((bigNum % 100) - firstNum) / 10;
let thirdNum = (bigNum - (bigNum % 100)) / 100;

if(firstNum !== secondNum && firstNum !== thirdNum && secondNum !== thirdNum){
    console.log("Different numbers!");
}else{
    console.log("Change numbers!");
}

// 8-problem

if(a == b || b == c || a == c){
    console.log("There are equal numbers!");
}else{
    console.log("There aren't equal numbers!");
}

// 9-problem (Uyga vazifa 2-misol)
if(a >= 0 && b <-2){
    console.log(`True: ${a} <= 0 && ${b} < -2`);
}else{
    console.log(`False: ${a} <= 0 && ${b} < -2`);
}

// 10-problem (Uyga vazifa 3-misol)
if(a <= b && b <= c){
    console.log(`True:${a} < ${b} < ${c}`);
}else{
    console.log(`False:${a} < ${b} < ${c}`);
}


// 11-problem (Uyga vazifa 4-misol)
if(a % 2 == 0 && b % 2 == 0){
    console.log("Not odd numbers!");
}else{
    console.log("Odd numbers!");
}




// 12-problem (Uyga vazifa 5-misol)
if(a % 2 == 0 && b % 2 == 0){
    console.log("There is no odd number!");
}else{
    console.log("There is an odd number!");
}



// 13-problem (Uyga vazifa 6-misol)
if(a % 2 == 0 || b % 2 == 0){
    console.log("There is an odd number!");
}else{
    console.log("There is no odd number!");
}


// 14-problem (Uyga vazifa 7-misol)
if(a > 0 && b > 0 && c > 0){
    console.log("All positive numbers!");
}else{
    console.log("Not positive numbers!");
}

// 15-problem (Uyga vazifa 8-misol)
let isAPositive = a > 0;
let isBPositive = b > 0;
let isCPositive = c > 0;

const isOnePositive = (isAPositive && !isBPositive && !isCPositive) ||
(!isAPositive && isBPositive && !isCPositive) ||
(!isAPositive && !isBPositive && isCPositive);

if (isOnePositive) {
    console.log("True: There is only one positive number.");
} else {
    console.log("There are more than one positive or no positive numbers!");
}


// 16-problem (Uyga vazifa 9-misol)
const TwoPositive = (!isAPositive && isBPositive && isCPositive) ||
(isAPositive && !isBPositive && isCPositive) ||
(isAPositive && isBPositive && !isCPositive);

if (TwoPositive) {
    console.log("True: There are two positive numbers.");
} else {
    console.log("There are more than two positive or no positive numbers!");
}


// 17-problem (Uyga vazifa 10-misol)
if(a >= 10 && a <= 99 && a % 2 == 0){
    console.log(`True: ${a} Ikki xonali juft son.`);
}else{
    console.log(`False: ${a} Ikki xonali juft son emas.`);
}


// 18-problem (Uyga vazifa 11-misol)
let f = 919;
if(f >= 100 && f <= 999 && !f % 2 == 0){
    console.log(`true: ${f} uch xonali toq son`);
}else{
    console.log(`false: ${f} uch xonali toq son emas`);
}

// 19-problem (Uyga vazifa 12-misol)
let g = 9;
let h = -9;
let i = 10;
if((g === -h) || (g === -i) || (h === -i)){
    console.log("True: Sonlarning bir jufti qarama-qarshi");
}else{
    console.log("False: Sonlarning hech biri qarama-qarshi emas");
}




// ARIFMETIK OPERATORLAR
// let x = 3;
// let y = Math.pow(x, 2)
// console.log(y);

// begin-1
let R = 5;
const L = 2 * Math.PI * R;
const S = Math.PI * Math.pow(R, 2)

console.log(`Doiraning radiusi ${R}`);
console.log(`Uning uzunligi ${Math.round(L)}`);
console.log(`Yuzasi ${Math.round(S)}`);


// begin-2
let x = 18;
let y = 2;
const G = Math.sqrt(x * y);
console.log(G);

// begin-3
let x1 = 9;
let y1 = 3 * Math.pow(x1, 6) - 6 * Math.pow(x1, 2) - 7;
console.log(y);

// begin-4
let xKg = 4;
let xSom = 8;
let yKg = 10;
const kg1som = 1 * (xSom / xKg);
const ySom = yKg * (xSom / xKg);
console.log(kg1som);
console.log(ySom);


// begin-5
let m = 19;
let n = 20;
console.log(`Dastlabki qiymatlar: ${m} va ${n}`);

let changed = m;
m = n;
n = changed;
console.log(`Almashtirilgan qiymatlar: ${m} va ${n}`);




// integer-1
let num = 79;
let onlik = Math.floor(num / 10);
let birlik = num % 10;
let yigindisi = onlik + birlik;
console.log(`Berilgan son: ${num}, O'nlik xonasidagi raqam: ${onlik}, Birlilar xonasidagi raqam: ${birlik}, Ularning yig'indisi: ${yigindisi}`);


// integer-2
let num1 = 49;
let numStr = num1.toString();
let replaced = numStr[1] + numStr[0];
console.log(+replaced);

// integer-3
let num2 = 588;
let hundreds = Math.floor(num2 / 100);
console.log(hundreds);

// integer-4
let num3 = 7855;
let yuz = Math.floor(num3 / 100);
let qoldiq = yuz % 10
console.log(`berildi: ${num3}, yuzliklar xonasidagi raqam: ${qoldiq}`);

// integer-5
let vaqt = 5688;

let soat = Math.floor( vaqt / 3600);
let minut = Math.floor((vaqt % 3600) / 60);
let sekund = vaqt % 60;

console.log(`Berilgan: ${vaqt} sekund. O'tgan vaqt: ${soat} soat, ${minut} minut, ${sekund} sekund`);


// begin1
let p = 5;
let q = 9;
let S1 = p * q;
let P = 2 * (p + q);

console.log(`S=${S1}, P=${P}`);

// begin2
let diametr = 9;
let L1 = Math.PI * diametr;
let r = diametr / 2;
let S2 = Math.PI * Math.pow(r, 2);
console.log(`Aylananing uzunligi: ${Math.floor(L1)}, yuzi: ${Math.floor(S2)}`);


// begin3
let kub = 5;
let V = Math.pow(kub, 3);
let S3 = 6 * Math.pow(kub, 2);
console.log(`Kubning yon tomoni ${kub} berilgan, hajmi: ${V}, to'la sirti: ${S3}`);

// begin4
let tomon1 = 5;
let tomon2 = 3;
let tomon3 = 6;
let V1 = tomon1 * tomon2 * tomon3;
let S4 = 2 * (tomon1 * tomon2 + tomon2 * tomon3 + tomon1 * tomon3);
console.log(`Paralelepipedning tomonlari: ${tomon1}, ${tomon2}, ${tomon3}. Hajmi: ${V1}, sirti: ${S4}`);

// begin5
let M = (a + b) / 2;
console.log(`O'rta arifmetik M = ${M}`);