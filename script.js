function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal < 0) {//invalid principal amount
        alert("Enter a positive number."); //this halts code execution until user hits "OK"
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100; //actual calculation
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>%.<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" + year + "</mark>.";
    }
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%"; //added %
}
        