function createGame(time1, hora, time2){
    return `	
    <li>
    <img src="assets/img/icont-${time1}.png" alt="Bandeira do ${time1}">
    <strong>${hora}</strong>
    <img src="assets/img/icont-${time2}.png" alt="Bandeira do ${time2}">
    </li>
    `
}