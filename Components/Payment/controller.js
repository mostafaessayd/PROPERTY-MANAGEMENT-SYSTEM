
//var hotel = new Hotel();
var SELECTED_DATE = -1;
var SELECTED_RESIDENT_IN_CARD_PAYMENT;
var SELECTED_RESIDENT_IN_CASH_PAYMENT;

function createListOfCardPayment(LIST_OF_ROOMS) {
    var guestsByCard = ``;
    var guestsByCash = ``;

    for (let i = 0; i < LIST_OF_ROOMS.length; i++) {
        for (let j = 0; j < LIST_OF_ROOMS[i].numberOfBeds; j++) {
            for (let k = 0; k < LIST_OF_ROOMS[i].listOfResidentsInBed[j].length; k++) {
                if(isDesiredResident(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k]) === false) {
                    continue;
                }
                
                var answer = getTypOffPaidOfResident(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k]);
                if(answer === "BOUTH" || answer === "Card"){
                guestsByCard += `
       <div class="one-guest-in-payment" onclick="getListOfCardPaid( ${JSON.stringify(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k]).replace(/"/g, '&quot;')})">
         <div id="part-of-room-in-one-guest-in-payment">
            ${LIST_OF_ROOMS[i].typeOfRoom}-B${j + 1}
         </div>
         <div id="part-of-name-guest-in-one-guest-in-payment">
           ${LIST_OF_ROOMS[i].listOfResidentsInBed[j][k].firstName}
         </div>
         <div id="part-of-percentage-in-payment">
         ${answer}
         </div>
         <div id="part-of-type-of-paid-in-one-guest-in-payment">
         ${getIcon(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k])}
         </div>
       </div>
         `;
            }

            if(answer === "BOUTH" || answer === "Cash") {
                guestsByCash += `
                <div class="one-guest-in-payment" onclick="getListOfCashPaid( ${JSON.stringify(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k]).replace(/"/g, '&quot;')})">
                  <div id="part-of-room-in-one-guest-in-payment">
                     ${LIST_OF_ROOMS[i].typeOfRoom}-B${j + 1}
                  </div>
                  <div id="part-of-name-guest-in-one-guest-in-payment">
                    ${LIST_OF_ROOMS[i].listOfResidentsInBed[j][k].firstName}
                  </div>
                  <div id="part-of-percentage-in-payment">
                    ${answer}
                  </div>
                  <div id="part-of-type-of-paid-in-one-guest-in-payment">
                    ${getIcon(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k])}
                  </div>
                </div>
                  `;
            }
        }
        }
    }

    document.getElementById('part-of-show-information-of-guests-in-payment-card-paid').innerHTML = guestsByCard;
    document.getElementById('part-of-show-information-of-guests-in-payment-cash-paid').innerHTML = guestsByCash;
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


//generate list of paid 
function getListOfCardPaid(resident) {
    SELECTED_RESIDENT_IN_CARD_PAYMENT = resident;
    var page = ``;
    for(let i = 0 ; i < resident.listOfPaid.length ; i++) {
        page += `
        <div class="one-payment">
                            <div class="part-of-date-in-one-payment">
                               ${resident.listOfPaid[i].dateOfPaid}
                            </div>
                            <div class="part-of-amount-paid-in-one-payment">
                             ${resident.listOfPaid[i].amountPaid}
                            </div>
                            <div class="part-of-type-paid-in-one-payment">
                                ${resident.listOfPaid[i].paymentType}
                            </div>
        </div>
        `;
    }

    document.getElementById('part-of-all-paid-of-guest-in-card-payment').innerHTML = page;
    document.getElementById('part-of-show-information-of-guests-in-payment-card-paid').style.display = 'none';
    document.getElementById('information-of-selected-guest-in-card-payment').style.display = 'block';
}

function backToShowListOfCardPaid() {
    document.getElementById('part-of-show-information-of-guests-in-payment-card-paid').style.display = 'block';
    document.getElementById('information-of-selected-guest-in-card-payment').style.display = 'none';
}

//get status of paid
function getTypOffPaidOfResident(resident) {
    var card = "NON";
    var cash = "NON";
    for (let i = 0; i < resident.listOfPaid.length; i++) {
        if (resident.listOfPaid[i].paymentType === "Card") {
            card = "OUI";
        }
        if (resident.listOfPaid[i].paymentType === "Cash") {
            cash = "OUI";
        }
    }

    if (card === "OUI" && cash === "OUI") {
        return "BOUTH";
    }

    if (card === "OUI") {
        return "Card";
    }
    
    if(cash === "OUI"){
        return "Cash";
    }

    return "NON";
} 

