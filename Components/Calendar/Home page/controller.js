//var hotel = new Hotel();

function createRoomDisplayGridInCalendar(LIST_OF_ROOMS) {
    createPartOfDaysInCalendar();
    getCurrentMonthInCalendar();
    createSelectionOfRoomTypeInCalendar(arrayOfRoomTypes);
    var page = ``;
    for (let i = 0; i < LIST_OF_ROOMS.length; i++) {
        for (let j = 0; j < LIST_OF_ROOMS[i].numberOfBeds; j++) {
            
            page += `
    <div class="one-room-in-calendar">
                <div class="type-and-name-of-room-in-calendar">
                  Room-${LIST_OF_ROOMS[i].typeOfRoom}-B${j + 1}
                </div>
                <div class="status-of-room-in-tewnty-days-in-calendar">`;
            ///////////////////////////////////////////////////////
            // var begin = Math.floor(Math.random() * 13);
            // var dest = 1 + Math.floor(Math.random() * 4);
            for (let k = 0; k < 20;) {
                let answer = isReservedDate(LIST_OF_ROOMS[i].listOfResidentsInBed[j] , k);
                if (answer !== "NO") {
                    var dest = parseInt(answer.durationOfReservation);
                    console.log(dest + ' ' + k);
                    if(k + dest > 20) {
                        dest = 20 - k;
                    }
                    page += `
        <div id="box-of-guest-in-calendar" style="width:${dest* 37.5}px;background-color:${answer.color};" onclick="createPageOfModifyReserveGuest(${JSON.stringify(LIST_OF_ROOMS).replace(/"/g, '&quot;')} ,
        ${JSON.stringify(LIST_OF_ROOMS[i].floorNumber).replace(/"/g, '&quot;')} ,
                    ${JSON.stringify(LIST_OF_ROOMS[i].roomNumber).replace(/"/g, '&quot;')} ,
                    ${JSON.stringify(j).replace(/"/g, '&quot;')} , 
                    ${JSON.stringify(k).replace(/"/g, '&quot;')} , 
                    ${JSON.stringify(NUMBER_OF_GUEST).replace(/"/g, '&quot;')} ,
                    ${JSON.stringify(LIST_OF_ROOMS[i].listOfResidentsInBed[j][NUMBER_OF_GUEST]).replace(/"/g, '&quot;')})">
          <h4>${answer.firstName}</h4>
        </div>`;

                    k += dest;
                } else {
                    page += `
        <div id="box-of-day-in-calendar" onclick="reserveInCalendar(
                 ${JSON.stringify(LIST_OF_ROOMS[i].floorNumber).replace(/"/g, '&quot;')} , 
                 ${JSON.stringify(LIST_OF_ROOMS[i].roomNumber).replace(/"/g, '&quot;')} ,
                 ${JSON.stringify(j).replace(/"/g, '&quot;')} ,
                 ${JSON.stringify(k).replace(/"/g, '&quot;')} ,
                 ${JSON.stringify(LIST_OF_ROOMS[i]).replace(/"/g, '&quot;')}
                 )">
                <div id="top-part-in-pox-of-day-in-calendar">
                   
                </div>
                <div id="bottom-part-in-pox-of-day-in-calendar">
                   
                </div>
        </div>
        `;
                    k++;
                }
            }
        //    //////////////////////////////////////////////////////
            page += `</div>
    </div>
    `;
        }
    }
    
   // return page;
    document.getElementById('room-display-grid-in-calendar').innerHTML = page;

    for(let i = 0 ; i < LIST_OF_ROOMS.length ; i++) {
        for(let j = 0 ; j < LIST_OF_ROOMS[i].numberOfBeds ; j++) {
            for(let k = 0 ; k < LIST_OF_ROOMS[i].listOfResidentsInBed[j].length ; k++) {
                console.log(LIST_OF_ROOMS[i].listOfResidentsInBed[j][k]);
            }
        }
    }
}

 //createRoomDisplayGridInCalendar(hotel.listOfRooms);

var Day;
var weekday;

function createPartOfDaysInCalendar() {
    var page = ``;
    for (let i = 0; i < 20; i++) {
        var currentDate = new Date();
        var currentDate = addDaysToDate(currentDate, i);
        formatDate(currentDate);
        page += `
        <div id="box-of-day-in-calendar">
                <div id="top-part-in-pox-of-day-in-calendar">
                ${weekday}
                </div>
                <div id="bottom-part-in-pox-of-day-in-calendar">
                    ${Day}
                </div>
        </div>
        `;
    }

    document.getElementById('part-of-current-days-in-calendar').innerHTML = page;
}



function addDaysToDate(initialDate, days) {
    const result = new Date(initialDate);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDate(date) {
    const options0 = { month: 'short' };
    const options = { day: 'numeric' };
    const options2 = { weekday: 'short' };

    const formattedDate = date.toLocaleDateString('en-US', options);

    Day = date.toLocaleDateString('en-US', options);
    weekday = date.toLocaleDateString('en-US', options2);
    currentMonth = date.toLocaleDateString('en-US', options0);

    // Day = options.day;

    return formattedDate.replace(/,/g, ''); // تزيل الفواصل
}

//create part of selection type of room
function createSelectionOfRoomTypeInCalendar(LIST_OF_TYPE) {
    var page = ``;
    for (let i = 0; i < LIST_OF_TYPE.length; i++) {
        page += `<option value="${i}">${LIST_OF_TYPE[i].type}</option>`;
    }
    
    document.getElementById('part-of-selection-type-of-room-in-calendar').innerHTML = `
    <div class="container-of-dropdown-of-type-of-rooms-in-calendar" display: flex;>
             <button class="text-of-select-in-calendar">types</button>
                <select class="dropdown" id="select-of-type-room-in-calendar">
                   ${page}
                </select>
    </div>
    `;
}

//get current month
function getCurrentMonthInCalendar() {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    currentDate = new Date();
    currentMonth = monthNames[currentDate.getMonth()];

    document.getElementById('part-of-current-month-in-calendar').innerText = currentMonth;
}

///////////////////////
function isReservedDate(listOfResidents, nbrCase) {
    var curDate = new Date();
    curDate.setDate(curDate.getDate() + nbrCase);
    curDate = formatDate1(curDate);

    for (let i = 0; i < listOfResidents.length; i++) {

        if(listOfResidents[i].startDate === curDate) {
            console.log(listOfResidents[i].startDate + ' ' + curDate);
            currentDuration = listOfResidents[i].durationOfReservation;
            NUMBER_OF_GUEST = i;
            return listOfResidents[i];
        }
    }

    return "NO";
}

