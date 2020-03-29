function changeColors() {
  let borR = document.getElementById("borderR").value;
  let borG = document.getElementById("borderG").value;
  let borB = document.getElementById("borderB").value;
  let bacR = document.getElementById("backR").value;
  let bacG = document.getElementById("backG").value;
  let bacB = document.getElementById("backB").value;
  let newWid = document.getElementById("borderW").value;
  let par = document.getElementById("par");
  let borCol = "rgb("+borR+","+borG+","+borB+")";
  let bacCol = "rgb("+bacR+","+bacG+","+bacB+")";
  par.style.backgroundColor = bacCol;
  par.style.borderColor = borCol;
  par.style.borderWidth = Number(newWid) + "px";
}

function enforceBounds(event) {
  let elem = event.srcElement;
  if (Number(elem.value) > Number(elem.max)) {
    elem.value = Number(elem.max);
  }
  if (Number(elem.value) < Number(elem.min)) {
    elem.value = Number(elem.min);
  }
}
