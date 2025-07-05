const goalBtn = document.getElementById('goal-btn');
let goalInput = document.getElementById('goal-input');
let goalList = document.getElementById('goal-list');
let savings = JSON.parse(localStorage.getItem("savings"))||  [];
console.log(savings)





renderItems()




goalBtn.addEventListener('click', function(){

    if(goalInput.value.trim() === "") return;

   savings.push(goalInput.value.trim())

  
   

//    localStorage.setItem('savings', JSON.stringify(savings))

   localStorage.setItem('savings', JSON.stringify(savings))



   renderItems()
   
    goalInput.value = '';


})

function renderItems(){
    goalList.innerHTML = '';
    let li = '';

     for( i = 0; i < savings.length ; i++){

       li += `<li>${savings[i]}</li>`

     }
   goalList.innerHTML += li
}


