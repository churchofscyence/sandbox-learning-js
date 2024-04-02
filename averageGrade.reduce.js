let student_grades = [70, 89, 75, 83, 69, 92];

function sumGrades(totalGrades,currect_grade,index,arr){

    return totalGrades + currect_grade;

}

let resultSumGrades = student_grades.reduce(sumGrades, 0);

let average = resultSumGrades/student_grades.length;

console.log( ` The students avrage score was ${average}` );