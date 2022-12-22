let params = new URLSearchParams(location.search);
let pcorrect = params.get("giuste") || 8 ;
let maxcorrect = params.get("max");

let resultato = document.getElementById("resultato");
resultato.innerText =  `${(pcorrect / maxcorrect) *100}%`;