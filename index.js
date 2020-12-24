function scrapper(){
    let publication_date = document.querySelectorAll("span.lbl-licitacao")[0].childNodes[1].innerText.substr(1);
    let binding_date = document.querySelectorAll("span.lbl-licitacao")[5].childNodes[1].innerText.substr(1);
    let object_value = document.querySelectorAll("span.field-content > p")[0].innerText;
    let links = document.querySelectorAll("table > tbody > tr > :nth-child(2) a")[1].href;
    
    console.log("Publication Date:",publication_date);
    console.log("Binding Date:",binding_date);
    console.log("Object Value:",object_value);
    console.log("Links:",links);
}

scrapper();

/*

window.onload = ()=>{
  scrapper();
}

*/
