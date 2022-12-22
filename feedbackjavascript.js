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

const star = document.querySelector(".rating");
star.onclick = function (event) {
  console.log("ricevuto");
  star.style.color = "aqua";
  event.target.classList.add("stellaSelezionata");
  star.style.color = " #00e5ff";
};

const createStar = function (imgUrl) {
  const divGrande = document.querySelector(".rating");
  const img = document.createElement("img");
  for (let i = 0; i < 10; i++) {
    /*     img.innerHTML = `<img src= ${imgUrl} />`; */ //NON FUNZIONA
    img.innerHTML = `<img src= 'file:///C:/Users/Micro/Downloads/star.svg'>`;

    img.style.width = "47";
    img.style.height = "46";
    img.style.viewBox = "0 0 47 46";
    img.style.fill = "none";
    divGrande.appendChild(img);
  }
};
createStar();
