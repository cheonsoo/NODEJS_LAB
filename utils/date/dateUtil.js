const getDateString = (_date) => {
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
};

const getDateByFormat = (date, format) => {
  var date = getDateString(date);

  switch ( format ) {
      case "YYYY-MM-DD HH:MM:SS":
          return date;
      case "YYYY-MM-DD":
          return date.substr( 0, 10 );
      case "YYYYMMDD":
          return date.substr( 0, 10 ).replace( /-/gi, "" );
      case "YYYYMMDD_HHMMSS":
          return date.replace( /-/gi, "" ).replace( /:/gi, "" ).replace( " ", "_" );
      default: // "YYYYMMDD"
          return date.substr( 0, 10 );
  }
};

const getDateCalculator = (dateString) => {

  let date;
  if ( dateString ) {
      date = new Date( dateString );
  } else {
      date = new Date();
  }

  /*
  if ( days && !isNaN( days ) ) {
      date = new Date( date.setDate( date.getDate() + ( days ) ) );
  }
  */

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

// console.log(getDateString(new Date()));

console.log(getDateByFormat(new Date(), 'YYYYMMDD_HHMMSS'));