class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradeSuccess(grades){

    this.gradeTable.updateGrades(grades);
    var average = 0;

    for (var i = 0; i < grades.length; i++){
      average += grades[i].grade;
    }
    average = average / grades.length;
    this.pageHeader.updateAverage(average);
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
