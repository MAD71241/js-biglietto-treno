//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
var routeLength = parseInt(prompt("Inserisci la lunghezza in chilometri del tuo itinerario."));
if (isNaN(routeLength)) {
    alert("La durata del tuo itinerario deve essere espressa con una cifra. Riprova!");
}
document.getElementById("length").innerHTML = routeLength + " chilometri.";

//l'età del passeggero.
var passengerAge = parseInt(prompt("Quanti anni ha il passeggero del viaggio?"));
if (isNaN(passengerAge)) {
    alert("L'età del passeggero deve essere espressa con una cifra. Riprova!")
}
document.getElementById("age").innerHTML = passengerAge + " anni.";

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
/*secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)*/
var message = "Il prezzo del tuo biglietto è di: "
var discountedMessage = "Hai diritto ad uno sconto! Il prezzo del tuo biglietto è di: "
var totalPrice = routeLength * 0.21;

//va applicato uno sconto del 20% per i minorenni
if (passengerAge < 18) {
    function percentage(num, per) {
        return (num / 100) * per
    }
    document.getElementById("ticket").innerHTML = (discountedMessage + (totalPrice - percentage(totalPrice, 20)).toFixed(2) + " euro.");
}
//va applicato uno sconto del 40% per gli over 65. 
else if (passengerAge > 65) {
    function percentage(num, per) {
        return (num / 100) * per
    }
    document.getElementById("ticket").innerHTML = (discountedMessage + (totalPrice - percentage(totalPrice, 40)).toFixed(2) + " euro.");
} else {
    document.getElementById("ticket").innerHTML = (message + totalPrice + " euro.");
}
