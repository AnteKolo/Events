function pisi(){
    var poc = prompt("Pocetna vrijednost");
    var kra = prompt("Krajnja vrijednost");
    var par="";
    for (poc;poc<=kra;poc++){
        par = par + poc + "<br>";

    }
    document.getElementById("demo").innerHTML=par;
}

