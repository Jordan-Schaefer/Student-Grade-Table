class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.formElement = this.handleSubmit.bind(this);
  }
  onsubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("Hi from handle submit");
    var formatData = new formatData(event.target);
    FormData.get(name, course, grade);
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
