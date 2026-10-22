/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

const tabellone = document.querySelector('#tabellone');
const ultimoNumero = document.querySelector('#ultimo-numero');
const estrai = document.querySelector('#estrai');

// 1_creiamo funzione per il tabellone , da 1 a 90 senza ripetizioni
function vediTabellone() {
  tabellone.innerHTML = '';
  for (let i = 1; i <= 90; i++) {
    const tombolone = document.createElement('div');
    tombolone.classList.add('numero');
    tombolone.textContent = i;
    tabellone.appendChild(tombolone);
  }

};

vediTabellone();

function aggiungiNumeri() {
  numeriDisponibili =[];
  for (let i = 0; i <= 90 ; i++) {
    numeriDisponibili.push(i);
  }
};

function estraiNumeris(){
  if (numeriDisponibili === 0){
    estrai.disabled = true;
    return;
  }

  const numeroCasuale =Math.floor(Math.random() * numeriDisponibili.length)
  const numeroEstratto = numeriDisponibili.splice(numeroCasuale, 1); 
  unisci.push(numeroEstratto)
};
