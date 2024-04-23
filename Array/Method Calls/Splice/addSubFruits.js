let fruits = [
    "Banana",       //0
    "Orange",       //1
    "Apple",        //2
    "Mango",        //3
    "Orange",       //4
    "Melon",        //5
    "Watermelon",   //6
    "strawberries", //7
    "grape"         //8
];

fruits.splice(3, 4,"LEMON", "KIWI");

console.log( fruits.join() );