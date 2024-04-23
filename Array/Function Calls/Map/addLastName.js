let  firstName = ['Tom','Bill','Jim'];
let fullNames = [];

function addLastName (currentValue, index, arr) {
    fullNames.push(currentValue + " " + this.lastName);
} ;
    
firstName.map(addLastName, {lastName: "Smith"});

console.log(` List of peoples full names :  ${fullNames.join()}`);