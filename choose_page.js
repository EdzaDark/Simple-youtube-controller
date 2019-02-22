window.onload = function() {
  chrome.tabs.query({url: '*://www.youtube.com/watch?v*'}, function(tabs) {
  var firstYouTube = tabs[0];
	    	chrome.tabs.sendMessage(firstYouTube.id, {"message": "request_video_data"}, function(response) {
          var statuscheck = response.statuscheck;
	    		if (!(response === undefined)) {
            if (response.statuscheck === false){
              document.getElementById("play").firstElementChild.className = "fas fa-pause text";              
            }
            else if (response.statuscheck === true){
              document.getElementById("play").firstElementChild.className = "fas fa-play text";
            }
					
				}
      });
    });
}
document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("btn")) {
      return;
    }
    chrome.tabs.query({url: '*://www.youtube.com/watch?v*'}, function(tabs) { // Gets all tabs with youtube playing a video   
    var firstYouTube = tabs[0]; // If there are multiple tabs with youtube playing videos just take the first one
    var element = document.getElementById("play").firstElementChild.className;    
    if (e.target.id === "play" ) {      
      chrome.tabs.sendMessage(firstYouTube.id, {"message": "pause"});// Sends a message to content.js to pause  the  video
      if (element === 'fas fa-play text') {        
        document.getElementById("play").firstElementChild.className = "fas fa-pause text";        
      }
      else if(element === 'fas fa-pause text') {        
        document.getElementById("play").firstElementChild.className = 'fas fa-play text';
      }
    }
    else if (e.target.id === "next"){
      chrome.tabs.sendMessage(firstYouTube.id, {"message": "next"});
    }
   else if (e.target.id === "loop") {
    chrome.tabs.sendMessage(firstYouTube.id, {"message": "loop"});
   }
   else if (e.target.id === "back"){   
    chrome.tabs.sendMessage(firstYouTube.id, {"message": "back"});    
   }
  });
	});
    