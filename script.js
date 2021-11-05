// const createTable = function () {
//     getRow = document.getElementsByTagName('table')
//     let tableHeading = createElement("th")
//     tableHeading.innerText = "hello"
//     getRow.appendChild(tableHeading)
// }
// createTable()

const textButton = function(eventData){
    let buttonTextChanger = document.getElementById('text-change-button')
    buttonTextChanger.addEventListener = ('onclick',textChanger())
}

const textChanger = function(){
    let getText = document.getElementById('text-change')
    let heading = document.querySelector("h1")
    heading.innerText = getText.value
}