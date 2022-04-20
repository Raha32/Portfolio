function clock(){
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();

	m = checktime(m);
	s = checktime(s);
	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
	setTimeout(clock, 1000);
}

function checktime(i){
	if(i < 10) {i = "0" + i};
	return i;
}
