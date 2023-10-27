const playbtn = document.getElementById("playbtn")
const container = document.querySelector(".container")

playbtn.addEventListener("click", function(){
    container.classList.toggle("hidden")
})

// Generazione di 100 celle
for (let i = 1; i <= 100; i++) {
    const cell = generateCell(i)
    cell.addEventListener("click", function(){
        cell.classList.add("click")
        console.log(cell.textContent);
    })

    container.append(cell)  
}

// Functions
/**
 * Funzione che genera una cella con un numero all' interno
 * @param {number} number
 * @returns {any}
 */
function generateCell(number) {
    const cell = document.createElement("div")
    cell.classList.add("box")
    cell.innerHTML = number
    return cell
}
