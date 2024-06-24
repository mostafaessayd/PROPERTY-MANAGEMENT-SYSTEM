class Resident {
    firstName;
    lastName;
    email;
    country;
    arrivalTime;
    creditCardNumber;
    durationOfReservation;
    totalPayment;
    remaningPayment;
    paidPayment;
    startDate;
    birthdate;
    
    constructor(firstName , lastName , email ,
        country , arrivalTime , creditCardNumber , durationOfReservation , startDate
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
        this.arrivalTime = arrivalTime;
        this.creditCardNumber = creditCardNumber;
        this.durationOfReservation = durationOfReservation;
        this.totalPayment = 100 + Math.floor(Math.random() * 900);
        this.remaningPayment = Math.floor(Math.random() * this.totalPayment);
        this.paidPayment = this.totalPayment - this.remaningPayment;
        this.startDate = startDate; 
    }
}