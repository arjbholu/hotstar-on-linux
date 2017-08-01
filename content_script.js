// $('#player-src').val("Ok");
var id, jsonR;
chrome.storage.local.get('url', function (result) {
    var url = result.url;
    var len = url.length;
    id = url.substring(len-10);
    jsonR = "https://getcdn.hotstar.com/AVS/besc?action=GetCDN&asJson=Y&channel=TABLET&id="+id+"&type=VOD";
    console.log(jsonR);
    $.ajax({
	  type: 'GET',
	  dataType: 'json',
	  data: {},
	  url: jsonR,
	  success: function (msg) {
	    console.log(msg["resultObj"]["src"]);
	    ret = msg["resultObj"]["src"];
	    $('#player-src').val(msg["resultObj"]["src"]);
	    $('#player-start').click();
	  },
	  fail: function() {
	  	console.log("fail");
	  }
	});
});