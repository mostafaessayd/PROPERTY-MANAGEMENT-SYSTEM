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
        this.addAccount('mostafa' , '1');
        this.addAccount('mohamed' , '1');
        this.addAccount('wassim' , '1');
        this.addAccount('younes' , '1');
        this.addAccount('khayro' , '1');
    }

    generateListOfRooms() {
        this.listOfRooms = [];
        for (let i = 1; i <= 40; i++) {
            for (let j = 1; j <= 100; j++) {
                var room = new Room(i, j);
                this.listOfRooms.push(room);
            }
        }
    }

    generateArchive() {
        this.archives = [];
        
    }

    addEventInArchives(employe, event , date) {
        var newEvent = new Event(employe, event , date);
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

