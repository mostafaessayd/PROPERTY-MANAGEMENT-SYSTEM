
//create a page that contains all the basic information for the guest
function createPageOfModifyReserveGuest(floor , room , bed , nbrcase , nbrResident , resident) {
    var page = ``;

    page += `
     <div class="container-of-page-of-modify-reserve-in-calendar">
    <div class="section-in-modify-reserve-in-calendar">
        <h2>Booking details</h2>
        <label for="firstname-in-page-modify-reserve-in-calendar">first name</label>
        <input type="text" id="firstname-in-page-modify-reserve-in-calendar">
        
        <label for="lastname-in-page-modify-reserve-in-calendar">last name</label>
        <input type="text" id="lastname-in-page-modify-reserve-in-calendar">
        
        <label for="gender-in-page-modify-reserve-in-calendar">gender</label>
        <select id="gender-in-page-modify-reserve-in-calendar">
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        
        <label for="duration-in-page-modify-reserve-in-calendar">duration of reservation</label>
        <input type="number" id="duration-in-page-modify-reserve-in-calendar" min="1">
        
        <label for="address-in-page-modify-reserve-in-calendar">id of guest</label>
        <input type="text" id="address-in-page-modify-reserve-in-calendar">
        
        <label for="startdate-in-page-modify-reserve-in-calendar">start date</label>
        <input type="date" id="startdate-in-page-modify-reserve-in-calendar">
        
        <label for="birthdate-in-page-modify-reserve-in-calendar">birth date</label>
        <input type="date" id="birthdate-in-page-modify-reserve-in-calendar">

        <button onclick="saveModify(
                ${JSON.stringify(floor).replace(/"/g, '&quot;')} , 
                ${JSON.stringify(room).replace(/"/g, '&quot;')} , 
                ${JSON.stringify(bed).replace(/"/g, '&quot;')} , 
                ${JSON.stringify(nbrResident).replace(/"/g, '&quot;')}
            )">Save</button>
    </div>

    <div class="section-in-modify-reserve-in-calendar">
                <h2 style="color: white;">Booking details</h2>`;

    page += `<label for="country-in-page-modify-reserve-in-calendar">country</label>
                <select id="country-in-page-modify-reserve-in-calendar">`;

    for (let i = 0; i < LIST_OF_COUNTRIES.length; i++) {
        page += `<option value="${LIST_OF_COUNTRIES[i]}">${LIST_OF_COUNTRIES[i]}</option>`;
    }

    page += `</select>`;


    page += `<!--<h2>Reservation status</h2>-->
        <label for="amount-paid-by-card-in-page-modify-reserve-in-calendar">The amount paid by card</label>
        <input type="number" id="amount-paid-by-card-in-page-modify-reserve-in-calendar">
        <label for="amount-paid-in-cash-in-page-modify-reserve-in-calendar">The amount paid in cash</label>
        <input type="number" id="amount-paid-in-cash-in-page-modify-reserve-in-calendar">
        <label for="color-in-page-modify-reserve-in-calendar">Choose reservation status</label>
        <select id="color-in-page-modify-reserve-in-calendar">
            <option value="red">broken (red)</option>
            <option value="blue">present (blue) </option>
            <option value="orange">noshow (orange)</option>
            <option value="yellow">booked (yellow)</option>
            <option value="purple">f.s (purple)</option>
        </select>
        <label for="notes-in-page-modify-reserve-in-calendar">Guest notes</label>
        <textarea id="notes-in-page-modify-reserve-in-calendar" rows="4"></textarea>
        
        <div class="container-of-two-buttons-in-modify-calendar">
        <button class="cancel" onclick="deleteResidentInBed(
                ${JSON.stringify(floor).replace(/"/g, '&quot;')} , 
                ${JSON.stringify(room).replace(/"/g, '&quot;')} , 
                ${JSON.stringify(bed).replace(/"/g, '&quot;')} , 
                ${JSON.stringify(nbrResident).replace(/"/g, '&quot;')}
            )">Delete</button>
        <button class="cancel" onclick="getCalendarPage()">Cancel</button>
        </div>
    </div>
</div>

    `;

    document.getElementById('page-of-modify-guest-information-in-calendar').innerHTML = page;

    document.getElementById('firstname-in-page-modify-reserve-in-calendar').value = resident.firstName;
    document.getElementById('lastname-in-page-modify-reserve-in-calendar').value = resident.lastName;
    document.getElementById('duration-in-page-modify-reserve-in-calendar').value = resident.durationOfReservation;
    document.getElementById('birthdate-in-page-modify-reserve-in-calendar').value = resident.birthDate;
    //var arrivalTime = document.getElementById('arrivalTime-in-calendar-modify').value;
   // var bankCardNumber = document.getElementById('cardNumber-in-calendar-modify').value;
    document.getElementById('address-in-page-modify-reserve-in-calendar').value = resident.email;
    document.getElementById('country-in-page-modify-reserve-in-calendar').value = resident.country;
    document.getElementById('gender-in-page-modify-reserve-in-calendar').value = resident.gender;
    document.getElementById('notes-in-page-modify-reserve-in-calendar').value = resident.note;
    document.getElementById('amount-paid-in-cash-in-page-modify-reserve-in-calendar').value = resident.paidByCash;
    document.getElementById('amount-paid-by-card-in-page-modify-reserve-in-calendar').value = resident.paidByCard;


    document.getElementById('color-in-page-modify-reserve-in-calendar').value = resident.color;


    document.getElementById(currentIdInDisplayInformation).style.display = 'none';
    document.getElementById(currentIdInModifysettings).style.display = 'none';
    document.getElementById(currentPage).style.display = 'none';
    currentPage = 'page-of-modify-guest-information-in-calendar';
    document.getElementById(currentPage).style.display = 'block';

    var dateInput = document.getElementById('startdate-in-page-modify-reserve-in-calendar');

    // Get the current date
    var today = new Date();
    today.setDate(today.getDate() + nbrcase);
    // Format the date as YYYY-MM-DD
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
 
    // Set the value of the input field to the formatted date
    var ans = formatDate1(today);
    dateInput.value = formattedDate;

   // return page;

    //style="margin-bottom: 48px;"
    //  document.getElementById("container-of-modify-reserve-page-in-calendar").innerHTML = page;
    //  document.getElementById('startdate').value = getSelectedStartDate();
}

//returns the selected date in the calendar as the start date of the reservation
function getSelectedStartDate() {
    return SELECTED_START_DATE;
}