// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
  
    const messageInput = document.getElementById('msg');
    const startListeningBtn = document.getElementById('start-listening-btn');
    const stopListeningBtn = document.getElementById('stop-listening-btn');
  
    // Set the language for speech recognition
    recognition.lang = 'en-US';
  
    // Define the event handlers
    recognition.onstart = () => {
      console.log('Voice recognition started...');
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      messageInput.value = transcript;
    };
  
    recognition.onerror = (event) => {
      console.error('Voice recognition error:', event.error);
    };
  
    recognition.onend = () => {
      console.log('Voice recognition ended.');
    };
  
    // Start listening button click event
    startListeningBtn.addEventListener('click', () => {
      recognition.start();
      startListeningBtn.disabled = true;
      stopListeningBtn.disabled = false;
    });
  
    // Stop listening button click event
    stopListeningBtn.addEventListener('click', () => {
      recognition.stop();
      stopListeningBtn.disabled = true;
      startListeningBtn.disabled = false;
    });
  
    // Disable stop button initially
    stopListeningBtn.disabled = true;
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }
  