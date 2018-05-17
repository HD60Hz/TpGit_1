var chaine = "xxoxxooxoxxxoooo";
var x = 0;
var o = 0;
for (var i = 0; i < chaine.length; i++) {
    if (chaine[i] === "x") {
        x++;
    } else if (chaine[i] === "o") {
        o++;
    }
}
if (x !== o) {
    console.log("Faux");
} else {
    console.log("Vrai");
}