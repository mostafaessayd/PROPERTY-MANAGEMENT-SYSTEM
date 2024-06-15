const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Swaziland",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Korea", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

var idOfButtons;
var idOfContainerOfButtons;

function rempleID() {

    idOfButtons = [];

    idOfButtons.push('in-logo');
    // idOfButtons.push('first-hr');style="background-color: rgb(32, 162, 160);">
    idOfButtons.push('rooms');
    idOfButtons.push('Booking');
    idOfButtons.push('clock');
    idOfButtons.push('settings');
    // idOfButtons.push('calendar');
    if (currentUser === 'admin') {
        idOfButtons.push('historique');
    }
    idOfButtons.push('payment');
    // idOfButtons.push('seconde-hr');
    idOfButtons.push('log-out');

    idOfContainerOfButtons = [];

    idOfContainerOfButtons.push('first-item');
    // idOfContainerOfButtons.push('container-of-part-in-options-01');
    idOfContainerOfButtons.push('container-of-part-in-options-02');
    idOfContainerOfButtons.push('container-of-part-in-options-Booking');
    idOfContainerOfButtons.push('container-of-part-in-options-03');
    idOfContainerOfButtons.push('container-of-part-in-options-04');
    // idOfContainerOfButtons.push('container-of-part-in-options-05');
    if (currentUser === 'admin') {
        idOfContainerOfButtons.push('container-of-part-in-options-06');
    }

    idOfContainerOfButtons.push('container-of-part-in-options-07');
    //  idOfContainerOfButtons.push('container-of-part-in-options-08');
    idOfContainerOfButtons.push('container-of-part-in-options-09');

}
//view availabel rooms


function generateTableOfRooms(listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn) {
    names = [];
    var table = '<table class="table-of-rooms">';
    let i = 0;
    while (i < listOfRooms.length) {
        table += '<tr>';
        let j = i;
        let k = 0;
        while (k < 9 && j < listOfRooms.length) {
            if (isDesiredRoom(listOfRooms[j], valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn)) {
                table += '<td>' + createCardOfRoom(listOfRooms[j]) + '</td>';
                names.push(listOfRooms[j].resident);
                k++;
            }
            j++;
        }
        table += '</tr>';
        i = j;
    }

    table += '</table>';

    document.getElementById('view-rooms').innerHTML = '';
    document.getElementById('view-rooms').innerHTML = table;
}

//a function to determine whether the room is user-defined or not
function isDesiredRoom(room, reserved, numberOdBeds, floorNumber, roomNumber) {
    const checkEquality = (firstValue, secondValue) => {
        return secondValue === -1 || firstValue === secondValue;
    }

    var ans = true;
    console.log(room.NumberOfFemaleBeds + ' ' + room.NumberOfMaleBeds + ' ' + room.numberOfBeds);
    ans &= (room.NumberOfFemaleBeds + room.NumberOfMaleBeds === room.numberOfBeds);
    if (valueOfMixedStatus !== -1) {
        if (valueOfMixedStatus === 'mixed') {
            if (room.statusOfMixed) {
                ans = true;
            } else {
                ans = false;
            }
        } else {
            if (room.statusOfMixed) {
                ans = false;
            } else {
                ans = true;
            }
        }
    }

    if (valueOfTypeRoomDropDown !== -1) {
        for (let i = 0; i < arrayOfRoomTypes.length; i++) {
            if (arrayOfRoomTypes[i].type === valueOfTypeRoomDropDown) {
                if (room.statusOfMixed !== arrayOfRoomTypes[i].isMixed) {
                    ans = false;
                } else {
                    if (arrayOfRoomTypes[i].isMixed) {
                        ans &= room.numberOfBeds === arrayOfRoomTypes[i].numberOfAllBeds;
                        ans &= arrayOfRoomTypes[i].maleBeds * arrayOfRoomTypes[i].femaleBeds !== 0;
                    } else {
                        ans &= arrayOfRoomTypes[i].femaleBeds === room.NumberOfFemaleBeds;
                        ans &= arrayOfRoomTypes[i].maleBeds === room.NumberOfMaleBeds;
                        ans &= arrayOfRoomTypes[i].numberOfAllBeds === room.numberOfBeds;
                        // ans &= room.NumberOfFemaleBeds + room.NumberOfMaleBeds === room.numberOfBeds;
                    }
                }
                break;
            }
        }
    }

    ans &= checkEquality(room.numberOfBeds, numberOdBeds);
    ans &= checkEquality(room.isReserved, reserved);
    ans &= checkEquality(room.floorNumber, floorNumber);
    ans &= checkEquality(room.roomNumber, roomNumber);
    return ans;
}

//function to create needed dropdowns
function createCardOfRoom(room) {
    return `
    
        <div class="box" onclick="selectRoom(${JSON.stringify(room).replace(/"/g, '&quot;')})">
            <p class="status" style="background-color:${(room.isReserved === 'Unbooked' ? 'rgb(251,225,117)' : 'rgb(216,243,249)')}">${(room.isReserved === 'Unbooked' ? 'Unbooked' : 'Reserved')}</p>
            <p class="pr">floor ${room.floorNumber}</p>
            <p class="pr">room ${room.roomNumber}</p>
            <button onclick="selectRoom(${JSON.stringify(room).replace(/"/g, '&quot;')})" id="button-of-card">${(room.isReserved === 'Unbooked' ? 'Booked' : 'Visit')}</button>  
        </div>`;
}

