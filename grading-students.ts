function gradingStudents(grades: number[]): number[] {
  const finalGrades = grades.map((grade) => {
    if (grade >= 38) {
      if (grade % 10 === 4 || grade % 10 === 9) {
        return grade + 1;
      }

      if (grade % 10 === 3 || grade % 10 === 8) {
        return grade + 2;
      }
    }

    return grade;
  });

  return finalGrades;
}
