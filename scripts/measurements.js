/*      NOTES
document.getElementById('inject').innerHTML = 'HELLO THERE';

- We are asking the document (that we are linked to) to seek an element by their ID.  We then pass in a parameter of the name we have declared to that ID.  Once that element is located, we set in a method to inject HTML with innerHTML.  Once this process is completed, we are equaling that action to the string 'Hello There'.

*/

// Setting variables for getting values
time = document.getElementById('todayIS');
item = document.getElementById('item');
qty = document.getElementById('qty');
est = document.getElementById('est');
table = document.getElementById('displayedInfo');
inject = document.getElementById('inject');
endDate = document.getElementById('endDate');
rightNow = new Date().toDateString()


// tickTime = (x) => {
//     console.log(x)
// }

// setInterval(tickTime(rightNow), 1000); 

// Would like for the table to not display if there is nothing there.
// (inject !== '') ? table.style.display = hidden : table.style.display = block;


// FORM SUBMIT
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    time.innerHTML = `Today is: ${rightNow}`;
    
    goods = item.value;
    onHand = qty.value;
    eatMeals = est.value;    
    
    willLast(onHand, eatMeals);
    
    // console.log(`${onHand} cans of ${goods} will be eaten ${eatMeals} times per week.  Here is the ration count: ${ration}.`)
    
    // Create Elements
    tr = document.createElement('tr');
    tdOne = document.createElement('td');
    tdTwo = document.createElement('td');
    tdThree = document.createElement('td');
    tdFour = document.createElement('td');

    // Assign Attributes
    tr.setAttribute("id", "bodyRows")
    tdFour.setAttribute("id", "countCans")

    // Inject values
    tdOne.innerHTML = goods;
    tdTwo.innerHTML = onHand;
    tdThree.innerHTML = eatMeals;
    tdFour.innerHTML = `${ration} days`;
    
    // Append
    inject.appendChild(tr)
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);
   
    countCans()
    // console.log('Total Days: ', countCans());

    // Creating a sum total:
    endDate.innerHTML = `You will Survive ${countCans()} days.`
    // console.log(rightNow + ration)

    clearForm();
})

let cans = [],

willLast = (y,z) => {
        daily = y / z
        ration = daily * 7 ;
        // console.log(`Weekly rations are: ${Math.floor(ration)}. `);
        //Adding totals to an array so I can map over it.
        cans.push(ration)
        // console.log(cans)
        return Math.floor(ration);
    }

countCans = () => {
    let countingCans = 0;
    
    for(let i = 0; i < cans.length; i++) {
        countingCans += cans[i];
    };

    return(countingCans);

}



// CLEAR THE FORM
clearForm = () => {
    document.getElementById('form').reset();
}

