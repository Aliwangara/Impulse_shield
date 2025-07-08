
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

chrome.storage.sync.get({ blockedSites : defaultBlockedSites},(data)  => {

    const blockedSites = data.blockedSites;

    const isBlocked = blockedSites.some((site) =>
        currentSite.includes(site)
    
    );

    if(isBlocked){
        showImpulsePopup();
    }


});

function showImpulsePopup(){

    const div  = document.createElement("div");

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
    <button id="stay-focused" style="margin-top:10px;">I'm Saving</button>
  `;

  document.body.appendChild(div)

 let stayFocused =  document.getElementById("stay-focused")

 stayFocused.onclick = () => {
    window.location.href = 'about:blank'
 }



}