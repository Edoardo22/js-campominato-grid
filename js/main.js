const containerGriglia = document.getElementById("containerGriglia");


for (let i = 0; i < 64; i++) {
    let cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerHTML = `<span class="text-center">${i + 1}</span>`;
    containerGriglia.append(cella);
    cella.addEventListener("click", function () {

        cella.style.backgroundColor = "blue";


    });

    cella.addEventListener("dblclick", function () {

        cella.style.backgroundColor = "#0dcaf0";

    });
}
