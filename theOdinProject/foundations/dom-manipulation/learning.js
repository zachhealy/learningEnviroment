const container = document.querySelector('#container');


const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);


const h3 = document.createElement("h3");
h3.textContent = "And I am a blue H3"
h3.style.color = 'blue';

container.appendChild(h3);


const div = document.createElement("div");
div.style.backgroundColor = 'pink';
div.style.border = "thick solid black"

const h1 = document.createElement("h1");
const p1 = document.createElement("p");
h1.textContent = "I'm in a div";
p1.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p1);

container.appendChild(div);

//events tutorital
const btn = document.querySelector('#btn');
btn.onclick = () => alert('hello world!');


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("hello world!");
});


function alertUser(){
    alert("yay! good job");
}


btn.addEventListener('click', function (e){
    console.log(e);
})

btn.addEventListener('click', function (e){
    console.log(e.target);
})

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });