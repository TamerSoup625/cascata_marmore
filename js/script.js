let infoSentieri;

fetch("sentieri.json")
    .then(response => response.json())
    .then(obj => {
        infoSentieri = obj;
    })

function showPoint(identifier) {
    const sentiero = infoSentieri[identifier];
    $("#mappa-modale-img").attr("src", "");
    $("#mappa-modale-img").attr("src", sentiero.img);
    $("#mappa-modale-titolo").text(sentiero.nome);
    $("#mappa-modale-link").attr("href", sentiero.link);
    $("#mappa-modale-descrizione").text(sentiero.descrizione);
    $("#mappa-modale")[0].showModal();
}

window.onresize = () => {
    if (window.matchMedia("screen and (orientation: portrait) and (max-width: 500pt)").matches) {
        $("#mappa-modale")[0].close();
    }
}