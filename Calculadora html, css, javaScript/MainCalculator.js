const botones = document.querySelectorAll("button");

//Obtener valor del campo input
const campoEntrada = document.getElementById("resultado");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    const valorBoton = botones[i].textContent;

    //Validaciones
    if (valorBoton === "C") {
      borrarResultado();
    } else if (valorBoton === "=") {
      calcularResultado();
    } else {
      anexarValor(valorBoton);
    }
  });
}

function borrarResultado() {
  campoEntrada.value = "";
}

function anexarValor(valorBoton) {
  campoEntrada.value += valorBoton;
}

function calcularResultado() {
  campoEntrada.value = eval(campoEntrada.value);
}

/* Como funciona eval */
/* let resultado2 = eval("3 + 2");
console.log(resultado2) */
