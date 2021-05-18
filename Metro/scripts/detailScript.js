c = new Array();
n = new Array();
c[0] = 1;
n[0] = "US Dollar";
c[1] = 0.82;
n[1] = "Euro";
c[2] = 74.01;
n[2] = "Russian Rouble";


function GiveResult()
{

    var res, vfrom, vto, vcash;
    vcash = document.getElementById("cash").value;
    vfrom = document.getElementById("from").value;
    vcash = vcash.replace(',', '\.');
    vcash = vcash.replace(' ', '');
    vcash = vcash.replace(' ', '');
    vto = document.getElementById("to").value;
    res = c[vto] * vcash / c[vfrom], 2;

    res = res.toFixed(2);
    res = res.toString();
    res = res.replace('\.', ',');
    res = "<span class='result'> Amount: " + res + "</span>&nbsp;" + n[vto];

    document.getElementById("result").innerHTML = res;

}
function GiveResult1(){
   
   var lines = ["Sokolnicheskaya line (26.1km)", "Zamoskvoretskaya line (36.9km)", "Arbatsko-Pokrovskaya line (43.5km)",
    "Filyovskaya line (14.9km)", "Kol’tsevaya (circle) line (19.3km)", "Kaluzhsko-Rizhskaya line (37.6km)"];
var text = "";
var i;
for (i = 0; i < lines.length; i++) {
  text += lines[i] + "<br>";
}
document.getElementById("lines").innerHTML = text;
   }
  


