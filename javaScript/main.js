var palavras = ["PEIXE","BANHO","CELULAR","ROUPA","CORTINA"];
var palavraSele = "";
var container = document.getElementById ("flex-container");
var fundoErro = document.querySelector (".fundo-erro");
var telaInicio = document.querySelector (".tela-inicio");
var tecladoCelular = document.querySelector(".teclado-celular");
var botaoCelular = document.querySelector (".botao-letra-celular");
var telaAddPalavra = document.querySelector(".tela-add-palavra");
var telaJogo = document.querySelector (".tela-jogo"); 
var avisos = document.querySelector(".avisos");
var textoAvisos = document.querySelector(".texto-avisos");
var textoTitulo = document.querySelector(".texto-titulo");
var popupContainer = document.getElementById("popup-container");
var popupTexto = document.getElementById("texto-popup");
var checkbox = document.querySelector(".checkbox");
var botaoNovoJogo = document.querySelector (".botao");
var botaoDesistir = document.querySelector (".desistir");
var botaoNewGame = document.querySelector (".newGame");
var botaoAddPalavra = document.querySelector(".inserirPalavra");
var botaoVoltar = document.querySelector(".voltar");
var botaoAdd = document.querySelector(".add");
var header = document.querySelector ("header");
var footer = document.querySelector ("footer");
var campoTexto = document.querySelector (".campo-texto");
var input = document.querySelector (".input");
var chama = document.querySelector (".chama");
var chama1 = document.querySelector (".chama1");
var chama2 = document.querySelector (".chama2");
var errosRegistrados = "";
var acertosRegistrados = "";
var imagens = ["url('./imagens/inicioCorrendo.gif')","url('./imagens/semErro.png')","url('./imagens/erro1A.gif')","url('./imagens/erro1I.png')","url('./imagens/erro2A.gif')", "url('./imagens/erro2I.png')","url('./imagens/erro3A.gif')", "url('./imagens/erro3I.png')","url('./imagens/erro4A.gif')", "url('./imagens/erro4I.png')","url('./imagens/erro5A.gif')", "url('./imagens/erro5I.png')","url('./imagens/erro6A.gif')", "url('./imagens/erro6I.png')"];
var indice = 0;
var segundos = 2333;
var bloqueia = true;
var acertos = 0;
var vidas = 0;
var derrotaVitoriaAviso = "";
var numeroAleatorio;
var textoAddPalavraErrada = "Só são permitidas palavras de no máximo 10 caracteres, sem espaço, acento ou números!";
var textoFimDePalavras = "Você jogou todas as palavras! adicione mais no menu ou aperte f5 para jogar novamente!";
colocaTitulo();
function coclocaAvisoDeFim(){
	if(palavras.length == 0){
		colocaPopUp(textoFimDePalavras);
	}
}
function colocaPopUp(texto){
	popupTexto.textContent = texto;
	popupContainer.style.display = "block";
	setTimeout(function(){
			popupContainer.style.display = "none";

	}, 2500)

}
function mostraPalavrasAdicionadas(){

	
}
function bloqueiaTecla (){
	bloqueia = true;
}
function desbloqueiaTecla (){
	bloqueia = false;

}
function selecionaPalavra (){
	numeroAleatorio = Math.floor(Math.random() * palavras.length);
	console.log(palavras);
	console.log(palavraSele);
	palavraSele = palavras[numeroAleatorio];
	
	console.log(palavras);
	console.log(palavraSele);
}

function trocaGif (){
	container.style.backgroundImage = imagens[indice];
	setTimeout(trocaGif2, segundos);
	bloqueiaTecla();
	
}
function trocaGif2 (){
	indice++;
	segundos = 500;
	container.style.backgroundImage = imagens[indice];
	setTimeout(desbloqueiaTecla, segundos);
}

