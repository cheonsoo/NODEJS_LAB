const data = [
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-08T09:09:48.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 08 06:09:46 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized11월 08 06:09:46 오후 ERROR - NewGoogleDataServiceImpl.googleCreate(198)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-08T09:24:32.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 5547"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-08T09:26:53.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 5574"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-09T05:14:45.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 08 06:40:00 오후 ERROR - SendMessengerFileServiceImpl.sendSyncFile(60)                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ERROR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~nullIDC@hsgwmap02APP 2:14 PMhsgwmap02 : Content matchcheck_groupware_log : content match:Title : (광고) 뉴타닉스에서 XTour Seoul 2019에 초대합니다. (11월 14일, 그랜드 인터컨)"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-09T13:49:24.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 09 06:40:00 오후 ERROR - SendMessengerFileServiceImpl.sendSyncFile(60)                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ERROR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~nullIDC@hsgwmap01APP 10:30 PMhsgwmap01 : Does not existapp_tomcat : process is not runninghsgwmap01 : Existsapp_tomcat : process is running with pid 28975IDC@hsgwmap01APP 10:48 PMhsgwmap01 : Does not existapp_tomcat : process is not runninghsgwmap01 : Existsapp_tomcat : process is running with pid 32387IDC@hsgwmap02APP 10:49 PMhsgwmap02 : Does not existapp_tomcat : process is not runninghsgwmap02 : Existsapp_tomcat : process is running with pid 30204"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-10T01:30:05.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 10 10:30:00 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          25. Statement.executeQuery(SELECT 1 FROM DUAL) FAILED! SELECT 1 FROM DUAL {FAILED after 31 msec}11월 10 10:30:00 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          25. Connection.close()"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-10T03:10:32.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 10 12:10:00 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          23. Statement.executeQuery(SELECT 1 FROM DUAL) FAILED! SELECT 1 FROM DUAL {FAILED after 19 msec}11월 10 12:10:00 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          23. Connection.close()"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-10T06:27:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 10 03:26:24 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          26. Statement.executeQuery(SELECT 1 FROM DUAL) FAILED! SELECT 1 FROM DUAL {FAILED after 0 msec}11월 10 03:26:24 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          26. Connection.close()"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-10T09:40:09.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 10 06:40:00 오후 ERROR - SendMessengerFileServiceImpl.sendSyncFile(60)                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ERROR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-11T00:07:57.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 11 09:07:23 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-11T02:43:29.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 11 11:42:38 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-11T06:07:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 11 03:06:23 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 11 03:06:23 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-11T06:52:43.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 11 03:52:35 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-11T07:56:00.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 11 04:51:36 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorizedhsgwportal01 : Content matchcheck_groupware_log : content match:11월 11 04:55:43 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-11T09:40:16.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 11 06:40:00 오후 ERROR - SendMessengerFileServiceImpl.sendSyncFile(60)                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ERROR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-11T23:20:00.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 08:19:34 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          8. ResultSet.getObject(GOOGLE_CAL_ID)11월 12 08:19:38 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          8. ResultSet.getObject(GOOGLE_CAL_ID)11월 12 08:19:44 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          16. ResultSet.getObject(GOOGLE_CAL_ID)"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T00:03:12.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 09:03:04 오전 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T00:13:15.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 09:13:03 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-12T00:19:00.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 12 09:18:50 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 12 09:18:50 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T01:06:28.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 10:06:09 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 12 10:06:09 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-12T02:52:40.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 12 11:51:56 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T06:53:00.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 03:52:36 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T07:38:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 04:37:00 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 04:37:16 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T07:43:13.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 04:42:46 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-12T08:45:10.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 12 05:44:46 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T10:04:50.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 07:04:02 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21189"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T11:02:05.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 22347"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T11:18:09.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 12 08:17:20 오후 ERROR - NewGoogleDataServiceImpl.googleDelete(320)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 410 Gone"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-12T15:58:00.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:10월 31 03:29:03 오후 ERROR - CalendarController.deleteSchedule(1775)                          ########################################## http://portal.gshs.co.kr/lightpack/meetingroom/booking/app.do10월 31 03:35:59 오후 ERROR - NewGoogleDataServiceImpl.googleCreate(198)                          java.lang.NullPointerException10월 31 03:35:59 오후 ERROR - CalendarController.create(1631)                          googleCreateException : null10월 31 05:02:24 오후 ERROR - NewGoogleDataServiceImpl.googleCreate(198)                          java.lang.NullPointerException Show more"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-12T15:58:19.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:10월 31 03:28:39 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283310월 31 03:28:39 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P106710월 31 04:08:45 오후 ERROR - NewGoogleDataServiceImpl.googleCreate(198)                          java.lang.NullPointerException10월 31 04:08:45 오후 ERROR - CalendarController.create(1631)                          googleCreateException : null Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-13T12:18:41.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 28681"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-13T12:21:17.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 11111"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-13T12:43:43.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 09:39:54 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 09:43:03 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-13T14:32:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:27:28 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 13 11:27:46 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:31:43 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-13T14:55:18.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:40:20 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:44:02 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:45:07 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:48:07 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:50:03 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:50:35 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 13 11:54:59 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-13T23:48:09.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 08:48:03 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T00:11:15.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 09:06:45 오전 ERROR - NewGoogleDataServiceImpl.googleDelete(320)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 09:08:59 오전 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 09:10:33 오전 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T00:15:43.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:15:02 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T00:30:52.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:24:04 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:27:11 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:28:17 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:30:07 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T00:31:20.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 09:30:22 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T00:34:53.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:34:02 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T00:37:22.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 09:36:30 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T00:38:54.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:37:55 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T00:48:57.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 09:48:22 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T01:07:02.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 10:06:29 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 14 10:06:29 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 14 10:06:37 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 14 10:06:37 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T01:10:35.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 10:07:05 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection resethsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 10:10:28 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T01:24:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 10:19:28 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 10:21:07 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 14 10:21:30 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 10:21:43 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 10:24:31 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T01:33:08.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 10:32:18 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 14 10:32:54 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 14 10:33:02 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T01:44:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 10:43:15 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 14 10:43:15 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 14 10:43:38 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 14 10:43:38 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null Show more"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T01:49:13.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 10:49:11 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 14 10:49:11 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T02:00:16.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 10:58:35 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 11:00:15 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T02:08:18.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 11:07:45 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 14 11:07:45 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T02:11:51.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 11:11:34 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T02:30:24.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 11:30:05 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T02:42:59.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 11:42:19 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T02:52:02.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 11:48:01 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 11:50:42 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 14 11:50:53 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 11:52:00 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T02:52:30.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 11:52:11 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T04:32:56.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 01:32:28 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T04:50:01.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 01:49:30 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T04:56:02.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 01:55:21 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T04:59:35.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 01:59:08 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T05:00:04.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 01:59:14 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T05:27:42.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 02:26:46 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T05:44:46.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 02:44:04 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T05:50:53.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 02:49:34 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 02:49:54 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T05:57:19.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 02:57:00 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T06:12:59.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:12:09 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T06:13:23.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 03:12:53 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized11월 14 03:12:53 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T06:17:00.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:16:25 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T06:28:03.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:23:44 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:25:34 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:27:36 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T06:40:30.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 03:37:57 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 03:40:27 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T06:43:07.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:40:33 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:42:01 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 03:42:41 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T06:50:33.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 03:49:53 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 14 03:50:22 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T07:04:12.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:03:13 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T07:33:20.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:29:34 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:32:22 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T07:33:44.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 04:33:28 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T07:37:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:36:28 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T07:45:23.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:45:04 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T07:55:50.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 04:55:49 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T08:00:27.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:56:49 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:58:17 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:58:54 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 04:59:32 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 14 05:00:04 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T08:03:52.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 05:02:56 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T08:04:28.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:03:34 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T08:29:35.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:27:41 오후 ERROR - BoardItemController.autoMatchPic(487)                          Auto Match PIC:nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:29:00 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T08:45:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:37:34 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:38:09 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:39:42 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:43:14 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:44:14 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 14 05:44:26 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:44:56 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T08:50:05.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 05:49:42 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T08:55:06.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 05:54:54 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T09:01:43.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 05:58:48 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 06:00:35 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 06:01:41 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T09:06:09.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 06:05:06 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 06:05:43 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 14 06:05:58 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T09:16:47.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 06:16:43 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T09:34:16.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 06:33:36 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T10:00:23.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 14 06:59:44 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T10:09:00.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 07:08:48 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-14T10:22:04.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 07:17:40 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 07:19:11 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 07:20:56 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 14 07:21:48 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-14T23:53:59.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 08:53:29 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T00:00:01.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 08:59:47 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T00:09:34.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 09:08:57 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T00:24:07.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:12:51 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerException11월 15 09:12:59 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerException11월 15 09:13:04 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:13:43 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:16:05 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:16:09 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerException11월 15 09:16:17 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          java.lang.NullPointerExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:20:23 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 15 09:20:23 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:22:58 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:23:43 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T00:24:38.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 09:24:24 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T00:26:08.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:25:16 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T00:31:40.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 09:30:53 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T00:38:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:33:31 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:37:29 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T00:43:13.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:43:10 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T00:45:43.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 09:44:44 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T00:56:16.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:52:45 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:55:05 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 09:55:17 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 15 09:55:27 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T01:02:48.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:00:03 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 15 10:00:03 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 15 10:00:14 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 15 10:00:14 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null Show morehsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:02:33 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 15 10:02:33 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T01:06:19.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:02:28 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:03:37 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:05:44 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T01:07:49.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:06:51 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 15 10:07:26 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T01:16:52.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:15:42 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:16:00 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T01:23:23.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:22:20 오전 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:22:43 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 15 10:22:49 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 15 10:22:55 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T01:29:55.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:29:10 오전 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0];"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T01:35:26.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:35:18 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T01:36:57.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 10:36:40 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T01:41:28.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 10:40:46 오전 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T02:04:04.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 11:03:57 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T02:37:43.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 11:37:25 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T02:42:44.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 11:42:04 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 15 11:42:14 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 15 11:42:24 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T02:50:16.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 11:49:40 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          14. ResultSet.getString(SENDER_USER_MOBILE)"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T03:07:18.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 11:54:36 오전 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 15 11:55:08 오전 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullIDC@hsgwmap02APP 12:02 PMhsgwmap02 : Does not existapp_tomcat : process is not runninghsgwmap02 : Existsapp_tomcat : process is running with pid 21875IDC@hsgwmap01APP 12:03 PMhsgwmap01 : Does not existapp_tomcat : process is not runninghsgwmap01 : Existsapp_tomcat : process is running with pid 3606IDC@hsgwmap02APP 12:04 PMhsgwmap02 : Does not existapp_tomcat : process is not runninghsgwmap02 : Existsapp_tomcat : process is running with pid 22407IDC@hsgwmap01APP 12:05 PMhsgwmap01 : Does not existapp_tomcat : process is not runninghsgwmap01 : Existsapp_tomcat : process is running with pid 4200hsgwmap01 : Does not existapp_tomcat : process is not runninghsgwmap01 : Existsapp_tomcat : process is running with pid 4650"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T03:35:58.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 12:32:10 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 12:35:47 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway11월 15 12:35:47 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway11월 15 12:35:47 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway11월 15 12:35:49 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T03:36:28.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 12:35:47 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway11월 15 12:35:48 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway11월 15 12:35:50 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:502 Bad Gateway"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T03:47:01.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 12:46:05 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T03:57:04.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 12:56:17 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null11월 15 12:56:26 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T04:07:36.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 01:04:52 오후 ERROR - CalendarController.create(1668)                          googleCreateException : nullhsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 01:06:43 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null11월 15 01:07:31 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T04:13:08.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 01:10:12 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : nullhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 01:12:53 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 15 01:13:00 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T04:18:10.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 01:18:06 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T04:19:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 01:18:44 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T04:20:10.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 01:19:58 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T04:31:42.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 01:31:10 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T04:41:16.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 01:41:12 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T04:48:46.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 01:48:21 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T04:56:48.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 01:56:47 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T04:57:20.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 01:56:49 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T05:34:30.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 02:33:39 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T05:46:33.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 02:45:51 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T05:52:03.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 02:51:02 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T06:04:06.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 03:00:30 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results.hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 03:03:42 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T06:07:38.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 03:07:15 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T06:13:08.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 03:12:54 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T06:23:11.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 03:22:42 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0];"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T06:27:44.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 03:24:57 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 03:26:58 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T07:07:54.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 04:07:02 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T07:18:25.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 04:18:21 오후 ERROR - CalendarController.updateNew(1773)                          googleUpdateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T07:24:59.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 04:24:10 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T07:38:02.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 04:37:45 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T08:26:42.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 05:26:29 오후 ERROR - CalendarController.create(1668)                          googleCreateException : SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0];"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T08:32:16.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 05:31:51 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T08:54:22.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 05:53:58 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T09:14:28.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 06:14:17 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          13. PreparedStatement.execute() FAILED!   SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;  /* [CallForward_User_SqlMap.xml] lightpack.callFoward.dao.getUser */   SELECT    a.ID as id,    a.USER_ID as userId,       a.USER_NAME as userName,       a.SHCHEDULE_STATUS as scheduleStatus,       a.START_TIME as startTime,       a.END_TIME as endTime,       a.CREATE_TIME as createTime,       a.UPDATE_TIME as up..."
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T09:30:32.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 06:30:12 오후 ERROR - CalendarController.create(1668)                          googleCreateException : null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T09:56:49.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 19799"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T09:57:36.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 7624"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T10:07:42.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:06:47 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:D3595 - I/O error: Unexpected end of file from server; nested exception is java.net.SocketException: Unexpected end of file from server"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T10:21:12.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 15 07:20:21 오후 ERROR - CallForwardServiceImpl.turnOff(98)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T10:29:47.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:29:32 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - I/O error: Unexpected end of file from server; nested exception is java.net.SocketException: Unexpected end of file from server"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T10:39:50.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:34:06 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - I/O error: Unexpected end of file from server; nested exception is java.net.SocketException: Unexpected end of file from serverhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:34:58 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:39:17 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - I/O error: Unexpected end of file from server; nested exception is java.net.SocketException: Unexpected end of file from server"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T10:45:52.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:45:48 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - I/O error: Unexpected end of file from server; nested exception is java.net.SocketException: Unexpected end of file from server"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T10:57:55.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:51:12 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:54:34 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 15 07:56:58 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T11:10:04.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 11862"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T11:13:29.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 24583"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T18:24:20.000Z",
        "errorMessage" : "hsgwportal01 : Heartbeat failedmonit : No report from Monit for 33 seconds: the network, the host or Monit is down. Last report was 16 Nov 2019 03:23:47 +0900"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T18:24:40.000Z",
        "errorMessage" : "hsgwportal02 : Heartbeat failedmonit : No report from Monit for 35 seconds: the network, the host or Monit is down. Last report was 16 Nov 2019 03:23:55 +0900hsgwportal02 : Heartbeat recoverymonit : Monit status report received successfully"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T18:24:55.000Z",
        "errorMessage" : "hsgwportal01 : Heartbeat recoverymonit : Monit status report received successfully"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T18:31:14.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 16 03:30:19 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          20. ResultSet.next()"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T19:30:20.000Z",
        "errorMessage" : "hsgwportal01 : Heartbeat failedmonit : No report from Monit for 33 seconds: the network, the host or Monit is down. Last report was 16 Nov 2019 04:29:47 +0900"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T19:30:20.000Z",
        "errorMessage" : "hsgwportal02 : Heartbeat failedmonit : No report from Monit for 32 seconds: the network, the host or Monit is down. Last report was 16 Nov 2019 04:29:48 +0900"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-15T19:30:25.000Z",
        "errorMessage" : "hsgwportal01 : Heartbeat recoverymonit : Monit status report received successfully"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-15T19:30:25.000Z",
        "errorMessage" : "hsgwportal02 : Heartbeat recoverymonit : Monit status report received successfully"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-17T23:57:35.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 08:56:42 오전 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T00:41:47.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 09:36:16 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 18 09:36:21 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 09:37:07 오전 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 09:40:49 오전 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T00:50:49.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 09:45:57 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 18 09:45:58 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedExceptionhsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 09:48:24 오전 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:D3595 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 09:50:40 오전 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-18T03:11:27.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 18 10:59:13 오전 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 UnauthorizedIDC@hsgwmap01APP 12:09 PMhsgwmap01 : Does not existapp_tomcat : process is not runninghsgwmap01 : Existsapp_tomcat : process is running with pid 26396IDC@hsgwmap02APP 12:11 PMhsgwmap02 : Does not existapp_tomcat : process is not runninghsgwmap02 : Existsapp_tomcat : process is running with pid 4989"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T03:14:57.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 23517"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T04:27:46.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 01:27:02 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T05:15:08.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 01:43:50 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 01:44:08 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server Error11월 18 01:44:37 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server ErrorIDC@hsgwmap01APP 1:59 PMhsgwmap01 : Monit instance changedmonit : Monit reloadedIDC@hsgwmap02APP 2:01 PMhsgwmap02 : Monit instance changedmonit : Monit reloadedIDC@hsgwmap01APP 2:03 PMhsgwmap01 : Content matchcheck_clienterror_log : content match:TEST_ClientErrorhsgwmap01 : Content matchcheck_mailerror_log : content match:TEST_MailErrorhsgwmap01 : Content matchcheck_ehrerror_log : content match:TEST_EhrErrorIDC@hsgwmap02APP 2:07 PMhsgwmap02 : Content matchcheck_clienterror_log : content match:TEST_ClientErrorIDC@hsgwmap02APP 2:14 PMhsgwmap02 : Content matchcheck_mailerror_log : content match:TEST_MailErrorhsgwmap02 : Content matchcheck_ehrerror_log : content match:TEST_EhrError"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T05:57:10.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 02:56:14 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:50505 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-18T06:35:31.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 18 03:34:50 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-18T07:05:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 18 04:05:27 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T07:43:38.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 04:43:15 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 18 04:43:15 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-18T09:02:09.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 18 06:01:50 오후 ERROR - CallForwardServiceImpl.turnOff(98)                          Call Forward Api - User:50505 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-18T10:05:16.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 18 07:05:09 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:D3458 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T00:02:58.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 09:01:51 오전 ERROR - CallForwardServiceImpl.turnOn(75)                          Call Forward Api - User:50505 - 500 Internal Server Errorhsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 09:02:12 오전 ERROR - CallForwardServiceImpl.turnOn(75)                          Call Forward Api - User:D3458 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T00:25:58.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 09:25:12 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 19 09:25:12 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T01:02:13.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 10:01:20 오전 ERROR - CallForwardServiceImpl.turnOn(75)                          Call Forward Api - User:21245 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T01:13:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 10:06:44 오전 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 10:10:18 오전 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 10:11:33 오전 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 10:12:36 오전 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T01:30:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 10:29:52 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T02:31:32.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 11:31:24 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T04:29:37.000Z",
        "errorMessage" : "hsgwportal01 : Heartbeat failedmonit : No report from Monit for 33 seconds: the network, the host or Monit is down. Last report was 19 Nov 2019 13:20:57 +0900hsgwportal01 : Heartbeat recoverymonit : Monit status report received successfullyhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 01:22:48 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedExceptionhsgwportal01 : Link downnic_eth2 : link downhsgwportal01 : Link upnic_eth2 : link upIDC@hsgwmap01APP 1:28 PMhsgwmap01 : Link downnic_eth2 : link downhsgwmap01 : Link upnic_eth2 : link up"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T04:30:07.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 01:29:27 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T05:23:19.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 02:22:44 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T06:17:34.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 03:16:39 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T07:21:51.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 04:12:56 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:D3595 - I/O error: 연결 시간 초과; nested exception is java.net.ConnectException: 연결 시간 초과11월 19 04:13:42 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:21245 - I/O error: 연결 시간 초과; nested exception is java.net.ConnectException: 연결 시간 초과hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 04:16:05 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 04:19:12 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 04:20:11 오후 ERROR - CallForwardController.disable(170)                          Call Forward Api - User:21245 - 500 Internal Server Errorhsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 04:21:42 오후 ERROR - CallForwardController.enable(141)                          Call Forward Api - User:21245 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T07:46:58.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 04:46:23 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T08:03:02.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 05:02:19 오후 ERROR - CallForwardServiceImpl.turnOff(98)                          Call Forward Api - User:21245 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T09:03:18.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 06:02:55 오후 ERROR - CallForwardServiceImpl.turnOff(98)                          Call Forward Api - User:50505 - 500 Internal Server Error"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T09:04:18.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 06:03:53 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T09:21:22.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 06:20:48 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T09:55:11.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 23956"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T09:58:03.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 12191"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T11:02:49.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 08:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-6855-3559, email=soonkee@gsshop.com}11월 19 08:01:14 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}11월 19 08:01:34 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}...hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 08:01:53 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T12:02:04.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 09:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-6855-3559, email=soonkee@gsshop.com}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 09:01:15 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}11월 19 09:01:35 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}11월 19 09:01:55 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}..."
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-19T13:02:19.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 10:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-6855-3559, email=soonkee@gsshop.com}11월 19 10:01:15 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 19 10:01:35 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}11월 19 10:01:55 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-19T14:02:37.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 11:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-6855-3559, email=soonkee@gsshop.com}11월 19 11:01:15 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}11월 19 11:01:34 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}...hsgwportal01 : Content matchcheck_groupware_log : content match:11월 19 11:01:53 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T00:02:14.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:01:00 오전 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:01:20 오전 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T04:38:18.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 01:37:48 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T05:02:24.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 02:01:26 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T06:02:49.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 03:01:53 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T06:14:53.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 03:13:53 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T06:48:01.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 03:47:13 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 20 03:47:13 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T07:09:07.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 04:04:22 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 20 04:04:22 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 04:08:33 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T07:22:00.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 04:21:50 오후 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T08:02:21.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 05:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}11월 20 05:01:20 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 05:01:41 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T08:06:12.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 05:05:32 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T09:02:27.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}11월 20 06:01:20 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4003-3979, email=leehm@gsshop.com}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:01:40 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-4332-0418, email=thenm@it.gsshop.com}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T09:36:35.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:34:24 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          4. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '21588', CURRENT_TIMESTAMP)    {FAILED after 14 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:35:39 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          20. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22806', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T09:37:47.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 06:37:17 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          3. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '21657', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T09:45:38.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:37:37 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          4. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10298', CURRENT_TIMESTAMP)    {FAILED after 2 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:41:49 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'D3494', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:45:32 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          16. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23321', CURRENT_TIMESTAMP)    {FAILED after 0 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T09:54:51.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 06:46:41 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          10. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22786', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 06:50:48 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '21980', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 06:52:59 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          20. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23312', CURRENT_TIMESTAMP)    {FAILED after 2 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 06:53:55 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          15. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10980', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T09:55:41.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 06:55:16 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22934', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T10:04:43.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:00:53 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          16. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22125', CURRENT_TIMESTAMP)    {FAILED after 1 msec}11월 20 07:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(70)                          Call Forward Api - User:{phoneNumber=010-3710-0522, email=werini@gsshop.com}...hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:03:28 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          8. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10283', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:04:26 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          18. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22974', CURRENT_TIMESTAMP)    {FAILED after 0 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T10:09:55.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:06:39 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '00040', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:08:19 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          20. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '56647', CURRENT_TIMESTAMP)    {FAILED after 2 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:09:34 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '20875', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T10:19:58.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:19:02 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          6. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23187', CURRENT_TIMESTAMP)    {FAILED after 1 msec}11월 20 07:19:25 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          10. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '20105'… Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T10:20:47.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:20:03 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          8. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '01014', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T10:28:00.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:22:50 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '20643', CURRENT_TIMESTAMP)    {FAILED after 5 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:25:15 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '60680', CURRENT_TIMESTAMP)    {FAILED after 1 msec}11월 20 07:25:17 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '51327… Show morehsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:26:06 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '21150', CURRENT_TIMESTAMP)    {FAILED after 1 msec}11월 20 07:26:11 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '20082… Show morehsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:27:45 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22824', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T10:28:49.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:27:56 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          16. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22634', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T10:35:51.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:35:04 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          4. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'G0133', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T10:48:55.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:46:08 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23186', CURRENT_TIMESTAMP)    {FAILED after 6 msec}11월 20 07:46:19 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          18. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '21391… Show morehsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:47:54 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'admin', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:48:50 오후 ERROR - CallForwardController.enable(142)                          Call Forward Api - User:D3595 - [nullset-forwarding-enable] is not a valid HTTP URL"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T10:49:06.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:48:55 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '59785', CURRENT_TIMESTAMP)    {FAILED after 6 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T10:51:56.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:49:24 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          11. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'D3595', CURRENT_TIMESTAMP)    {FAILED after 16 msec}11월 20 07:49:33 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - [nullset-forwarding-disable] is not a valid HTTP URL...hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:50:18 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - [nullset-forwarding-disable] is not a valid HTTP URLhsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:51:07 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - [nullset-forwarding-disable] is not a valid HTTP URL11월 20 07:51:40 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - [nullset-forwarding-disable] is not a valid HTTP URL"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T10:54:07.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 07:53:07 오후 ERROR - CallForwardController.disable(172)                          Call Forward Api - User:D3595 - [nullset-forwarding-disable] is not a valid HTTP URL"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T11:01:08.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:54:08 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          17. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22573', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:56:55 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          17. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22941', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 07:59:49 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorizedhsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 28854"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T11:04:10.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 08:01:00 오후 ERROR - CallForwardServiceImpl.turnOn(87)                          Call Forward Apihsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 15684"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T11:05:59.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 08:05:07 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22713', CURRENT_TIMESTAMP)    {FAILED after 6 msec}11월 20 08:05:26 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22984… Show more"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T11:10:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 08:10:00 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10253', CURRENT_TIMESTAMP)    {FAILED after 5 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T11:39:19.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 08:38:42 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '17468', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T11:49:11.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 08:48:10 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23204', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T11:49:22.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 08:48:26 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          15. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23100', CURRENT_TIMESTAMP)    {FAILED after 1 msec}11월 20 08:49:07 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          19. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22939… Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T12:05:15.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 09:04:28 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          16. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22977', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T12:22:31.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:21:42 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          20. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23142', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T12:27:32.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:26:55 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          15. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '01013', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T12:28:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 09:28:13 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          18. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'P1054', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-20T12:33:22.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 20 09:32:50 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T12:38:35.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:38:27 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          13. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'D2300', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T12:54:39.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:44:10 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22823', CURRENT_TIMESTAMP)    {FAILED after 1 msec}11월 20 09:44:36 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          11. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'D1305… Show morehsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:48:27 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          15. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '23362', CURRENT_TIMESTAMP)    {FAILED after 1 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:51:00 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          13. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10459', CURRENT_TIMESTAMP)    {FAILED after 0 msec}hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 09:53:57 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '20807', CURRENT_TIMESTAMP)    {FAILED after 2 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T13:00:41.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 10:00:15 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          11. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10120', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T13:17:45.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 10:17:35 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          20. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '10335', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T13:22:47.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 10:21:55 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          15. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'D3520', CURRENT_TIMESTAMP)    {FAILED after 5 msec}"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-20T13:42:52.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 20 10:42:05 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          11. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', 'G0093', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T00:08:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 09:05:01 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 09:07:42 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          12. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '22603', CURRENT_TIMESTAMP)    {FAILED after 6 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T00:46:31.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 09:45:49 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 21 09:45:49 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T01:05:36.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 10:05:18 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T01:13:53.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 21 10:13:33 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T01:14:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 10:13:56 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T01:22:41.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 10:22:32 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T01:32:44.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 10:32:28 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T01:41:46.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 10:37:01 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 22945hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 10:40:56 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T02:25:02.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 11:24:12 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(128)                          21. PreparedStatement.execute() FAILED!       INSERT INTO IKEP4_BD_REFERENCE /* [Board_Reference_SqlMap.xml] lightpack.board.dao.boardReference.insert */             (ITEM_ID, REGISTER_ID, REGIST_DATE)     VALUES ('191124000000', '21976', CURRENT_TIMESTAMP)    {FAILED after 1 msec}"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T02:37:11.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 11:36:15 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 21 11:36:18 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 21 11:36:18 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException11월 21 11:36:18 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T04:16:37.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 01:16:09 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T04:25:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 01:22:47 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 21 01:22:47 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 01:25:27 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T04:34:42.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 01:34:32 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T04:44:44.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 01:43:59 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T07:50:59.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 01:55:47 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not FoundIDC@hsgwmap02APP 4:51 PMhsgwmap02 : Content matchcheck_mailerror_log : content match:16:50:47.864 [ajp-bio-7009-exec-12] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 20786 || Page : 3 || folderId : AQMkADg5ZDQwZDgzLTMxZTQtNGNiMi04M2IyLWNjAGYzZTllNWJkMmUALgAAA/DkbKsK2+9AimndMVt+kqcBAHAJqiHsrVZMgHqbHBIbVHYAAAIBDQAAAA=="
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T08:19:46.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 21 05:19:08 오후 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          19. ResultSet.getString(SENDER_USER_MOBILE)"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T08:25:42.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 05:24:49 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T08:45:37.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 22293"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T08:48:23.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 29447"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T09:02:52.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 06:01:52 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T09:12:24.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 26211"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T09:15:41.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 605"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T10:34:16.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 2286"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T10:59:52.000Z",
        "errorMessage" : "hsgwportal02 : Does not existapp_tomcat : process is not runninghsgwportal02 : Existsapp_tomcat : process is running with pid 4937"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T11:02:29.000Z",
        "errorMessage" : "hsgwportal01 : Does not existapp_tomcat : process is not runninghsgwportal01 : Existsapp_tomcat : process is running with pid 9625"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T11:06:24.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 08:06:00 오후 ERROR - CallForwardServiceImpl.turnOff(178)                          java.sql.SQLException: Error: executeQueryForObject returned too many results. - SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0]; Error: executeQueryForObject returned too many results.; nested exception is java.sql.SQLException: Error: executeQueryForObject returned too many results.11월 21 08:06:00 오후 ERROR - CallForwardServiceImpl.turnOff(202)                          java.sql.SQLException: Error: executeQueryForObject returned too many results. - SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0… Show more"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T11:34:37.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 21 08:34:01 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch11월 21 08:34:01 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch11월 21 08:34:23 오후 ERROR - RunnablePost.run(44)                          Call Forward Api"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-21T12:05:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 21 09:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch11월 21 09:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-21T23:01:36.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 08:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T00:01:53.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 09:01:02 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 22 09:01:02 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T00:17:57.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 09:17:28 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T00:29:00.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 09:28:33 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T01:01:09.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 10:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 22 10:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T02:05:26.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 11:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 22 11:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batchhsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 11:05:09 오전 ERROR - NewGoogleDataServiceImpl.googleDelete(320)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T02:16:29.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 11:15:59 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-22T02:20:19.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 22 11:19:42 오전 ERROR - ApprWorkDocController.viewApprDoc(1863)                          com.lgcns.ikep4.framework.common.exception.IKEP4AuthorizedException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T02:29:33.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 11:28:36 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 22 11:29:31 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T02:40:41.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 11:40:07 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T04:19:06.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 01:18:56 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-22T05:03:01.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 22 02:01:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batchhsgwportal02 : Content matchcheck_groupware_log : content match:11월 22 02:02:03 오후 ERROR - RunnablePost.run(44)                          Call Forward Api"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-22T06:59:32.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 22 03:58:44 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T07:03:50.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 04:01:43 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 04:03:46 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T07:52:03.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 04:47:08 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 04:51:32 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-22T08:05:49.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 22 05:05:05 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch11월 22 05:05:05 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-22T08:19:52.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 22 05:19:36 오후 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 401 Unauthorized"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T08:59:21.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 05:55:10 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 05:56:24 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 05:58:33 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-22T09:05:23.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 22 06:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch11월 22 06:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-24T23:01:36.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 08:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T00:01:19.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 09:01:04 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 25 09:01:04 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T00:03:53.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 09:03:27 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 22945"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T00:13:23.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 09:13:00 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T00:30:00.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 09:29:03 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          10. ResultSet.getString(SENDER_USER_MOBILE)"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T00:33:28.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 09:32:48 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T00:37:02.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 09:36:32 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset11월 25 09:36:32 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T00:38:29.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 09:37:38 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T00:46:31.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 09:45:48 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T01:01:35.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 10:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 25 10:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T01:43:20.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 10:39:32 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 25 10:39:32 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 10:43:04 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 25 10:43:04 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T01:51:22.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 10:50:27 오전 ERROR - Slf4jSpyLogDelegator.exceptionOccured(105)                          9. ResultSet.getObject(GOOGLE_CAL_ID)"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T02:01:24.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 11:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T02:02:51.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 11:02:40 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T02:28:32.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 11:27:37 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 25 11:27:37 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T02:39:06.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 11:38:09 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T04:14:31.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 01:14:10 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 25 01:14:10 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T04:20:01.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 01:19:12 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T04:44:39.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 01:44:13 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T04:50:40.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 01:49:57 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T05:01:12.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 02:01:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T05:11:15.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 02:10:30 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T05:16:47.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 02:16:25 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T05:22:18.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 02:21:57 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T05:24:49.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 02:24:47 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T05:57:44.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 02:31:33 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not FoundIDC@hsgwmap02APP 2:52 PMhsgwmap02 : Content matchcheck_mailerror_log : content match:14:51:53.964 [ajp-bio-7009-exec-7] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:52:02.979 [ajp-bio-7009-exec-14] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:52:04.799 [ajp-bio-7009-exec-21] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:52:05.604 [ajp-bio-7009-exec-15] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB Show morehsgwmap02 : Content matchcheck_mailerror_log : content match:14:53:00.382 [ajp-bio-7009-exec-7] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:53:00.385 [ajp-bio-7009-exec-17] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:53:00.386 [ajp-bio-7009-exec-14] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:53:00.388 [ajp-bio-7009-exec-21] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB Show morehsgwmap02 : Content matchcheck_mailerror_log : content match:14:56:43.795 [ajp-bio-7009-exec-21] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:56:43.797 [ajp-bio-7009-exec-15] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:56:43.798 [ajp-bio-7009-exec-14] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:56:43.800 [ajp-bio-7009-exec-17] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB Show morehsgwmap02 : Content matchcheck_mailerror_log : content match:14:56:43.856 [ajp-bio-7009-exec-21] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:56:43.858 [ajp-bio-7009-exec-17] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:56:43.860 [ajp-bio-7009-exec-15] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB14:56:44.216 [ajp-bio-7009-exec-14] ERROR c.l.i.m.m.r.r.ews.MailRestful - [MailError] UserId : 22248 || Page : 1 || folderId : URB Show more"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T06:22:04.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 03:22:03 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T06:33:07.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 03:32:29 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T07:01:15.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 04:01:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 25 04:01:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T07:26:21.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 04:25:55 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 25 04:26:04 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T07:47:27.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 04:46:44 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T08:05:31.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 05:04:28 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection resethsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 05:05:01 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch11월 25 05:05:01 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T09:05:18.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 06:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch11월 25 06:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T09:23:22.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 06:22:56 오후 ERROR - MeetingRoomRestful.isRoomReserve(138) |11월 25 06:23:03 오후 ERROR - MeetingRoomRestful.isRoomReserve(138) |"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T09:25:52.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 25 06:24:59 오후 ERROR - MeetingRoomRestful.isRoomReserve(138) |11월 25 06:25:11 오후 ERROR - MeetingRoomRestful.isRoomReserve(138) |11월 25 06:25:12 오후 ERROR - MeetingRoomRestful.isRoomReserve(138) |11월 25 06:25:17 오후 ERROR - MeetingRoomRestful.isRoomReserve(138) |"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-25T09:30:24.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 25 06:29:45 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21266"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-25T23:01:22.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 08:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T00:01:11.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 09:01:03 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch11월 26 09:01:03 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T00:32:45.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 09:31:29 오전 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection resethsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 09:32:25 오전 ERROR - RequestContextAwareTag.doStartTag(86)                          null"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T00:45:23.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 09:45:10 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 26 09:45:10 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T01:01:27.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 10:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch11월 26 10:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T01:32:35.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 10:29:05 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Foundhsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 10:32:12 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T01:48:40.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 10:47:40 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T02:01:08.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 11:01:00 오전 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-enable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T02:18:53.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 11:14:35 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 26 11:14:35 오전 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 11:18:00 오전 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T02:25:15.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 11:24:54 오전 ERROR - NewGoogleDataServiceImpl.exportCreateSchedule(405)                          java.lang.NullPointerException"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T05:27:43.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 02:27:14 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 26 02:27:14 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T05:51:08.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 02:50:39 오후 ERROR - ApprMainController.getCountContract(287)                          Contract Call api:I/O error: Connection reset; nested exception is java.net.SocketException: Connection reset"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T05:51:49.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 02:51:08 오후 ERROR - NewGoogleDataServiceImpl.googleDelete(320)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T06:51:10.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 03:50:21 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T07:01:13.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 04:00:44 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2126611월 26 04:00:45 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 23060"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T07:38:23.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 04:37:54 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T07:50:26.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 04:49:33 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 2283311월 26 04:49:33 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : P1067"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T08:05:35.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 05:05:24 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T08:05:43.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 05:05:03 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batch11월 26 05:05:03 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T08:46:46.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 05:46:36 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T08:48:54.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 05:48:00 오후 ERROR - ApprAdminFormServiceImpl.getApprReferenceList(476)                          appr system reference [user groupId] error : 21189"
    },
    {
        "sender" : "IDC@hsgwportal01APP",
        "date" : "2019-11-26T08:51:47.000Z",
        "errorMessage" : "hsgwportal01 : Content matchcheck_groupware_log : content match:11월 26 05:50:54 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found11월 26 05:51:14 오후 ERROR - NewGoogleDataServiceImpl.exportUpdateSchedule(497)                          com.google.api.client.googleapis.json.GoogleJsonResponseException: 404 Not Found"
    },
    {
        "sender" : "IDC@hsgwportal02APP",
        "date" : "2019-11-26T09:05:59.000Z",
        "errorMessage" : "hsgwportal02 : Content matchcheck_groupware_log : content match:11월 26 06:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.33:10010/api/set-forwarding-disable-batch11월 26 06:05:00 오후 ERROR - RunnablePost.clientResponsePost(74)                          Call Forward Api:http://10.52.216.32:10010/api/set-forwarding-disable-batchnew messages"
    }
];

data.forEach(item => {
    item.errorMessage.split(' : ').forEach();
});