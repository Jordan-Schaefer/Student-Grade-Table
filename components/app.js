class App{
  constructor(){
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  },
  handleGetGradesError(error){
    console.error(error);
  },
  handleGetGradeSuccess(grades){
    console.log(grades);
  },

}
