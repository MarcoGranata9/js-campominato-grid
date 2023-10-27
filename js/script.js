const playbtn = document.getElementById("playbtn")
const container = document.querySelector(".container")
const difficultyElem = document.getElementById("difficulty")


playbtn.addEventListener("click", function(event) {
    event.preventDefault()
    container.innerHTML = ""
    container.classList.toggle("hidden")
    const difficulty = difficultyElem.value
    console.log(difficulty);


    switch (difficulty) {
        case "hard":
            for (let i = 1; i <= 49; i++) {
                const cell = generateCell(i, "boxhard")
                cell.addEventListener("click", generateStyleNumLog)
                container.append(cell)  
            } 
            break;
        case "medium":
            for (let i = 1; i <= 81; i++) {
                const cell = generateCell(i, "boxmed")
                cell.addEventListener("click", generateStyleNumLog)
    
                container.append(cell)  
            } 
            break;
        default: "easy"
            for (let i = 1; i <= 100; i++) {
                const cell = generateCell(i, "box")
                cell.addEventListener("click", generateStyleNumLog)
                container.append(cell)  
            }  
            break;
    }
})




// Functions
/**
 * Funzione che genera una cella con un numero all' interno ed una classe
 * @param {number} number
 * @param {string} class
 * @returns {any}
 */
function generateCell(number, string) {
    const cell = document.createElement("div")
    cell.classList.add(`${string}`)
    cell.innerHTML = number
    return cell
}

/**
 * Funzione che aggiunge una classe e stampa in console il testo come numero
 * @param {any}
 * @returns {any}
 */
function generateStyleNumLog() {
    this.classList.add("click")
    console.log(parseInt(this.textContent));
}