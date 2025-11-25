const historyData = [];
// reusable functions 

// get id function 
function getId(id) {
    return document.getElementById(id);

}

// get class function 
function getClass(className) {
    return document.getElementsByClassName(className);

}




// heart point increase event:
const hearts = getClass("heart-icon");
const heartsCount = getId("heart-count");

for (const heart of hearts) {
    heart.addEventListener("click", function () {

        let currentHeartsCount = parseInt(heartsCount.innerText);
        currentHeartsCount = currentHeartsCount + 1;
        heartsCount.innerText = currentHeartsCount;
    });
}




// All Call buttons function :

// emergency service -----------------------------------------
const emergencyService = getId("emergency-service").innerText;
const callingEmergency = getId("emergency-number").innerText;

const emergencyCallButton = getId("emergency-call-btn");

emergencyCallButton.addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞Calling to " + emergencyService + callingEmergency + ".....");


    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Emergency-Service",
        phone: "999",
        date: new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData);

})



// Police Helpline Number------------------------------------------
const policeHelpline = getId("police-helpline").innerText;
const policeNumber = getId("police-number").innerText;

const policeHelplineButton = getId("police-helpline-btn");

policeHelplineButton.addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞Calling to " + policeHelpline + policeNumber + ".....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Emergency-Service",
        phone: "999",
        date: new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData);

    
})







