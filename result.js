let params = new URLSearchParams(location.search);
let pcorrect = params.get("giuste") ;
let maxcorrect = params.get("max"); 
let sbagliata = params.get("sbagliate")
let resultato = document.getElementById("resultato");
resultato.innerText =  `${(pcorrect / maxcorrect) *100}%`;
let risultatoQuestion = document.getElementById("totalQuestions")
risultatoQuestion.innerText= `${pcorrect}/${maxcorrect} Questions`
let risultatoSbagliato = document.getElementById("risSbagliato")
risultatoSbagliato.innerText = `${(sbagliata / maxcorrect) *100}%`
let totalQuestionsWrong = document.getElementById("totalQuestionsWrong")
totalQuestionsWrong.innerText= `${sbagliata}/${maxcorrect} Questions`


if(pcorrect > 5){
  let content = document.querySelector(".content")
  let h3 = document.createElement("h3")
  let span = document.createElement("span")
  span.innerText= "You passed the exam."
  span.classList.add("content")
  h3.innerText = "Congratulations!"
  content.appendChild(h3)
  content.appendChild(span)
}else{
  let content = document.querySelector(".content")
  let h3 = document.createElement("h3")
  let span = document.createElement("span")
  span.innerText= "You didn't pass you're bad"
  span.classList.add("content")
  h3.innerText = "Congratulations!"
  content.appendChild(h3)
  content.appendChild(span)
}
let audio = new Audio('./immagini/lol.mp3 ');
audio.play();



document.querySelector(".btn").addEventListener('click',nextPage)
  function nextPage(btn){
    btn = location.assign(`/feedback.html?=pagina4`)
  }