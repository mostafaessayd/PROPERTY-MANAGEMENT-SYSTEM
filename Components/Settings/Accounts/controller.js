// get current account
function getCurrentAccount() {
    return generateAccount();
}

// get page of accounts
function generatePageOfAccountsInSettings() {
    var listOfAccounts = getCurrentAccount();
    var rem = listOfAccounts.length % 3;
    var page = ``;
    for(let i = 0 ; i < listOfAccounts.length - rem ; i += 3) {
        page += `<div class="DIV-OF-ACC-IN-SETTINGS">
                     <div class="CARD-OF-ACC" style="margin-right: 30px;">
                         <div class="TOP-NAME-OF-ACC">Employee ${i + 1}</div>
                         <div class="IMAGE-OF-ACC"></div>
                         <div class="BOTTOM-NAME-OF-ACC">
                             ${listOfAccounts[i].userName}
                         </div>
                     </div>
                     <div class="CARD-OF-ACC">
                     <div class="TOP-NAME-OF-ACC">Employee ${i + 2}</div>
                         <div class="IMAGE-OF-ACC"></div>
                         <div class="BOTTOM-NAME-OF-ACC">
                             ${listOfAccounts[i + 1].userName}
                         </div>
                     </div>
                     <div class="CARD-OF-ACC" style="margin-left: 30px;">
                     <div class="TOP-NAME-OF-ACC">Employee ${i + 3}</div>
                         <div class="IMAGE-OF-ACC"></div>
                         <div class="BOTTOM-NAME-OF-ACC">
                             ${listOfAccounts[i + 2].userName}
                         </div>
                     </div>
                </div>`;
    }
    
    var pageOfRemainAccount = ``;
    var i = listOfAccounts.length - rem;
    if(rem == 0) {
        pageOfRemainAccount = `<div class="DIV-OF-ACC-IN-SETTINGS">
                                 <div class="CARD-OF-ADD-ACC" style="margin-right: 30px;">
                                     <div class="TOP-NAME-OF-ACC"></div>
                                     <div class="IMAGE-OF-ACC" style="background-image: url('../../../View/src/images/add acc.png');></div>
                                     <div class="BOTTOM-NAME-OF-ACC">Add account</div>
                                 </div>
                              </div>`;
    } else {
        if(rem == 1) {
            pageOfRemainAccount += `<div class="DIV-OF-ACC-IN-SETTINGS">
                                         <div class="CARD-OF-ACC" style="margin-right: 30px;">
                                         <div class="TOP-NAME-OF-ACC">Employee ${i + 1}</div>
                                         <div class="IMAGE-OF-ACC"></div>
                                         <div class="BOTTOM-NAME-OF-ACC">
                                             ${listOfAccounts[i].userName}
                                         </div>
                                         </div>
                                         <div class="CARD-OF-ADD-ACC">
                                             <div class="TOP-NAME-OF-ACC"></div>
                                             <div class="IMAGE-OF-ACC" style="background-image: url('../../../View/src/images/add acc.png');></div>
                                             <div class="BOTTOM-NAME-OF-ACC">Add account</div>
                                         </div>
                                    </div>`;
        } else {
            pageOfRemainAccount += `<div class="DIV-OF-ACC-IN-SETTINGS">
                     <div class="CARD-OF-ACC" style="margin-right: 30px;">
                         <div class="TOP-NAME-OF-ACC">Employee ${i + 1}</div>
                         <div class="IMAGE-OF-ACC"></div>
                         <div class="BOTTOM-NAME-OF-ACC">
                             ${listOfAccounts[i].userName}
                         </div>
                     </div>
                     <div class="CARD-OF-ACC">
                     <div class="TOP-NAME-OF-ACC">Employee ${i + 2}</div>
                         <div class="IMAGE-OF-ACC"></div>
                         <div class="BOTTOM-NAME-OF-ACC">
                             ${listOfAccounts[i + 1].userName}
                         </div>
                     </div>
                     <div class="CARD-OF-ADD-ACC" style="margin-left: 30px;">
                         <div class="TOP-NAME-OF-ACC"></div>
                         <div class="IMAGE-OF-ACC" style="background-image: url('../../../View/src/images/add acc.png');></div>
                         <div class="BOTTOM-NAME-OF-ACC">Add account</div>
                     </div>
                </div>`;
        }
    }

    page += pageOfRemainAccount;
    document.getElementById('ACC-SETTINGS-PAGE').innerHTML = page;
}

generatePageOfAccountsInSettings();