//create needed dropdowns
function createNeededDropDowns(numberOfFloors, numberOfRooms, maxNumberOfBeds, minNumberOfBeds) {
    var divOfFloors = '<option value="0">All</option>';
    for (let i = 1; i <= numberOfFloors; i++) {
        divOfFloors += `<option value="${i}">${i}</option>`;
    }

    var divOfRooms = '<option value="0">All</option>';
    for (let i = 1; i <= numberOfRooms; i++) {
        divOfRooms += `<option value="${i}">${i}</option>`;
    }

    var divOfBads = '<option value="0">All</option>';
    for (let i = minNumberOfBeds; i <= maxNumberOfBeds; i++) {
        divOfBads += `<option value="${i}">${i}</option>`;
    }

    var divOfTypes = ``;
    for (let i = 0; i < arrayOfRoomTypes.length; i++) {
        divOfTypes += `<option value="${i}">${arrayOfRoomTypes[i].type}</option>`
    }
    var UI = `
        <div class="dropdown-container">
            <div class="dropdown-wrapper2" display: flex;>
             <button class="text-of-select">floor</button>
                <select class="dropdown" id="dropdown1">
                   ${divOfFloors}
                </select>
            </div>
            <div class="dropdown-wrapper2" display: flex;>
            <button class="text-of-select">Room</button>
                <select class="dropdown" id="dropdown2">
                   ${divOfRooms}
                </select>
            </div>
            <div class="dropdown-wrapper2" display: flex;>
            <button class="text-of-select">Beds</button>
                <select class="dropdown" id="dropdown3">
                    ${divOfBads}
                </select>
            </div>
            <div class="dropdown-wrapper2" display: flex;>
            <button class="text-of-select">Status</button>
                <select class="dropdown" id="dropdown4">
                    <option value="0">All</option>
                    <option value="1">Reserved</option>
                    <option value="2">Unbooked</option>
                </select>
            </div>
            <div class="dropdown-wrapper2" display: flex;>
             <button class="text-of-select">mixed:</button>
                <select class="dropdown" id="dropdown5">
                <option value="0">All</option>
                <option value="1">mixed</option>
                <option value="2">un mixed</option>
                </select>
            </div>
            <div class="dropdown-wrapper2" display: flex;>
             <button class="text-of-select">types:</button>
                <select class="dropdown" id="dropdown6">
                   ${divOfTypes}
                </select>
            </div>
            
        </div>
  `;

    document.getElementById('main-selection-bar').innerHTML = UI;

    const initilaizeDropdawn = (ID) => {
        document.getElementById(ID).addEventListener('change', function () {
            const getValueOfSelectionDropdown = (value, flag) => {
                if (flag) {
                    return (value === "All" ? -1 : parseInt(value));
                } else {
                    return (value === "All" ? -1 : value);
                }
            }
            const selectedOption = this.options[this.selectedIndex].text;
            switch (this.id) {
                case 'dropdown1': valueOfFloorNumberDropdawn = getValueOfSelectionDropdown(selectedOption, true); break;
                case 'dropdown2': valueOfRoomNumberDropdawn = getValueOfSelectionDropdown(selectedOption, true); break;
                case 'dropdown3': valueOfBedsNumberDropdawn = getValueOfSelectionDropdown(selectedOption, true); break;
                case 'dropdown4': valueOfReservedDropdawn = getValueOfSelectionDropdown(selectedOption, false); break;
                case 'dropdown5': valueOfMixedStatus = getValueOfSelectionDropdown(selectedOption, false); break;
                case 'dropdown6': valueOfTypeRoomDropDown = getValueOfSelectionDropdown(selectedOption, false); break;
            }
            generateTableOfRooms(hotel.listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn);
        });
    }

    initilaizeDropdawn('dropdown4');
    initilaizeDropdawn('dropdown3');
    initilaizeDropdawn('dropdown2');
    initilaizeDropdawn('dropdown1');
    initilaizeDropdawn('dropdown5');
    initilaizeDropdawn('dropdown6');
}

//create bar of settings of selected room
function createBarOfOptionsOfselectedRoom() {
    var barOfReservedRoom = `
    <div class="buuton-of-room-selection-bar">
    <button class="barOfReservedRoom" onclick="backToHome()"><i class="fa-solid fa-left-long"></i></button>
     <button class="barOfReservedRoom" onclick="showInformationOfSelectedRoom()"><i class="fa-solid fa-circle-info"></i></button>
     <button class="barOfReservedRoom" onclick="getInformationOfPayment()"><i class="fa-solid fa-credit-card"></i></button>
     <button class="barOfReservedRoom" onclick="showInformationOfResidentInSelectedRoom()"><i class="fa-solid fa-person"></i></button>
     <button class="barOfReservedRoom" onclick="generatePageOfBeds()"><i class="fa-solid fa-screwdriver-wrench"></i></button>
     </div>
    `;
    var barOfUnbookedRoom = `
    <div class="buuton-of-room-selection-bar">
    <button class="barOfUnbookedRoom" onclick="backToHome()"><i class="fa-solid fa-left-long"></i></button>
    <button class="barOfUnbookedRoom" onclick="reserveSelectedRoom()"><i class="fa-solid fa-user-plus"></i></button>
     <button class="barOfUnbookedRoom" onclick="showInformationOfSelectedRoom()"><i class="fa-solid fa-circle-info"></i></button>
    </div>
    `;
    document.getElementById('room-selection-bar').innerHTML = barOfReservedRoom;
    document.getElementById('unbookedRoom-selection-bar').innerHTML = barOfUnbookedRoom;
}

//get status of key
function getStatusOfKey(room) {
    return (room.keyStatus === true ? "Active" : "Stopped");
}

////////////////////////////
// script.js
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var bookingDate = document.getElementById("bookingDate").value;
    var bookingDuration = document.getElementById("bookingDuration").value;
    var displayInfoBtn = document.getElementById("displayInfoBtn");

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    if (name && isValidEmail(email) && bookingDate && bookingDuration) {
        displayInfoBtn.disabled = false;
    } else {
        displayInfoBtn.disabled = true;
    }
}

function displayInfo() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var bookingDate = document.getElementById("bookingDate").value;
    var bookingDuration = document.getElementById("bookingDuration").value;

    selectedRoom.setResident(name);
    selectedRoom.setResidentEmail(email);
    selectedRoom.setDurationOfReservation(bookingDuration);
    selectedRoom.setStartDate(bookingDate);
    selectedRoom.setIsReserved('Reserved');
    selectedRoom.setDurationOfReservation(bookingDuration);

    hotel.addEventInArchives(currentUser, 'iuiyyu');

    generateTableOfRooms(hotel.listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn);
}

/////////////      genearte page of settings      //////////////
function generatePageOfSettings() {
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-settings11';
    document.getElementById(currentPage).style.display = 'flex';
}

//go to page of rooms
function goToPageOfRooms() {
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentIdInDisplayInformation = "view-rooms";
    currentIdInModifysettings = "main-selection-bar";
    currentPage = 'container';
    document.getElementById(currentPage).style.display = 'block';
    document.getElementById(currentIdInDisplayInformation).style.display = 'block';
    document.getElementById(currentIdInModifysettings).style.display = 'block';
}

//get page of settings price
function getPageOfPriceSettings() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-price-settings';
    document.getElementById(currentPage).style.display = 'flex';
}

// get page of price rooms settings
function getPageOfPriceRoomsSettings() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-price-of-rooms-settings';
    document.getElementById(currentPage).style.display = 'block';
}

// get needed dropdowns in page setting price
function createSettingPricePage(numberOfFloors, numberOfRooms) {
    var divOfFloors = '<option value="0">All</option>';
    for (let i = 1; i <= numberOfFloors; i++) {
        divOfFloors += `<option value="${i}">${i}</option>`;
    }

    var divOfRooms = '<option value="0">All</option>';
    for (let i = 1; i <= numberOfRooms; i++) {
        divOfRooms += `<option value="${i}">${i}</option>`;
    }

    var UI = `
    <div class="price-settings-container">
    <h2>Room Price Settings</h2>
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
        <div class="price-dropdown-wrapper">
            <button class="action-button" id="button1">Floor</button>
            <select class="price-dropdown" id="dropdown-of-floor">
                ${divOfFloors}
            </select>
            <button class="action-button" id="button2">Room</button>
            <select class="price-dropdown" id="dropdown-of-room">
                ${divOfRooms}
            </select>
        </div>
    </div>
    <div>
        <label for="new-price-from-settings">New Price:</label>
        <input type="number" id="new-price-from-settings" step="1">
    </div>
    <div class="button-container">
        <button onclick="setPriceOfRooms()" class="action-button">Save</button>
        <button onclick="getPageOfPriceSettings()" class="action-button">Ignore</button>
    </div>
</div>


    `;

    document.getElementById('page-of-price-of-rooms-settings').innerHTML = UI;

    function initializeDropdown(ID) {
        document.getElementById(ID).addEventListener('change', function () {
            const getValueOfSelectionDropdown = (value) => parseInt(value) || -1;
            const selectedValue = this.value;
            switch (this.id) {
                case 'dropdown-of-floor': valueOfFloorNumberDropdownInSettings = getValueOfSelectionDropdown(selectedValue); break;
                case 'dropdown-of-room': valueOfRoomNumberDropdownInSettings = getValueOfSelectionDropdown(selectedValue); break;
            }
        });
    }

    initializeDropdown('dropdown-of-floor');
    initializeDropdown('dropdown-of-room');
}


