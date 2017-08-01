function clickHandler(e) {
  chrome.tabs.create({url: "https://www.hlsplayer.net/"});
}

// function ajaxCall() {
//   var ret;
//   $.ajax({
//       type: 'GET',
//       dataType: 'jsonp',
//       data: {},
//       url: "http://getcdn.hotstar.com/AVS/besc?action=GetCDN&asJson=Y&channel=TABLET&id=2001904753&type=VOD",
//       success: function (msg) {
//         // var x = JSON.parse(msg)
//           console.log(msg["resultObj"]["src"]);
//           ret = msg["resultObj"]["src"];
//           // getSourceAsDOM("https://www.hlsplayer.net/");
//       }
//   });
//   return ret;
// }

document.addEventListener('DOMContentLoaded', function() {
  var pText = document.getElementById('text1');
  var reqUrl;
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var tab = tabs[0];
    console.log(tab.url);
    reqUrl = tab.url;
    chrome.storage.local.set({ "url": reqUrl }, function(){
        //  A data saved callback omg so fancy
    });
  });
  pText.innerHTML = "OK!";
  var button = document.getElementById('redirect').addEventListener('click', clickHandler);
  // var urlTo = ajaxCall();
  // pText.innerHTML = urlTo;
  // sessionStorage["abc"] = "xyz";
  // console.log(sessionStorage["abc"]);
});

