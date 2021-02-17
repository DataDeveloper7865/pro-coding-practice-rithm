/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}

function calculateAreas(a, b) {
  return a * b / 2
}

function calculateHypotenuse(a, b) {
  return Math.floor(Math.sqrt(a * a + b * b));
}

/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  let aMsg = aOk ? "Success" : "Invalid!";
  let bMsg = bOk ? "Success" : "Invalid!";

  let msg;

  if (aOk && bOk) {
    let area = calculateAreas(a, b)
    let hypot = calculateHypotenuse(a, b)
    msg = `Hypotenuse is ${hypot} and area is ${area}.`;
    if (area > 50) {
      msg += ` That's a really big triangle!`;
    }
  } else {
    msg = "";
  }

  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = msg;
}
