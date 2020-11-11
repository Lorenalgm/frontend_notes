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
    document
    
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
    // textContent
    
    // Update variable
    var person = {name: "Joe"}
    // [person.name](http://person.name/) = "Jim"
    console.log(person)
    
    //change style
    header.style.color = "blue";
    header.style.backgroundColor = "blue";
    document.body.style.backgroundColor = "red"
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
    var myList = document.getElementById("my-list")
    myList.innerHTML += "<li>4</li>"
    
    //Lister
    var button = document.getElementById("button")
    
    function handleButtonClick() {
    console.log("The button was clicked!")
    }
    
    //without the parenteses, othewise would excute the function right now
    button.addEventListener("click", handleButtonClick)
    button.addEventListener("mouseover", handleButtonClick)
    button.addEventListener("mouseout", handleButtonClick)
    // dblclick
    
    //Not reload
    event.preventDefault();
    
    function addEntryToDom(event) {
    event.preventDefault();
    }


//   ### Switch
switch(color){
	case "red":
		console.log("teste")
		break;
	default:
		console.log("teste")
}

// Logic operators
//And
// && 

//Or
// ||

//Not
// !


// Values that are equal to false
// Bollean
// 0
// " "
// null
// undefined
// false
// NaN

// Arrays
var teste = [1,2,3]

console.log(teste[0])

//Length

console.log(teste.length)

function showAlert(firstName, lastName){
    console.log(firstName + ' ' + lastName + ', you have been alerted')
}

showAlert('Lorena', 'Montes')

//Slice method
//produce new arrays
const films = ['Elf', 'Borat', 'It', 'Split', 'Us']
const thriller = films.slice(3,5)
// console.log(thriller) => ['Split', 'Us']

//Push
// Add new items to the end of an existing Array. It mutates that existing array
books.push('O Pequeno Príncipe')


// Unshift
//adds new items to the START of an array
//it will change the length of the array
let lottery = [5, 7, 8, 10, 12]
lottery.unshift(2)

currentSnake.forEach(element => squares[element].classList.add('snake'))


pop();
// remove the last item. Mutante the array
// returns the removed array

shift()
// remove the first item. Mutante the array
// returns the removed array