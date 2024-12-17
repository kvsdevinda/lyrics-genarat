const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'http://api.lyrics.ovh';

//search by team or artist

async function searchsong (term){
    const res =await fetch('${apiURL}/suggest/${term}')

}



//event Listner

form.addEventListener("click", myFunction);
