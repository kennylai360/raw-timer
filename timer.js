
var is12hourClock;

if (window.localStorage.getItem('is12HourClock')) {
  var is12hourClock = window.localStorage.getItem('is12HourClock');
} else {
  var is12HourClock = false;
}

function buttonClick() {
  is12hourClock = !is12hourClock;
  window.localStorage.setItem('is12HourClock', is12hourClock)
  displayTime(is12hourClock);
}

function displayTime() {
  const dateObj = new Date();
  const dateToSet = dateObj.toLocaleDateString();
  const timeToSet = dateObj.toLocaleTimeString(undefined, {hour12: is12hourClock, hour: "numeric", minute: 'numeric', second: 'numeric'});
  document.getElementById('timer').textContent = timeToSet;
  document.getElementById('date').textContent = dateToSet;
}

setInterval(displayTime, 1000)