//sumbit date
function searchByDateInPayment() {
    var date = document.getElementById('select-date-in-payment').value;
    SELECTED_DATE = (date === '' ? -1 : date);
    if(SELECTED_DATE !== -1){
    SELECTED_DATE = formatdate2(SELECTED_DATE);
    }
    getPageOfPayment();
}

function backToShowListOfCashPaid() {
    document.getElementById('part-of-show-information-of-guests-in-payment-cash-paid').style.display = 'block';
    document.getElementById('information-of-selected-guest-in-cash-payment').style.display = 'none';
}

function getListOfCashPaid(resident) {
    SELECTED_RESIDENT_IN_CASH_PAYMENT = resident;
    var page = ``;
    for(let i = 0 ; i < resident.listOfPaid.length ; i++) {
        page += `
        <div class="one-payment">
                            <div class="part-of-date-in-one-payment">
                               ${resident.listOfPaid[i].dateOfPaid}
                            </div>
                            <div class="part-of-amount-paid-in-one-payment">
                             ${resident.listOfPaid[i].amountPaid}
                            </div>
                            <div class="part-of-type-paid-in-one-payment">
                                ${resident.listOfPaid[i].paymentType}
                            </div>
        </div>
        `;
    }

    document.getElementById('part-of-all-paid-of-guest-in-cash-payment').innerHTML = page;
    document.getElementById('part-of-show-information-of-guests-in-payment-cash-paid').style.display = 'none';
    document.getElementById('information-of-selected-guest-in-cash-payment').style.display = 'block';
}

function getIcon(resident) {
    var answer = getTypOffPaidOfResident(resident);
    if(answer === "Cash") {
        return `<i class="fa-solid fa-money-bill"></i>`;
    }

    if(answer === "Card") {
        return `<i class="fa-regular fa-credit-card"></i>`;
    }

    if(answer === "BOUTH") {
        return `
        <div class="container-of-two-type-in-payment">
          <div class="first-part-container-of-two-type-in-payment">
           <i class="fa-solid fa-money-bill"></i>
          </div>
          <div class="second-part-container-of-two-type-in-payment">
           <i class="fa-regular fa-credit-card"></i>
          </div>
        </div>
        `;
    }
}

///////////////
function isDesiredResident(resident) {

    if(SELECTED_DATE === -1){
        return true;
    }

    for (let i = 0; i < resident.listOfPaid.length; i++) {
        console.log(resident.listOfPaid[i].dateOfPaid + ' ' + SELECTED_DATE);
       if(resident.listOfPaid[i].dateOfPaid === SELECTED_DATE){
        return true;
       }
    }

    return false;
}

function formatdate2(inputDate) {
    // Split the inputDate by '-' to separate year, month, and day
    let parts = inputDate.split('-');
    
    // Extract year, month, and day from parts
    let year = parts[0];
    let month = parts[1];
    let day = parts[2];
    
    // Extract last two digits of the year (assuming it's 4 digits)
    let yearLastTwoDigits = year.slice(-2);
    
    // Format the date as dd/mm/yy
    let formattedDate = `${day}/${month}/${yearLastTwoDigits}`;
    
    return formattedDate;
}


