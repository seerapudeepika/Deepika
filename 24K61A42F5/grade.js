function getGrade(studentMarks) {
    let grade;
    if (studentMarks >= 90) {
        grade = 'A';
    } else if (studentMarks >= 75 && studentMarks <= 89) {
        grade = 'B';
    } else if (studentMarks >= 50 && studentMarks <= 74) {
        grade = 'C';
    } else {
        grade = 'Fail';
    }
    return grade;
}

let studentMarks = 82;
let grade = getGrade(studentMarks);
console.log("Marks:", studentMarks, "Grade:", grade);

