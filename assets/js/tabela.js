function createGame(time1, hora, time2) {
    return `	
    <li>
    <img src="../assets/img/icon-${time1}.png" alt="Bandeira do ${time1}"/>
    <strong>${hora}</strong>
    <img src="../assets/img/icon-${time2}.png" alt="Bandeira do ${time2}"/>
    </li>
    `
}
let delay = -0.4;
function createCard(data, dia, jogos) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${data} <span>${dia}</span></h2>
        <ul>
            ${jogos}
        </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
    createCard("06/12", "Quata-feira", createGame("santos", "21:30", "fortaleza")) +
    createCard("07/12", "Quinta-feira", createGame("corinthians", "22:30", "palmeiras")) +
    createCard("08/12", "Sexta-feira", createGame("vasco", "20:30", "inter")) +
    createCard("09/12", "Sábado", createGame("gremio", "21:30", "bota")) +
    createCard("10/12", "Domingo", createGame("sp", "20:00", "cruzeiro")) +
    createCard("11/12", "Segunda-feira", createGame("bahia", "21:30", "atletico")) 