function calc()
{
    var num1 =parseFloat(document.getElementById('num1').value);
    var num2 =parseFloat(document.getElementById('num2').value);
    var operators =document.getElementById('operators').value;
    
    switch(operators) {
        case '+' :
            var ans=(num1+num2).toFixed(2)
            document.getElementById("result").value=ans;
            break;
        case '-' :
            var ans=(num1-num2).toFixed(2)
            document.getElementById("result").value=ans;
            break;
        case '*' :
            var ans=(num1*num2).toFixed(2)
            document.getElementById("result").value=ans;
            break;
        case '/' :
            var ans=(num1/num2).toFixed(2)
            document.getElementById("result").value=ans;
            break;
        default:
            document.getElementById("result").value=0;
            break;
    }

}