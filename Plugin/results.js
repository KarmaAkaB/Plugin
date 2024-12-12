function updateText() {
    // Get values from the controls
    var fontSize = document.getElementById('fontSize').value;
    var fontColor = document.getElementById('fontColor').value;
    var newText = document.getElementById('textContent').value;

    // Apply changes to the heading and text
    document.getElementById('heading').style.fontSize = fontSize + "px";
    document.getElementById('heading').style.color = fontColor;
    
    document.getElementById('text').style.fontSize = fontSize + "px";
    document.getElementById('text').style.color = fontColor;

    if (newText !== "") {
        document.getElementById('text').textContent = newText;
    }
}
