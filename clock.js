// Display every second
setInterval(showClock, 1000);

/**
 *
 */
function showClock() {
  // Getting the line of the clock in civil format
  let time = getClock();
  // Clearing the console and displaying the clock
  console.clear();
  console.log(time);
}

/**
 *
 * @returns {string}
 */
function getClock() {
  // Get now date
  let date = new Date();
  // Get time
  let time = {
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    f: "AM"
  };
  // Convert time to civilian format
  if (time.h === 12) {
    time.f = "PM";
  }
  else if (time.h > 12) {
    time.f = "PM";
    time.h -= 12;
  }
  // Prepend a 0 on the hours to make double digits
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }
  // prepend a 0 on the minutes to make double digits
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }
  // prepend a 0 on the seconds to make double digits
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  // Format the clock time as a string "hh:mm:ss tt"
  return time.h + ":" + time.m + ":" + time.s + " " + time.f;
}