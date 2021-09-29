function date_func() {
  document.getElementById("demo").innerHTML = Date();
}
function MyFunction() {
  var x, text;
  x = parseInt(document.getElementById("phone").value);
  debugger;
  if (x > 2910000 && x < 2939999) {
    text = "Input is Ok";
    document.getElementById("demo2").innerHTML = text;
    document.getElementById("demo2").style.color = "green";
    console.log("hello world");
    return true;
  } else {
    text = "Input is not Ok";
    document.getElementById("demo2").innerHTML = text;
    console.log("By world");
    return false;
  }
}
