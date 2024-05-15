const button = document.querySelector('button')
let resultDiv = document.createElement("div")
    resultDiv.id = 'result'
    document.getElementById('wrapper').appendChild(resultDiv)

button.addEventListener('click', displayStats)

function displayStats() {
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language = ""
    
    switch (city) {
        case 'Bengalore': 
            population = 8443675
            language = 'Kannada'
            literacyRate = 88.71
            break
        case 'Trichy': 
            population = 2000000
            language = 'Tamil'
            literacyRate = 90
            break
        case 'Chennai': 
            population = 48596852
            language = 'Tamil'
            literacyRate = 89.23
            break
        case 'Delhi': 
            population = 48596236
            language = 'Hindi'
            literacyRate = 85.23
            break
        case 'Mumbai': 
            population = 56345153
            language = 'Marathi'
            literacyRate = 92.23
            break
    }
    
    let text = `The Indian city of ${city} has a population of ${population}, the language spoken is ${language}, and the literacy rate is ${literacyRate}%.`
    
    
    document.getElementById('result').innerHTML = text
}
