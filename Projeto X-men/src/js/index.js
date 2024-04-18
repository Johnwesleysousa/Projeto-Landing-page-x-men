/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos 
que adicionar a borda azul de seleção na imagem pequena do personagem e mostar a 
imagem, o nome e o texto grande do personagem que está selecionado 

  OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos 
  seleciona-lo
      passo 1 -pegar o personagem no JS pra poder verificar quando o usúario
      passar o mouse em cima de um deles 

      passo 2 - adicionar a classe selecionado no personagem que o usúario passar o
      cursor mouse 

      passo 3 - verificar se já exista um personagem selecionado, se sim, devemos
      remover a seleção dele 

  OBJETIVO 2 - quando passar o mouse em cima do personagem,trocar a 
  imagem, nome e a descrição do personagem grande 
      passo 1 - pegar o elemento do personagem grande para adicioinar as informações 
      nele
      passo 2 - alterar a imagem do personagem grande 
      passo 3 - alterar o nome do personagem grande 
      passo 4 - alterar a descrição do personagem grande 

*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
// passo 1 -pegar o personagem no JS pra poder verificar quando o usúario passar o mouse em cima de um deles 

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usúario passar o cursor mouse 
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , () => {

         //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    
    personagem.classList.add('selecionado');

    //OBJETIVO 2 - quando passar o mouse em cima do personagem,trocar a imagem, nome e a descrição do personagem grande 
        //passo 1 - pegar o elemento do personagem grande para adicioinar as informações nele
       const imagemPersonagemGrande = document.querySelector('.personagem-grande');
       
       //passo 2 - alterar a imagem do personagem grande
       const idPersonagem = personagem.attributes.id.value;

       
       imagemPersonagemGrande.src = `.src/imagens/card-${idPersonagem}.png`;
    })
})