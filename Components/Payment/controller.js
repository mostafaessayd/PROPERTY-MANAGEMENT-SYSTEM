//an action that allows creating a table of current guests and displaying their payment information
function createPageOfPayment(LIST_OF_ROOMS) {
  var page = ``;

  page += `
   <div class="half guest-list">
        <div id="part-of-selected-type-paid-in-payment">

        </div>
        <div id="part-of-titles-in-payment">
           <div class="first-name-in-payment">first name</div>
           <div class="last-name-in-payment">last name</div>
           <div class="room-in-payment">room</div>
           <div class="percentage-in-payment">percentage</div>
        </div>
        <div id="part-of-show-guests-in-payment">
            <table>
                <tbody>`;
        for(let i = 0 ; i < LIST_OF_ROOMS.length ; i++){
                    page += `<tr>
                        <td>${1}</td>
                        <td>${1}</td>
                        <td>${1} 101</td>
                        <td>${1}</td>
                    </tr>`;
        }
                page += `</tbody>
            </table>
        </div>
    </div>
    <div class="half invoice">
        
    </div>
  `;

    return page;
}