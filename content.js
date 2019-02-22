chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) { 

        if(request.message === "pause") {
         var video = document.getElementsByTagName("video")[0];
         
            if (video.paused) {                
                video.play();                
            }
            else {                
                video.pause();
            }
        }
        else if (request.message === "loop") {
            var video = document.getElementsByTagName("video")[0];
            video.currentTime = 1;            
        }
        else if (request.message === "next") {
            document.querySelector(".ytp-next-button.ytp-button").click();
        }
        else if (request.message === "back") {
            window.history.back();
        }
        else if (request.message === "request_video_data") {
            var video = document.getElementsByTagName("video")[0];            
            var statuscheck = video.paused;
            sendResponse({"statuscheck": statuscheck}); 
        }
    }
);