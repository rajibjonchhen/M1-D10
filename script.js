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

 
    
// const myfunction = function() {
//     let table = document.querySelector("table");
//     let row = table.insertRow(0);
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     let cell3 = row.insertCell(2);
//     let cell4 = row.insertCell(3);
//     let cell5 = row.insertCell(4);
//     for(let nStudent = 0; nStudent)
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//     cell3.innerHTML = "NEW CELL3";
//     cell4.innerHTML = "NEW CELL4";
//     cell5.innerHTML = "NEW CELL5";
// }
myfunction()

const addDataInTable = function(){
    let students = [ 
        {idNumber:123, firstName:'John', lastname:'Bonza', age:30, email:'john@gmail.com'},
        {idNumber:123, firstName:'Davide', lastname:'Dicaprico', age:30, email:'davide@gmail.com'},
        {idNumber:123, firstName:'Bill', lastname:'Gate', age:30, email:'bill@gmail.com'}
    ]

    let table = document.queryselector('table')

    let newRow = document.createElement("tr")
    newRow.innerHTML = "<td>a</td> <td>b</td> <td>c</td> <td>d</td> <td>e</td>"
    table.appendChild(newRow)
//     let idNumber = document.createElement('td')
//     idNumber.innerText = students[i][idNumber]
//     row.append(idNumber) 

//     let  firstName = document.createElement('td')
//     firstName.innerText = students[i][firstName]
//     row.append(firstName) 

//     let lastName = document. createElement('td')
//     lastName.innerText = students[i][lastName]
//     row.append(lastName) 

//    let age = document.createElement('td')
//     age.innerText = students[i][age]
//     row.append(age) 

//     let email = document.createElement('td')
//     email.innerText = students[i][email]
//     row.append(email) 
}
addDataInTable()

