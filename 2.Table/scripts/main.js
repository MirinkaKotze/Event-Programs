// LESSON 31 - EVENTS 
// 2. Create an html-page with a large table. 
//   When clicking the column heading, it is necessary to sort data of that column. 
//   Note that numerical values should be sorted as numbers, not as strings.

// POINTERS:
const table = document.getElementById('table');
const countryHeading = document.getElementById('countryHeading');
const cityHeading = document.getElementById('cityHeading');
const dateVisitedHeading = document.getElementById('dateVisitedHeading');
const city = document.getElementsByClassName('city');
const country = document.getElementsByClassName('country');

// FUNCTION TO SORT COUNTRY COLUMN
function sortData () {
    // select all elements execpt for table heading
    const list = table.querySelectorAll('tr:nth-child(n+2)');
    // change the list from a nodelist to an array
    const listArray = Array.from(list);
    // function to sort array --> comparing text from Row1 to text from row2, changing their indexes & returning them at a new position.
    const sortedArray = listArray.sort(function(a, b) {
        if (a.innerText == b.innerText) {
            return 0;
        }
        else if (a.innerText > b.innerText) {
            return 1;
        }
        else if (a.innerText < b.innerText) {
            return -1;
        }
    });
    // add sorted array back to table
    for (let i = 0; i < sortedArray.length; ++i) {
        table.appendChild(sortedArray[i]);
    }
}

// FUNCTION TO SORT CITY COLUMN
function sortCity() {
    // adding a hidden class to all the country elements
    for (let i = 0; i < country.length; i++) {
            country[i].classList.add('hidden');
        } 
    // call sort data function     
    sortData()
    // removing hidden class to all country elements
    for (let i = 0; i < country.length; i++) {
        country[i].classList.remove('hidden');
    }  
}

// FUNCTION TO SORT DATE VISITED COLUMN
function sortDateVisited() {
     // adding a hidden class to all the country and city elements
    for (let i = 0; i < country.length; i++) {
            country[i].classList.add('hidden');
            city[i].classList.add('hidden');
        }           
    // call sort data function      
    sortData()
     // removing hidden class to all country and city elements
    for (let i = 0; i < country.length; i++) {
        country[i].classList.remove('hidden');
        city[i].classList.remove('hidden');
    }  
}

// CALLING FUNCTIONS ON CLICK
countryHeading.addEventListener('click', sortData);
cityHeading.addEventListener('click', sortCity);
dateVisitedHeading.addEventListener('click', sortDateVisited);
