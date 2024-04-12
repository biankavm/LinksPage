function trocaTema(){
  const html = document.documentElement /* pega os elementos da tag html*/

  /*if (html.classList.contains('light')){
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }*/
  html.classList.toggle('light')

  /* troca da imagem */
  // 1 - pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')){
	  img.setAttribute('src', './assets/my-light.png') /* mudar atruibuto src do img, para trocar a imagem */
    img.setAttribute('alt', 'Foto de Bianka sorrindo com fone amarelo e ecabelo castanho.')
}
  else{
    img.setAttribute('src', './assets/my.png') /* não é tema light, mantém o original */
    img.setAttribute('alt', 'Foto de Bianka ouvindo musica com fone preto, cabelo castanho e sorrisinho')
  }
}