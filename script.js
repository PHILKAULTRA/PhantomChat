function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;

  if (message.trim() !== '') {
    const chatbox = document.getElementById('chatbox');
    const newMessage = document.createElement('div');
    const content = document.createElement('p');
    const timestamp = document.createElement('span');

    content.textContent = message;
    timestamp.textContent = getCurrentTime();

    newMessage.classList.add('chat-message');
    content.classList.add('message-content');
    timestamp.classList.add('timestamp');
    newMessage.appendChild(content);
    newMessage.appendChild(timestamp);
    chatbox.appendChild(newMessage);

    messageInput.value = '';
  }
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
}
