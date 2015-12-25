$("document").ready(function() {


	$(".b").on('click',function(){

		var str = $(".email").val();
		if (str.match(/^[A-z0-9]{1,}@[A-z0-9]{1,}.[A-z0-9]{1,}$/) !=null) {
			console.log("email ok");
		}

		else {
			console.log("email error");

		}

	});

	$(".b").on('click',function(){

		var str1 = $(".phNumb").val();
		if (str1.match(/^\(0[0-9]{2}\) [0-9]{3}-[0-9]{3}-[0-9]{1}$/) !=null) {
			console.log("Phone number ok");
		}
		else {
			console.log("Phone number error");

		}


	});


});