//function to set price of selected rooms from settings
function setPriceOfRooms() {



    deleteAccount("wassim");
    //modifyAccount("khayro","33","kkkk");




    const isDesiredRoomInSettings = (room, floorNumber, roomNumber) => {

        const checkEquality = (firstValue, secondValue) => {
            return secondValue === -1 || firstValue === secondValue;

        }

        var ans = true;
        ans &= checkEquality(room.floorNumber, floorNumber);
        ans &= checkEquality(room.roomNumber, roomNumber);

        return ans;
    }

    for (let i = 0; i < hotel.listOfRooms.length; i++) {
        if (isDesiredRoomInSettings(hotel.listOfRooms[i], valueOfFloorNumberDropdawnInSettings, valueOfRoomNumberDropdawnInSettings)) {
            hotel.listOfRooms[i].setPrice(document.getElementById('new-price-from-settings').value);
        }
    }

    hotel.addEventInArchives(currentUser, 'set price', new Date());
    sendData(currentUser, 'set price');
    // generatePageOfArchives();
    generateTableOfRooms(hotel.listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn);

}





// generatePageOfArchives();





//convert string to pdf
function textIntoPDF(text) {
    function convertTextToPdf(text) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text(text, 10, 10);

        doc.save('example.pdf');
    }
}

//send email
function sendEmail(file, dest) {

}

//generate page of archive
function generatePageOfArchives() {
    var page = ``;
    for (let i = 0; i < hotel.archives.length; i++) {
        page += `<div class = "event-in-archive"><h1>${hotel.archives[i].employe}</h1><h1>${hotel.archives[i].event}</h1></div>`;
    }

    document.getElementById('page-of-archives').innerHTML = page;
}

//show page of archives
function getPageOfArchives() {
    generatePageOfArchives();
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-archives';
    document.getElementById(currentPage).style.display = 'block';
}

//generate page of accounte
function generatePageOfAccount() {
    var page = '<table>';
    page += '<tr><button class="go-back-button" onclick="backToFirstPage()">⇐</button><tr>'
    for (let i = 0; i < accounts.length; i += 4) {
        page += '<tr>';
        let k = 1;
        for (let j = i; j < i + 4 && j < accounts.length; j++) {
            let valueOfMargin = (k === 1 ? 0 : 47);
            page += '<td>'
            page += `<div class="card-acc" style="margin-left: ${valueOfMargin}px;">
                      <div class="card-of-acc"style="background-image: url('f${j + 1}.png');"></div>
                      <p>${accounts[j].name}</p>
                      <div class="submit" onclick="showPopup(${JSON.stringify(accounts[j]).replace(/"/g, '&quot;')})"><button>Enter</button></div>
                    </div>`;
            page += '</td>';
            k++;
        }
        page += '<tr>';
    }

    page += '</table>';

    document.getElementById('account-of-employes').innerHTML = page;
}

//go back to first page
function backToFirstPage() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'login-page';
    document.getElementById(currentPage).style.display = 'flex';
}

//log out
function logOut() {
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById('menu-of-options').style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    document.getElementById('pms-app').style.display = 'none';
    currentPage = 'login-page';
    document.getElementById(currentPage).style.display = 'flex';
    hotel = new Hotel();
    currentPage = 'login-page';
    createBarOfOptionsOfselectedRoom();
    generateTableOfRooms(hotel.listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn);
    createNeededDropDowns(numberOfFloors, numberOfRooms, maxNumberOfBeds, minNumberOfBeds);
    createSettingPricePage(numberOfFloors, numberOfRooms);
    generatePageOfArchives();
    generatePageOfAccount();
    generateClock();
    generateFirstPage();
    generatePageOfOthersPrice();
}
//////////////////////////////////
function showPopup(account) {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    overlay.style.display = 'block';
    popup.style.display = 'block';
    window.currentAccount = account;
}
function closePopup() {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.getElementById("result").textContent = '';
}

function checkPassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    const resultDiv = document.getElementById("result");
    if (inputPassword === window.currentAccount.password) {
        currentUser = window.currentAccount.name;
        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
        document.getElementById('popup').style.display = 'none';
        document.getElementById('accounts').style.display = 'none';
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        showCurrentUser();
        generateMenuOfButtons();
        rempleID();
        goToPMS();
        if (inputPassword === admin.password) {
            statusOfLogIn = 'admin';
        } else {
            statusOfLogIn = 'employe';
        }
    } else {
        resultDiv.textContent = "wrong password";
    }
}
/////////////////////////////////

//show page of acc
function getPageOfAccount() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'account-of-employes';
    document.getElementById(currentPage).style.display = 'block';
}

//show current user
function showCurrentUser() {
    var ui = `
        <div class="image-of-current-user">
            <img src="f1.png">
        </div>
        <h1 style="width: 70%;">name</h1>
  `;

    //   document.getElementById('current-user').innerHTML = ui;
}

//generate page of quantite setting
function getPageOfQuantiteSettings() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-quantite-settings';
    document.getElementById(currentPage).style.display = 'flex';
}

function sortListByName(targetResidents, order) {
    targetResidents.sort((a, b) => {
        if (order === 'A') {
            return a.resident.localeCompare(b.resident);
        } else if (order === 'D') {
            return b.resident.localeCompare(a.resident);
        }
    });
}

function showSuggestions(order = 'A') { // Default order to ascending
    var input, filter, ul, li, i;
    input = document.getElementById('searchName');
    filter = input.value.toUpperCase();
    ul = document.getElementById('suggestions');
    ul.innerHTML = '';

    if (filter) {
        var filteredNames = listOfNames.filter(name => name.toUpperCase().includes(filter))
            .map(name => ({ resident: name })); // Create objects with a 'resident' property
        sortListByName(filteredNames, order);

        filteredNames.forEach(item => {
            var name = item.resident;
            var isDuplicate = Array.from(ul.children).some(child => child.textContent === name);
            if (!isDuplicate) {
                li = document.createElement('li');
                li.textContent = name;
                li.addEventListener('click', function () {
                    input.value = this.textContent;
                    ul.innerHTML = '';
                });
                ul.appendChild(li);
            }
        });
    }
}





