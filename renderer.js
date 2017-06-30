// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var enabled = false;
// Use require to add webcamjs
var WebCamera = require("webcamjs");

//var remote = require('remote'); // Load remote component that contains the dialog dependency
//var dialog = remote.require('dialog'); // Load the dialogs component of the OS
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)


document.getElementById("start").addEventListener('click',function(){
   if(!enabled){ // Start the camera !
     enabled = true;
     WebCamera.attach('#camdemo');
     console.log("The camera has been started");
   }else{ // Disable the camera !
     enabled = false;
     WebCamera.reset();
    console.log("The camera has been disabled");
   }
},false);

// return an object with the processed base64image
/*
function processBase64Image(dataString) {
      var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),response = {};

      if (matches.length !== 3) {
          return new Error('Invalid input string');
      }

      response.type = matches[1];
      response.data = new Buffer(matches[2], 'base64');

      return response;
}
*/
document.getElementById("savefile").addEventListener('click',function(){
     if(enabled){
            WebCamera.snap(function(data_uri) {
                // Save the image in a variable
                debugger;
                //var imageBuffer = processBase64Image(data_uri);
                var imgShot = document.querySelector('.imgShot');
                imgShot.setAttribute('src', data_uri);
             });
     }else{
            console.log("Please enable the camera first to take the snapshot !");
     }
},false);
