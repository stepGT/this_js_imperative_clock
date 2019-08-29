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
  // 
  return time.h + ":" + time.m + ":" + time.s + " " + time.f;
}