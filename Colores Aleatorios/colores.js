//Desarrollo Taller

//Creamos function generarColorHex

function generarColorHex() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        colorHex += digitos[Math.floor(Math.random() * 16)]; //+= significa que se suma un valor a la cadena hasta llegar a 6 digitos
    }
    return colorHex; //retorna el color generado
}

let body = document.querySelector('body'); //Seleccionamos el elemento con id color (body)
let boton = document.querySelector('#boton'); //Seleccionamos el elemento con id boton (button)
let texto = document.querySelector('#texto'); //Seleccionamos el elemento con id texto (h1)

function cambiarColor() {
    let nuevoColor = generarColorHex(); //Generamos un nuevo color
    body.style.backgroundColor = nuevoColor; //Cambiamos el color de fondo del body
    texto.textContent = nuevoColor; //Cambiamos el texto del h1 por el nuevo color generado
}

boton.addEventListener('click', cambiarColor); //Agregamos un evento al boton para que al hacer click se ejecute la funcion cambiarColor


