const enableWebcamButton = document.getElementById('webcamButton');
const video = document.getElementById('webcam');  // Stream.

enableWebcamButton.addEventListener('click', enableCam);

function enableCam(event) {
  console.log(`start video`);
  // getUsermedia parameters to force video but not audio.
  const constraints = {
    video: true
  };

  // Activate the webcam stream.
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    video.srcObject = stream;
    // video.addEventListener('loadeddata', predictWebcam);
  });
}
