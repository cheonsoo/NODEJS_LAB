const getDateCalculator = ( dateString, days ) => {

  let date;
  if ( dateString ) {
      date = new Date( dateString );
  } else {
      date = new Date();
  }

  if ( days && !isNaN( days ) ) {
      date = new Date( date.setDate( date.getDate() + ( days ) ) );
  }

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

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const date_string = getDateString("2019-01-01 10:22:33", 11 );
console.log( date_string );
