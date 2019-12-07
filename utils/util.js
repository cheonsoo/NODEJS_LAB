const timeToWait = 3000;

function delay() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`delayed ...`);
            resolve(true);
        }, timeToWait);
    });
    return promise;
}

const getDateString = () => {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
      day = day < 10 ? `0${day}` : day;
  let hours = date.getHours();
      hours = hours < 10 ? `0${hours}` : hours;
  let minutes = date.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = date.getSeconds();
      seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
};

console.log(getDateString());

const fns = {
    delay: delay
};

module.exports = fns;