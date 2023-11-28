// Erstelle eine Funktion, die ein Promise zurückgibt.
// Die Funktion soll eine Zahl als Parameter bekommen.
// Das Promise soll diese Zahl mit sich selbst multiplizieren und dann das Ergebnis als Resolve zurückgeben.
// Schreibe eine weitere Funktion. Diese soll auch eine Zahl als Parameter übergeben bekommen.
// Wir wollen in dieser Funktion die erste Funktion aufrufen und die .then() Methode nutzen, um die erste Funktion öfters aufzurufen. Insgesamt soll die erste Funktion 3 mal aufgerufen werden und als Parameter immer den Rückgabewert des vorherigen Aufrufs erhalten.
//

function squareNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.pow(num, 2);
      if (result) {
        resolve(result);
      } else {
        reject('square rejected');
      }
    }, 1000);
  });
}

// squareNumber(2).then((square) => console.log({ square }));

function powerNumber(num) {
  console.log('Zahl:', num);
  return squareNumber(num)
    .then((result) => {
      console.log(num, 'x', num, { result });
      return squareNumber(result);
      //   wenn ich hier keine einzeilige arr-f. nutze dann muss ich das promise immer mit return weitergeben, damit die kette fortgesetzt werden kann
    })
    .then((result) => {
      console.log(Math.sqrt(result), 'x', Math.sqrt(result), { result });
      return squareNumber(result);
    })
    .then((result) => {
      console.log(Math.sqrt(result), 'x', Math.sqrt(result), { result });
      console.log('Endergebnis:', result);
    })
    .catch((error) => {
      console.error('error:', error);
    });
}

powerNumber(10);
