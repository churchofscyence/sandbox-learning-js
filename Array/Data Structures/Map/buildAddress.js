tomsAddress = {
    address:'123 Main Street', 
    city:'Greensboro', 
    state:'NC', 
    zipCode:'27408'
};

for( const[key,values] of Object.entries(tomsAddress)){
    console.log( `${key} : ${values}`);
}