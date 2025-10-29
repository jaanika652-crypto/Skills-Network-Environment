let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    document.getElementById("output").innerHTML = "";
    
    // Start timer
    startTime = new Date().getTime();
    }
    function endTest() {
        endTime = new Date().getTime();
    
        // Disable user input
        document.getElementById("userInput").readOnly = true;
    
        // Calculate time elapsed and words per minute (WPM)
        var timeElapsed = (endTime - startTime) / 1000; // in seconds
        var userTypedText = document.getElementById("userInput").value;
    
        // Calculate total length of the typed text
        var textLength = userTypedText.length;
    
        // Split the text using regex to count words correctly
        var typedWords = userTypedText.split(/\s+/).filter(function(word) {
            return word.length > 0;  // Filter out empty strings
        });
    
        var wordCount = typedWords.length;
        var wpm = (wordCount / timeElapsed) * 60;
    
        // Display results including total length
        document.getElementById("output").innerHTML = 
            `Time elapsed: ${timeElapsed.toFixed(2)} seconds<br>` +
            `Words typed: ${wordCount}<br>` +
            `Words per minute (WPM): ${wpm.toFixed(2)}<br>` +
            `Total length of text: ${textLength} characters`;
    }