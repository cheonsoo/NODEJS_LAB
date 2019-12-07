var phantom = require('phantom');

phantom.create([]);

// phantom.create(function(ph) {
//     return ph.createPage(function(page) {
//         return page.open("http://blog.saltfactory.net", function(status) {
//             return page.evaluate((function() {
//                 return document.getElementById('side_today_count').textContent;
//             }), function(side_today_count) {
//                 console.log("오늘의 방문자 수 : " + side_today_count);
//                 return ph.exit();
//             });

//         });
//     });
// });