//generate clock
function generateClock() {
    var targetResidents = [];
    var searchName = document.getElementById('searchName').value.trim().toUpperCase(); // Assuming 'searchName' is the ID of your search input element

    for (let i = 0; i < hotel.listOfRooms.length; i++) {
        if (isDesiredResident(hotel.listOfRooms[i]) && hotel.listOfRooms[i].resident.toUpperCase().includes(searchName)) {
            targetResidents.push(hotel.listOfRooms[i]);
        }
    }
    if (typeOfSort !== -1) {
        switch (typeOfSort) {
            case 'sort-by-descending-order-start-date':
                sortListByStartDate(targetResidents, 'D');
                break;
            case 'sort-by-ascending-order-start-date':
                sortListByStartDate(targetResidents, 'A');
                break;
            case 'sort-by-ascending-order-booking-period':
                sortListByDurationOfReservation(targetResidents, 'A');
                break;
            case 'sort-by-descending-order-booking-period':
                sortListByDurationOfReservation(targetResidents, 'D');
                break;

        }
    }

    sortListByName(targetResidents, 'A'); // Change 'A' to 'D' for descending order

    var page = `
    <div class="current-resident-container">
    <div class="current-resident">
    <div class="part-of-room" style=" background-color: rgb(32, 162, 160);"><h2 style="color: white;">First Name</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Last Name</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Floor</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Room</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Days Left</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Gender</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Country</h2></div>
    </div>
    <div class="scrollable-content">
`;

    for (let i = 0; i < targetResidents.length; i++) {
        if (targetResidents[i].isReserved === 'Reserved') {
         for (let k = 0; k < targetResidents[i].numberOfBeds ; k++) {
            if(targetResidents[i].statusOfBeds[k] === false )
                continue;
            
            page += `
            <div class="current-resident" onclick="getInfoOfSelectedResident(${JSON.stringify(targetResidents[i].id).replace(/"/g, '&quot;')})">
               <div class="part-of-room">
                 <h2>
                 ${targetResidents[i].residentOfBeds[k].firstName}
                 </h2>
               </div>
               <div class="part-of-room">
                 <h2>
                 ${targetResidents[i].residentOfBeds[k].lastName}
                 </h2>
               </div>
               <div class="part-of-room">
                   <h2>
                     ${targetResidents[i].floorNumber} 
                   </h2>
               </div>
               <div class="part-of-room">
                   <h2>
                   ${targetResidents[i].roomNumber}
                   </h2>
               </div>
               <div class="part-of-contdown">
                  <h2>
                   ${1+Math.floor(Math.random()*100)}
                  </h2>
               </div>
               <div class="part-of-gender-in-clock"style="background-color: ${targetResidents[i].genderOfResident === 'Male' ? 'blue' : 'pink'};">
                  <h2>
                   ${targetResidents[i].genderOfResident}
                  </h2>
               </div>
               <div class="part-of-country-in-clock">
                  <h2>
                   ${targetResidents[i].residentOfBeds[k].country}
                  </h2>
               </div>
            </div>`;
        }

    }
    }

    document.getElementById('show-current-residents').innerHTML = page;

}

//get info of selected resident
function getInfoOfSelectedResident(id) {
    for (let i = 0; i < hotel.listOfRooms.length; i++) {
        if (hotel.listOfRooms[i].id === id) {
            break;
        }
    }
}
//get page of clock
function getPageOfClock() {
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-clock';
    document.getElementById(currentPage).style.display = 'block';
}

//find
function searchForID(id) {
    for (let i = 0; i < idOfButtons.length; i++) {
        if (idOfButtons[i] === id) {
            return true;
        }
    }
    return false;
}

//initilaize some style
function someStyle(buttonID) {

    for (let i = 0; i < idOfButtons.length; i++) {

        if (searchForID(idOfButtons[i]) === false) {
            continue;
        }

        if (idOfButtons[i] === 'in-logo') {
            document.getElementById(idOfContainerOfButtons[i]).style.borderBottomRightRadius = '0px';
            document.getElementById(idOfContainerOfButtons[i]).style.borderTopRightRadius = '0px';
            document.getElementById(idOfContainerOfButtons[i]).style.backgroundColor = 'rgb(32, 162, 160)';
            document.getElementById('in-logo').style.borderBottomRightRadius = '50px';
            document.getElementById('in-logo').style.borderTopRightRadius = '50px';
            continue;
        }

        document.getElementById(idOfButtons[i]).style.borderBottomRightRadius = '0px';
        document.getElementById(idOfButtons[i]).style.borderTopRightRadius = '0px';
        document.getElementById(idOfButtons[i]).style.backgroundColor = 'transparent';
        document.getElementById(idOfContainerOfButtons[i]).style.borderBottomRightRadius = '0px';
        document.getElementById(idOfContainerOfButtons[i]).style.borderTopRightRadius = '0px';
        document.getElementById(idOfContainerOfButtons[i]).style.backgroundColor = 'rgb(32, 162, 160)';
    }

    document.getElementById(buttonID).style.backgroundColor = 'white';

    for (let i = 0; i < idOfButtons.length; i++) {
        if (buttonID === idOfButtons[i]) {

            if (i === 0) {
                document.getElementById(idOfButtons[i + 1]).style.borderTopRightRadius = '20px';
                document.getElementById(idOfContainerOfButtons[i + 1]).style.borderTopRightRadius = '20px';
            } else {
                if (i === idOfButtons.length - 1) {
                    document.getElementById(idOfButtons[i - 1]).style.borderBottomRightRadius = '20px';
                    document.getElementById(idOfContainerOfButtons[i - 1]).style.borderBottomRightRadius = '20px';
                } else {
                    if (idOfButtons[i - 1] === 'in-logo') {
                        document.getElementById(idOfButtons[i - 1]).style.borderBottomRightRadius = '50px';
                    } else {
                        document.getElementById(idOfButtons[i - 1]).style.borderBottomRightRadius = '40px';
                    }
                    document.getElementById(idOfButtons[i + 1]).style.borderTopRightRadius = '40px';
                    document.getElementById(idOfContainerOfButtons[i - 1]).style.borderBottomRightRadius = '40px';
                    document.getElementById(idOfContainerOfButtons[i + 1]).style.borderTopRightRadius = '40px';
                }
            }

            break;
        }
    }

}

