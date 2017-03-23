function jojaa() {
    var niz = ["jojo1", "jojo2", "jojo3", "jojo4", "jojo5", "jojo6", "jojo7"];
    var joj = "";
    for (var i = 0; i < 7; i++) {
        joj = joj + niz[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = joj;
}
var niz2 = ["jojo1", "jojo2", "jojo3", "jojo4", "jojo5", "jojo6", "jojo7"];
for (var i = 0; i < 7; i++) {
    console.log(niz2[i]);
}
function jojaaa(){
    var niz = ["jojo1", "jojo2", "jojo3", "jojo4", "jojo5", "jojo6", "jojo7"];
    var joj = "";
    var joji = document.getElementById('idjoja').value;

    for (var i = 0; i < 7; i++) {
        joj = joj + niz[i] + "<br>";
    }
    joj = joj + joji + "<br>";
}
var bob = {name:"",age=30};