//createPageOfReserveGuest();

//create a page that contains all the basic information for the guest
function createPageOfReserveGuest() {
    var page = ``;

    page += `
     <div class="container-of-page-of-reserve-in-calendar">
    <div class="section-in-reserve-in-calendar">
        <h2>Booking details</h2>
        <label for="firstname-in-page-reserve-in-calendar">first name</label>
        <input type="text" id="firstname-in-page-reserve-in-calendar">
        
        <label for="lastname-in-page-reserve-in-calendar">last name</label>
        <input type="text" id="lastname-in-page-reserve-in-calendar">
        
        <label for="gender-in-page-reserve-in-calendar">gender</label>
        <select id="gender-in-page-reserve-in-calendar">
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        
        <label for="duration-in-page-reserve-in-calendar">duration of reservation</label>
        <input type="number" id="duration-in-page-reserve-in-calendar" min="1">
        
        <label for="address-in-page-reserve-in-calendar">id of guest</label>
        <input type="text" id="address-in-page-reserve-in-calendar">
        
        <label for="startdate-in-page-reserve-in-calendar">start date</label>
        <input type="date" id="startdate-in-page-reserve-in-calendar">
        
        <label for="birthdate-in-page-reserve-in-calendar">birth date</label>
        <input type="date" id="birthdate-in-page-reserve-in-calendar">

        <button onclick="saveReserveInCalendar()">Save</button>
    </div>

    <div class="section-in-reserve-in-calendar">
                <h2 style="color: white;">Booking details</h2>`;

    page += `<label for="country-in-page-reserve-in-calendar">country</label>
                <select id="country-in-page-reserve-in-calendar">`;

    for (let i = 0; i < LIST_OF_COUNTRIES.length; i++) {
        page += `<option value="${LIST_OF_COUNTRIES[i]}">${LIST_OF_COUNTRIES[i]}</option>`;
    }

    page += `</select>`;


    page += `<!--<h2>Reservation status</h2>-->
        <label for="amount-paid-by-card-in-page-reserve-in-calendar">The amount paid by card</label>
        <input type="number" id="amount-paid-by-card-in-page-reserve-in-calendar" value="0">
        <label for="amount-paid-in-cash-in-page-reserve-in-calendar">The amount paid in cash</label>
        <input type="number" id="amount-paid-in-cash-in-page-reserve-in-calendar" value="0">
        <label for="color-in-page-reserve-in-calendar">Choose reservation status</label>
        <select id="color-in-page-reserve-in-calendar">
            <option value="red">broken (red)</option>
            <option value="blue">present (blue) </option>
            <option value="orange">noshow (orange)</option>
            <option value="yellow">booked (yellow)</option>
            <option value="purple">f.s (purple)</option>
        </select>
        <label for="notes-in-page-reserve-in-calendar">Guest notes</label>
        <textarea id="notes-in-page-reserve-in-calendar" rows="4"></textarea>
        
        <button class="cancel" onclick="cancelReserveInCalendar()">Cancel</button>
    </div>
</div>

    `;

    return page;

    //style="margin-bottom: 48px;"
    // document.getElementById("container-of-reserve-page-in-calendar").innerHTML = page;
    //  document.getElementById('startdate').value = getSelectedStartDate();
}

//returns the selected date in the calendar as the start date of the reservation
function getSelectedStartDate() {
    return SELECTED_START_DATE;
}