//generate menu of buttons
function generateMenuOfButtons() {
    var menu = `
    <div class = "container-of-part-in-options-logo" id="first-item"><div class="logo" id="in-logo"></div></div>
    <!--<div class = "container-of-part-in-options" id="container-of-part-in-options-01"><div class="hr-of-menu" id="first-hr"></div></div>-->
        <div class = "container-of-part-in-options" id="container-of-part-in-options-02"><div class="menu-item" id="rooms" onclick="goToPageOfRooms()"><div class="icon-of-button"><i class="fa-solid fa-door-open"></i></div><div class="text-of-button">Rooms</div></div></div>
        <div class = "container-of-part-in-options" id="container-of-part-in-options-Booking"><div class="menu-item" id="Booking" onclick="getBookingPage()"><div class="icon-of-button"><i class="fa-solid fa-house-signal"></i></div><div class="text-of-button">Booking</div></div></div>
        <div class = "container-of-part-in-options" id="container-of-part-in-options-03"><div class="menu-item" id="clock" onclick="getPageOfClock()"><div class="icon-of-button"><i class="fa-solid fa-magnifying-glass"></i></i></div><div class="text-of-button">Search</div></div></div>
        <div class = "container-of-part-in-options" id="container-of-part-in-options-04"><div class="menu-item" id="settings" onclick="generatePageOfSettings()"><div class="icon-of-button"><i class="fa-solid fa-gear"></i></div><div class="text-of-button">Settings</div></div></div>
        `;

    if (currentUser === 'admin') {
        menu += `
        <div class = "container-of-part-in-options" id="container-of-part-in-options-06"><div class="menu-item" id="historique" onclick="getPageOfArchives()"><div class="icon-of-button"><i class="fa-solid fa-store"></i></div><div class="text-of-button">Archive</div></div></div>`;
    }

    menu += `
    <div class = "container-of-part-in-options" id="container-of-part-in-options-07"><div class="menu-item" id="payment" onclick="getPageOfPayment()"><div class="icon-of-button"><i class="fa-regular fa-credit-card"></i></div><div class="text-of-button">Payment</div></div></div>
    <!--<div class = "container-of-part-in-options" id="container-of-part-in-options-08"><div class="hr-of-menu" id="seconde-hr"></div></div>-->
    <div class = "container-of-part-in-options" id="container-of-part-in-options-09"><div class="menu-item" id="log-out" onclick="logOut()"><div class="icon-of-button"><i class="fa-solid fa-right-from-bracket"></i></div><div class="text-of-button">Log out</div></div></div>
    <div class = "remaning-div" id="remaning-div"></div>
    `;

    document.getElementById('menu-of-options').innerHTML = menu;

}

document.addEventListener('DOMContentLoaded', function () {
    // Attach a single event listener to the parent container
    const menu = document.getElementById('menu-of-options');
    menu.addEventListener('click', function (event) {
        const target = event.target.closest('.menu-item');
        if (target) {
            makeActive(target);
            someStyle(target.id);
            handleMenuAction(target.id);  // Handle actions based on the item id
        }
    });

    generateMenuOfButtons();  // Generate menu on load
});

function makeActive(element) {
    // Remove 'active' class from previously active menu item and its icon
    const currentlyActive = document.querySelector('.menu-item.active');
    if (currentlyActive) {
        currentlyActive.classList.remove('active');
        const activeIcon = currentlyActive.querySelector('.icon-of-button i');
        if (activeIcon) {
            activeIcon.classList.remove('active-icon');  // assuming 'active-icon' is the class for active state icons
        }
    }

    // Add 'active' class to the current element and its icon
    element.classList.add('active');
    const icon = element.querySelector('.icon-of-button i');
    if (icon) {
        icon.classList.add('active-icon');  // add this class to the icon as well
    }
}

function handleMenuAction(id) {

    switch (id) {
        case 'rooms':
            goToPageOfRooms();
            break;
        case 'clock':
            getPageOfClock();
            break;
        case 'settings':
            generatePageOfSettings();
            break;
        case 'historique':
            getPageOfArchives();
            break;
        case 'log-out':
            logOut();
            break;
        case 'calendar':
            getCalendarPage();
            break;
        case 'payment':
            getPageOfPayment();
            break;
        default:
            console.log('No action defined for:', id);
    }
}

//get page of others price
function generatePageOfOthersPrice() {
    var page =
        `
    <div class="scroll-container">
        <div class="container">
            <div class="card">
                <div class="label">vip pillow</div>
                <input type="number" placeholder="get new price">
                <button class="btn-of-others">ok</button>
            </div>
            <div class="card">
                <div class="label">vip bed</div>
                <input type="number" placeholder="get new price" >
                <button class="btn-of-others">ok</button>
            </div>
            <div class="card">
                <div class="label">vip spa</div>
                <input type="number" placeholder="get new price">
                <button class="btn-of-others">ok</button>
            </div>
            <div class="card">
                <div class="label">vip pool</div>
                <input type="number" placeholder="get new price">
                <button class="btn-of-others">ok</button>
            </div>
            <div class="card">
                <div class="label">vip lounge access</div>
                <input type="number" placeholder="get new price">
                <button class="btn-of-others">ok</button>
            </div>
            <div class="card">
                <div class="label">vip yacht Charters</div>
                <input type="number" placeholder="get new price">
                <button class="btn-of-others">ok</button>
            </div>
            <div class="card">
                <div class="label">vip gym</div>
                <input type="number" placeholder="get new price">
                <button class="btn-of-others">ok</button>
            </div>
           
        </div>
    </div>
    `;
    document.getElementById('page-of-price-of-others-settings').innerHTML = page;
}

// get page of others setting
function getPageOfOthers() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-price-of-others-settings';
    document.getElementById(currentPage).style.display = 'block';
}

//calculate remaning days
function getRemaningDays(endDate) {
    var dateInput = endDate;
    var today = new Date();
    var targetDate = new Date(dateInput);


    var timeDiff = targetDate - today;
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff >= 0)
        return daysDiff;

}


// search bar
function searchBar() {

}

//select country?????????????????????????????????????????????/??
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('countryDropdown');

    countries.forEach(country => {
        let option = document.createElement('option');
        option.textContent = country;
        option.value = country;
        dropdown.appendChild(option);
    });
});

function showSelectedCountry() {
    const country = document.getElementById('countryDropdown').value;
    selectedCountry = (country ? country : -1);
}

// script.js
function displaySelectedGender() {
    var gender = document.getElementById('genderDropdown').value;
    selectedGender = (gender ? gender : -1);
}

function displaySelectedSort() {
    var sort = document.getElementById('sortDropdown').value;
    typeOfSort = (sort ? sort : -1);
    alert(typeOfSort);
}

//get date in input
function getDate(id) {
    var date = document.getElementById(id).value;
    return (date ? date : -1);
}
// ?????????????????????????????????????????????????????????????

//clock functions
function isDesiredResident(room) {

    const checkEquality = (firstValue, secondValue) => {
        return secondValue === -1 || firstValue === secondValue;
    }

    valueOfFirstDateInPeriode = getDate('first-date');
    valueOfSecondeDateInPeriode = getDate('second-date');
    valueOfDate = getDate('input-date');

    ans = true;
    if (valueOfFirstDateInPeriode !== -1 && valueOfSecondeDateInPeriode !== -1) {
        ans &= isAnyDateInRangeWithinAnother(room.startDate, room.endDate, valueOfFirstDateInPeriode, valueOfSecondeDateInPeriode);
    }

    if (valueOfDate !== -1) {
        ans &= isDateWithinRange(room.startDate, room.endDate, valueOfDate);
    }

    ans &= checkEquality(room.countryOfResident, selectedCountry);
    ans &= checkEquality(room.genderOfResident, selectedGender);

    return ans;
}

function isDateWithinRange(startDate, endDate, testDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const test = new Date(testDate);
    return test >= start && test <= end;
}

function isAnyDateInRangeWithinAnother(firstStartDate, firstEndDate, secondStartDate, secondEndDate) {
    const firstStart = new Date(firstStartDate);
    const firstEnd = new Date(firstEndDate);
    const secondStart = new Date(secondStartDate);
    const secondEnd = new Date(secondEndDate);
    return (firstStart >= secondStart && firstStart <= secondEnd) ||
        (firstEnd >= secondStart && firstEnd <= secondEnd) ||
        (firstStart <= secondStart && firstEnd >= secondEnd);
}

