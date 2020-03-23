class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades (grades){

    console.log(grades);
    var tBody = this.tableElement.querySelector("tbody");
    while(tBody.firstChild){
      tBody.removeChild(tBody.firstChild);
    }
    for (var i = 0; i < grades.length; i++){
      var tr = document.createElement("tr");
      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");
      var del = document.createElement("td");

      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      tr.appendChild(name);
      tr.appendChild(course);
      tr.appendChild(grade);
      tr.appendChild(del)
      tBody.appendChild(tr);
    }
  }
}
