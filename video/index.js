var ffmpeg = require("ffmpeg");
const path = require("path");
try {
  var process = new ffmpeg("sample.mp4");
  process.then(
    function (video) {
      // Video metadata
    video.fnAddWatermark("./assets/overlay.jpeg", "output.mp4",{position:"SE"}, function (err, file) {
     if (err) {
      console.log("Error in adding image",err);
     }
     else {
       console.log("Done");
       return;
     }
    })
      console.log(video.metadata);
      // FFmpeg configuration
      console.log(video.info_configuration);
    },
    function (err) {
      console.log("Error: " + err);
    }
  );
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}