function isDate1GreaterThanDate2(date1, date2) {
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    return d1 > d2;
}

//sort list by start date
function sortListByStartDate(list, typeSort) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (typeSort === 'A') {
                if (isDate1GreaterThanDate2(list[i].startDate, list[j].startDate) === true) {
                    var temp = list[j];
                    list[j] = list[i];
                    list[i] = temp;
                }
            } else if (typeSort === 'D') {
                if (isDate1GreaterThanDate2(list[i].startDate, list[j].startDate) === false) {
                    var temp = list[j];
                    list[j] = list[i];
                    list[i] = temp;
                }
            }
        }
    }
}

//sort list by duration of reservation
function sortListByDurationOfReservation(list, typeSort) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (typeSort === 'A') {
                if (list[i].durationOfReservation > list[j].durationOfReservation) {
                    var temp = list[j];
                    list[j] = list[i];
                    list[i] = temp;
                }
            } else if (typeSort === 'D') {
                if (list[i].durationOfReservation < list[j].durationOfReservation) {
                    var temp = list[j];
                    list[j] = list[i];
                    list[i] = temp;
                }
            }
        }
    }
}

//////////////////////////////////////////////
function addDaysToDate(initialDate, days) {
    const result = new Date(initialDate);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDate(date) {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate.replace(/,/g, ''); // تزيل الفواصل
}


//generate calendar
function generateCalendar() {
    var startDate = new Date();
    var page = ``;
    for (let i = 0; i < 28; i++) {
        var currentDate = addDaysToDate(startDate, i);
        page += `<div class="box-of-day">${formatDate(currentDate)}</div>`;
    }

    document.getElementById('days-in-calendar').innerHTML = page;

    page = '<table>';
    for (let i = 0; i < hotel.listOfRooms.length; i++) {
        if (hotel.listOfRooms[i].isReserved === 'Reserved') {
            page += '<tr>';
            page += '<td>';
            page += '<div style="display:flex;background-color: red;">'
            page += `
           <div class="box-of-room-in-calendar">
           floor ${hotel.listOfRooms[i].floorNumber}
           room ${hotel.listOfRooms[i].roomNumber}
           </div>
          `;
            startDate = new Date();
            let j = 0;
            var currentDate = addDaysToDate(startDate, j);
            while (isDateWithinRange(hotel.listOfRooms[i].startDate, hotel.listOfRooms[i].endDate, currentDate) === false && j < 28) {
                page += `
             <div class="box-of-day-in-calendar" style="background-color: red;border: 1px solid red;">
             </div>`;
                j++;
                currentDate = addDaysToDate(startDate, j);
            }
            var k = 0;
            var val;
            var cur;
            while (isDateWithinRange(hotel.listOfRooms[i].startDate, hotel.listOfRooms[i].endDate, currentDate) === true && j < 28) {
                val = (k === 0 ? 20 : 0);
                j++;
                k = 1;
                currentDate = addDaysToDate(startDate, j);
                if (isDateWithinRange(hotel.listOfRooms[i].startDate, hotel.listOfRooms[i].endDate, currentDate) === false || j === 28) {
                    cur = 20;
                } else {
                    cur = 0;
                }
                page += `
             <div class="box-of-day-in-calendar" style="background-color: green;border: 1px solid green;border-top-left-radius: ${val}px;border-bottom-left-radius: ${val}px;border-top-right-radius: ${cur}px;border-bottom-right-radius: ${cur}px;"onclick="showInfoOfClickedResident(${JSON.stringify(hotel.listOfRooms[i]).replace(/"/g, '&quot;')})">
             </div>`;
            }

            while (isDateWithinRange(hotel.listOfRooms[i].startDate, hotel.listOfRooms[i].endDate, currentDate) === false && j < 28) {
                page += `
             <div class="box-of-day-in-calendar" style="background-color: red;border: 1px solid red;">
             </div>`;
                j++;
                currentDate = addDaysToDate(startDate, j);
            }

            page += '</div>'
            page += '</td>'
            page += '</tr>';
        }
    }

    page += '</table>';


    document.getElementById('boocked-in-days').innerHTML = page;
}

//get calendar page
function getCalendarPage() {
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-calendar';
    document.getElementById(currentPage).style.display = 'block';
}

// ***************************************************
function populateCountries() {
    const select = document.getElementById('input8');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.textContent = country;
        option.value = country;
        select.appendChild(option);
    });
}
// Ensures that populateCountries is called when the page is loaded

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function checkForm() {
    const inputs = document.getElementById('reservation-of-room').querySelectorAll('input[type=text], input[type=number], input[type=date], input[type=email], input[type=time], select');
    const reserveButton = document.getElementById('reserveButton');
    let isFormValid = Array.from(inputs).every(input => {
        if (input.type === "number") {
            return input.value !== '' && parseInt(input.value, 10) >= 0;
        } else if (input.type === "email") {
            return validateEmail(input.value);
        }
        return input.value !== '';
    });

    reserveButton.disabled = !isFormValid;
}
//************************************************ */

//generate page of payment
function generatePageOfPayment() {
    var page = ` <div class="current-resident-container">
    <div class="current-resident">
        <div class="part-of-name-resident"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">First Name</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Last Name</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Floor</h2></div>
        <div class="part-of-room"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">Room</h2></div>
        <div class="part-of-contdown"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;">remaning payment</h2></div>
        <div class="part-of-gender-in-clock"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;"> Paid </h2></div>
        <div class="part-of-country-in-clock"style="background-color: rgb(32, 162, 160);"><h2 style="color: white;"> total </h2></div>
    </div>
    <div class="scrollable-content">
`;
    for (let i = 0; i < hotel.listOfRooms.length; i++) {
        // if (hotel.listOfRooms[i].isReserved === 'Reserved') {
        for (let k = 0; k < hotel.listOfRooms[i].numberOfBeds ; k++) {
            if (hotel.listOfRooms[i].statusOfBeds[k] === false)
                continue;

            page += `
            <div class="current-resident">
               <div class="part-of-name-resident">
                 <h2>
                 ${hotel.listOfRooms[i].residentOfBeds[k].firstName}
                 </h2>
               </div>
               <div class="part-of-room">
                 <h2>
                 ${hotel.listOfRooms[i].residentOfBeds[k].lastName}
                 </h2>
               </div>
               <div class="part-of-room">
                   <h2>
                    ${hotel.listOfRooms[i].floorNumber} 
                   </h2>
               </div>
               <div class="part-of-room">
                   <h2>
                      ${hotel.listOfRooms[i].roomNumber}
                   </h2>
               </div>
               <div class="part-of-contdown">
                  <h2>
                ${hotel.listOfRooms[i].residentOfBeds[k].remaningPayment}$
                  </h2>
               </div>
               <div class="part-of-gender-in-clock" >
                  <h2>
                    ${hotel.listOfRooms[i].residentOfBeds[k].paidPayment}$
                  </h2>
               </div>
               <div class="part-of-country-in-clock">
                  <h2>
                  ${hotel.listOfRooms[i].residentOfBeds[k].totalPayment}$
                  </h2>
               </div>
            </div>`
        }
    }

    document.getElementById('page-of-payment').innerHTML = page;
}


