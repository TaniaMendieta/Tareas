function changeName (){
    const name = prompt("¿Cuál es tu nombre?")
    const elements = document.getElementsByClassName("changeName")
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = "Hola " + name;
    }
}

