class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade){
    console.log("The name is ", name);
    console.log("The course is ", course);
    console.log("The grade is ", grade);
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
}
