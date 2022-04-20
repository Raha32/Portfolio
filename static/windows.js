function main(){
	//windows
	const presentation = document.getElementById("prestab");
	presentation.onmouseup = mouseup;

	//mouse position
	document.getElementById("bodytag").addEventListener("mousemove", function(mousepos){
		let {posX,posY} = mouseposition(mousepos);
		presentation.onmousedown = mousedown(posX);
		//console.log("x :",posX, "y :",posY);
	});

	function mouseposition(e){
		let posX = e.clientX;
		let posY = e.clientY;
		return {posX, posY};
	}

	function mousedown(){
		console.log("pressed");
	}
	
	function mouseup(){
		console.log("released");
	}
}