function generatePageOfBeds() {
    var page = `
        <div class="current-resident-container">
            <div class="current-resident">
                <div class="part-of-room" style="background-color: rgb(32, 162, 160); width : 157px; "><h2 style="color: white;">Confirm</h2></div>
                <div class="part-of-room" style="background-color: rgb(32, 162, 160);width : 157px;"><h2 style="color: white;">Duration</h2></div>
                <div class="part-of-room" style="background-color: rgb(32, 162, 160);width : 157px;"><h2 style="color: white;">Position</h2></div>
                <div class="part-of-room" style="background-color: rgb(32, 162, 160);width : 157px;"><h2 style="color: white;">Bed Number</h2></div>
                <div class="part-of-room" style="background-color: rgb(32, 162, 160);width : 157px;"><h2 style="color: white;">Last Name</h2></div>
                <div class="part-of-room" style="background-color: rgb(32, 162, 160);width : 155px;"><h2 style="color: white;">First Name</h2></div>
            </div>
            <div class="scrollable-content">
    `;

    for (let i = 0; i < selectedRoom.numberOfBeds; i++) {
        if (selectedRoom.statusOfBeds[i] === true) {
            page += `
                <div class="current-resident">
                    <div class="part-of-country-in-clock" style="background-color: white; width : 157px  ;">
                        <button  onclick="modifyDuration(${i})" style="width : 153px ; height: 56px ; "  id="ConfirmationForBeds">Confirm</button>
                    </div>
                    <div class="part-of-room" style=" width: 157px;">
                    <input class="input-of-reserve" type="number"  id="durationinput" style="width: 150px; height: 45px; font-size: 30px; margin: 0; padding: 0;" 
                    value="${selectedRoom.residentOfBeds[i].durationOfReservation}">
                    
                    </input>
                    </div>
                    <div class="part-of-room" style="width : 157px;">
                        <h2>${selectedRoom.positionOfBeds[i]}</h2>
                    </div>
                    <div class="part-of-room" style="width : 157px;">
                        <h2>${i + 1}</h2>
                    </div>
                    <div class="part-of-room"style="width : 157px;">
                        <h2>${selectedRoom.residentOfBeds[i].lastName}</h2>
                    </div>
                    <div class="part-of-room"style="width : 155px;">
                        <h2>${selectedRoom.residentOfBeds[i].firstName}</h2>
                    </div>
                </div>
            `;
        }
    }

    page += `</div></div>`;

    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    currentIdInDisplayInformation = 'modify-room-information';
    document.getElementById(currentIdInDisplayInformation).innerHTML = page;
    document.getElementById(currentIdInDisplayInformation).style.display = 'block';
}




function modifyDuration(bedIndex) {
    const inputElement = document.getElementById('durationinput').value;
    if (inputElement) {
        var newDuration = inputElement;
        selectedRoom.residentOfBeds[bedIndex].durationOfReservation = newDuration;
        console.log(`Duration for bed ${bedIndex} updated to ${newDuration}`);

    } else {
        console.log(`Duration for bed ${bedIndex} not updated to ${newDuration}`);
    }
}


//get page of payment
function getPageOfPayment() {
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-payment';
    document.getElementById(currentPage).style.display = 'block';
}
/*********************************************************/
//generate page of bill
function getInformationOfPayment() {

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
                    <td class="td-of-bill"> ${selectedRoom.resident}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Duration</td>
                    <td class="td-of-bill">${selectedRoom.durationOfReservation}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Start Date</td>
                    <td class="td-of-bill">${selectedRoom.startDate}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">End Date</td>
                    <td class="td-of-bill">${selectedRoom.endDate}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">VIP Tax</td>
                    <td class="td-of-bill">${selectedRoom.VipTax}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Corrections</td>
                    <td class="td-of-bill">${selectedRoom.Corrections}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Room Number</td>
                    <td class="td-of-bill">${selectedRoom.roomNumber}</td>
                </tr>
                <tr>
                    <td class="td-of-bill">Floor Number</td>
                    <td class="td-of-bill">${selectedRoom.floorNumber}</td>
                </tr>
                <tr class="total12">
                    <td class="td-of-bill">Total Due</td>
                    <td class="td-of-bill">${selectedRoom.totalPayment}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    document.getElementById("view-payment-information").innerHTML = page;
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    currentIdInDisplayInformation = 'view-payment-information';
    document.getElementById(currentIdInDisplayInformation).style.display = 'block';
}

//reserve room
function reserveRoom() {
    var firstName = document.getElementById('input1').value;
    var lastName = document.getElementById('input2').value;
    var duration = document.getElementById('input3').value;
    var startDate = document.getElementById('input4').value;
    var email = document.getElementById('input5').value;
    var arrivalTime = document.getElementById('input6').value;
    var creditCardNumber = document.getElementById('input7').value;
    var country = document.getElementById('input8').value;


    selectedRoom.setResidentEmail(email);
    selectedRoom.setDurationOfReservation(duration);
    selectedRoom.setStartDate(startDate);
    selectedRoom.setIsReserved('Reserved');
    selectedRoom.setFirstName(firstName);
    selectedRoom.setLastName(lastName);
    selectedRoom.setCountryOfResident(country);
    selectedRoom.setArrivalTime(arrivalTime);
    selectedRoom.setCreditCardNumber(creditCardNumber);

    generateTableOfRooms(hotel.listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn);
}





//younes
function generatePageOfAccountEmployesSettings(listOfAccount) {

}



//khayro trolling trying to creat a function of update room

function updateInformationOfResedent() {
    var lastName = document.getElementById("last-name-modification").value;
    var email = document.getElementById("email-modification").value;
    var duration = document.getElementById("duration-modification").value;
    var pillow = document.getElementById("pillow-modification").value;
    var firstName = document.getElementById("first-name-modification").value;
    var chair = document.getElementById("chair-modification").value;
    var snack = document.getElementById("snack-modification").value;
    var beds = document.getElementById("beds-modification").value;

    selectedRoom.setLastName(lastName);
    selectedRoom.setResidentEmail(email);
    selectedRoom.setDurationOfReservation(duration);
    selectedRoom.setFirstName(firstName);
    selectedRoom.listOfAvailablePillows.push(pillow);
    selectedRoom.setNumberOfBeds(beds);
    selectedRoom.setChairs(chair);
    selectedRoom.setSnacks(snack);
    selectedRoom.setResident(firstName);
    var endDate = calculateEndDate(selectedRoom.startDate, duration)
    selectedRoom.setEndDate(endDate);
    generateTableOfRooms(hotel.listOfRooms, valueOfReservedDropdawn, valueOfBedsNumberDropdawn, valueOfFloorNumberDropdawn, valueOfRoomNumberDropdawn);
}

//add a new type from here
function addNewRoomType() {
    var newTypeName;
    var newTypeFemaleBeds;
    var newTypeMaleBeds;
    var newTypeStausMixed;
    var newTypeNumberOfAllBeds;

    arrayOfRoomTypes.push({
        type: newTypeName,
        femaleBeds: newTypeFemaleBeds,
        maleBeds: newTypeMaleBeds,
        isMixed: newTypeStausMixed,
        numberOfAllBeds: newTypeNumberOfAllBeds
    });
}

