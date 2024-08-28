// Un commentaire sur une ligne
/*message = "Bienvenue dans Javascript";
alert(message);*/

// Les tableaux de données
users = [ "John", "Olivia", "Jack"];
message = "Bienvenue dans JS " + users[1];
console.log(message);

account = [ 12345, "Olivia", "Jones", true];
console.log("N° employé : " + account[0]);
console.log("Prénom : " + account[1]);
console.log("Nom : " + account[2]);
console.log("Actif : " + account[3]);

// La propriété .length des tableaux
console.log("Longueur du tableau : " + account.length);

// Utilisation des fonctions (déclaration et appels)
function showDryMessage() {
  console.log("Don't Repeat Yourself");
}

showDryMessage();
console.log("Another line");
showDryMessage();

// Déclaration des variables avec "let"
let season = "spring";
console.log("Saison : " + season);
season = "summer";
console.log("Saison : " + season);
console.log("************************");

// Déclarer à nouveau la même variable
//let season = "winter";

// Déclaration de constantes
const pi = 3.1416;

function getCircleArea(radius) {
  let area = pi * (radius ** 2);
  console.log("Aire : " + area);
}

//const pi = 6.4567;
//pi = 6.4567;
getCircleArea(15);
console.log("************************");

// Portée globale des variables
function showCountry() {
  console.log("Pays : " + country);
}

let country = "Belgium";
showCountry();
console.log("************************");

// Portée globale et locale des variables
function showFruit() {
  let fruit= "Lemon";
  console.log("Fruit : " + fruit);
}

let fruit = "Apple";
console.log("Fruit : " + fruit);
showFruit();
console.log("************************");

// Passage d'un tableau lors de l'appel d'une fonction
function showData(data) {
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
  console.log(data[3]);
}

let car = [ "Toyota", "Yaris", "Hybride", true ];
showData(car);

car = [ "Volkswagen", "Polo", "Essence", true ];
showData(car);
console.log("************************");

// Fonction avec valeur "retournée"
const vatRate = 21;
console.log(vatRate);

function getVatIncPrice(price) {
  let vatIncPrice = price + ((price / 100) * vatRate);
  return vatIncPrice;
}

let vatIncPrice = getVatIncPrice(100);
console.log("Prix TTC : " + vatIncPrice);
console.log("************************");

// Utilisation de l'instruction "if"
if(2 * 3 == 6) {
  console.log("2 x 3 = 6");
}
console.log("************************");

// Vérification de la valeur "true" avec if
let active = true;
if(active) {
  console.log("active est bien true");
}
console.log("************************");

// Utilisation de l'instruction "else"
// < (less than) > (greater than) <= >=
// == (égal à) != (pas égal) 
// === strictement égal
let result = 150;
if (result > 100) {
  console.log("Supérieur à 100");
} else {
  console.log("Inférieur ou égal à 100");
}
console.log("************************");

// Imbrication de if/else
let stock = 55;
if (stock > 50){
  console.log("Supérieur à 50");
}else if(stock > 5) {
  console.log("Supérieur à 5");
}else{
  console.log("Pas assez de stock");
}
console.log("************************");

// Utilisation de l'opérateur logique && (ET)
let vegetable1 = "carotte";
let vegetable2 = "salade";
if((vegetable1 == "carotte") && (vegetable2 == "salade")){
  console.log("Les 2 conditions sont remplies");
}else{
  console.log("Les 2 conditions NE sont PAS remplies");
}
console.log("************************");

//Utilisation de l'opérateur logique || (OU)
let fruit1 = "pomme";
let fruit2 = "citron";
if((fruit1 == "pomme") || (fruit2 == "citron")){
  console.log("Au moins une des conditions est respectée");
}
console.log("************************");

// Les instructions switch/case
let color = "jaune";
switch (color) {
  case 'rouge':
    console.log("Vous avez choisi du rouge");
    break;
  case 'vert':
    console.log("Vous avez choisi du vert");
    break;
  case 'bleu':
    console.log("Vous avez choisi du bleu");
    break;
  default:
    console.log("Veuillez rentrer une couleur primaire");
}
console.log("************************");

// Regrouper plusieurs cas avec switch/case
let animal = "bird";
switch (animal) {
  case "cat":
  case "dog":
  case "bird":
    console.log("Vous avez choisi un animal");
    break;
  default:
    console.log("Choisissez un animal");
}
console.log("************************");

// L'instruction "for" (boucle)
let people = [ "James","Mike","Bill"];
for (let i = 0; i < people.length; i++) {
  //console.log("Welcome to loops " + people[i] + " " + people[i+1]);
  console.log("Welcome to loops " + people[i]);
}
console.log("************************");

// Itérations exécutées tant que la condition renvoie "true"
//console.log(Math.random());
//console.log(Math.floor(45.6789));
const magicNumber = 7;
const multiplier = 10;

