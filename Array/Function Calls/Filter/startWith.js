let names = [ 'Fred','Frank','Sam','Billy','Bob','Brenda'];
let findLetter = "";

function checkNames(name){
    return name.substring(0,1) ==  findLetter;
}

findLetter = "F";
console.log( names.filter(checkNames) );

findLetter = "B";
console.log( names.filter(checkNames) );

findLetter = "S";
console.log( names.filter(checkNames) );