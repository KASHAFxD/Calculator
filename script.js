var first;
var second;
var result=0;
function getvalue_first(){
var first=document.getElementById("first").value;
var second=document.getElementById("second").value;
var result=parseInt(first)+parseInt(second);
document.getElementById("result").value=result;

}

function getvalue_second(){
    second=parseInt(prompt("Enter Your second Number"));
    
    }

    function getvalue_add(){
        result= first+second;
        document.getElementById('result').innerHTML=result;
        
        }

        function getvalue_minus(){
            result = first-second;
            document.getElementById('result').innerHTML=result;
            }

            function getvalue_into(){
                result = first*second;
                document.getElementById('result').innerHTML=result;
                }

                function getvalue_divide(){
                    result = first/second;
                    document.getElementById('result').innerHTML=result;  
                    }
                    function getvalue_modulus(){
                        result = first%second;
                        document.getElementById('result').innerHTML=result;    
                        }
                        function getvalue_avg(){
                            result = ((first+second)/2);
                            document.getElementById('result').innerHTML=result;     
                            }

// document.getElementById('result').innerHTML=result;