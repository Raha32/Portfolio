function initElement(){
	// initializing competences tab
	const lang = document.getElementById("lang");
	const ide = document.getElementById("ide");
	const ideprog = document.getElementById("ideprog");
	const langprog = document.getElementById("langprog");
	const rightslide = document.getElementById("rightslide");
	const leftslide = document.getElementById("leftslide");
	const img = document.getElementById("img");
	const imgide = document.getElementById("imgide");
	const imgidechild = imgide.children;
	const imgchild = img.children;
	
	// initializing indexes for languages
	let i = 0;
	let i_x = 0;
	let i_i = 0;

	while (i < imgidechild.length){
		imgidechild[i].style.display = "none";
		i++;
		i_i++;
	}
	i = 0;

	while (i < imgchild.length){
		imgchild[i].style.display = "none";
		i++;
		i_x++;
	}

	if (ide.className == "active"){
		alert("true");
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
		lang.className="active";
		ide.classList.remove("active");
		ide.style.display = "none";
	}

	function showIde(){
		lang.style.display = "none";
		ide.className="active";
		lang.classList.remove("active");
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
