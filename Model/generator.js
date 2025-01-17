// list of random names
const names = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "Sophia", "Amelia", "Mason",
    "Charlotte", "James", "Isabella", "Benjamin", "Mia", "Elijah", "Harper",
    "Lucas", "Evelyn", "Alexander", "Aria", "William", "Ella", "Logan",
    "Grace", "Jackson", "Scarlett", "Aiden", "Emily", "Ethan", "Luna", "Oliver"
  ];

function generateRandomPasswords() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const passwords = [];
    const passwordLength = 12;
  
    while (passwords.length < 30) {
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      
      if (!passwords.includes(password)) {
        passwords.push(password);
      }
    }
  
    return passwords;
}

// function to generate random accounts
function generateAccount() {
    var accounts = [];
    var passwords = generateRandomPasswords();
    var n = 3 + Math.floor(Math.random() * 10);
    for(let i = 0 ; i < n ; i++) {
        accounts[i] = new Account(names[i] , passwords[i]);
    }
    return accounts;
}