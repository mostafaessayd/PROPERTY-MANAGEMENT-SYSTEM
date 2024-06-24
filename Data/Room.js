class Room {
    statusOfBeds = [];
    positionOfBeds = [];
    residentOfBeds = [];
    durationOfReservationOfBeds = [];
    startDateOfResidentInBeds = [];

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
    
    constructor(floorNumber, roomNumber) {
        
        this.numberOfBeds = 2 + Math.floor(Math.random() * 7);
        // this.NumberOfFemaleBeds = Math.floor(Math.random * this.numberOfBeds + 1);
        // this.NumberOfMaleBeds = this.numberOfBeds - this.NumberOfFemaleBeds;
     
        
        this.NumberOfFemaleBeds = Math.floor(Math.random()*(this.numberOfBeds + 1));
        this.NumberOfMaleBeds = this.numberOfBeds - this.NumberOfFemaleBeds;

        this.statusOfMixed = this.getRandomStatus();
    
        this.floorNumber = floorNumber;
        this.VipTax = Math.floor(Math.random()*100);
        this.Corrections = Math.floor(Math.random()*100);
        this.roomNumber = roomNumber;
        this.id = this.floorNumber.toString() + '-' + this.roomNumber.toString();
        this.isReserved = getStatusOfReserved();
        this.resident = getRandomResident(this.isReserved);
        this.price = 0;
        this.startDate = getRandomStartDate();
        this.endDate = getRandomEndDate();

        if(isDate1GreaterThanDate2(this.startDate , this.endDate)){
            var temp = this.startDate;
            this.startDate = this.endDate;
            this.endDate = temp;
        }
        
        this.durationOfReservation = calculateDaysBetweenDates(this.startDate, this.endDate);
        this.countdown = getCountdown();
        this.keyStatus = this.isReserved;
        this.bookingLink = getRandomBookingLink();
        this.residentEmail = '';
        this.wayOfReservation = getwayOfResarvation(this);
        this.typeOfRoom = 'normal';
        this.countryOfResident = getRandomCountry();
        this.genderOfResident = getRandomGender();
        this.totalPayment = 100 + Math.floor(Math.random() * 900);
        this.remaningPayment = Math.floor(Math.random() * this.totalPayment);
        this.paidPayment = this.totalPayment - this.remaningPayment;


        for(let i = 0 ; i < this.numberOfBeds ; i++) {
          this.statusOfBeds[i] = this.getRandomStatus();
          // this.positionOfBeds[i] = getPosition();
           this.positionOfBeds[i] = "dkdkd";
            if(this.statusOfBeds[i] === true) {
                 this.startDateOfResidentInBeds[i] = getRandomStartDate();
                var fn = getRandomResident('Reserved');
                var ln = getRandomResident('Reserved');
                var cont = getRandomCountry();
                var em = fn + ln + '@gmail.com';
                var cr = 123345656 + Math.floor(Math.random() * 12344567);
                var arv = "00 : 00 pm";
                var dr = 5 + Math.floor(Math.random() * 90);
                 
                 this.residentOfBeds[i] = new Resident(fn , ln , em , cont , arv , cr , dr);
                this.durationOfReservationOfBeds[i] = 1 + Math.floor(Math.random() * 200);;
            }
        }
    }

     getRandomStatus () {
        var ans = [true , false];
        return ans[Math.floor(Math.random() * ans.length)];
    }

    setCreditCardNumber(value) {
     this.creditCardNumber = value;
    }

    setArrivalTime(value){
      this.arrivalTime = value;
    }
    setSnacks(value){
        this.snacks = value;
    }

    setChairs(value){
        this.chairs = value;
    }
    setNumberOfBeds(value){
        this.numberOfBeds = value;
      }

    setCountryOfResident(value){
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