function getRandomNumber(multiplier){
  let randomNumber = Math.floor(Math.random() * multiplier);
  return randomNumber;
}

let randomNumber = getRandomNumber(multiplier);
while(randomNumber !== magicNumber){
  console.log(randomNumber);
  randomNumber = getRandomNumber(multiplier);
}
console.log("Vous avez trouvé le MagicNumber");
console.log("************************");

// Une instruction while dont le code ne sera pas exécuté
let counter = 10;
while(counter < 5) {
  console.log("Plus petit que 5");
  counter++;
}
console.log("************************");

// Une instruction do/while
let count = 1;
do {
  console.log(count);
  count++;
} while (count < 1);
console.log("************************");

// L'instruction "continue" (saying = dicton)
let saying = "Qui restreint ses besoins sera d'autant plus libre";
let vowels = ["a","e","i","o","u","y"];
let answer = vowels.indexOf(saying.charAt(1));
console.log(answer);

let vowelCounter = 0;
for (let i=0; i < saying.length; i++){
  let character = saying.charAt(i);
  if(vowels.indexOf(character) == -1) {
    console.log("Is not a vowel");
    continue;
  }
  vowelCounter++;
}
console.log("Il y a " + vowelCounter + " voyelles");
console.log("************************");

// Boucle infinie et instruction "break"
while(true) {
  randomNbr = Math.floor(Math.random() * 10);
  
  if(randomNbr === 8) {
    break;
  }
  console.log(randomNbr + " n'est pas le chiffre mystère");
}
console.log("8 est bien notre chiffre mystère");
console.log("************************");

// Accéder à tous les liens <a> de la page
let links = document.getElementsByTagName("a");
console.log(links);
console.log(links[5]);
console.log(links.item(7));
console.log("************************");

// Modifier le contenu du paragraphe
let jsDom1 = document.getElementById("jsDom1");
jsDom1.innerHTML = "Je ne suis plus le contenu initial";

// Modifier le style du paragraphe
let jsDom2 = document.getElementById("jsDom2");
jsDom2.style.color = "green";
jsDom2.style.fontSize = "130%";
jsDom2.style.fontWeight = "bold";

// Spécifier une classe CSS pour le paragraphe
let jsDom3 = document.getElementById("jsDom3");
jsDom3.setAttribute("class","js_Dom3");

// Créer un paragraphe et son contenu avec JS
const jsDom4 = document.createElement("p");
const content4 = document.createTextNode("Contenu temporaire");
jsDom4.appendChild(content4);
const main = document.getElementById("main");
main.appendChild(jsDom4);
jsDom4.innerHTML = "Javascript peut créer des balises et du contenu";

// Bouton cacher/monter en JS
const toggleBtn = document.createElement("button");
main.appendChild(toggleBtn);
toggleBtn.setAttribute("class","js_Dom5");
toggleBtn.innerHTML = "cacher";
toggleBtn.onclick = function() {hideParagraph("jsDom3")};

function hideParagraph(id) {
  let para = document.getElementById(id);
  if(para.style.display === "none") {
    para.style.display = "block";
    toggleBtn.innerHTML = "cacher";
  }else{
    para.style.display = "none";
    toggleBtn.innerHTML = "afficher";
  }
}

// Créer une balise <img> et <p> pour un diaporama automatique
const sliderImage = document.createElement("img");
const sliderMessage = document.createElement("p");
const list = document.getElementById("main");
console.log(list);
list.insertBefore(sliderImage, list.childNodes[3]);
sliderImage.setAttribute("src", "img/slider1.jpg");
sliderImage.setAttribute("class", "slider_image");
sliderImage.setAttribute("id", "slider_image");
sliderImage.onclick = function() {toggleSlider()};
list.insertBefore(sliderMessage, list.childNodes[4]);

function showSlider() {
  const image = document.getElementById("slider_image");
  imageName = "img/slider" + imageIndex + ".jpg";
  image.setAttribute("src", imageName);
  
  if(imageIndex < numberOfImages) {
    imageIndex++;
  }else{
    imageIndex = 1;
  }
}

function toggleSlider() {
  if(slider === true) {
    clearInterval(interval);
    sliderMessage.setAttribute("class","message message_start");
    sliderMessage.innerHTML = "Cliquez sur l'image pour lancer le diaporama";
    slider = false;
  }else{
    showSlider();
    interval = setInterval(showSlider, timer);
    sliderMessage.setAttribute("class","message message_stop");
    sliderMessage.innerHTML = "Cliquez sur l'image pour arrêter le diaporama";
    slider = true;
  }
}

// Initialisation du diaporama
let imageIndex = 1;
const numberOfImages = 3;
const timer = 3000; // milliseconds
let slider = false;
toggleSlider();






























































































































