function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

let myCreatDate = new Date()
const myDate = myCreatDate.toDateString()
const date = document.getElementById('date');
date.innerText = myDate


document.getElementById('history').addEventListener('click', function(){
    const history = document.getElementById('activity')
    history.innerText =" "
})

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return`rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = getRandomColor();
}