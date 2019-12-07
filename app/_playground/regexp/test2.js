/*
hsgwportal02 : Content match
check_groupware_log :
content match:
10월 31 03:29:03 오후
ERROR - CalendarController.deleteSchedule(1775)
########################################## http://portal.gshs.co.kr/lightpack/meetingroom/booking/app.do
10월 31 03:35:59 오후
ERROR - NewGoogleDataServiceImpl.googleCreate(198)
java.lang.NullPointerException10월 31 03:35:59 오후
ERROR - CalendarController.create(1631)
googleCreateException : null10월 31 05:02:24 오후
ERROR - NewGoogleDataServiceImpl.googleCreate(198)
java.lang.NullPointerException Show more
 */

// const txt = 'hsgwportal02 : Content matchcheck_groupware_log : content match:10월 31 03:29:03 오후 ERROR - CalendarController.deleteSchedule(1775)                          ########################################## http://portal.gshs.co.kr/lightpack/meetingroom/booking/app.do10월 31 03:35:59 오후 ERROR - NewGoogleDataServiceImpl.googleCreate(198)                          java.lang.NullPointerException10월 31 03:35:59 오후 ERROR - CalendarController.create(1631)                          googleCreateException : null10월 31 05:02:24 오후 ERROR - NewGoogleDataServiceImpl.googleCreate(198)                          java.lang.NullPointerException Show more';
const txt = '11월 08 06:09:46 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405) |                           com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized';

// var reg = /^([^\ ]*\ /)[/]?(.*)/gi;
// var reg = new RegExp(/^([^\ ]*\ /)[/]?(.*)/, 'i');
// var reg = new RegExp("ERROR - (.*)/(", "gi");

// var reg = /ERROR - .*?\(/gi;
var reg = new RegExp('ERROR - .*?\\(.*?\\)', 'gi');

var result = txt.match( reg );
console.log( result );
