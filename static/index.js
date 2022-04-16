function initElement(){
	// initializing competences tab
	var lang = document.getElementById("lang");
	var ide = document.getElementById("ide");
	var ideprog = document.getElementById("ideprog");
	var langprog = document.getElementById("langprog");
	var rightslide = document.getElementById("rightslide");
	var leftslide = document.getElementById("leftslide");
	var img = document.getElementById("img");
	var imgchild = img.children;
	
	// initializing indexes for languages
	let i = 0;
	let i_x = 0	
	
	while (i < imgchild.length){
		imgchild[i].style.display = "none";
		i++;
		i_x++;
	}

	// index for languages 
	i = 0;
	i_x--;

	imgchild[0].style.display = "block";

	ideprog.onclick = showIde;
	langprog.onclick = showLang;
	rightslide.onclick = slideright;
	leftslide.onclick = slideleft;


	function showLang(){
		lang.style.display = "block";
		ide.style.display = "none";
	}

	function showIde(){
		lang.style.display = "none";
		ide.style.display = "block";
	}

	function slideright(){
		if ((i < i_x) && !(i > i_x)){
			imgchild[i].style.display = "none";
			i++;
			imgchild[i].style.display = "block";
		}
		else{
			i = 0;
			imgchild[i_x].style.display = "none";
			imgchild[0].style.display = "block";
		}
	}

	function slideleft(){
		
		if ((i <= i_x) && !(i > i_x) && !(i == 0)){
			imgchild[i].style.display = "none";
			i--;
			imgchild[i].style.display = "block";
			}
		else{
			i = 5;
			imgchild[i_x].style.display = "block";
			imgchild[0].style.display = "none";
		}
	}
}
