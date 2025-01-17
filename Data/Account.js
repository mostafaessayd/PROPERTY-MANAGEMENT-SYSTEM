class Account {
    userName;
    password;
    image;
    salary;
    startHour;
    endHour;
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.image = 'f1.png';
        this.salary = 0;
        this.startHour = 22;
        this.endHour = 9;
    }
}