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
	let langA = 1;
	let ideA = 0;

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
	
	// index for languages 
	i = 0;
	i_x--;
	i_i--;

	imgchild[0].style.display = "block";
	ideprog.onclick = showIde;
	langprog.onclick = showLang;
	rightslide.onclick = slideright;
	leftslide.onclick = slideleft;


	function showLang(){
		lang.style.display = "block";
		langA = 1;
		ideA = 0;
		ide.style.display = "none";
	}

	function showIde(){
		lang.style.display = "none";
		ideA = 1;
		langA = 0;
		ide.style.display = "block";
		imgidechild[0].style.display = "block";
	}
	
	if (langA == 1){
		console.log("true");
	}

	function slideright(){
		if (langA == 1){
			
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

		else if(ideA == 1){

			if ((i < i_i) && !(i > i_i)){
				imgidechild[i].style.display = "none";
				i++;
				imgidechild[i].style.display = "block";
			}

			else{
				i = 0;
				imgidechild[i_i].style.display = "none";
				imgidechild[0].style.display = "block";
			}
		
		}
	}

	function slideleft(){
		if (langA == 1){	
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

		else if(ideA == 1){
			if ((i <= i_i) && !(i > i_i) && !(i == 0)){
				imgidechild[i].style.display = "none";
				i--;
				imgidechild[i].style.display = "block";
			}

			else{
				i = 1;
				imgidechild[i_i].style.display = "block";
				imgidechild[0].style.display = "none";
			}
		}
	}
}
