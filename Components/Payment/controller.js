
//var hotel = new Hotel();

function createListOfCardPayment(LIST_OF_ROOMS) {
    var guestsByCard = ``;
    var guestsByCash = ``;
    
    for(let i = 0 ; i < LIST_OF_ROOMS.length ; i++) {
        for(let j = 0 ; j < LIST_OF_ROOMS[i].numberOfBeds ; j++) {
            for(let k = 0 ; k < LIST_OF_ROOMS[i].listOfResidentsInBed[j].length ; k++){
            guestsByCard += `
       <div class="one-guest-in-payment">
         <div id="part-of-room-in-one-guest-in-payment">
            ${LIST_OF_ROOMS[i].typeOfRoom}-B${j + 1}
         </div>
         <div id="part-of-name-guest-in-one-guest-in-payment">
           ${LIST_OF_ROOMS[i].listOfResidentsInBed[j][k].firstName}
         </div>
         <div id="part-of-percentage-in-payment">
        
         </div>
         <div id="part-of-type-of-paid-in-one-guest-in-payment">
           <i class="fa-solid fa-money-bill"></i>
         </div>
       </div>
         `;
            }
        }
    }
    // for(let i = 0 ; i < 100 ; i++) {
    //     guestsByCard += `
    //     <div class="one-guest-in-payment">
                    
    //               </div>
    //     `;
    //     guestsByCash += `
    //     <div class="one-guest-in-payment">
                    
    //               </div>
    //     `;
    // }

    document.getElementById('part-of-show-information-of-guests-in-payment-card-paid') .innerHTML = guestsByCard;
    document.getElementById('part-of-show-information-of-guests-in-payment-cash-paid') .innerHTML = guestsByCash;
}

//createListOfCardPayment(hotel.listOfRooms);















//function of virtual emulater
function createRandomListOfCardPayment() {
    var LIST = [];
    var size = 5 + Math.floor(Math.random() * 50);
    for (let i = 0; i < size; i++) {
        var name = getRandomName();
        var type = getRandomType();
        var paid = getRandomPaid();

        //  PaymentProcess newPaymentProcess = new PaymentProcess();
    }
    return LIST;
}

//get random name
function getRandomName() {
    const names = [
        "James", "Mary", "John", "Patricia", "Robert", "Jennifer",
        "Michael", "Linda", "William", "Elizabeth", "David", "Barbara",
        "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah",
        "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa",
        "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra"
    ];

    return names[Math.floor(Math.random() % names.length)];
}

//get random type
function getRandomType() {
    const types = ["cash", "card"];
    return types[Math.floor(Math.random() % types.length)];
}

//get random paid
function getRandomPaid() {
    return Math.random() * 200;
}
