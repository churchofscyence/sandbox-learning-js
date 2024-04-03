let names = [ 'Fred','Frank','Sam','Billy','Bob','Brenda'];
let letter = "";

function filterName(name){
    return name.substring(0,1) == letter;
}

letter = 'F';
console.log( names.find(filterName) ) ;

letter = 'S';
console.log( names.find(filterName) ) ;

letter = 'B';
console.log( names.find(filterName) ) ;


