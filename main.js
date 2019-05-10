// repo: js-quadratini):
// Parte 1
// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti (edited)

//dichiaro delle variabili contatore
var counter_green = 0;
var counter_red = 0;

//stampo le variabili contatore a zero
document.getElementById('contarosso').innerHTML = counter_red;
document.getElementById('contaverde').innerHTML = counter_green;


//quando clicco un quadratino
$('.card').click(function() {
  //se ha la classe colorgreen
  if ($(this).hasClass('colorgreen')) {
    //attivo la classe green
    $(this).toggleClass('green');
    //e il contatore prende il valore del numero di classi green attivate
    counter_green = $(".green").length;
    //e aggiorno il conteggio
    document.getElementById('contaverde').innerHTML = counter_green;
    //altrimenti
  } else {
    //attivo la classe red
    $(this).toggleClass('red');
    //e  il contatore prende il valore del numero di classi red attivate
    counter_red = $(".red").length;
    //aggiorno il conteggio
    document.getElementById('contarosso').innerHTML = counter_red;
  }
});
