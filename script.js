
var convert = document.getElementById('convert');

convert.addEventListener('click', convertNum)
function convertNum (e) {
var amount = document.getElementById('amount').value;
var arrDenom = [];
var arrNum = [];
var Denominator = {
	denomination: [1000, 500, 200, 100, 50, 20, 10, 5],
 	processAmount: function () {
		  	for (var i = 0; i < this.denomination.length; i++) {
		  		var currentDenom = this.denomination[i]
		  		if(amount >= currentDenom) {
		  			var numOfDenom = Math.floor(amount/currentDenom)
		  			amount %= currentDenom
		  			var firstRows = document.getElementById('first_row').innerHTML = `${currentDenom} X ${numOfDenom}`
 		 		 	arrDenom.push(firstRows)
		 			arrNum.push(currentDenom * numOfDenom)

		 	
		 			var firstRows = document.getElementById('first_row').innerHTML = arrDenom[0];
		 			var firstRows1 = document.getElementById('first_row1').innerHTML = arrNum[0];

		 			var secondRows = document.getElementById('second_row').innerHTML = arrDenom[1];
		 			var secondRows1 = document.getElementById('second_row1').innerHTML = arrNum[1];

		 			var thirdRows = document.getElementById('third_row').innerHTML = arrDenom[2];
		 			var thirdRows1 = document.getElementById('third_row1').innerHTML = arrNum[2];

		 			var fourthRows = document.getElementById('fourth_row').innerHTML = arrDenom[3];
		 			var fourthRows1 = document.getElementById('fourth_row1').innerHTML = arrNum[3];

		 			var fifthRows = document.getElementById('fifth_row').innerHTML = arrDenom[4];
		 			var fifthRows1 = document.getElementById('fifth_row1').innerHTML = arrNum[4];

		 			var sixRows = document.getElementById('sixth_row').innerHTML = arrDenom[5];
		 			var sixRows1 = document.getElementById('sixth_row1').innerHTML = arrNum[5];

		  			 if (firstRows === undefined) {
		  			 	document.getElementById('first_row').innerHTML = '-'
		  			 } 
		  			 if (firstRows1 === undefined) {
		  			 	document.getElementById('first_row1').innerHTML = '-'
		  			 } 
		  			 if (secondRows === undefined) {
		  			 	document.getElementById('second_row').innerHTML = '-'
		  			 } 
		  			 if (secondRows1 === undefined) {
		  			 	document.getElementById('second_row1').innerHTML = '-'
		  			 } 
		  			 if (thirdRows === undefined) {
		  			 	document.getElementById('third_row').innerHTML = '-'
		  			 } 
		  			 if (thirdRows1 === undefined) {
		  			 	document.getElementById('third_row1').innerHTML = '-'
		  			 } 
		  			 if (fourthRows === undefined) {
		  			 	document.getElementById('fourth_row').innerHTML = '-'
		  			 } 
		  			 if (fourthRows1 === undefined) {
		  			 	document.getElementById('fourth_row1').innerHTML = '-'
		  			 } 
		  			 if (fifthRows === undefined) {
		  			 	document.getElementById('fifth_row').innerHTML = '-'
		  			 } 
		  			 if (fifthRows1 === undefined) {
		  			 	document.getElementById('fifth_row1').innerHTML = '-'
		  			 } 
		  			 if (sixRows === undefined) {
		  			 	document.getElementById('sixth_row').innerHTML = '-'
		  			 } 
		  			 if (sixRows1 === undefined) {
		  			 	document.getElementById('sixth_row1').innerHTML = '-'
		  			 } 
		 			
		  		}
		  	}
		 
		}

} 
	

Denominator.processAmount()

}

