$(document).ready(function(){

var pos = 0;
var res = $("#res");
var currPos;
var firstNum;
var currSign;

$(".b").on('click',function(){
pos++;
var resVal = res.val(res.val()+$(this).text());

});

$(".sign").on('click',function(){
currPos = pos;
currSign = $(this).text();
res.val(res.val() + currSign);
firstNum = res.val().substr(0,currPos);


});

$("#calc").on('click',function(){
var secondNum = res.val().substr(currPos+1);
var endAnswer;
var a = +firstNum;
var b = +secondNum;
switch(currSign){
		case "+":
			endAnswer = a + b;
			break;
		case "-":
			endAnswer = a - b;
			break;
		case "*":
			endAnswer = a * b;
			break;
		case "/":
			endAnswer = a / b;
			break;
	}
	
	$("#res").val(a + currSign + b + " = " + endAnswer);
});
$(".bc").on('click',function(){
	res.val("");
	pos = 0;
	currSign = "";
});

});