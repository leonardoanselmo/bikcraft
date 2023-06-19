// Crio uma constante para pegar todos os links do menu
const links = document.querySelectorAll('.header-menu a');

// Crio a função para fazer o tratamento em cada um dos link
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
    
  if(url.includes(href)) {
    link.classList.add("ativo");
  }  
}

// Quero ativar essa função para percorrer o array e fazer o tratamento.
links.forEach(ativarLink);

// Ativar Itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

