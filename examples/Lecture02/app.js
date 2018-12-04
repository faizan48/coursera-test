var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyup);
}

function keyup(event) {
calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;
  var totalNameValue = 0;

  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i)
  }

  //Insert result into page
  var output = "Total numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
