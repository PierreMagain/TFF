// Créer des liens masquer/afficher
function createToggleLink(prefix) {
  let linkId = prefix + "_link";
  let link = document.createElement("a");
  
  let titleId = prefix + "_title";
  let title = document.getElementById(titleId);
  
  let contentId = prefix + "_content";
  let content = document.getElementById(contentId);
  
  title.appendChild(link);
  link.setAttribute("id",linkId);
  link.setAttribute("class","toggle_link");
  link.innerText = "Afficher plus";
  link.onclick = function() {toggleContent(content,link)};
  content.style.display = "none"
}

// Fonctionnalité pour masquer/afficher
function toggleContent(content,link) {
  if(content.style.display === "none") {
    content.style.display = "block";
    link.innerText = "Afficher moins";
  }else{
    content.style.display = "none";
    link.innerText = "Afficher plus";
  }
}












