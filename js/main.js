const containerGriglia = document.getElementById("containerGriglia");
function generaNumeroCasuale(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

for (let i = 0; i < 64; i++) {
    let cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerHTML = `<span>${generaNumeroCasuale(1, 100)}</span>`;
    containerGriglia.append(cella);
    cella.addEventListener("click", function () {

        cella.style.backgroundColor = "blue";


    });
    //se clicco di nuovo sulla cella la sua colore diventa bianco
    cella.addEventListener("dblclick", function () {

        cella.style.backgroundColor = "#0dcaf0";

    });
}
