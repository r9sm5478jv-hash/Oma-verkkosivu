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

faktat.forEach(function (fakta) {
    console.log(fakta);
});

// Jalo-faktanappi

const nappi = document.getElementById("faktaNappi");
const tulos = document.getElementById("tulos");

nappi.addEventListener("click", function () {

    const satunnainen =
        faktat[Math.floor(Math.random() * faktat.length)];

    tulos.textContent = satunnainen;
});

// Viikko 4 API

const koiraNappi = document.getElementById("koiraNappi");
const koiraKuva = document.getElementById("koiraKuva");
const tila = document.getElementById("tila");

koiraNappi.addEventListener("click", function () {

    tila.textContent = "Haetaan koirakuvaa...";

    fetch("https://dog.ceo/api/breeds/image/random")

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            console.log(data);

            koiraKuva.src = data.message;

            tila.textContent = "Kuva haettu!";
        })

        .catch(function (error) {

            console.log(error);

            tila.textContent = "Kuvan lataaminen epäonnistui.";
        });
});