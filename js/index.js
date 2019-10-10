
 
   function addNumbers(){
     var a =parseInt(document.getElementById("a").value);
     var b = parseInt(document.getElementById("b").value);
      var sum = a+b;
      document.getElementById("result").innerHTML= sum;
      
    }
    function subtractNumbers(){
        var a=parseInt(document.getElementById("a").value);
        var b=parseInt(document.getElementById("b").value);
        var sub=a-b;
        document.getElementById("result").innerHTML=sub;
       }
        function multiplyNumbers() {
        var a=parseInt(document.getElementById("a").value);
        var b=parseInt(document.getElementById("b").value);
        var mul=a*b;
        document.getElementById("result").innerHTML=mul;
        } 
       function divideNumbers(){
        var a=parseInt(document.getElementById("a").value);
        var b=parseInt(document.getElementById("b").value);
        if(b==0){
        document.getElementById("result").innerHTML="please enter the correct number"
       }
        else{
        var div=a/b;
        document.getElementById("result").innerHTML=div;
        }
       }
       function tables(){
        var a=parseInt(document.getElementById("a").value);
        var b=parseInt(document.getElementById("b").value);
        var ans="";
        for(var i=1;i<=b;i++){
        var tab=a*i;
        ans+=tab+"<br>";
        }
        document.getElementById("loop").innerHTML=ans;
       }
       function array(){
        var names =["bala","elango","arasan","jana","yugi"];
        document.getElementById("result").innerHTML=names+"<br>";
        document.getElementById("result2").innerHTML=names.length+"<br>";
        document.getElementById("result3").innerHTML=names[2];
       }
       function objects(){
        var sync ={id:"1",name:"sam",charc:"good"};
        document.getElementById("result").innerHTML=sync.name;
       }
     
      function genTime(){
        var x=new Date();
        document.getElementById("datedemo").innerHTML=x.getDate()+"/"+x.getMonth()+"/"+x.getFullYear();
        document.getElementById("day").innerHTML=x.getDay();
        document.getElementById("timedemo").innerHTML=x.getHours()+":"+x.getMinutes()+":"+x.getSeconds()+":"+x.getMilliseconds();
       }
       var a=20;
       b=30;
       console.log(a**b);
       