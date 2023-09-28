'use strict';

function BinarioADecimal(num) {
   var decimal = 0;
   var reversado = num.split('').reverse();

   for(var i = 0; i < reversado.length; i++) {
      decimal = decimal + reversado[i] * Math.pow(2, i);
   } 	
   return decimal;   
}

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
