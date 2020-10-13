function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
}

setInterval(() => {
  const secondsLeft = Math.round((then Date.now()) / 1000);
if (secondsLeft < 0) {
  clearInterval(countdown);
  return;
}
console.log(secondsLeft);
}, 1000);

function displayTimeLeft(seconds) {
  const minutes = seconds / 60
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0'}`
  console.log(seconds)
}
