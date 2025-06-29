const h1 = document.querySelector("h1");

// Apara alternar
const cores = ["green"];
let inicio = 0;

// Quando passa o mouse por cima
h1.addEventListener("mouseenter", function () {
  this.style.color = cores[inicio];
  inicio = (inicio + 1) % cores.length; // Próxima cor
});

// Quando tira o mouse (opcional - volta cor original)
h1.addEventListener("mouseleave", function () {
  this.style.color = "#ffffff"; // ou a cor original que você quiser
});
