/*Вивести масив у вигляді матриці 11*11*/

for(var i = 1; i < 11; i++){
  var arr = [];
  arr[i] = i;
 for(var j = 1; j < 11; j++){
  arr[j] = i * j;
 }
 console.log(arr);
}


/*Сортування масиву методом "бульбашки";
	
var arr = [4,3,2,1, -7,1,-4,-3, -1,-8,3,9, 5,2,7,-4];
	
for (var i = 0; i < arr.length; i++) {
	for (var j = i; j < arr.length; j++) {
		if (arr[i] > arr[j]) {
			var c = arr[i];
			arr[i] =arr[j];
			arr[j] = c;
		}
	}
}

console.log(arr);


var number = '4,3,2,1, -7,1,-4,-3, -1,-8,3,9, 5,2,7,-4';

var arr = number.split(', ');

for (var i = 0; i < arr.length; i++) {
	for (var j = i; j < arr.length; j++) {
		if (arr[j] > 0) {
			var c = arr[j];
			arr[j] =arr[j+1];
			arr[j+1] = c;
		}
		
		if (arr[i] >= 0) {
			arr[i] = arr[i];
			arr[j] = arr[j];
		
		}
	}
}

console.log(arr);*/





/*var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}*/