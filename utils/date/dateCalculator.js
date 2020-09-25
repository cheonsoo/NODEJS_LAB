const getDateString = _date => {
  try {
    if (!_date) _date = new Date();

    let year = _date.getFullYear();
    let month = _date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = _date.getDate();
    day = day < 10 ? `0${day}` : day;
    let hours = _date.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = _date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = _date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};

const getDateCalculator = (dateString, days) => {
  let date;
  if (dateString) {
    date = new Date(dateString);
  } else {
    date = new Date();
  }

  if (days && !isNaN(days)) {
    date = new Date(date.setDate(date.getDate() + days));
  }

  return getDateString(date);
};

const date_string = getDateCalculator('2019-01-01 10:22:33', 11);
console.log(date_string);

module.exports = {
  dateCal: getDateCalculator,
  dateStr: getDateString
};
