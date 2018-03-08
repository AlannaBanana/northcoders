/* ----------------------- EXAMPLE -------------------------
This is the bill calculator function that we coded together.

The function takes a bill, a VAT percent and a tip percent
and returns the total bill, formatted as a currency string.
---------------------------------------------------------- */


function calculateBill (bill, VATrate, TipRate) {
  var tip = (TipRate / 100) * bill;
  var vat = (VATrate / 100) * bill;

  return '£' + (bill + tip + vat).toFixed(2);
}

var result = calculateBill(88, 18, 15);

console.log('The total bill in this example is: ' + result);
