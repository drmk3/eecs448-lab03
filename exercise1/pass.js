function validate() {
  let pass1 = document.getElementById("input1").value;
  let pass2 = document.getElementById("input2").value;

  if (pass1 != pass2) {
    alert("The passwords don't match");
  } else if (pass1.length < 8) {
    alert("The password must be at least 8 characters long");
  }
  
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
