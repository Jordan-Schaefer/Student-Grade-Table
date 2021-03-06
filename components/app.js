class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.getGrades = this.getGrades.bind(this);
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
    average = Math.floor(average / grades.length);
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
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "x-access-token": "7eg7zS3x" },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }

  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      headers: { "x-access-token": "7eg7zS3x" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }

  handleDeleteGradeError(error){
    console.error(error);
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
