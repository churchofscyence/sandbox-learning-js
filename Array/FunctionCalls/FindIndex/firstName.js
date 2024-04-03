let names = [ 'Fred','Frank','Sam','Billy','Bob','Brenda'];
let letter = "";

function filterName(name){
    return name.substring(0,1) == letter;
}

letter = 'F';
console.log( names.findIndex(filterName) ) ;

letter = 'S';
console.log( names.findIndex(filterName) ) ;

letter = 'B';
console.log( names.findIndex(filterName) ) ;


