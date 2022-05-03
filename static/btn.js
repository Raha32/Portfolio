function mainbtn(){
	let rma = document.querySelector("nav");
	let btn = document.getElementById("btn3s");
	let btn3 = window.getComputedStyle(btn,null).display;
	
	if (btn3 == "block"){
		console.log("btn3 block")
		rma.style.display= "none";
		btn.onclick = btn3s
	}
	function btn3s(){
		let result = getComputedStyle(rma, null).display;
		if(result == "block"){
			console.log("btn3s hidden")
			rma.style.display = "none";
		}
		else if(result == "none"){
			console.log("btn3s displayed")
			rma.style.display = "block";
		}
	}
}
