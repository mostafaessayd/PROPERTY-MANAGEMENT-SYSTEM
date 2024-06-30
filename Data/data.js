class Hotel {
    nameOfHotel;
    listOfRooms;
    archives;
    listOfAccount;
    numberOfFloors;
    numberOfRooms;

    constructor() {
        this.nameOfHotel = "wassim hotel";
        this.generateListOfRooms();
        this.generateArchive();
        this.generateListOfAccount();
        this.numberOfFloors = 40;
        this.numberOfRooms = 100;
    }

    generateListOfAccount() {
        this.listOfAccount = [];
        this.addAccount('mostafa', '1');
        this.addAccount('mohamed', '1');
        this.addAccount('wassim', '1');
        this.addAccount('younes', '1');
        this.addAccount('khayro', '1');
    }

    generateListOfRooms() {
        this.listOfRooms = [];
        // for (let i = 1; i <= 10; i++) {
        //     for (let j = 1; j <= 30; j++) {
        //         var room = new Room(i, j);
        //         this.listOfRooms.push(room);
        //     }
        // }
        
        let k = 1;

            var room = new Room(1 , k , 8 , "001");
            this.listOfRooms.push(room);
            k++;
        
            var room = new Room(1 , k , 8 , "101");
            this.listOfRooms.push(room);
            k++;
        
            var room = new Room(1 , k , 8 , "102");
            this.listOfRooms.push(room);
            k++;
        
            var room = new Room(1 , k , 4 , "103");
            this.listOfRooms.push(room);
            k++;
        
            var room = new Room(1 , k , 8 , "201");
            this.listOfRooms.push(room);
            k++;
       
            var room = new Room(1 , k , 6 , "202");
            this.listOfRooms.push(room);
            k++;
      
            var room = new Room(1 , k , 6 , "203");
            this.listOfRooms.push(room);
            k++;
    
            var room = new Room(1 , k , 4 , "301");
            this.listOfRooms.push(room);
            k++;
           
            var room = new Room(1 , k , 6 , "302");
            this.listOfRooms.push(room);

    }

    generateArchive() {
        this.archives = [];

    }

    addEventInArchives(employe, event, date) {
        var newEvent = new Event(employe, event, date);
        this.archives.push(newEvent);
    }

    addAccount(userName, password) {
        var newAccount = new Account(userName, password);
        this.listOfAccount.push(newAccount);
    }

    // generateListOfAvailablePillows() {
    //     this.listOfAvailablePillows = [];
    //     this.listOfAvailablePillows.push({ type: 'vip', number: 2000, price: 0 });
    //     this.listOfAvailablePillows.push({ type: 'normal', number: 2000, price: 0 });
    // }

    // generateListOfAvailableMattresses() {
    //     this.listOfAvailableMattresses = [];
    //     this.listOfAvailableMattresses.push({ type: 'vip', number: 2000, price: 0 });
    //     this.listOfAvailableMattresses.push({ type: 'normal', number: 2000, price: 0 });
    // }

    // generateListOfAvailabelServices() {
    //     this.listOfAvailabelServices = [];
    //     this.listOfAvailabelServices.push({ type: 'vip-room', number: 2000, price: 0 });
    //     this.listOfAvailabelServices.push({ type: 'normal-room', number: 2000, price: 0 });
    // }

    // borrowingPillows(typeOfPillow, numberOfBorrowingPillows) {
    //     for (let i = 0; i < this.listOfAvailablePillows.length; i++) {
    //         if (this.listOfAvailablePillows[i].type === typeOfPillow) {
    //             if (this.listOfAvailablePillows[i].number > 0) {
    //                 if (this.listOfAvailablePillows[i].number >= numberOfBorrowingPillows) {
    //                     this.listOfAvailablePillows[i].number -= numberOfBorrowingPillows;
    //                     return { resulte: true, rest: 0 };
    //                 } else {
    //                     numberOfBorrowingPillows -= this.listOfAvailablePillows[i].number;
    //                     this.listOfAvailablePillows[i].number = 0;
    //                     return { resulte: true, rest: numberOfBorrowingPillows };
    //                 }
    //             } else {
    //                 return { resulte: false, rest: 0 };
    //             }
    //         }
    //     }
    // }

    // returnPillows(typeOfPillow, numberOfRecoveredPillows) {
    //     for (let i = 0; i < this.listOfAvailablePillows.length; i++) {
    //         if (this.listOfAvailablePillows[i].type === typeOfPillow) {
    //             this.listOfAvailablePillows[i].number += numberOfRecoveredPillows;
    //             break;
    //         }
    //     }
    // }

}

