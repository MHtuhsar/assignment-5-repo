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

    alert("📞 Calling to " + emergencyService + callingEmergency + " .....");


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

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);

})



// Police Helpline Number card------------------------------------------
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

    alert("📞 Calling to " + policeHelpline + policeNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Police Helpline",
        phone: "999",
        date: new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData);

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);


})



// Fire Service Number card --------------------------

const fireService = getId("fire-service").innerText;
const fireNumber = getId("fire-service-number").innerText;

const fireServicebutton = getId("fire-service-btn").
    addEventListener("click", function () {

        const currentCoins = getId("coin-count");
        let subtractCoins = parseInt(currentCoins.innerText);
        if (subtractCoins === 0) {
            alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
            return;
        }

        alert("📞 Calling to " + fireService + fireNumber + " .....");

        subtractCoins = subtractCoins - 20;
        currentCoins.innerText = subtractCoins;

        // data for call history 
        const data = {
            serviceName: "Fire Service",
            phone: "999",
            date: new Date().toLocaleTimeString()
        }

        // push data to the history 

        const history = getId("history");

        const div = document.createElement("div");
        div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

        history.appendChild(div);
    })



// Ambulance Service Number Card :---------------------------------

const ambulanceService = getId("ambulance-service").innerText;
const ambulanceNumber = getId("ambulance-number").innerText;

getId("ambulance-service-btn").addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞 Calling to " + ambulanceService + ambulanceNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;


    // data for call history 
    const data = {
        serviceName: "Ambulance Service",
        phone: "1994-999999",
        date: new Date().toLocaleTimeString()
    }

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);


})


// Women and Child Helpline Card 

const womenAndChildHelpline = getId("women-child-helpline").innerText;
const womenAndChildNumber = getId("women-child-helpline-number").innerText;

getId("women-child-helpline-btn").addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞 Calling to " + womenAndChildHelpline + womenAndChildNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Women and Child Service ",
        phone: "109",
        date: new Date().toLocaleTimeString()
    }

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);

})


// Anti-Corruption Helpline card :

const antiCorruptionService = getId("anti-corruption");

const antiCorruptionNumber = getId("anti-corruption-number");

getId("anti-corruption-btn").addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞 Calling to " + antiCorruptionService + antiCorruptionNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Anti Corruption Helpline",
        phone: "106",
        date: new Date().toLocaleTimeString()
    }

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);
})


// Electricity Helpline Number card :

const electricityHelpline = getId("electricity-helpline").innerText;
const electricityHelplineNumber = getId("electricity-helpline-number").innerText;

getId("electricity-helpline-btn").addEventListener("click", function () {
    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞 Calling to " + electricityHelpline + electricityHelplineNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Electricity Helpline",
        phone: "16216",
        date: new Date().toLocaleTimeString()
    }

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);
})


// BRAC Helpline Card :

const bracHelpline = getId("brac-helpline");
const bracHelplineNumber = getId("brac-helpline-number");

getId("brac-helpline-btn").addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞 Calling to " + bracHelpline + bracHelplineNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Brac Helpline",
        phone: "16445",
        date: new Date().toLocaleTimeString()
    }

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);
})


// Bangladesh Railway Helpline Card : 

const railwayHelpline = getId("railway-helpline").innerText;
const railwayHelplineNumber = getId("railway-helpline-number").innerText;

getId("railway-helpline-btn").addEventListener("click", function () {

    const currentCoins = getId("coin-count");
    let subtractCoins = parseInt(currentCoins.innerText);
    if (subtractCoins === 0) {
        alert("🚫You don't have enough coins. You need at least 20 coins to make a call.");
        return;
    }

    alert("📞 Calling to " + railwayHelpline + railwayHelplineNumber + " .....");

    subtractCoins = subtractCoins - 20;
    currentCoins.innerText = subtractCoins;

    // data for call history 
    const data = {
        serviceName: "Bangladesh Railway Helpline",
        phone: "163",
        date: new Date().toLocaleTimeString()
    }

    // push data to the history 

    const history = getId("history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="h-[83px] bg-slate-100 px-2 mb-5 flex justify-between items-center">
                            <div>
                                <h1 class="text-[16px] font-semibold">${data.serviceName}</h1>
                                <h1 class="text-[16px]">${data.phone}</h1>
                            </div>
                            <h1 class="text-[15px]">${data.date}</h1>
                        </div>`

    history.appendChild(div);


});





// history clear button to remove all histories:

getId("clear-btn").addEventListener("click", function () {


    const history = getId("history");
    history.innerHTML = ``;
});;














