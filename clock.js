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
  return 1 + ":" + 22 + ":" + 30 + " " + 'AM';
}