class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    var tBody = this.tableElement.querySelector("tbody");
    var p = document.querySelector("#p-element");
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }

    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }

    if (grades[0]) {
      p.classList.add("d-none");

    } else {
      p.classList.remove("d-none");
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tbody = document.querySelector("tbody");

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
    delButton.classList.add("btn", "btn-danger")

    delButton.addEventListener("click", function() {deleteGrade(data.id)});

    del.appendChild(delButton);
    row.appendChild(name);
    row.appendChild(course);
    row.appendChild(grade);
    row.appendChild(del);
    tbody.appendChild(row);


    return row;
  }
}
