/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("-----------------------------------------ES.A");
/* ESERCIZIO A
Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const ten = 10;
const twen = 20;
const sum = ten + twen;
console.log("il risultato della somma e`:", sum);

console.log("-----------------------------------------ES.B");
/* ESERCIZIO B
Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("il numero random tra 0 e 20 è:", random);

console.log("-----------------------------------------ES.C");
/* ESERCIZIO C
Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = { name: "Claudio", surname: "Savoldi", Age: 23 };
console.log(me);

console.log("-----------------------------------------ES.D");
/* ESERCIZIO D
Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.Age;
console.log(me);

console.log("-----------------------------------------ES.E");
/* ESERCIZIO E
Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["javascript", "html", "css"];
console.log(me);

console.log("-----------------------------------------ES.F");
/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("java");
console.log(me);

console.log("-----------------------------------------ES.G");
/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni
console.log("------------------------------------------------");
console.log("--------------------FUNZIONI---------------------");
console.log("------------------------------------------------");
console.log("-----------------------------------------ES.1");
/* ESERCIZIO 1
Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  let nRand = 0;
  do {
    nRand = Math.floor(Math.random() * 7);
  } while (nRand === 0);
  return nRand;
};
console.log("dato lanciato", dice());
//oppure
// const dice = function () {
//  return nRand = Math.floor(Math.random() * 6)+1;
// }

console.log("-----------------------------------------ES.2");
/* ESERCIZIO 2
Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "inserisci due numeri diversi come parametri";
  }
  if (n1 === n2) {
    return "i numeri sono ugauli";
  } else if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
console.log(whoIsBigger(3, 9));

console.log("-----------------------------------------ES.3");
/* ESERCIZIO 3
Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (stringa) {
  const arrayParole = stringa.split(" ");
  for (let i = 0; i < arrayParole.length; i++) {
    const parola = arrayParole[i];
    arrayParole[i] = parola.charAt(0).toUpperCase() + parola.slice(1);
  }
  return arrayParole;
};

console.log(splitMe("ciao sono un epicoder"));

console.log("-----------------------------------------ES.4");
/* ESERCIZIO 4
Crea una funzione chiamata "" che riceve una stringa e un booleano come parametri.
Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (stringa, booleano) {
  if (booleano === true) {
    return stringa.slice(1);
  } else {
    return stringa.substring(0, stringa.length - 1);
  }
};
console.log(deleteOne("epicode", true));
console.log(deleteOne("epicode", false));

console.log("-----------------------------------------ES.5");
/* ESERCIZIO 5
Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (stringa) {
  const arrayLettere = stringa.split("");
  for (let i = 0; i < arrayLettere.length; i++) {
    let lettera = arrayLettere[i];
    if (lettera >= "0" && lettera <= "9") {
      arrayLettere[i] = "";
    }
  }
  return arrayLettere.join("");
};
console.log(onlyLetters("ciao ho 4345 gatti"));

console.log("-----------------------------------------ES.6");
/* ESERCIZIO 6
Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (stringa) {
  const primaChiocciola = stringa.indexOf("@");
  // controllo che c`è una SOLA chioccioola
  if (primaChiocciola === -1 || stringa.indexOf("@", primaChiocciola + 1) >= 0) {
    return false;
  }
  //controllo la presenza di spazi
  if (stringa.indexOf(" ") >= 0) {
    return false;
  }
  //controllo la presenza di un solo punto
  const primoPunto = stringa.indexOf(".", primaChiocciola);
  if (primoPunto === -1 || stringa.indexOf(".", primoPunto + 1) >= 0) {
    return false;
  }

  return true;
};

console.log(isThisAnEmail("savoldi.claudio@gmail.com"));
console.log(isThisAnEmail("savoldi claudio@gmail.com"));
console.log(isThisAnEmail("savoldiclaudio@gmailcom"));
console.log(isThisAnEmail("savoldi@claudio@gmailcom"));

console.log("-----------------------------------------ES.7");
/* ESERCIZIO 7
Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const today = new Date();
  const dayNum = today.getDay();
  let nomeGiorno;
  switch (dayNum) {
    case 0:
      nomeGiorno = "Domenica";
      break;
    case 1:
      nomeGiorno = "Lunedì";
      break;
    case 2:
      nomeGiorno = "Martedì";
      break;
    case 3:
      nomeGiorno = "Mercoledì";
      break;
    case 4:
      nomeGiorno = "Giovedì";
      break;
    case 5:
      nomeGiorno = "Venerdì";
      break;
    case 6:
      nomeGiorno = "Sabato";
      break;
  }
  return nomeGiorno;
};
console.log("Oggi è:", whatDayIsIt());

console.log("-----------------------------------------ES.8");
/* ESERCIZIO 8
Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

Example:
rollTheDices(3) => ritorna {
  sum: 10
  values: [3, 3, 4]
  }
  */
