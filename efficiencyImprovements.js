// function to display current time
function displayCurrentTime() {
    // setting variables
    var today = new Date()
    var ampm = today.getHours() >= 12 ? ' PM' : ' AM';
    // getting date and assigning it to currentDate
    var currentDate = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(); 
    // getting current time, and adding it to existing value for currentDate
    currentDate = currentDate + " - " +  today.getHours( )+ ":" +  today.getMinutes() + ":" +  today.getSeconds() + ampm;
    // adjust the contents of what is ID'd 'time'
    document.getElementById('time').innerHTML = "The time is: " + currentDate;
    // invokes refreshTime() function
    refreshTime();
    }
    // function to refresh the time and set refresh rate
    function refreshTime(){
        // refresh rate is milliseconds
        var refresh=1000; 
        mytime=setTimeout('displayCurrentTime()',refresh)
    }
// invokes the refreshTime() function
refreshTime()
