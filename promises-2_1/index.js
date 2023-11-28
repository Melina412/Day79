// Erstelle eine Funktion, die ein Promise zurückgibt.
// Das Promise soll eine Zufallszahl zwischen 1 und 10 erzeugen. Wenn die Zahl kleiner als 6 ist, soll das Promise rejecten. Ansonsten soll es resolven. In beiden Fällen soll die generierte Zahl, vom Promise, zurückgegeben werden.
// Rufe die Funktion auf und gebe die zurückgegebene Zahl in der Konsole aus.
//
import _ from 'lodash';

function randomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = _.random(1, 10);
      if (number >= 6) {
        resolve(number);
        console.log('resolve');
      } else {
        reject(number);
        console.log('reject');
      }
    }, 1000);
  });
}

randomNumber()
  .then((result) => console.log('Zahl ist größer als oder gleich 6:', result))
  .catch((result) => console.log('Zahl ist kleiner als 6:', result));
