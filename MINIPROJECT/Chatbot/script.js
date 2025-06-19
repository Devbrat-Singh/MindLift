const chatLog = document.getElementById('chat-log'),
    userInput = document.getElementById('user-input'),
    sendButton = document.getElementById('send-button'),
    buttonIcon = document.getElementById('button-icon'),
    info = document.querySelector('.info');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value.trim();
    // if message is empty, do nothing
    if (message === '') {
        return;
    }

    // Append the user's message to the chat log
    appendMessage('user', message);
    userInput.value = '';

    // Change the button icon to loading
    buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');
    buttonIcon.classList.add('fas', 'fa-spinner', 'fa-pulse');

    try {
        // Send API request to your mental health support bot
        const response = await fetch('http://127.0.0.1:5000/mental_health_support', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: message })
        });

        const data = await response.json();
        
        // Check if the response was successful
        if (response.ok) {
            // Display the bot's response
            appendMessage('bot', data.response);
        } else {
            // Handle server errors
            appendMessage('bot', 'Sorry, something went wrong. Please try again later.');
        }
    } catch (error) {
        // Handle network or other errors
        appendMessage('bot', 'An error occurred: ' + error.message+"\n check the bot.py");
    }

    // Reset button icon after response
    buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
    buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
}

function appendMessage(sender, message) {
    info.style.display = "none";
    const messageElement = document.createElement('div');
    const iconElement = document.createElement('div');
    const chatElement = document.createElement('div');
    const icon = document.createElement('i');

    chatElement.classList.add("chat-box");
    iconElement.classList.add("icon");
    messageElement.classList.add(sender);
    messageElement.innerText = message;

    // Add icons depending on who sent the message (user or bot)
    if (sender === 'user') {
        icon.classList.add('fa-regular', 'fa-user');
        iconElement.setAttribute('id', 'user-icon');
    } else {
        icon.classList.add('fa-solid', 'fa-robot');
        iconElement.setAttribute('id', 'bot-icon');
    }

    iconElement.appendChild(icon);
    chatElement.appendChild(iconElement);
    chatElement.appendChild(messageElement);
    chatLog.appendChild(chatElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}
