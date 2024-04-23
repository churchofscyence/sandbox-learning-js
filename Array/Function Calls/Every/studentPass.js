let studentGradeMath = [71,83,90];
let studentGradeEnglish = [30,70,90];

function checkGrades(grade){
 return grade > 70;
};

console.log( ` Did the Math student all passed ? ${studentGradeMath.every(checkGrades)}` );

console.log( ` Did the English student all passed ? ${studentGradeEnglish.every(checkGrades)}` );