//show info of clicked resident
function showInfoOfClickedResident(room) {
    alert(room.resident)
    var page = `
   <div class="room-details">
        <h2>Resident Details</h2>
        
        <label for="resident">Resident:</label>
        <input type="text" id="resident" value="${room.resident}" readonly>
        
        <label for="floorNumber">E-mail:</label>
        <input type="text" id="floorNumber" value="${room.residentEmail}" readonly>
        <label for="startDate">Start Date:</label>
        <input type="text" id="startDate" value="${room.startDate}" readonly>
        
        <label for="endDate">End Date:</label>
        <input type="text" id="endDate" value="${room.endDate}" readonly>
        
        <label for="durationOfReservation">Duration of Reservation:</label>
        <input type="text" id="durationOfReservation" value="${room.durationOfReservation} nights" readonly>
    </div>
   `;

    //    document.getElementById('card-of-info').style.display = 'block';

}

function hideInfoOfClickedResident() {
    document.getElementById('card-of-info').style.display = 'none';
}




//initiliaze all information of hotel
function addRoomInDataBase(
    NumberOfFemaleBeds,
    NumberOfMaleBeds,
    statusOfMixed,
    firstName,
    lastName,
    arrivalTime,
    creditCardNumber,
    floorNumber,
    roomNumber,
    id,
    VipTax,
    Corrections,
    resident,
    countryOfResident,
    genderOfResident,
    residentEmail,
    isReserved,
    price,
    totalPayment,
    remaningPayment,
    paidPayment,
    durationOfreservation,
    startDate,
    endDate,
    countdown,
    BookingLink,
    numberOfBeds,
    snacks,
    chairs,
    wayOfReservation,
    typeOfRoom) {
    //here add room in data base
}


//booking page
function getBookingPage() {
    var page = `
    <div class="table-of-booking123">
    <table>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Duration</th>
                <th>Optimal room</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ahmed</td>
                <td>lalaoui</td>
                <td>15 days</td>
                <td>floor 1  , room 16</td>
            </tr>
            <tr>
                <td>karim</td>
                <td>mheni</td>
                <td>3 days</td>
                <td>floor 1  , room 20</td>
            </tr>
            <tr>
                <td>amina</td>
                <td>krimi</td>
                <td>10 days</td>
                <td>floor 4  , room 4</td>
            </tr>
            <tr>
                <td>rima</td>
                <td>ourari</td>
                <td>20 days</td>
                <td>floor 1  , room 7</td>
            </tr>
            <tr>
                <td>ramy</td>
                <td>laiz</td>
                <td>6 days</td>
                <td>floor 1  , room 2</td>
            </tr>
            <tr>
                <td>oussama</td>
                <td>ben saleh</td>
                <td>7 days</td>
                <td>floor 5  , room 1</td>
            </tr>
            <tr>
                <td>hakim</td>
                <td>meghni</td>
                <td>45 days</td>
                <td>floor 2  , room 12</td>
            </tr>
        </tbody>
    </table>
</div>
    `;


    document.getElementById('page-of-booking').innerHTML = page;
    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-booking';
    document.getElementById(currentPage).style.display = 'block';
}


///////////////////////////////////////////////////////
function generatePageOfCreateHotel() {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'container-create-hotel';
    document.getElementById(currentPage).style.display = 'flex';
}
///////////////////////////////////////////////////////

//add number of floor and rooms in db
function addNumberFloorAndRooms() {
    // var floors;
    // var roomsPerFloor;
    // floors=document.getElementById("floors").value;
    // roomsPerFloor=document.getElementById("roomsPerFloor").value;
    // console.log(floors);
    // var newData = {
    //     userName:"moris",
    //     floor:floors,
    //     rooms:roomsPerFloor,


    // };
    // $.ajax({
    //     url: "addHotel.php",
    //     method: "post",
    //     data: newData,
    //     success: function (res) {
    //         console.log("Response from PHP script1:", res);
    //     },
    //     error: function (xhr, status, error) {
    //         console.error("Error:", error);
    //     }
    // });

    for (var i = nfloor; i < nroom; i++) {
        $.ajax({
            url: "fillRooms.php", // URL to the PHP script
            method: "post", // HTTP method
            data: {
                idofroom: i,
                type: hotel.listOfRooms[tmp].typeOfRoom,
                numberfloor: hotel.listOfRooms[tmp].floorNumber,
                numberofroom: hotel.listOfRooms[tmp].roomNumber,
                s1: "1",
                s2: "1",
                s3: "1",
                s4: "1",
                s5: "1",
                s6: "1",
                s7: "1",
                s8: "1"
            }, // Data to send to the server
            success: function (res) {
                console.log("Response from PHP script:", res);
                // Handle successful response here
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
                // Handle error here
            }
        });

        tmp++;
    }

    // Add success image after the AJAX calls are completed
    
    var selectionPageDiv = document.getElementById('selection-page');
    var successImage = document.createElement('img');
    selectionPageDiv.innerHTML=' ';
    successImage.src = 'success-icon-10.png';
    successImage.alt = 'Success Image';
    successImage.style.width = '400px';  // Set width to 400px
    successImage.style.height = '400px'; // Set height to 400px
    successImage.style.display = 'block'; // Ensure block-level element
    successImage.style.margin = 'auto'; // Center the image horizontally
    successImage.style.marginTop = '50px'; // Adjust margin-top to center vertically
    selectionPageDiv.appendChild(successImage);

    // Display the selection-page
    selectionPageDiv.style.display = 'block';
    currentPage='selection-page';
    
    document.querySelector('.container-create-hotel').style.display = 'none';
    
}

/***************************************************/
function jame3() {
    var mostafa = `
  <div class="card-of-pass">
  <div class="label-container-pass">
      <label>
          <span>Username</span>
          <input type="text">
      </label>
      <label>
          <span>Password</span>
          <input type="text">
      </label>
      <label>
          <span>Confirm password</span>
          <input type="text">
      </label>
  </div>
  <div class="buttons-of-pass">
      <button>Confirm</button>
      <button>Cancel</button>
  </div>
</div>
  `;
    document.getElementById('page-of-add-acc').innerHTML = mostafa;
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-add-acc';
    document.getElementById(currentPage).style.display = 'flex';
}
/***************************************************/


//generate page of selection 
function generateSelectionPage() {
}


//my server
var visitedRoom = [];
function initVisitedRoom() {
    var nbFloor = 40;
    var nbRoom = 100;

    for (let i = 0; i <= nbFloor; i++) {
        visitedRoom[i] = [];
        for (let j = 0; j <= nbRoom; j++) {
            visitedRoom[i][j] = [];
            for (let k = 0; k <= 8; k++) {
                visitedRoom[i][j][k] = false;
            }
        }
    }
}

function getListOfResident() {
    var res = [];
    let nbr = Math.floor(Math.random() % 30);

    for (let i = 0; i < nbr; i++) {

    }
}
function myAllocator() {
    var listOfResidents = getListOfResident();
    for (let i = 0; i < listOfResidents.length; i++) {

    }
}