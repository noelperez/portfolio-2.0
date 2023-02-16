const chatWindow = document.querySelector('#chat-window');
const chatBobble = document.querySelector('.chat-container');
const chatCloseIcon = document.querySelector('#close-window');
const chat = document.querySelector('.chat');
const textArea = document.querySelector('textarea');
const topLeft = document.querySelector('.top-left');
const onlineUsers = document.querySelector('.online-users');
const chatContainer = document.querySelector('#messages-contaier');
const sendButton = document.querySelector('.icons');
let socket;


onlineUsers.className = 'online-users';

/* let users = [{name: 'carlos', proPic: 'yellow', status: 'online'}, {name: 'Jorge', proPic: 'black', status: 'online'}, {name: 'Victor', proPic: 'white', status: 'online'}];

for (let user of users) {
  let userCard = document.createElement('div');
  userCard.className = 'pro-pic';
  userCard.style.background = user.proPic;
  onlineUsers.appendChild(userCard);
} */






chatCloseIcon.onclick = (e) => {
  socket.close();
  socket.onclose = (e) => {
    console.log('websocket connection closed');
  }

  chatWindow.style.display = 'none';
  chatBobble.style.display = 'flex';

}
chat.onclick = (e) => {
  socket = new WebSocket(`ws://${location.host}`);
  socket.onopen = (e) => {
    console.log(`websocket connection established: ${e}`);
  }

  socket.onerror = (e) => {
    console.log(`There was an error: ${e}`);

  };

  socket.onmessage = async (e) => {

    let { code, user, content, timestamp } = JSON.parse(e.data);
    
    const handleUserMessage = async () => {
      console.log(`handleUserMessage function hit`);

      let messageHolder = document.createElement('div');
      let tempMessage = document.createElement('div');
      let tempText = document.createElement('p');
      let stats = document.createElement('p');
      let userHolder = document.createElement('div');
      let profilePicture = document.createElement('img');
      let userName = document.createElement('p');

      console.log(`All div and p elements created`);

      //const new_message = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3');

      //await new_message.play();
      console.log(`Attempted to play music`);
      
      messageHolder.className = 'message_holder';
      tempMessage.className = `${ code == 1 ? 'user_message' : 'system_message'}`;
      userHolder.className = 'user_holder';
      profilePicture.className = 'profile_picture';
      userName.className = 'user_name';
      stats.className = 'stats';
      stats.setAttribute('id', 'stats');

      console.log(`Assigned all classes`);
  
  
      tempText.innerText = content;
      profilePicture.src = `data:image/png;base64,${user.profilePic}`;
      stats.innerText = `${new Date(timestamp).toString().slice(0, 24)} - ${user._doc.firstName} ${user._doc.lastName} `;
      console.log(user._doc);
      tempMessage.appendChild(tempText);
      userHolder.appendChild(profilePicture);
      userHolder.appendChild(userName);
      messageHolder.appendChild(tempMessage);
      tempMessage.appendChild(stats);
      messageHolder.appendChild(userHolder);
      chatContainer.appendChild(messageHolder);
      chatContainer.scrollTo(0, chatContainer.scrollHeight);

      console.log(`Appended all childs, end of function`);



    }

    const handleSystemMessage = async () => {

      let messageHolder = document.createElement('div');
      let tempMessage = document.createElement('div');
      let tempText = document.createElement('p');
      

      const new_message = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-1230-pretty-good.mp3');

      await new_message.play();
      
      
      messageHolder.className = 'message_holder_system';
      tempMessage.className = `system_message`;
      
  
  
      tempText.innerText = content;
      
      tempMessage.appendChild(tempText);
      
      messageHolder.appendChild(tempMessage);
      
      chatContainer.appendChild(messageHolder);
      chatContainer.scrollTo(0, chatContainer.scrollHeight);


    }

    console.log(code);

    code == 1 ? handleUserMessage() : handleSystemMessage();
  }

  chatWindow.style.display = 'flex';
  chatBobble.style.display = 'none';

}

textArea.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {

    if (textArea.value.length == 0) {

      e.preventDefault();
      return;
    }
    let messageHolder = document.createElement('div');
    let stats = document.createElement('p');
    let tempMessage = document.createElement('div');
    let tempText = document.createElement('p');

    messageHolder.className = 'message_holder message_op';
    stats.className = 'stats_op';
    stats.setAttribute('id', 'stats_op');
    tempMessage.className = 'message-op';
    tempText.innerText = textArea.value;
    stats.innerText = new Date().toString().slice(0, 24);
    tempMessage.appendChild(tempText);
    messageHolder.appendChild(tempMessage);
    tempMessage.appendChild(stats);
    chatContainer.appendChild(messageHolder);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    socket.send(textArea.value);
    console.log(`Message sent: ${textArea.value}`)
    textArea.value = "";
    e.preventDefault();
  }
});

sendButton.onclick = (e) => {

  if (textArea.value.length == 0) {
    return;
  }
  let messageHolder = document.createElement('div');
  let stats = document.createElement('p');
  let tempMessage = document.createElement('div');
  let tempText = document.createElement('p');

  messageHolder.className = 'message_holder message_op';
  stats.className = 'stats_op';
  stats.setAttribute('id', 'stats_op');
  tempMessage.className = 'message-op';
  tempText.innerText = textArea.value;
  stats.innerText = new Date().toString().slice(0, 24);
  tempMessage.appendChild(tempText);
  messageHolder.appendChild(tempMessage);
  tempMessage.appendChild(stats);
  chatContainer.appendChild(messageHolder);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  socket.send(textArea.value);
  console.log(`Message sent: ${textArea.value}`)
  textArea.value = "";

}