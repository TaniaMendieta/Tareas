

const getUsers = async (url) => {
    try {
        const resolve = await fetch(url);
        const requestData = await resolve.json();
        const users = requestData.data;
        printCards(generateCards(users));
    } catch (error) {
        console.error(error);
    }
}

const generateCards = (users) => {
    return users.map(user => `
        <div class="col-12 col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.first_name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${user.email}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    `);
}

const printCards = (cards) => {
    const userCards = document.getElementById("user-cards");
    userCards.innerHTML = cards.join("");
}

// Función para manejar el clic en el botón
const handleButton = () => {
    getUsers("https://reqres.in/api/users?delay=3"); 
}

// Llamar a la función handleButton() cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    handleButton();
});


