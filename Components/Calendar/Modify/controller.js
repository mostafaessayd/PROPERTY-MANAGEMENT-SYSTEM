//create a page that contains all the basic information for the guest
function createPageOfReserveGuest() {
    var page = ``;

    document.getElementById('container-of-reserve-page-in-calendar').innerHTML = page;
}


//returns the selected date in the calendar as the start date of the reservation
function getSelectedStartDate() {
    return new Date();
}