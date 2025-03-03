

let completeButtons = document.querySelectorAll('.completed')

for( let completeButton of completeButtons){
    completeButton.addEventListener('click', function(){
        alert('Board Updated Successfully')
        const assignedTask = getTextFieldValueById('assignedTask')
        const minusTask = assignedTask - 1
        const task = document.getElementById('assignedTask');
        task.innerText = minusTask

        if(minusTask <= 0){
            alert("Congrates!! You have completed all the current task")
        }

        const totalNavScore = getTextFieldValueById('nav-score');
        const addScore = totalNavScore + 1
        const navScore = document.getElementById('nav-score');
        navScore.innerHTML = addScore

        // let titles = document.querySelectorAll('.history-title')
        // for(const title  of  titles ){
        //     const  historyTitle = title.innerText
        //     const currentDate = new Date()
        //     const currentLocalDate = currentDate.toLocaleDateString()
        //     const currentLocalTime = currentDate.toLocaleTimeString()
        //     const div = document.createElement('div')
        //     div.innerHTML = `
        //   <div class = " border p-6 " >
        //   <p class =" text-xl font-semibold"> You have completed the task ${historyTitle} </p>
        //     <p> Date:${currentLocalDate}  ${currentLocalTime}</p>
        //    </div>
    
        // `
        // document.getElementById('activity').appendChild(div)
        // }
        const taskBox = this.closest(".task-box");
        const historyTitleText = taskBox.querySelector(".history-title").innerText
        // const historyTitle = document.querySelectorAll('.history-title')
        // const historyTitleText = historyTitle.innerText
        const currentDate = new Date()
        const currentLocalDate = currentDate.toLocaleDateString()
        const currentLocalTime = currentDate.toLocaleTimeString()
        const div = document.createElement('div')
        div.innerHTML = `
      <div class = " border p-6 " >
      <p class =" text-xl font-semibold"> You have completed the task ${historyTitleText}</p>
        <p> Date:${currentLocalDate}  ${currentLocalTime}</p>
       </div>

    `
        document.getElementById('activity').appendChild(div)

        completeButton.style.opacity ="0.2"
        completeButton.style.backgroundColor ="bg-gray-50"
        completeButton.style.pointerEvents ="none"


      

    })
}






// function devCount(){
//     document.getElementById('complete').addEventListener('click', function(){
//         alert('Board Updated Successfully')
//         const assignedTask = getTextFieldValueById('assignedTask')
//         const minusTask = assignedTask - 1
//         const task = document.getElementById('assignedTask');
//         task.innerText = minusTask


//         const totalNavScore = getTextFieldValueById('nav-score');
//         const addScore = totalNavScore + 1
//         const navScore = document.getElementById('nav-score');
//         navScore.innerHTML = addScore

        
//         const historyTitle = document.getElementById('historyTitle')
//         const historyTitleText = historyTitle.innerText
//         const currentDate = new Date()
//         const currentLocalDate = currentDate.toLocaleDateString()
//         const currentLocalTime = currentDate.toLocaleTimeString()
//         const div = document.createElement('div')
//         div.innerHTML = `
//       <div class = " border p-6 " >
//       <p class =" text-xl font-semibold"> You have completed the task ${historyTitleText} </p>
//         <p> Date:${currentLocalDate}  ${currentLocalTime}</p>
//        </div>

//     `
//         document.getElementById('activity').appendChild(div)


//         const button = document.getElementById('complete');
//         button.style.opacity = "0.2";
//         button.style.backgroundColor ="bg-gray-50"
//         button.style.pointerEvents ="none"

//         if(assignedTask < 0){
//             alert("Congrates!! You have completed all the current task")
//         }


//     })


// }


// devCount()