function limpaTela (){
	container.innerHTML="";
	fundoErro.innerHTML="";
	acertos = 0;
	vidas = 0;
	indice = 0;
	segundos = 2333;
	acertosRegistrados = "";
	errosRegistrados = "";
	avisos.classList.remove ("displayFlex");
	avisos.classList.add("mudaTela");
	derrotaVitoriaAviso = "";
}

function addErro (erroCaractere){
			var div2 = document.createElement("div");
			var erroLetra = document.createElement("h1");
			erroLetra.classList.add("erro")
			erroLetra.textContent = erroCaractere;
			div2.appendChild (erroLetra);
			fundoErro.appendChild (div2);
			errosRegistrados = errosRegistrados + erroCaractere;
			vidas++;
			indice++;
			trocaGif ();
		
}
function colocaTitulo(){
		tituloForca = "jogo da forca"
		for(i = 0; i < tituloForca.length; i++){
			var divTitulo = document.createElement("div");
			var tituloLetra = document.createElement("h1");
			tituloLetra.classList.add ("titulo" + i)
			tituloLetra.classList.add("estiloTitulo");
			tituloLetra.textContent = tituloForca[i];
			divTitulo.appendChild (tituloLetra);
			textoTitulo.appendChild (divTitulo);
		}

}
function addPalavraNoHTML (){
	for(i = 0; i < palavraSele.length; i++){
			var item = document.createElement ("div");
			var letra = document.createElement ("h1");
			letra.classList.add("letraAcerto" + i);
			container.appendChild (item);
			item.classList.add ("estiloLetras");
			item.classList.add ("estiloDiv" + i);
			letra.classList.add ("esconde");
			item.appendChild (letra);
			letra.textContent = palavraSele[i];
			
		}
}
function declaraResultado(conteudo){
	avisos.classList.remove("mudaTela");
	avisos.classList.add("displayFlex");
	textoAvisos.textContent = conteudo;


}
function novoJogo (){
		
		limpaTela ();
		trocaGif();
		selecionaPalavra ();
		addPalavraNoHTML ();
		
}
function colocaTelaInicio (){
	telaJogo.classList.add ("mudaTela");
	telaInicio.classList.remove("mudaTela");
	header.classList.remove ("mudaTela");
	footer.classList.remove ("mudaTela");
	telaAddPalavra.classList.add("mudaTela");
}
function colocaTelaJogo (){
	telaJogo.classList.remove ("mudaTela");
	telaAddPalavra.classList.add("mudaTela");
	telaInicio.classList.add("mudaTela");
	header.classList.add ("mudaTela");
	footer.classList.add ("mudaTela");
}
function colocaTelaAddPalavra(){
	telaInicio.classList.add("mudaTela");
	telaAddPalavra.classList.remove("mudaTela");
	
	
}

function verificaPalavra (txt){
	var valor = 0;
	var txtMaiusculo = txt.toUpperCase();
	for(i = 0; i < txt.length; i++){
		if(txtMaiusculo.charCodeAt(i) >= 65 && txtMaiusculo.charCodeAt(i) <= 90){
			console.log(txt[i])
		valor++;
		}
	}
	if(valor == txt.length){
		return true;
	}
	else{
		return false;
	}
}
function addPalavra (){
	var palavraCampoTexto = campoTexto.value.toUpperCase();
	var trueFalse = verificaPalavra(campoTexto.value);
	if(!palavraCampoTexto.includes(" ") && palavraCampoTexto.length < 10 && trueFalse){
	palavras.push(palavraCampoTexto);
	selecionaPalavra ();
	
	}
	else{
		colocaPopUp(textoAddPalavraErrada);
		
	}
}
botaoAdd.addEventListener("click", function(){
	addPalavra ();
	palavraCampoTexto = "";
	campoTexto.value = "";
})
botaoNovoJogo.addEventListener("click", function (){
		
	novoJogo();
});

botaoDesistir.addEventListener("click", function(){
	colocaTelaInicio();
	novoJogo()
})

