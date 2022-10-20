// Calling out body elements that we are gonna manipulate
let daysEl = document.querySelector('.days')
let hoursEl = document.querySelector('.hours')
let minutesEl = document.querySelector('.minutes')
let secondsEl = document.querySelector('.seconds')
let h1Element = document.querySelector('h1')

// countDown to New Year 
function countDown(){
    // new instance of the built-in date function for time now
    var dateNow = new Date();

    // getting time in milliseconds since 1970 til now
    var now = dateNow.getTime();
    
    // getting the current time year and increasing it by 1 to get the next year
    var calculatedNextYear =dateNow.getFullYear() +1;

    // new instance of date function of the next year using the variable we've created
    var nextYear = new Date(calculatedNextYear, 0, 1 );

    // getting time in milliseconds
    var future = nextYear.getTime();

    // storing the difference in milliseconds between the two times
    let distance =future - now;

    // converting milliseconds to days, hours, minutes, seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var  seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    // updating the UI using the data we obtained
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
    h1Element.innerHTML = calculatedNextYear;
    
}
// now we call the function every second to keep the calender up and running
setInterval(countDown, 1000);



