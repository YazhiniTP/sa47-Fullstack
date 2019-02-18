console.log("Hello world");

var x = 1;
console.log(typeof(x));

x = " Yazhini ";
console.log(typeof(x));
console.log(x);

function make1(x, y) {
    console.log(x);
}

function make2(x, y, z) {
    make1(x+1);
    console.log(typeof(x));
    if(x == null) {
        console.log("x is null");
    }
    if(y == undefined) {
        console.log("y is undefined");
    }
    console.log(z);
}

xx = 'null';
make2(null, null, 10);
make2('xx', null, 10);
make2(xx, null, 10);


make2(xx, 'aaa');

function make3(fn1) {
    console.log(fn1);
    fn1();
}

function fn1() {
    console.log("Hello world");
}
make3(fn1);

str1 = "Apple";
console.log(str1);
str2 = 'an ' + str1;

console.log(str2);
str2 = `
    xxx An ${str1}
`;
console.log(str2);

var x = true;
var yy = false;

if(x) {
    console.log("True");
}
if(!yy) {
    console.log("False");
}

//g_name is global; l_name is local

g_x = 100;
function make5() {
    let l_x = 10;
    console.log(`x inside > ${x}`);
}

make5();

console.log(`x from outside > ${x}`);


var fruits = ['Apple', 'Orange', 1, 'Grape'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
fruits.push('Pine');
console.log(fruits[4]);
fruits.pop();
console.log(fruits);
fruits.unshift(1);
console.log(fruits);
fruits.unshift('Watermelon');
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.sort();
console.log(fruits);


var numbers1 = [4,9,6,1,0];
numbers1.sort(function(a,b) {
    console.log("a "+ a);
    console.log("b "+ b);
    console.log(b-a);
    return b-a;
})
console.log(numbers1);


var person = {
    firstname : 'Yazhini',
    lastname : 'Palanisamy',
    age : 24,
    gender : 'F',
    'My Studies' : 'SSN, NUS',
    postalCode : 76873253
}
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.gender);
console.log(person["My Studies"]);
console.log(person.postalCode);
console.log(person['age']);
console.log(person['My Studies']);


delete person.postalCode;
console.log(person.postalCode);

function person2(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
}

var p2 = new person2('Yazhini','P', 24, 'F');
console.log(p2.firstname);
console.log(p2.lastname);
console.log(p2.age);
console.log(p2.gender);


/*
function namedx(){
    console.log(l+1);
}

setTimeout(namedx, 5000);

setInterval((=>{
    console.lo
}))
*/

function throwError() {
    throw new Error('This is error');
}

try {
    throwError();
}catch(e) {
    console.log(e);
}finally {
    console.log("Finally executed");
}


var x5 = 4;

switch(x5) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 4:
        console.log('4');
        break;
    default:
        console.log("Default switch");
}


var yyy = 0;
while(yyy <= 5) {
    console.log(yyy);
    yyy++;
}


var t = [0, 1, 3, 5, 7, 9]

t.forEach((result, index)=>{
    console.log("Result > " + result);
    console.log("Index > " + index);
})

for(var i = 0; i < t.length; i++) {
    console.log(t[i]);
}

var months = ['jan', 'feb', 'mar', 'apr', 'may'];
//index, deletecount, value
console.log(months);
copyMonths = months.slice(1,4);
console.log(">>> "+ copyMonths);

months.splice(4,2,'June');
console.log(months);
months.splice(4,2,'June','July');
console.log(months);
