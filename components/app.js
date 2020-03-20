class App{
  constructor(){
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradeSuccess(grades){
    console.log(grades);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradeSuccess,
      error: this.handleGetGradesError
    })
  }
}
