function mainbtn(){
	let rma = document.querySelector("nav");
	let btn = document.getElementById("btn3s");
	btn.onclick = btn3s
	function btn3s(){
		let result = getComputedStyle(rma, null).display;
		if(result == "none"){
			rma.style.display = "block";
		}
		else if(result == "block"){
			rma.style.display = "none";
		}
	}
}
