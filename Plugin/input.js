document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get video input and text input values
    const videoInput = document.getElementById('videoInput').files[0];
    const textInput = document.getElementById('textInput').value;

    // Ensure both video and text are provided
    if (!videoInput || !textInput) {
        alert("Please provide both a video and some text.");
        return;
    }

    // Create a video element to display the uploaded video
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = "";  // Clear any previous video content

    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.src = URL.createObjectURL(videoInput);
    videoContainer.appendChild(videoElement);

    // Create a text element to display the entered text
    const textContainer = document.getElementById('textContainer');
    textContainer.textContent = textInput;

    // Scroll to output section
    window.scrollTo({
        top: document.getElementById('output').offsetTop,
        behavior: 'smooth'
    });
});
