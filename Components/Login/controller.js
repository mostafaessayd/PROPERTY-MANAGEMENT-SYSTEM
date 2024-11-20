const accounts = [
    {name: "John Doe", img: "../../View/src/images/logo.jpg"},
    {name: "Jane Smith", img: "https://via.placeholder.com/30"},
    {name: "Michael Johnson", img: "https://via.placeholder.com/30"},
    {name: "Sarah Williams", img: "https://via.placeholder.com/30"}
];


const dropdown = document.getElementById('dropdown');

function showAllAccounts() {
    dropdown.innerHTML = '';
    dropdown.style.display = 'block';

    accounts.forEach(account => {
        const accountItem = document.createElement('div');
        accountItem.className = 'account-item';
        accountItem.innerHTML = `
            <img src="${account.img}" alt="${account.name}">
            <span>${account.name}</span>
        `;
        dropdown.appendChild(accountItem);
    });
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-container')) {
        dropdown.style.display = 'none';
    }
});