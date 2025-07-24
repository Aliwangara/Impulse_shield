
const blockedSites = [
    'amazon.com',
    'kilimall.co.ke',
    'jiji.co.ke',
    'instagram.com',
    'facebook.com',
    'ebay.com',
    'jumia.co.ke',

]

const currentSite = window.location.hostname;

chrome.storage.sync.get({ blockedSites:blockedSites},(data)  => {

    const blockedSites = data.blockedSites;

    const isBlocked = blockedSites.some(site =>
        currentSite.includes(site)
    
    );

    if (isBlocked) {
    showImpulsePopup();

    
    Array.from(document.body.children).forEach((child) => {
      if (child.id !== 'impulse-popup') {
        child.style.filter = 'blur(5px)';
        child.style.pointerEvents = 'none';
      }
    });
  }
});

function showImpulsePopup(){
    let timer = 60;

    const div  = document.createElement("div");
     div.id="impulse-popup"

  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.right = '20px';
  div.style.zIndex = 99999;
  div.style.background = '#fff';
  div.style.border = '2px solid #000';
  div.style.padding = '16px';
  div.style.borderRadius = '8px';
  div.style.fontFamily = 'Arial, sans-serif';
  div.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

  div.innerHTML = `

     <strong>⚠️ Impulse Check!</strong><br>
    Are you sure you want to buy something right now?<br>

    <p>Redirecting in <span id="countdown">${timer}</span> seconds...</p>
    <button id="close-it">No, take me back</button>
    <button id="stay-here" style="margin-top:10px;">Stay here</button>
  `;

  document.body.appendChild(div)

  Array.from(document.body.children).forEach((child) => {
    if (child.id !== 'impulse-popup') {
      child.style.filter = 'blur(5px)';
      child.style.pointerEvents = 'none';
    }
  });

  const countDownEl = div.querySelector('#countdown')

  let interval = setInterval(()=>{
    timer --;

    countDownEl.textContent = timer;

    if(timer === 0){
        clearInterval(interval)
        window.location.href = "https://www.google.com/"; 
    }

  }, 1000)



  const closePage = document.querySelector('#close-it');

  closePage.onclick = () => {
    window.location.href = "https://www.google.com/";
    
  }

 const stayHere =  document.querySelector("#stay-here")

 stayHere.onclick = () => {

    clearInterval(interval)
   Array.from(document.body.children).forEach((child) => {
    if (child.id !== 'impulse-popup') {
      child.style.filter = '';
      child.style.pointerEvents = '';
    }
  });
    div.remove()

 }


 closePage.addEventListener('click', ()=>{
    chrome.storage.sync.get(['avoided_count'], (data) =>{
      const current = data.avoided_count || 0;
      chrome.storage.sync.set({avoided_count : current+1}, ()=>{
        window.location.href = "https://www.google.com/"
      })
    })
 })



}