class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradeSuccess(grades){
    this.gradeTable.updateGrades(this.grades);
  }

  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {"x-access-token": "7eg7zS3x"},
      success: this.handleGetGradeSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
}
