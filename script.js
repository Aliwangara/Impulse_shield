const goalBtn = document.getElementById('goal-btn');
let goalInput = document.getElementById('goal-input');
let goalList = document.getElementById('goal-list');
let goalForm = document.getElementById('goal-form');
const goalInputEl = document.getElementById('goal-input');
const goalCost = document.getElementById('goal-cost');
const goalDeadline = document.getElementById('goal-deadline')
const goalEmoji = document.getElementById('goal-emoji');
const ImpulseList = document.getElementById('Impulse-list');
const goalsCompleted = document.getElementById('goals-completed');

let savings = JSON.parse(localStorage.getItem("savings"))||  [];
let completedGoals =JSON.parse(localStorage.getItem('completedGoals')) || [];
let emojis = JSON.parse(localStorage.getItem('emojis')) || [];
let target = [];

console.log(savings, emojis, target)


 



renderItems()




goalBtn.addEventListener('click', function(){

    if(goalInput.value.trim() === "") return;

    const goal  = {
        name : goalInput.value.trim(),
        cost : Number(goalCost.value),
        deadline: goalDeadline.value,
        emoji : goalEmoji.value || "🎯",
        completed : false
    }

   savings.push(goal)

   

  
   

//    localStorage.setItem('savings', JSON.stringify(savings))

   localStorage.setItem('savings', JSON.stringify(savings))



   renderItems()
   
    goalInput.value = '';
    goalCost.value = '';
    goalDeadline.value = '';
    goalEmoji.value = '';
   

})

function renderItems(){

    goalList.innerHTML = '';
     

    if(savings.length === 0){
        goalList.innerHTML = `there are NO items in the goal list`
        return;
    }

    savings.forEach((goal,index) => {
       let li = document.createElement("li")
       li.className = 'goal-card';

          li.innerHTML= `
                <h4>${goal.emoji}  ${goal.name}</h4>
                <p> target: $${goal.cost}</p>
                <p> 📅 Deadline: ${goal.deadline}</p>

                <div class= "goal-actions"> 

                    <button class="complete-btn" >Mark Complete</button>
                    <button class="remove-btn">Remove</button>
                
                
                </div>


                
                 
            </li>`


            li.querySelector('.complete-btn').onclick = () =>{

            saving.splice(index, 1)[0]
            completedGoal.complete = true
            completedGoals.push(completedGoal)

            localStorage.setItem('savings', JSON.stringify(savings))
            localStorage.setItem('completedGoals', JSON.stringify(completedGoals))

            alert("🎉 Goal completed!")

            renderItems()


        }

        li.querySelector('.remove-btn').onclick =()=>{


            savings.splice(index, 1)

            renderItems()

        }

        goalList.appendChild(li);


        
    });

    


    }






    
    










