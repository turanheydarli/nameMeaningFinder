const form = document.querySelector(".form-group");
const xname = document.querySelector("#name");
const mean = document.querySelector("#mean");


form.addEventListener("submit", (e) => {

    if(xname.value != ""){
        //Ad göndərildi...
        const ajax = new XMLHttpRequest();

        ajax.onload = () => {
            meaning = JSON.parse(ajax.responseText);
            mean.innerHTML =  `<p><b>${meaning.Response.Name} </b> ${meaning.Response.Meaning}</p>`;
        }

        ajax.open("GET","https://api.opendata.az/v1/json/home/MeaningOfName/" + xname.value);

        ajax.send();
    }else{
        //Xəta

    }

    e.preventDefault();
});


function displayMessages(message,type){

}