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

document.querySelector(".btn").addEventListener('click',nextPage)
  function nextPage(btn){
    btn = location.assign(`/feedback.html?=pagina4`)
  }