//generate facture
function getBillOfCardPayment() {
    var sum = 0;
    for(let i = 0 ; i < SELECTED_RESIDENT_IN_CARD_PAYMENT.listOfPaid.length ; i++) {
        sum += SELECTED_RESIDENT_IN_CARD_PAYMENT.listOfPaid[i].amountPaid;
    }

    var page = `
    <div class="container6">
        <h2 class="h2-of-bill">Hotel Bill Summary</h2>
        <table class="table-of-bill">
            <thead>
                <tr>
                    <th class="th-of-bill">Description</th>
                    <th class="th-of-bill">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="td-of-bill">Guest Name</td>
                    <td class="td-of-bill"> ${SELECTED_RESIDENT_IN_CARD_PAYMENT.firstName}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Duration</td>
                    <td class="td-of-bill">${SELECTED_RESIDENT_IN_CARD_PAYMENT.durationOfReservation}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Start Date</td>
                    <td class="td-of-bill">${SELECTED_RESIDENT_IN_CARD_PAYMENT.startDate}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">End Date</td>
                    <td class="td-of-bill">${getEnddate(SELECTED_RESIDENT_IN_CARD_PAYMENT.startDate ,
                        SELECTED_RESIDENT_IN_CARD_PAYMENT.durationOfReservation
                    )}</td>
                </tr>
                <!--<tr>
                    <td class="td-of-bill">Room Number</td>
                    <td class="td-of-bill">opop</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Floor Number</td>
                    <td class="td-of-bill"></td>
                </tr>-->
                <tr class="total12">
                    <td class="td-of-bill">Total Due</td>
                    <td class="td-of-bill">${sum}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    document.getElementById('part-of-bill-of-selected-resident-in-card-payment').innerHTML = page;
    document.getElementById('bill-of-selected-resident-in-card-payment').style.display = 'block';
    document.getElementById('information-of-selected-guest-in-card-payment').style.display = 'none';
}

//back to show info
function backToShowInformationOfSelectedResident_Card() {
    document.getElementById('bill-of-selected-resident-in-card-payment').style.display = 'none';
    document.getElementById('information-of-selected-guest-in-card-payment').style.display = 'block';
}


//////////////////////////////////
function getBillOfCashPayment() {
    var sum = 0;
    for(let i = 0 ; i < SELECTED_RESIDENT_IN_CASH_PAYMENT.listOfPaid.length ; i++) {
        sum += SELECTED_RESIDENT_IN_CASH_PAYMENT.listOfPaid[i].amountPaid;
    }

    var page = `
    <div class="container6">
        <h2 class="h2-of-bill">Hotel Bill Summary</h2>
        <table class="table-of-bill">
            <thead>
                <tr>
                    <th class="th-of-bill">Description</th>
                    <th class="th-of-bill">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="td-of-bill">Guest Name</td>
                    <td class="td-of-bill"> ${SELECTED_RESIDENT_IN_CASH_PAYMENT.firstName}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Duration</td>
                    <td class="td-of-bill">${SELECTED_RESIDENT_IN_CASH_PAYMENT.durationOfReservation}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Start Date</td>
                    <td class="td-of-bill">${SELECTED_RESIDENT_IN_CASH_PAYMENT.startDate}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">End Date</td>
                    <td class="td-of-bill">${getEnddate(SELECTED_RESIDENT_IN_CASH_PAYMENT.startDate , 
                        SELECTED_RESIDENT_IN_CASH_PAYMENT.durationOfReservation
                    )}</td>
                </tr>
                <!--<tr>
                    <td class="td-of-bill">Room Number</td>
                    <td class="td-of-bill">opop</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Floor Number</td>
                    <td class="td-of-bill"></td>
                </tr>-->
                <tr class="total12">
                    <td class="td-of-bill">Total Due</td>
                    <td class="td-of-bill">${sum}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    document.getElementById('part-of-bill-of-selected-resident-in-cash-payment').innerHTML = page;
    document.getElementById('bill-of-selected-resident-in-cash-payment').style.display = 'block';
    document.getElementById('information-of-selected-guest-in-cash-payment').style.display = 'none';
}

//back to show info
function backToShowInformationOfSelectedResident_Cash() {
    document.getElementById('bill-of-selected-resident-in-cash-payment').style.display = 'none';
    document.getElementById('information-of-selected-guest-in-cash-payment').style.display = 'block';
}

///////////////////
function getEnddate(startDate, days) {
    // Split startDate by '/' to separate day, month, and year
    let parts = startDate.split('/');
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // month - 1 because months in JavaScript Date are 0-indexed
    let year = parseInt(parts[2], 10) + 2000; // Assuming year is in 'yy' format and we convert it to 'yyyy'

    // Create a new Date object using the parsed components
    let startDateObj = new Date(year, month, day);
    
    // Calculate the end date by adding days to startDateObj
    let endDateObj = new Date(startDateObj);
    endDateObj.setDate(startDateObj.getDate() + days);

    // Extract day, month, and year from endDateObj
    let endDay = endDateObj.getDate();
    let endMonth = endDateObj.getMonth() + 1; // +1 because months are 0-indexed
    let endYear = endDateObj.getFullYear() % 100; // Get last two digits of the year

    // Format the end date as dd/mm/yy
    let formattedEndDate = `${endDay.toString().padStart(2, '0')}/${endMonth.toString().padStart(2, '0')}/${endYear.toString().padStart(2, '0')}`;

    return formatDate1(endDateObj);
}


