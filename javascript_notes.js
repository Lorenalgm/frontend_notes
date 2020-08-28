// Functions
// Functions are important building blocks in any language. They help ensure that your code follows the DRY 
// principle and that you follow a design principle called Separation of Concerns. 
// Your functions should “do one thing and do it well” (McIlroy).

// DRY
// Don't repet yourself

// parameters in a function
function sum(num1, num2){
	return num1+num2;
}

// calling a function
var result = sum(10, 5); // arguments (10,5)


// DOM - Document Object Model 
// Allow the developer to manipulate the web page
// document


document.getElementById("id"); 
document.getElementsByClassName("things");

// querySelector 
// Select a single getElementById
var result = document.querySelector("#id");


// querySelectorAll
// Select all the elements rom the page that match the query
var result = document.querySelectorAll(".class");
var element = document.querySelectorAll("h1");


//Changing the content
result[i].textContent = "Redacted";


//Modify
// innerHTML - security risk

// innerText - "expensive"
displayEntryButton.innerText = 1;

// textContent

// Update variable
var person = {name: "Joe"};
person.name = "Jim";
console.log(person);

//change style
header.style.color = "blue";
header.style.backgroundColor = "blue";
document.body.style.backgroundColor = "red";
// tags with camel case


//Add new classes
document.querySelector("#header").className += "new-class";

entryDiv.className = 'single-entry';
	
document.querySelector("#header").classList.add("new-class"); //better

// Remove class
document.querySelector("#header").classList.remove("new-class");

//Add or remove
document.querySelector("#header").classList.toggle("new-class");

// Input
<input type="text" id="text-input" value="This is some content" />


var inputBox = document.getElementById("text-input");
console.log(inputBox.value);

// Create element
var newLi = document.createElement("li");
newLi.textContent = "3";
var myList = document.getElementById("my-list");

//Before
myList.prepend(newLi);

// After
myList.append(newLi);

document.body.append(newP);
entriesSection.appendChild(entryDiv);

//Add element with innerHTML
var myList = document.getElementById("my-list");
myList.innerHTML += "<li>4</li>";



//Lister
var button = document.getElementById("button");

function handleButtonClick() {
    console.log("The button was clicked!");
}

//without the parenteses, othewise would excute the function right now
button.addEventListener("keyup", handleButtonClick);
button.addEventListener("click", handleButtonClick);
button.addEventListener("mouseover", handleButtonClick);
button.addEventListener("mouseout", handleButtonClick);
// dblclick

//Not reload
event.preventDefault();

function addEntryToDom(event) {
    event.preventDefault();
}


//get what user are typing
var input = document.querySelector('#searchInput');

function hadleQuery(e){
    // let searchQuery = event.target.value;
    // Letra minúscula
    let searchQuery = event.target.value.toLowerCase();

    
    console.log(searchQuery);
}

input.addEventListener('keyup', hadleQuery);


//Verificar se um array inclui uma palavra

 const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
if(currentName.includes(searchQuery)){
    allNamesDOMCollection[counter].style.display = 'block';
}

//Mudar tipo de string para number
temperature = parseInt(temperature.value);
// ou
Number(temperature.value);

//redudir para 2 casas decimais
result.toFixed(2);

//Gerar valores aleatórios
Math.random();

//Arredondar para o inteiro
Math.floor(3.5) = 3;

const randomNumber = Math.floor(Math.random() * 6) + 1;


//Inverter o valor entre true e false
player1Turn = !player1Turn; 

// Comparação
if (player1Score >= 20) {
	console.log('teste');
}

//Foreach
let currentSnake = [0,1,2]
currentSnake.forEach(index => squares[index].classList.add('snake'));

// Remove the last element from the array
currentSnake.pop();

//add element in direction we are heading
currentSnake.unshift(currentSnake[0] + direction);


// Execute once
setTimeout(move, 1000);

// Execute a lot of times
let timeId = setInterval(move, 1000);

// Limpar tempo
clearInterval(timeId);

// Lidando com as teclas do teclado
// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed')
    } else if (e.keyCode === 38) {
        console.log('up pressed')
    } else if (e.keyCode === 37) {
        console.log('left pressed')
    } else if (e.keyCode === 40) {
        console.log('down pressed')
    }
}

// Ouvindo o que é digitado no teclado para chamar a função
document.addEventListener('keyup', control);

// Para achar a numeração da tecla
// keycode.info

// # keyup
// Só executa quando solta o dedo

// # keydown
// Executa na hora que a tecla é pressionada

//Adicionar no array
currentSnake.push(tail);

// foreach to remove class
currentSnake.forEach(index => squares[index].classList.remove('snake'))