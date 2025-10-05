const chatToggleBtn = document.querySelector('.chat-toggle-btn');
const chatbotContainer = document.querySelector('.chatbot-container');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBody = document.getElementById('chatBody');
const closeChat = document.getElementById('closeChat');

chatToggleBtn.addEventListener('click', () => {
  chatbotContainer.style.display = 'block';
  chatToggleBtn.style.display = 'none';
});

closeChat.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
  chatToggleBtn.style.display = 'block';
});

sendBtn.addEventListener('click', () => {
  const msg = userInput.value.trim();
  if (!msg) return;
  chatBody.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  userInput.value = '';

  setTimeout(() => {
    let reply = 'Sorry, I can only tell you about our services for now.';

    if (msg.toLowerCase().includes('service'))
      reply = 'We provide NetSuite Implementation, Customization, Integration, Optimization, Support & Data Migration.';
    else if (msg.toLowerCase().includes('hello') || msg.toLowerCase().includes('hi'))
      reply = 'Hi there 👋! I’m your Balvirt Assistant. Ask me about our services.';
    else if (msg.toLowerCase().includes('contact'))
      reply = 'You can reach us through the contact section on our website or by email at info@balvirt.com.';

    chatBody.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
});
