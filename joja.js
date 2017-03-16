function pisi(){
    var i=0;
    var par="";
    var nep="";
    var nul="";
    for (i;i<16;i++){
        if (i==0){
            nul=nul+"0"+" NULA";
        }
        else{
            if (i%2==0){
                par=par+i+" PARNI"+"<br>";
            }
            else if (i%2!=0){
                nep=nep+i+" NE PARNI"+"<br>";
            }
        }

    }
    document.getElementById("demo").innerHTML=par+"<br>"+nep+"<br>"+nul;
}