var arrayOfRoomTypes = [
    {type : "All" , femaleBeds :-1 , maleBeds :-1 , isMixed : true , numberOfAllBeds : -1} ,
    {type : "Private mixed room" , femaleBeds :1 , maleBeds :1 , isMixed : true , numberOfAllBeds : 2} ,
    {type : "Private un mixed room" , femaleBeds :2 , maleBeds :0 , isMixed : false , numberOfAllBeds : 2} ,
    {type : "8 bed mixed room" , femaleBeds :8 , maleBeds :8 , isMixed : true , numberOfAllBeds : 8} ,
    {type : "6 bed female room" , femaleBeds : 6 , maleBeds : 0 , isMixed : false , numberOfAllBeds : 6} ,
    {type : "6 bed mixed room" , femaleBeds : 6 , maleBeds : 6 , isMixed : true , numberOfAllBeds : 6} ,
    {type : "4 bed mixed room" , femaleBeds : 4 , maleBeds : 4 , isMixed : true , numberOfAllBeds : 4} ,
];

class rsdnt {

    firstName
    lastName
    country
    email
    startDate
    BirthDate
    gender
    durationOfReservation
    totalPayment
    remaningPayment
    payedPayment
    color;
    note;
    paidByCard;
    paidByCash;

    constructor(firstName, lastName, country, email, startDate, BirthDate, gender,
        durationOfReservation, totalPayment , color , note , paidByCard , paidByCash) {
        this.paidByCash = paidByCash;
        this.paidByCard = paidByCard;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.email = email;
        this.startDate = startDate;
        this.BirthDate = BirthDate;
        this.gender = gender;
        this.durationOfReservation = durationOfReservation;
        this.color = color;
        this.note = note;
        this.totalPayment = totalPayment; // Private variable for totalPayment
        this.remaningPayment = totalPayment; // Initialize remainingPayment with totalPayment
        this.payedPayment = 0; // Initialize payedPayment as 0
    }

    // Getter and Setter for firstName
    get firstName() {
        return this.firstName;
    }

    set firstName(firstName) {
        this.firstName = firstName;
    }

    // Getter and Setter for lastName
    get lastName() {
        return this.lastName;
    }

    set lastName(lastName) {
        this.lastName = lastName;
    }

    // Getter and Setter for country
    get country() {
        return this.country;
    }

    set country(country) {
        this.country = country;
    }

