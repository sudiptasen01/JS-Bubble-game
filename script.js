const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

let timer = 59;
let score = 0;
let hit = hitNumberGenerator();

function runtimer(){

    let tracker = setInterval(function () {
        // Displaying timer count in timer class:
        document.querySelector("#timercont").innerText = timer;

        // if statement to stop tracker as soon as timer hits -1
        if(timer == 0){
            clearInterval(tracker);
            console.log("Modal Triggered from Tracker");
            openModal();
            return;
        }

        timer--
    }, 1000)
}

// Function to create Bubble:
function bubbleManufacturing(){
    // Empty String:
    let clutter = "";

    for(let i=1; i<=160; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector("#mainsection").innerHTML = clutter;
}

// Adding Event listener to parent(bubbling):

document.querySelector("#mainsection").addEventListener('click', function(dets) {

    // Check Timer:
    if(timer > 0){
        // dets stands for details:
        if(Number(dets.target.innerText) == hit){
            scoreUpdater();
            hit = hitNumberGenerator();
            bubbleManufacturing();
        }

        else if(dets.target === document.querySelector("#mainsection")){
            alert('Click on a number');
        }

        else{
            hit = hitNumberGenerator();
            bubbleManufacturing();
        }
    }

    else{
        console.log("Modal Triggered from EventListener");
        openModal();
    }
})

function hitNumberGenerator(){
    let rand = Math.floor(Math.random()*10);
    document.querySelector("#hitcont").innerText = rand;

    return rand;
}

function scoreUpdater(){
    score += 10;
    document.querySelector("#scorecont").innerText = score;
}

const openModal = () => {
    console.log("Modal is Open");
    document.querySelector("#finalscore").innerText = score;
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closeModal = () => {
    console.log("Modal Closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

bubbleManufacturing();
runtimer();


