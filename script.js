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
    let title = document.querySelector("title")
   
    if(getText.value){
        heading.innerText = getText.value
        title.innerText = getText.value
    } else{
        alert("!!! The text box is empty !!!")
    }
}

const  enrollButton = function(eventData){
    let enrollButton = document.getElementById('enroll-button')
    
    enrollButton.addEventListener = ('onclick', enrollStudent(3))
}

 
const enrollStudent = function(n){
    let getStudentInfo = document.getElementsByTagName('tr')

    let enroll = document.querySelector('.enrolled-student ul')

    let addStudent =  document.createElement("li")
    addStudent.innerText =  `${getStudentInfo[n].textContent}` 
    enroll.appendChild(addStudent)
}