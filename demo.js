headv = 1;
bodyv = 1;
legv = 1;
footv = 1;

document.getElementById("downImg").addEventListener("click", function(){
	document.getElementById("menu").style.top="0px"
});



document.getElementById("next").addEventListener("click", function(){
	if (document.getElementById("choice1").checked == true) {
		headv += 1;
		if (headv == 4) {
			headv = 1;
		}
		document.getElementById("head1").src="imgs/gears/h"+headv+".png"
	}
	
	if (document.getElementById("choice2").checked == true) {
		bodyv += 1;
		if (bodyv == 4) {
			bodyv = 1;
		}
		document.getElementById("body1").src="imgs/gears/b"+bodyv+".png"
	}

	
	if (document.getElementById("choice3").checked == true) {
		legv += 1;
		if (legv == 4) {
			legv = 1;
		}
		document.getElementById("leg1").src="imgs/gears/l"+legv+".png"
	}
	
	if (document.getElementById("choice4").checked == true) {
		footv += 1;
		if (footv == 4) {
			footv = 1;
		}
		document.getElementById("foot1").src="imgs/gears/f"+footv+".png"
	}
	
	if (document.getElementById("choice1").checked == false && document.getElementById("choice2").checked == false && document.getElementById("choice3").checked == false && document.getElementById("choice4").checked == false) {
		alert("Select something");
	}

});

document.getElementById("previous").addEventListener("click", function(){
	if (document.getElementById("choice1").checked == true) {
		headv -= 1;
		if (headv == 0) {
			headv = 3;
		}
		document.getElementById("head1").src="imgs/gears/h"+headv+".png"
	}
	
	if (document.getElementById("choice2").checked == true) {
		bodyv -= 1;
		if (bodyv == 0) {
			bodyv = 3;
		}
		document.getElementById("body1").src="imgs/gears/b"+bodyv+".png"
	}
	
	if (document.getElementById("choice3").checked == true) {
		legv -= 1;
		if (legv == 0) {
			legv = 3;
		}
		document.getElementById("leg1").src="imgs/gears/l"+legv+".png"
	}
	
	if (document.getElementById("choice4").checked == true) {
		footv -= 1;
		if (footv == 0) {
			footv = 3;
		}
		document.getElementById("foot1").src="imgs/gears/f"+footv+".png"
	}
	
	if (document.getElementById("choice1").checked == false && document.getElementById("choice2").checked == false && document.getElementById("choice3").checked == false && document.getElementById("choice4").checked == false) {
		alert("Select something");
	}
});


demotext.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		if(demotext.value == "combo1"){
			headv = 1;
			bodyv = 1;
			legv = 1;
			footv = 1;
			document.getElementById("head1").src="imgs/gears/h"+headv+".png";
			document.getElementById("body1").src="imgs/gears/b"+bodyv+".png";
			document.getElementById("leg1").src="imgs/gears/l"+legv+".png";
			document.getElementById("foot1").src="imgs/gears/f"+footv+".png";
		}
		if(demotext.value == "combo2"){
			headv = 2;
			bodyv = 2;
			legv = 2;
			footv = 2;
			document.getElementById("head1").src="imgs/gears/h"+headv+".png";
			document.getElementById("body1").src="imgs/gears/b"+bodyv+".png";
			document.getElementById("leg1").src="imgs/gears/l"+legv+".png";
			document.getElementById("foot1").src="imgs/gears/f"+footv+".png";
		}
		if(demotext.value == "combo3"){
			headv = 3;
			bodyv = 3;
			legv = 3;
			footv = 3;
			document.getElementById("head1").src="imgs/gears/h"+headv+".png";
			document.getElementById("body1").src="imgs/gears/b"+bodyv+".png";
			document.getElementById("leg1").src="imgs/gears/l"+legv+".png";
			document.getElementById("foot1").src="imgs/gears/f"+footv+".png";
		}
		if(demotext.value == "random"){
			headv = Math.floor(Math.random() * 3) + 1;
			bodyv = Math.floor(Math.random() * 3) + 1
			legv = Math.floor(Math.random() * 3) + 1
			footv = Math.floor(Math.random() * 3) + 1
			
			document.getElementById("head1").src="imgs/gears/h"+headv+".png";
			document.getElementById("body1").src="imgs/gears/b"+bodyv+".png";
			document.getElementById("leg1").src="imgs/gears/l"+legv+".png";
			document.getElementById("foot1").src="imgs/gears/f"+footv+".png";
		} 
	}
});