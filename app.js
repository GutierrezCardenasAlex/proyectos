function calcTip(bill) {
  return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

const factura1 = 120;
const factura2 = 200;
const factura3 = 275;

const tip1 = calcTip(factura1);
const tip2 = calcTip(factura2);
const tip3 = calcTip(factura3);

console.log('-----------------------------------');
console.log('Facturas: parte 1');
console.log(`La factura fue ${factura1}, la propina fue ${tip1}, y el valor total ${factura1 + tip1}`);
console.log(`La factura fue ${factura2}, la propina fue ${tip2}, y el valor total ${factura2 + tip2}`);
console.log(`La factura fue ${factura3}, la propina fue ${tip3}, y el valor total ${factura3 + tip3}`);
console.log('-----------------------------------');

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log('-----------------------------------');
console.log('Facturas: parte 2');
console.log("Facturas:", bills);
console.log("Propinas:", tips);
console.log("Totales:", totals);
console.log('-----------------------------------');