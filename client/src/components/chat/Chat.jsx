import './Chat.scss';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ChatWindow from './chatWindow/ChatWindow.jsx';
import { useEffect } from 'react';

function Chat() {
  const toggleWindow = () => {
    let chatWindow = document.getElementById('chat-window');
    let chatBobble = document.getElementById('chat-container');
    chatWindow.style.display = 'flex';
    chatBobble.style.display = 'none';
  }






  return (

    <div className="chat-global">

      <div className="chat-container" id='chat-container'>
  
        <div className='chat' onClick={toggleWindow}>
          <ModeCommentIcon />
  
        </div>
        <div className="dot"></div>
  
  
      </div>
      <ChatWindow/>

    </div>
    
    
    

    
  )
}

export default Chat;
