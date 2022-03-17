var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    console.log("alo");
  } else if (chute >= 11 || chute < 0) {
    console.log("ta sabendo legal");
  } else {
    console.log("erro burrao");
  }
}
