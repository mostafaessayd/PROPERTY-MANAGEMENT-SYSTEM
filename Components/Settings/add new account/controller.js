function generatePageOfAddNewAccount() {
    var page = `
    <div class="PAGE-OF-ADD-ACC-CONTAINER">
        <h2>Add account</h2>
        <form id="ADD-ACC-FORM">
            <div class="ADD-ACC-FORM-GROUP">
                <label for="EMPLOYEE-NAME">Employee Name</label>
                <input type="text" id="EMPLOYEE-NAME" name="EMPLOYEE-NAME" placeholder="Enter employee name" required>
            </div>
            <div class="ADD-ACC-FORM-GROUP">
                <label for="ACC-PASSWORD">Password</label>
                <input type="password" id="ACC-PASSWORD" name="ACC-PASSWORD" placeholder="Enter the password" required>
            </div>
            <div class="ADD-ACC-FORM-GROUP">
                <label for="SALARY">Salary</label>
                <input type="number" id="SALARY" name="SALARY" placeholder="Enter Salary" required>
            </div>
            <div class="ADD-ACC-FORM-GROUP">
                <label for="STARTHOUR">Start time</label>
                <input type="time" id="STARTHOUR" name="STARTHOUR" required>
            </div>
            <div class="ADD-ACC-FORM-GROUP">
                <label for="ENDHOUR">End time</label>
                <input type="time" id="ENDHOUR" name="ENDHOUR" required>
            </div>
            <button type="submit" class="submit-btn">Confirm</button>
            <button type="submit" class="submit-btn">Ignore</button>
        </form>
    </div>
    `;

    document.getElementById('ADD-ACC-PAGE').innerHTML = page;
}

generatePageOfAddNewAccount();