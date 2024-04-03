let peopleAge = [13,34,5,49];
// 13 + 34 + 5 + 49 = 101


function calculateAge(total,current,index,arr){
    return total + current;
};

console.log( peopleAge.reduce(calculateAge,0) );