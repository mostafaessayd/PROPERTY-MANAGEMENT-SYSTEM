function generatePageOfModifyAccount(IndexeOfselectedAcount) {
    IndexeOfselectedAcount = 0;
    var listOfAccounts = generateAccount();
    var selectedAcount = listOfAccounts[IndexeOfselectedAcount];
    var page = `
    <div class="PAGE-OF-MODIFY-ACC-CONTAINER">
        <h2>Modify account</h2>
        <form id="MODIFY-ACC-FORM">
            <div class="MODIFY-ACC-FORM-GROUP">
                <label for="EMPLOYEE-NAME-IN-MODIFY-ACC-PAGE">Employee Name</label>
                <input type="text" id="EMPLOYEE-NAME-IN-MODIFY-ACC-PAGE" name="EMPLOYEE-NAME-IN-MODIFY-ACC-PAGE" placeholder="Enter employee name" required>
            </div>
            <div class="MODIFY-ACC-FORM-GROUP">
                <label for="ACC-PASSWORD-IN-MODIFY-ACC-PAGE">Password</label>
                <input type="password" id="ACC-PASSWORD-IN-MODIFY-ACC-PAGE" name="ACC-PASSWORD-IN-MODIFY-ACC-PAGE" placeholder="Enter the password" required>
            </div>
            <div class="MODIFY-ACC-FORM-GROUP">
                <label for="SALARY-IN-MODIFY-ACC-PAGE">Salary</label>
                <input type="number" id="SALARY-IN-MODIFY-ACC-PAGE" name="SALARY-IN-MODIFY-ACC-PAGE" placeholder="Enter Salary" required>
            </div>
            <div class="MODIFY-ACC-FORM-GROUP">
                <label for="STARTHOUR-IN-MODIFY-ACC-PAGE">Start time</label>
                <input type="time" id="STARTHOUR-IN-MODIFY-ACC-PAGE" name="STARTHOUR-IN-MODIFY-ACC-PAGE" required>
            </div>
            <div class="MODIFY-ACC-FORM-GROUP">
                <label for="ENDHOUR-IN-MODIFY-ACC-PAGE">End time</label>
                <input type="time" id="ENDHOUR-IN-MODIFY-ACC-PAGE" name="ENDHOUR-IN-MODIFY-ACC-PAGE" required>
            </div>
            <button type="submit" class="submit-btn">Confirm</button>
            <button type="submit" class="submit-btn">Ignore</button>
            <button type="submit" class="submit-btn">Delete account</button>
        </form>
    </div>
    `;

    document.getElementById('MODIFY-ACC-PAGE').innerHTML = page;
    document.getElementById('EMPLOYEE-NAME-IN-MODIFY-ACC-PAGE').value = selectedAcount.userName;
    document.getElementById('ACC-PASSWORD-IN-MODIFY-ACC-PAGE').value = selectedAcount.password;
    document.getElementById('SALARY-IN-MODIFY-ACC-PAGE').value = selectedAcount.salary;
}

generatePageOfModifyAccount();