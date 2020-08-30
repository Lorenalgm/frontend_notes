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