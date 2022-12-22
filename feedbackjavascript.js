let pag4 = new URLSearchParams(location.search);
let pagcorr = pag4.get("pagina4") ;
const validate = () => {
  const button = document.getElementById("button");
  const text = document.getElementById("text");

  if (text.value === "" || !text.value) {
    button.style.backgroundColor = " gray"; //#bf055b//
    button.style.boxShadow = "none";
    button.style.fontWeight = "bold";
    button.style.color = "#fff";
    button.style.border = " none";
    button.style.padding = "15px";
    button.style.minHeight = "60px";
    button.style.fontSize = "20px";
    button.style.minWidth = "240px";
    button.style.marginRight = "15px";
  } else {
    button.style.backgroundColor = " #00e5ff"; //acqua
    button.style.boxShadow = "0px 0px 24px aqua";
    button.style.color = "#001f51";
    button.style.border = " none";
    button.style.padding = "15px";
    button.style.minHeight = "60px";
    button.style.fontSize = "20px";
    button.style.minWidth = "240px";
  }
};

//STELLE//
let link = 'Star_empty.svg.png';
let link1 = 'Immagini/star.svg';

const star = document.querySelector(".rating");
star.onclick = function (event) {
  console.log("ricevuto");
  /*star.style.color = "aqua";
  event.target.classList.add("stellaSelezionata");
  star.style.color = " #00e5ff";*/

  for(let i=0; i<10;i++){
	  document.getElementById(i).setAttribute('src',link);
  }
  for(let i=0; i<=event.target.id;i++){
	  document.getElementById(i).setAttribute('src',link1);
  }
};

const createStar = function () {
  const divGrande = document.querySelector(".rating");



  for (let i = 0; i < 10; i++) {
    let svgframe = document.createElement('img');
    svgframe.id = i;
    svgframe.class = "stella";
    svgframe.width = "47";
    svgframe.height = "46";
    svgframe.setAttribute('src', link);


    divGrande.appendChild(svgframe);
  }
};
createStar();