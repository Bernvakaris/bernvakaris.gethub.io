// astuntas.js
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var answer = document.getElementById("answer").value;

    // Patikrinti, ar atsakymas teisingas (pavyzdžiui, atitinka kokį nors žodį)
    if (answer.trim().toLowerCase() === "kartingai") {
        // Nukreipkite į kitą puslapį
        window.location.href = "15_puslapis.html";
    } else {
        alert("Neteisingas atsakymas. Bandykite dar kartą.");
    }
});
