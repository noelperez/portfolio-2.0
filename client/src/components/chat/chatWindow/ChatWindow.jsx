import './ChatWindow.scss';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

function Chat_window() {

  const toggleWindow = () => {
    let chatWindow = document.getElementById('chat-window');
    let chatBobble = document.getElementById('chat-container');
    chatWindow.style.display = 'none';
    chatBobble.style.display = 'flex';
  }

  const handleKeyDown = (e) => {
    console.log(e);
  }


  return (
    <div className='chat-window' id='chat-window'>

      <div className="top">
        <div className="top-left"></div>
        <div className="top-right">
          <div className="controls">
            <CloseIcon onClick={toggleWindow}/>

          </div>
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">

       <textarea autofocus placeholder='Write your message here' name="" id="" onKeyDown={handleKeyDown} ></textarea>
       <div className="bottom-right">
         <div className="icons">
         <SendIcon/>
         </div>
       </div>

      </div>
        
      
    </div>
  )
}

export default Chat_window;