    // Getter and Setter for email
    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }

    // Getter and Setter for arrivalTime
    get arrivalTime() {
        return this.arrivalTime;
    }

    set arrivalTime(arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    // Getter and Setter for startDate
    get startDate() {
        return this.startDate;
    }

    set startDate(startDate) {
        this.startDate = startDate;
    }

    // Getter and Setter for BirthDate
    get BirthDate() {
        return this.BirthDate;
    }

    set BirthDate(BirthDate) {
        this.BirthDate = BirthDate;
    }

    // Getter and Setter for gender
    get gender() {
        return this.gender;
    }

    set gender(gender) {
        this.gender = gender;
    }

    // Getter and Setter for durationOfReservation
    get durationOfReservation() {
        return this.durationOfReservation;
    }

    set durationOfReservation(durationOfReservation) {
        this.durationOfReservation = durationOfReservation;
    }

    // Getter and Setter for creditCardNumber
    get creditCardNumber() {
        return this.creditCardNumber;
    }

    set creditCardNumber(creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    // Getter for totalPayment (no setter as it's computed)
    get totalPayment() {
        return this.totalPayment;
    }

    // Getter and Setter for remainingPayment
    get remaningPayment() {
        return this.remaningPayment;
    }

    set remaningPayment(remaningPayment) {
        this.remaningPayment = remaningPayment;
    }

    // Getter and Setter for payedPayment
    get payedPayment() {
        return this.payedPayment;
    }

    set payedPayment(payedPayment) {
        this.payedPayment = payedPayment;
    }
}

function formatDate1(date) {
    // Extract day, month, and year from the date object
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0, so we add 1
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
  
    // Return formatted date string in dd/mm/yy format
    return `${day}/${month}/${year}`;
  }
  
  function datesAreEqual(dateStr1, dateStr2) {
    // Split the date strings into day, month, and year parts
    const [day1, month1, year1] = dateStr1.split('/');
    const [day2, month2, year2] = dateStr2.split('/');
  
    // Create Date objects from the parsed parts (months are 0-indexed in Date constructor)
    const date1 = new Date(`20${year1}`, month1 - 1, day1); // Assuming '20' is prefix for year 2000+
    const date2 = new Date(`20${year2}`, month2 - 1, day2);
  
    // Compare the Date objects
    return date1.getTime() === date2.getTime(); // Compare milliseconds since Unix epoch
  }


class Room {
    statusOfBeds = [];
    positionOfBeds = [];
    residentOfBeds = [];
    durationOfReservationOfBeds = [];
    startDateOfResidentInBeds = [];

    listOfResidentsInBed = [];


    beds;
    NumberOfFemaleBeds;
    NumberOfMaleBeds;
    statusOfMixed;
    firstName;
    lastName;
    numberOfReservedFemaleBeds;
    numberOfReservedMaleBeds;
    numberOfFreeFemaleBeds;
    numberOfFreeMaleBeds;
    arrivalTime;
    creditCardNumber;
    floorNumber;
    roomNumber;
    id;
    VipTax;
    Corrections;
    resident;
    countryOfResident;
    genderOfResident;
    residentEmail;
    isReserved;
    price;
    totalPayment;
    remaningPayment;
    paidPayment;
    durationOfreservation;
    startDate;
    endDate;
    countdown;
    BookingLink;
    numberOfBeds;
    snacks;
    chairs;
    wayOfReservation;
    typeOfRoom;
    
    constructor(floorNumber, roomNumber , nbrBed , name) {

        //this.numberOfBeds = 2 + Math.floor(Math.random() * 7);
        this.numberOfBeds = nbrBed;
        // this.NumberOfFemaleBeds = Math.floor(Math.random * this.numberOfBeds + 1);
        // this.NumberOfMaleBeds = this.numberOfBeds - this.NumberOfFemaleBeds;


        this.NumberOfFemaleBeds = Math.floor(Math.random() * (this.numberOfBeds + 1));
        this.NumberOfMaleBeds = this.numberOfBeds - this.NumberOfFemaleBeds;

        this.statusOfMixed = this.getRandomStatus();

        this.floorNumber = floorNumber;
        this.VipTax = Math.floor(Math.random() * 100);
        this.Corrections = Math.floor(Math.random() * 100);
        this.roomNumber = roomNumber;
        this.id = this.floorNumber.toString() + '-' + this.roomNumber.toString();
        this.isReserved = getStatusOfReserved();
        this.resident = getRandomResident(this.isReserved);
        this.price = 0;
        this.startDate = getRandomStartDate();
        this.endDate = getRandomEndDate();

        // if (isDate1GreaterThanDate2(this.startDate, this.endDate)) {
        //     var temp = this.startDate;
        //     this.startDate = this.endDate;
        //     this.endDate = temp;
        // }

        this.durationOfReservation = calculateDaysBetweenDates(this.startDate, this.endDate);
        this.countdown = getCountdown();
        this.keyStatus = this.isReserved;
        this.bookingLink = getRandomBookingLink();
        this.residentEmail = '';
        this.wayOfReservation = getwayOfResarvation(this);
        this.typeOfRoom = name;
        this.countryOfResident = getRandomCountry();
        this.genderOfResident = getRandomGender();
        this.totalPayment = 100 + Math.floor(Math.random() * 900);
        this.remaningPayment = Math.floor(Math.random() * this.totalPayment);
        this.paidPayment = this.totalPayment - this.remaningPayment;


        for (let i = 0; i < this.numberOfBeds; i++) {
            this.listOfResidentsInBed[i] = [];
            
            var gt = new Date();
            gt = formatDate1(gt);

            var brth = getRandomStartDate();
            var abc = new rsdnt(
                getRandomResident('Reserved') ,
                "esso" ,
                "senegal" ,
                "hjhdjh@email.com" ,
                 gt ,
                brth ,
                "male" ,
                3 ,
                111 ,
                "blue" ,
                "" , 
                10 , 
                10
             );
             
            // this.listOfResidentsInBed[i].push(abc);
            
            this.positionOfBeds[i] = getPosition();
            
            if (this.statusOfBeds[i] === true) {
                this.startDateOfResidentInBeds[i] = getRandomStartDate();
                var fn = getRandomResident('Reserved');
                var ln = getRandomResident('Reserved');
                var cont = getRandomCountry();
                var em = fn + ln + '@gmail.com';
                var cr = 123345656 + Math.floor(Math.random() * 12344567);
                var arv = "00 : 00 pm";
                var dr = 5 + Math.floor(Math.random() * 90);
                var startDate = new Date() + Math.floor(Math.random() * 20);
              //  this.residentOfBeds[i] = new Resident(fn, ln, em, cont, arv, cr, dr, startDate);
                
                this.durationOfReservationOfBeds[i] = 1 + Math.floor(Math.random() * 200);;
            }
        }
    }

    getRandomStatus() {
        var ans = [true, false];
        return ans[Math.floor(Math.random() * ans.length)];
    }

    setCreditCardNumber(value) {
        this.creditCardNumber = value;
    }

    setArrivalTime(value) {
        this.arrivalTime = value;
    }
    setSnacks(value) {
        this.snacks = value;
    }

    setChairs(value) {
        this.chairs = value;
    }
    setNumberOfBeds(value) {
        this.numberOfBeds = value;
    }

    setCountryOfResident(value) {
        this.countryOfResident = value;
    }

    setFirstName(value) {
        this.firstName = value;
    }

    setLastName(value) {
        this.lastName = value;
    }

    setIsReserved(value) {
        this.isReserved = value;
        this.keyStatus = value;
    }

    setResident(name) {
        this.resident = name;
    }

    setResidentEmail(email) {
        this.residentEmail = email;
    }

    setPrice(price) {
        this.price = price;
    }

    setDurationOfReservation(duration) {
        this.durationOfReservation = duration;
    }

    setStartDate(date) {
        this.startDate = date;
        if (this.endDate) {
            this.durationOfReservation = calculateDaysBetweenDates(this.startDate, this.endDate);
        }
    }

    setEndDate(date) {
        this.endDate = date;
        // Optionally update durationOfReservation if startDate is set
        if (this.startDate) {
            this.durationOfReservation = calculateDaysBetweenDates(this.startDate, this.endDate);
        }
    }

    setCountdown(days) {
        this.countdown = days;
    }

    setKeyStatus(status) {
        this.keyStatus = status;
    }

    setBookingLink(link) {
        this.bookingLink = link;
    }

    setNumberOfBeds(number) {
        this.numberOfBeds = number;
    }

    setWayOfReservation(way) {
        this.wayOfReservation = way;
    }

    setTypeOfRoom(type) {
        this.typeOfRoom = type;
    }

    setListOfAvailablePillows(pillows) {
        this.listOfAvailablePillows = pillows;
    }

    setListOfAvailableMattresses(mattresses) {
        this.listOfAvailableMattresses = mattresses;
    }
}

//get way of resarvation
function getwayOfResarvation(room) {
    var ways = ['card', 'visa', 'bereau', 'ccp'];
    return ways[Math.floor(Math.random() * 4)];
}

function getStatusOfReserved() {
    var val = ['Reserved', 'Unbooked'];
    return val[Math.floor(Math.random() * 2)];
}

function getPosition() {
    var val = ['U', 'L'];
    return val[Math.floor(Math.random() * 2)];
}

function getRandomDuration() {
    // Generate random duration between 1 and 10 days
    return Math.floor(Math.random() * 10) + 1;
}

function getRandomStartDate() {
    // Generate random start date (year-month-day)
    const year = 2024;
    const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
    const day = Math.floor(Math.random() * 28) + 1; // Random day between 1 and 28
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
function getRandomEndDate() {
    // Generate random end date (year-month-day)
    const startDate = new Date(getRandomStartDate());
    const endDate = new Date(startDate.getTime() + (Math.floor(Math.random() * 10) + 1) * 24 * 60 * 60 * 1000); // Add random duration in milliseconds
    return endDate.toISOString().split('T')[0];
}

function calculateDaysBetweenDates(startDate, endDate) {
    var start = new Date(startDate);
    var end = new Date(endDate);

    // حساب الفرق بالملي ثانية
    var difference = end - start;

    // تحويل الفرق من الملي ثانية إلى أيام
    var days = difference / (1000 * 3600 * 24);

    // إرجاع عدد الأيام المحصورة
    return Math.round(days);  // استخدم Math.round للحصول على قيمة صحيحة

}
function calculateEndDate(startDate, duration) {
    var start = new Date(startDate);
    var end = new Date(start.getTime() + (duration) * 24 * 60 * 60 * 1000);
    return end.toISOString().split('T')[0];
}

function getCountdown() {
    // Generate random countdown (days)
    return Math.floor(Math.random() * 10) + 1;
}

function getRandomBookingLink() {
    // Generate random booking link
    return "https://example.com/booking"; // Replace with actual booking link generation logic
}
function getKeyStatusBasedOnReservation(isReserved) {
    return isReserved === "Reserved" ? "Active" : "Inactive";
}


function getRandomResident(isReserved) {
    if (isReserved === 'Unbooked') {
        return "Not booked";
    }

    const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eva",
        "Frank",
        "Grace",
        "Hannah",
        "Ivan",
        "Julia",
        "Kevin",
        "Linda",
        "Michael",
        "Nancy",
        "Olivia"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

//calculateEndDate

function getRandomCountry() {
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

    return countries[(Math.floor(Math.random() * countries.length))];
}

function getRandomGender() {
    const Gender = ['Female', 'Male'];
    return Gender[Math.floor(Math.random() * Gender.length)];
}

class Event {
    employe;
    event;
    date;

    constructor(employe, event, date) {
        this.employe = employe;
        this.event = event;
        this.date = date;
    }
}


class Account {
    userName;
    password;

    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}














































// function generateMenuOfButtons() {
//     var menu = `
//     <div class="logo"></div>
//         <hr class="hr-of-menu">
//         <div class="menu-item" id="rooms" onclick="goToPageOfRooms()"><div class="icon-of-button"><i class="fa-solid fa-door-open"></i></div><div class="text-of-button">Rooms</div></div>
//         <div class="menu-item" id="clock" onclick="getPageOfClock()"><div class="icon-of-button"><i class="fa-solid fa-magnifying-glass"></i></i></div><div class="text-of-button">Search</div></div>
//         <div class="menu-item" id="settings" onclick="generatePageOfSettings()"><div class="icon-of-button"><i class="fa-solid fa-gear"></i></div><div class="text-of-button">Settings</div></div>
//         <div class="menu-item" id="calendar" onclick="getCalendarPage()"><div class="icon-of-button"><i class="fa-regular fa-calendar"></i></div><div class="text-of-button">Calendar</div></div> 
//         `;

//     if (currentUser === 'admin') {
//         menu += `
//         <div class="menu-item" id="historique" onclick="getPageOfArchives()"><div class="icon-of-button"><i class="fa-solid fa-store"></i></div><div class="text-of-button">Archive</div></div>`;
//     }

//     menu += `
//     <div class="menu-item" id="payment" onclick="getPageOfPayment()"><div class="icon-of-button"><i class="fa-regular fa-credit-card"></i></div><div class="text-of-button">Payment</div></div>
//     <hr class="hr-of-menu">
//     <div class="menu-item" id="log-out" onclick="logOut()"><div class="icon-of-button"><i class="fa-solid fa-right-from-bracket"></i></div><div class="text-of-button">Log out</div></div>
//     <div id="div-of-acc">
//         <div class="current-user" id="current-user"></div>
//     </div>
//     `;

//     document.getElementById('menu-of-options').innerHTML = menu;

// }

// document.addEventListener('DOMContentLoaded', function () {
//     // Attach a single event listener to the parent container
//     const menu = document.getElementById('menu-of-options');
//     menu.addEventListener('click', function (event) {
//         const target = event.target.closest('.menu-item');
//         if (target) {
//             makeActive(target);
//             handleMenuAction(target.id);  // Handle actions based on the item id
//         }
//     });

//     generateMenuOfButtons();  // Generate menu on load
// });