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

// Quero ativar essa função em cada um dos links
links.forEach(ativarLink);