function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);

  var resultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns você acertou";
  } else if (chute >= 11 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    resultado.innerHTML = "Você errou, o número secreto era " + numeroSecreto;
  }
}
