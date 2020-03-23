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

      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      tr.appendChild(name);
      tr.appendChild(course);
      tr.appendChild(grade);
      tBody.appendChild(tr);
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var del = document.createElement("td");
    var delButton = document.createElement("button");

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    delButton.textContent = "DELETE";

    del.appendChild(delButton);
    row.appendChild(name);
    row.appendChild(course);
    row.appendChild(grade);
    row.appendChild(del);


  }
}
