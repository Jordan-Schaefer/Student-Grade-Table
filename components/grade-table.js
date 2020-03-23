class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {

    console.log(grades);
    var tBody = this.tableElement.querySelector("tbody");
    var p = document.querySelector("p");
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }
    for (var i = 0; i < grades.length; i++) {
      // var tr = document.createElement("tr");
      // var name = document.createElement("td");
      // var course = document.createElement("td");
      // var grade = document.createElement("td");

      // name.textContent = grades[i].name;
      // course.textContent = grades[i].course;
      // grade.textContent = grades[i].grade;

      // tr.appendChild(name);
      // tr.appendChild(course);
      // tr.appendChild(grade);
      // tBody.appendChild(tr);

      this.renderGradeRow(grades[i], this.deleteGrade);

    }
    if(grades){
      p.classList.remove(".d-none");
    }else{
      p.classList.add(".d-none");
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tbody = document.querySelector("tbody");

    // for (var i = 0; i < data.length; i++) {
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
      delButton.classList.add("btn btn-danger")

      del.appendChild(delButton);
      row.appendChild(name);
      row.appendChild(course);
      row.appendChild(grade);
      row.appendChild(del);
      tbody.appendChild(row);

      delButton.addEventListener("click", this.deleteGrade(data.id));
    // }

    return row;

  }
}
