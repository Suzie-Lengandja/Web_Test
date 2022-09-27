//Cette fonction permet de modifier le header de ma page HTML
//PS : elle ne sert à rien parce que je peux faire cette modif à travers l'HTML 

/*let myHeading = document.querySelector('h1');
myHeading.textContent = "Bienvenue"; */

//Fonction qui permet de changer l'img sur le site en cliquant
let myImg = document.querySelector('img');
myImg.addEventListener('click', function(){
    let mySrc = myImg.getAttribute('src');
    if (mySrc==='smiley.png'){
        myImg.setAttribute('src','wink.png');
    } else {
        myImg.setAttribute('src','smiley.png');
    }

})

//message personnalisé à travers un prompt
let myHeader = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName(){
    let name = prompt('Enter your name');
    localStorage.setItem('name', name);
    myHeader.textContent = name + ' Welcome to my page';
}

//on vérifie si l'utilisateur est nouveau ou non 
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let oldName = localStorage.getItem('name');
    myHeader.textContent = oldName + ' Welcome to my page';
}

myButton.addEventListener('click', function(){
    setUserName();
})