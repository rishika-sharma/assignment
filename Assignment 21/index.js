//Age
alert("Calculate Your Age In Days.");
let age = parseInt(prompt("What is Your Age ?"));
ageInDays = age * 365;
alert(`Your Age (${age} Years) Is Roughly ${ageInDays} Days.`);

//area of rectangle
alert("Calculate The Area Of Rectangle.");
let lOfRect = parseInt(prompt("What is The Lenght Of Rectangle ?"));
let bOfRect = parseInt(prompt("What is The Breadth Of Rectangle ?"));
let aOfRect = lOfRect * bOfRect;
alert(`The Area of the Rectangle whose height is ${lOfRect} and Breadth is ${bOfRect} is ${aOfRect}`);

//area of triangle
alert("Calculate The Area Of Triangle.");
let hOfTri = parseInt(prompt("What is The Height Of Triangle ?"));
let bOftri = parseInt(prompt("What is The Base Of Triangle ?"));
let aOftri = 1/2 * hOfTri * bOftri;
alert(`The Area of the Triangle whose Height is ${hOfTri} and Base is ${bOftri} is ${aOftri}`);
