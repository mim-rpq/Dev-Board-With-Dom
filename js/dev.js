let myCreatDate = new Date()
const myDate = myCreatDate.toDateString()
const date = document.getElementById('date');
date.innerText = myDate


function devCount(){
    document.getElementById('complete').addEventListener('click', function(){
        alert('Board Updated Successfully')
        const assignedTask = getTextFieldValueById('assignedTask')
        const minusTask = assignedTask - 1
        const task = document.getElementById('assignedTask');
        task.innerText = minusTask


        const totalNavScore = getTextFieldValueById('nav-score');
        const addScore = totalNavScore + 1
        const navScore = document.getElementById('nav-score');
        navScore.innerHTML = addScore

        if(navScore > 28){
            alert("Congrates!! You have completed all the current task")
        }

        const historyTitle = document.getElementById('historyTitle')
        const historyTitleText = historyTitle.innerText
        const currentDate = new Date()
        const currentLocalDate = currentDate.toLocaleDateString()
        const currentLocalTime = currentDate.toLocaleTimeString()
        // const currentTime = currentDate.getTime()
        const div = document.createElement('div')
        div.innerHTML = `
      <div class = " border p-6 " >
      <p class =" text-xl font-semibold"> You have completed the task ${historyTitleText} </p>
        <p> Date:${currentLocalDate}  ${currentLocalTime}</p>
       </div>

    `
        document.getElementById('activity').appendChild(div)


        const button = document.getElementById('complete');
        button.style.opacity = "0.2";
        button.style.backgroundColor ="bg-gray-50"
        button.style.pointerEvents ="none"

    })


}


devCount()