const rollTheDices = function (n) {
  let object = { sum: 0, values: [] };
  for (let i = 0; i < n; i++) {
    let RisultatoLancio = dice();
    object.sum += RisultatoLancio;
    object.values.push(RisultatoLancio);
  }
  return object;
};
console.log(rollTheDices(8));

console.log("-----------------------------------------ES.9");
/* ESERCIZIO 9
Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (data) {
  const oggi = new Date();
  const altraData = new Date(data);
  const msTrascorsi = oggi - altraData;

  const giorni = Math.floor(msTrascorsi / 1000 / 60 / 60 / 24);
  return giorni;
};
console.log("scrivi data in formato: mm/gg/AAAA.", "Giorni trascorsi", howManyDays("08/05/2025"));

console.log("-----------------------------------------ES.10");
/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  const oggi = new Date();
  const giorno = oggi.getDate();
  const mese = oggi.getMonth() + 1;

  if (giorno === 6 && mese === 6) {
    return true;
  }
  return false;
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

console.log("-----------------------------------------ES.11");
/* ESERCIZIO 11
Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const moviesClone = structuredClone(movies);
const deleteProp = function (oggetto, stringa) {
  delete oggetto[stringa];
  return oggetto;
};
console.log(deleteProp(moviesClone[3], "Type"));

console.log("-----------------------------------------ES.12");
/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let filmRecente = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(filmRecente.Year)) {
      filmRecente = movies[i];
    }
  }
  return filmRecente;
};
console.log(newestMovie());

console.log("-----------------------------------------ES.13");
/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  return movies.length;
};
console.log("i film sono:", countMovies());

console.log("-----------------------------------------ES.14");
/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function () {
  return movies.map((ele) => ele.Year);
};
console.log("array solo anni", onlyTheYears());

console.log("-----------------------------------------ES.15");
/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function () {
  return movies.filter((ele) => parseInt(ele.Year) < 2000);
};
console.log("array film pre2000", onlyInLastMillennium());

console.log("-----------------------------------------ES.16");
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  let sumYears = 0;
  for (let i = 0; i < movies.length; i++) {
    let nuovoValore = parseInt(movies[i].Year);
    sumYears += nuovoValore;
  }
  return sumYears;
};
console.log(sumAllTheYears());

console.log("-----------------------------------------ES.17");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (stringa) {
  return movies.filter((film) => film.Title.toLowerCase().includes(stringa.toLowerCase()));
};
console.log(searchByTitle("Avengers: Infinity War"));

console.log("-----------------------------------------ES.18");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (stringa) {
  const match = [];
  const unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(stringa.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  return { match, unmatch };
};

console.log(searchAndDivide("Avengers"));

console.log("-----------------------------------------ES.19");
/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex " che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const moviesClone2 = structuredClone(movies);
const removeIndex = function (posizione) {
  return movies.filter((element, index) => index !== posizione);
};

console.log(removeIndex(4));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

console.log("-----------------------------------------ES.20");
/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selezioneID = function () {
  const container = document.getElementById("container");
  return container;
};

console.log(selezioneID());

console.log("-----------------------------------------ES.21");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selezioneTd = function () {
  const td = document.querySelectorAll("td");
  return td;
};
console.log(selezioneTd());

console.log("-----------------------------------------ES.22");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const tdPriter = function () {
  const td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    console.log("stampa td:", td[i].innerText);
  }
};
tdPriter();

console.log("-----------------------------------------ES.23");
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addBack = function () {
  const a = document.querySelectorAll("a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "red";
  }
};
addBack();

console.log("-----------------------------------------ES.24");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const ul = document.getElementById("myList");
const addLi = function () {
  const newLi = document.createElement("li");
  newLi.innerText = "ciao epicode";
  ul.appendChild(newLi);
};
addLi();

console.log("-----------------------------------------ES.25");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaUl = function () {
  ul.innerHTML = "";
};
svuotaUl();

console.log("-----------------------------------------ES.26");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassTr = function () {
  const tr = document.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};
addClassTr();

// [EXTRA] JS Avanzato

console.log("-----------------------------------------ES.27");
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function (righe) {
  for (let i = 1; i < righe; i++) {
    console.log("*");
  }
};
halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isItPrime(71));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
