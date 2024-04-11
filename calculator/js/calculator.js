var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var ans = document.getElementById("ans");

num1.addEventListener("input", cal);
num2.addEventListener("input", cal);

function cal() {
    var n1 = num1.value;
    var n2 = num2.value;

    if (num1.value == "") {
        n1 = 0;
    }

    if (num2.value == "") {
        n2 = 0;
    }

    calans = parseFloat(n1) + parseFloat(n2);
    ans.value = calans;
}
