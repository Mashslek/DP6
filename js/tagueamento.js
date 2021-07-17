// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-202448807-1', 'auto');
ga('send', 'pageview');
console.log(ga.q);

//document.querySelector('.menu-lista-index').addEventListener('click',(evt) => {})
//document.querySelector('.menu-lista-analise').addEventListener('click',(evt) => {})
//document.querySelector('.menu-lista-sobre').addEventListener('click',(evt) => {})
window.addEventListener("load", (event) => {
	document.querySelector('.menu-lista-contato').addEventListener('click',(evt) => {ga('send','event','menu', 'entre_em_contato', 'link_externo')})
	document.querySelector('.menu-lista-download').addEventListener('click',(evt) => {ga('send','event','menu', 'download_pdf', 'download_pdf')})
	if(document.URL.includes('analise')){
		Array.from(document.querySelectorAll('.cards-montadoras>div'))
			.forEach((x) =>{x.addEventListener('click',(evt) => {
				ga('send','event','menu', 'ver_mais', x.attributes['data-name'].value)
			})
		})
	}
	else if(document.URL.includes('sobre')){

	}
});
