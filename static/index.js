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

	// initializing more infos tab
	const hobbybtn = document.getElementById("Hobbybtn");
	const diplomabtn = document.getElementById("Diplomabtn");
	const imghobby = document.getElementById("imghobby");
	const imgdiploma = document.getElementById("imgdiploma");


	// initializing indexes for languages and ide's
	let i = 0;
	let i_x = 0;
	let i_i = 0;
	let i_a = 0;
	let langA = 1;
	let ideA = 0;
	let imgvim = 1;

	
	// initializing total length of ide images and languages images
	while (i_a < imgidechild.length){
		imgidechild[i_a].style.display = "none";
		i_a++;
		i_i++;
	}

	while (i < imgchild.length){
		imgchild[i].style.display = "none";
		i++;
		i_x++;
	}
	
	// index for languages and ide's
	i = 0;
	i_a = 0;

	// total length for ide and languages we add -- to avoid the index going to an image that does not exist
	i_x--;
	i_i--;
	
	//just to avoid showing something we don't want
	imgdiploma.style.display="none";	
	imgchild[0].style.display = "block";
	
	//Ininitializing functions for buttons
	ideprog.onclick = showIde;
	langprog.onclick = showLang;
	rightslide.onclick = slideright;
	leftslide.onclick = slideleft;
	hobbybtn.onclick = showhobby;
	diplomabtn.onclick = showdiploma;

	//Functions for language, ide's, hobbies and diploma buttons
	function showhobby(){
		imghobby.style.display = "grid";
		imgdiploma.style.display ="none";
	}
	
	function showdiploma(){
		imghobby.style.display = "none";
		imgdiploma.style.display ="grid";
	}

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
		if (imgvim == 1){
			imgidechild[0].style.display = "block";
			imgvim = 0;
		}
	}
	

	//functions for the right and left sliders buttons
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

			if ((i_a < i_i) && !(i_a > i_i)){
				imgidechild[i_a].style.display = "none";
				i_a++;
				imgidechild[i_a].style.display = "block";
			}

			else{
				i_a = 0;
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
			if ((i_a <= i_i) && !(i_a > i_i) && !(i_a == 0)){
				imgidechild[i_a].style.display = "none";
				i_a--;
				imgidechild[i_a].style.display = "block";
			}

			else{
				i_a = 1;
				imgidechild[i_i].style.display = "block";
				imgidechild[0].style.display = "none";
			}
		}
	}
}
