// console.log(document.URL);
// console.log(document.body);
// console.log(document.head);
// var headerTitle = document.getElementById('header_nav');
// headerTitle.textContent = 'Great';
// var inputValue = document.querySelector('input');
// inputValue.placeholder = 110011;
// console.dir(document);
// console.log(document.title);   
// document.title = 'Oladapo Preview Pqagge'
// console.log(document.title);
// console.log(document.all);
// console.log(document.all[30]);
// var changeText = document.all[19];
// changeText.textContent = 'Manipulate!'
// //THe difference between textContent and innerText is that the
// //latter pays attention to the styling, the former doesn't. But they both inputs text.
// changeText.style.border = "2px solid black";
// changeText.style.borderBottom = '4px solid yellow';
// changeText.style.borderRight = '4px solid yellow';
// var letGetCLass = document.getElementsByClassName('first_row');
//console.log(letGetCLass[0]);
// letGetCLass.textContent = "Hello there!"
// var tableData = document.querySelectorAll('td:nth-child(odd)');
// tableData.textContent ='Hello Love!'
// console.log(tableData);
// console.log(letGetCLass);
// //tableData.style.backgroundColor = "Orange"
// for (var i = 0; i < tableData.length; i++) {
// 	tableData[i].style.backgroundColor = 'orange';
// }
// var divParent = document.getElementById('inner_block_one_background');
// console.log(divParent.parentElement);

// var divParent1 = document.querySelector('#inner_block_one_background');
// console.log(divParent1.childNodes);

// divParent.parentNode.style.backgroundColor = "blue"

// console.log(divParent1.lastElementChild);
// divParent1.lastElementChild.style.backgroundColor = 'brown';
// divParent1.lastElementChild.setAttribute('value', '9000');
// var newDiv = document.createElement('div');
// console.log(newDiv);
//newDiv.className = 'cool';
//newDiv.id = 'ourDiv'
//newDiv.setAttribute('alt', 'none');
//console.log(newDiv);
//newDiv.textContent = "Hello World";
//newDiv.style.fontSize = '20px';
//var newDivText = document.createTextNode = "Thank You Jesus";
//ocument.appendChild(newDiv);
//ovar container = document.querySelector('div #convert');
//var before = document.querySelector('table #table_background');
//container.insertBefore(newDiv, before);
//console.log(newDiv);
//function buttonClick() {
//	console.log('The Button is clicked');
//}
 //var eventButton = document.getElementById('button').addEventListener('click', buttonClick);
 //function buttonClick(e) {
	//  console.log('The Button is Clicked!');
	// var dontDisplay = document.getElementById('D3_block_one');
	// dontDisplay.style.display = 'none';
	// var valueSet = document.getElementsByTagName('tr');
	// for (var i = 0; i < valueSet.length; i++) {
	// 	valueSet[i].style.backgroundColor = 'green';
	//  document.querySelector('#block_one').textContent = 'Do You Really Need To Be Welcomed!';
	// var changeHeaderColor = document.querySelector('#header_logo_background');
	// //for (var i = 0; i < changeHeaderColor.length; i++) {
	// //	changeHeaderColor[i].style.backgroundColor = 'black';
	// changeHeaderColor.textContent = 'Just trying things out in the header';

	// var newParg = document.createElement('p');
	// newParg.className = 'class';
	// newParg.id = 'id';
	// newParg.setAttribute('title', 'The title');
	// //newParg.textContent = 'Just Creating A New Paragrapgh To See How Things Work Out!'
	// newParg.createTextNode('Let\'s see how this works');

	// console.log(newParg);

//console.log(e);
//console.log(e.path[0].className);
//var output = document.getElementById('output').innerHTML = 'The Button Is Clicked';
//console.log(e.clientY);
// 
//var closeButton = document.getElementById('button1').addEventListener('click', function close() {
//	var output1 = document.getElementById('output').style.display = 'none';
//})
//var box = document.getElementById('box').addEventListener('mousemove', runEvent);
//}
 //var inputValues = document.getElementById('input_ID').addEventListener('keydown', runEvent);


//function runEvent(e) {
// // 	var output = document.getElementById('output').innerHTML = 'Offset X ' + e.offsetX + 'Offset Y ' + e.offsetY;
// 	console.log('Event Type: ' +e.type) 
// 	var output = document.getElementById('output').innerHTML = e.target.value
// // document.body.style.backgroundColor = "rgb(+e.offsetX+, +e.offsetY+, 40)";
 //console.log(e.target.value)
//}

// var convertField = document.getElementById('convert');
// convertField.addEventListener('click', calcNum);

// var valueField = document.getElementById('input_ID').value
// function calcNum(e){
// 	console.log(e.target.id);
// 	console.log(valueField);

// //document.getElementsByClassName('num_row').innerHTML = valueField;
// }



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

console.log(arrDenom)
console.log(arrNum)
		 			
		 	
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

