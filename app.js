function calc()
{
    var num1 =parseInt(document.getElementById('num1').value);
    var num2 =parseInt(document.getElementById('num2').value);
    var operators =document.getElementById('operators').value;
    
    switch(operators) {
        case '+' :
            document.getElementById("result").value=num1+num2;
            break;
        case '-' :
            document.getElementById("result").value=num1-num2;
            break;
        case '*' :
            document.getElementById("result").value=num1*num2;
            break;
        case '/' :
            document.getElementById("result").value=num1/num2;
            break;
        default:
            document.getElementById("result").value=0;
            break;
    }
}