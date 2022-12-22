let params = new URLSearchParams(location.search);
let pcorrect = params.get("giuste") || 8 ;

let resultato = document.getElementById("resultato");
resultato.innerText = ` ${pcorrect}`;