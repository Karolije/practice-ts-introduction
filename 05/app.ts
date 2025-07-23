let grades: number[] = []

function addGrade(grade: 1 | 2 | 3 | 4 | 5 | 6 ): void {
    grades.push(grade)
}

function getAverage(): number | null {
    if (grades.length === 0) return null;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return +(sum / grades.length).toFixed(2)
}

function countGrades(): Map<number, number> {
    const counts = new Map<number, number>();
    grades.forEach(grade => {
        counts.set(grade, (counts.get(grade) || 0) + 1);
      });
    
      return counts;
}

addGrade(4);
addGrade(4);
addGrade(1);
addGrade(5);

console.log("Oceny:", grades);        
console.log("Średnia:", getAverage());  
console.log("Ilość ocen:", countGrades()); // [0, 1, 0, 0, 2, 1, 0]