var data = [
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/94/53/img/202003191020339091.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074269453,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/57/77/img/202003180913483281.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265777,
    "seq": 1,
    "alt": "contents_1",
    "video": true,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/85/63/img/202003190554536711.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074268563,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/75/92/img/202003190215326971.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074267592,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/67/75/img/202003190853315421.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074266775,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/65/69/img/202003191257555741.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074266569,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/57/77/img/202003180913483281.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265777,
    "seq": 1,
    "alt": "contents_1",
    "video": true,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/57/77/img/202003180913483281.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265777,
    "seq": 1,
    "alt": "contents_1",
    "video": true,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  },
  {
    "thumb": "https://test-contents.lotteon.com/reviewimage/40/00/00/74/26/54/85/img/202003180804103831.jpg/dims/resize/255X255/cropcenter/170X170",
    "rvNo": 40000074265485,
    "seq": 1,
    "alt": "contents_1",
    "video": false,
    "vdoFullUrl": ""
  }
];

var videos = [];
var images = [];
data.forEach(item => {
  if (item.video) videos.push(item)
  else images.push(item)
});
console.log(videos);
// console.log(images);

for (let i=0; i<videos.length; i++) {
  images.splice(i*3, 0, videos[i]);
}

for (let i=0; i<images.length; i++) {
  console.log(images[i].video);
}