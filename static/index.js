function initElement(){
	var ide = document.getElementById("ide");
	ide.onclick = showAlert;

	function showAlert(){
		alert("Ide");
	}
}
