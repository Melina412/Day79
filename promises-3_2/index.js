// Es gibt natürlich auch den Anwendungsfall, dass man mehrere asynchrone Operationen durchführen muss. Die Anwendung soll aber erst weiter ausgeführt werden, wenn wir von jedem Promise eine Antwort haben.
// Schreibe eine Funktion, die ein Promise zurückgibt. Als Parameter soll diese Funktion eine Number erhalten, die einfach den Wert von setTimout bestimmt.
// Das Promise soll also, mit Hilfe von setTimout, eine bestimmte Zeit warten und dann eine zufällige Zahl zwischen 1 und 1000 zurückgeben.
// Nutze Promise.all() um die obere Funktion min. 2 mal aufzurufen und gebe die Ergebnisse in einem .then() aus
//
import _ from 'lodash';

function asynchronOperations(value) {
  const random = _.random(1, 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(random));
  }, value);
}
const value = 2000;
const promises = [
  asynchronOperations(value),
  asynchronOperations(value),
  asynchronOperations(value),
  asynchronOperations(value),
  asynchronOperations(value),
];
// durch mehrmaliges aufrufen der funktion wird ein array mit promises erzeugt,
// die man dann nacheinander auflösen kann

Promise.all(promises)
  .then((results) => {
    console.log('all promises resolved');
    results.forEach((result) => {
      console.log({ result });
    });
  })
  .catch((error) => {
    console.error('error:', error);
  });