botaoNewGame.addEventListener("click", function(){
	colocaTelaJogo();
	
})
botaoAddPalavra.addEventListener("click", function (){
	colocaTelaAddPalavra();
	console.log(palavraSele);
})
botaoVoltar.addEventListener("click", function(){
	colocaTelaInicio();

	
})

window.addEventListener ("keydown", function (event) {
	
	if(!bloqueia){
		var erroContagem = 0;
		if(event.keyCode >= 65 && event.keyCode <= 90){
			for(i = 0;  i < palavraSele.length; i++){
				
					if(palavraSele[i] == event.key.toUpperCase())
					{
						if(!acertosRegistrados.includes(event.key.toUpperCase()))
						{
							
							acertos++;
							console.log("acertou");
						}
						
						var divi = document.querySelector (".letraAcerto" + i);
						divi.classList.remove ("esconde");
						divi.classList.add ("animacaoAcerto");
						
						if(acertos == palavraSele.length)
						{
							derrotaVitoriaAviso = "você ganhou!";
							palavras.splice(numeroAleatorio, 1);
							setTimeout (declaraResultado(derrotaVitoriaAviso), 900);
							setTimeout(novoJogo, 2000);
							setTimeout(coclocaAvisoDeFim, 2000);
						}
					}
					if(palavraSele[i] !== event.key.toUpperCase()) {
							
							erroContagem++;
			
					}
				
			}
			acertosRegistrados = acertosRegistrados + event.key.toUpperCase();
			if (erroContagem == palavraSele.length && !errosRegistrados.includes(event.key.toUpperCase()))
			{

					addErro(event.key.toUpperCase());
					if(vidas >= 6)
					{
						palavras.splice(numeroAleatorio, 1);
						derrotaVitoriaAviso ="você perdeu!";
						setTimeout(declaraResultado(derrotaVitoriaAviso), 900)
						setTimeout(novoJogo, 2000)
						setTimeout(coclocaAvisoDeFim, 901);
					}
			}	
		}
	}	
})




botaoCelular.addEventListener ("click", function (event) {
	
	
	
	if(!bloqueia){
		var palavraCelular = tecladoCelular.value;
		tecladoCelular.value = "";
		var erroContagem = 0;
		if(palavraCelular.toUpperCase().charCodeAt() >= 65 && palavraCelular.toUpperCase().charCodeAt() <= 90){
			for(i = 0;  i < palavraSele.length; i++){
				
					if(palavraSele[i] == palavraCelular.toUpperCase())
					{
						if(!acertosRegistrados.includes(palavraCelular.toUpperCase()))
						{
							
							acertos++;
							console.log("acertou");
						}
						
						var divi = document.querySelector (".letraAcerto" + i);
						divi.classList.remove ("esconde");
						divi.classList.add ("animacaoAcerto");
						
						if(acertos == palavraSele.length)
						{
							derrotaVitoriaAviso = "você ganhou!";
							palavras.splice(numeroAleatorio, 1);
							setTimeout (declaraResultado(derrotaVitoriaAviso), 900);
							setTimeout(novoJogo, 2000);
							setTimeout(coclocaAvisoDeFim, 2000);
						}
					}
					if(palavraSele[i] !== palavraCelular.toUpperCase()) {
							
							erroContagem++;
			
					}
				
			}
			acertosRegistrados = acertosRegistrados + palavraCelular.toUpperCase();
			if (erroContagem == palavraSele.length && !errosRegistrados.includes(palavraCelular.toUpperCase()))
			{

					addErro(palavraCelular.toUpperCase());
					if(vidas >= 6)
					{
						palavras.splice(numeroAleatorio, 1);
						derrotaVitoriaAviso ="você perdeu!";
						setTimeout(declaraResultado(derrotaVitoriaAviso), 900)
						setTimeout(novoJogo, 2000)
						setTimeout(coclocaAvisoDeFim, 901);
					}
			}	
		}
	}	
})
