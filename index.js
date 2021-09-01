
console.log("hola");

console.log(2+6);

let date = new Date();

console.log("Hoy es " + date);
console.log("Today is day ");

document.body.style.backgroundColor = '#212121';
document.body.style.color = '#ffffff'


//Ejercicio 1

let name = "John";
let admin = name;
alert(admin) // John

//Ejercicio 2*

let planetEarth = "Planet Earth";
let currentVisitor;


//Ejercicio 3

const birthday = '18.04.1982';
const age = someCode(birthday); // No es correcto usar mayúsculas para "birthday y age". 
//Las constantes en mayusculas se utilizan como álias para valores que son "Hard-coded"


//Ejercicio 4

let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//Ejercicio 5

let user = {

    name: "John",
    surname: "Smith"

};

user.name = "Pete";
delete user.name;
console.log(user);


//Ejercicio 6

function isEmpty(obj){
    if ( obj != null) {
        return true;
    } else {
        return false
    }
}

let schedule = {};
alert( isEmpty(schedule) ); // true 
schedule["8:30"] = "get up"; 
alert( isEmpty(schedule) ); // false


//Ejercicio 7

let salaries = {

    John: 100,
    Ann: 160,
    Pete: 130

}

let sumaSalaries = salaries.John + salaries.Ann + salaries.Pete;


if (sumaSalaries != null ) {
    console.log(sumaSalaries);
} 

//Ejercicio 8

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

let obj = new multiplyNumeric(menu.width, menu.height, menu.title)
function multiplyNumeric(width, height, title){
    
    this.width = width * 2;
    this.height = height * 2;
    this.title = title;
    

}

console.log(menu);
console.log(obj);

    