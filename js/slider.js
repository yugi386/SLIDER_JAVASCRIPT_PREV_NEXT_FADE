/*
=================================================================================
SLIDER PARA TREINAMENTO PADAWAN - REFINAMENTO DE CÓDIGO
AUTOR: YUGI
DATA: 27/06/2012
=================================================================================
*/
var slide = 1;	//	controla qual imagem vai aparacer no slide
window.onload= function() {flinks();}	
setInterval(function(){fade()},100);
// *****************************************************************************
function browseSlider(){
	var img = document.getElementById('content').getElementsByTagName('img');	// Acessa o Elemento imagem
	var opc = document.getElementById("content").getElementsByTagName('li');	//	faz a leitura do id dos links...		
	
	// Esconde todas as imagens e desativa links:
	for (var ct=0;ct<img.length;ct++){
		img[ct].style.display="none";
		opc[ct+1].className = '';
		img[ct].style.opacity=0;		
	}
	
	// Apresenta a imagem em foco
	img[0].src = "http://lorempixel.com/960/300/sports/" + slide + "/";		//	troca o src da imagem
	img[0].style.display="inline";			//  mostra a imagem
	opc[slide].className = 'active';		//	altera classe do link ativo para classe [active]
}
// *****************************************************************************
function alterImg(nPhoto){	//	altera a imgem em foco
	slide = nPhoto;
	browseSlider();
}
// *****************************************************************************
function flinks() {
	var links = document.getElementById("content").getElementsByTagName("a");
	
	links[0].onclick = function() { navSlider(0) };	
	links[1].onclick = function() { alterImg(1) };		
	links[2].onclick = function() { alterImg(2) };			
	links[3].onclick = function() { alterImg(3) };		
	links[4].onclick = function() { alterImg(4) };		
	links[5].onclick = function() { alterImg(5) };		
	links[6].onclick = function() { navSlider(1) };	
	
	alterImg(1);
}
// *****************************************************************************
function navSlider(tipo) {	//	Prev e Next no sliders
	if (tipo == 1){
		slide = slide + 1;
		if (slide > 5){
			slide = 1;
		}
	} else {
		slide = slide - 1;
		if (slide < 1){
			slide = 5;
		}
	}
	browseSlider();
}
// *****************************************************************************
function fade() {
	var img = document.getElementById('content').getElementsByTagName('img');	// Acessa o Elemento imagem
	var op = Number(img[0].style.opacity);
	if (op < 1){
		op = op + 0.25;
		img[0].style.opacity = op;
	}	
}
// *****************************************************************************