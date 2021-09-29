function date_func() {
  document.getElementById("demo").innerHTML = Date();
}
function MyFunction() {
  var x, text;

  if (x < 2910000 || x > 2939999) {
    text = "Input is not Valid";
    document.getElementById("demo2").innerHTML = text;
    console.log("By world");
    return false;
  } else {
    text = "Input is Ok";
    document.getElementById("demo2").innerHTML = text;
    document.getElementById("demo2").style.color = "green";
    console.log("hello world");
    return true;
  }
}
