// Q--1
let a = 3; 
let b = 5; 

let c = a + b;
console.log(c)
let d = b * a;
console.log(d);
let e = b - a;
console.log(e);
let f = b / a;
console.log(f);

// Q--2 

let q2 ;
console.log("Value after variable declaration is : " + typeof(q2))
q2 = 5;
console.log(" Initial value: " + q2);
++q2;
console.log(" Value after increment is " + q2);
q2 = 7 + q2;
console.log("Value after addition is : " + q2);
--q2;
console.log("Value after decrement is " + q2);
q2 = q2 / 3 ;
console.log("The remainder is :  " + q2);

// Q--4
let price= 600;
price = price * 5;
console.log(price);


// Q--5
for (let i = 1; i < 11; i++) {
 console.log( "4 x " + i + " = " + i * 4); 
}

// Q--6
 

let p1= 650;
let p2= 100;
let qu1= 3;
let qu2 = 7; 
let shp = 100;

document.write("Price of item 1 : " + p1 + "\n")
document.write(" <br>  Quantity of item 1 : " + qu1)
document.write(" <br> Price of item 2 : " + p2)
document.write(" <br> Quantity of item 2 : " + qu2)
document.write(" <br> Price of shipping : " + shp)

let total = p1 * qu1 + p2 * qu2 + shp;
document.write(" <br> Total Cost : " + total);