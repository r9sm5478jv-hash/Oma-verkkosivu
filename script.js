// Viikko 3

const koiranNimi = "Jalo";
console.log("Koiran nimi on " + koiranNimi);

// if-else

let ika = 6;

if (ika >= 5) {
    console.log("Jalo on aikuinen koira.");
} else {
    console.log("Jalo on nuori koira.");
}

// Funktio

function kerroIka(vuodet) {
    return vuodet * 7;
}

console.log("Jalon ikä ihmisvuosina: " + kerroIka(ika));

// Taulukko ja silmukka

const faktat = [
    "Jalo rakastaa kävelylenkkejä.",
    "Jalo on 6-vuotias.",
    "Jalo on tiibetinterrieri.",
    "Jalo tutkii mielellään uusia hajuja."
];

faktat.forEach(fakta => {
    console.log(fakta);
});

// Nappi

const nappi = document.getElementById("faktaNappi");
const tulos = document.getElementById("tulos");

nappi.addEventListener("click", function () {

    const satunnainen =
        faktat[Math.floor(Math.random() * faktat.length)];

    tulos.textContent = satunnainen;
});