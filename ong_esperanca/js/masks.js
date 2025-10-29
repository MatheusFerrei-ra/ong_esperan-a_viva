document.addEventListener("DOMContentLoaded", function () {
  const telefone = document.getElementById("telefone");

  telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 10) {
      telefone.value = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (valor.length > 5) {
      telefone.value = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (valor.length > 2) {
      telefone.value = valor.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      telefone.value = valor;
    }
  });
});
