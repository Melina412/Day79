// Erstelle eine Funktion, die eine Zahl entgegennimmt und einen Promise zurückgibt.
// Das Promise soll nach einer gewissen Zeit (z.B. 2 Sekunden) die übergebene Zahl verdoppeln und das Ergebnis zurückgeben.

function doubleNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num * 2;
      if (result) {
        resolve(result);
        // console.log({ result });
      } else {
        reject();
      }
    });
  }, 2000);
}

const num = 5;
doubleNumber(num).then((numx2) => console.log('Ergebnis:', numx2));
