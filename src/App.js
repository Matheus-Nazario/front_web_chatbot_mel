import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import $ from "jquery"

const BOT_ID = 1;
const BOT_FEATURES = [
  {
    id: 1,
    name: 'MEL',
    socketurl: `http://0.0.0.0:5005`,
    avatar: 'icon-MEL.png',
    color: '#C84945'
  },
  {
    id: 2,
    name: 'MEL2',
    socketurl: `http://0.0.0.0:5005`,
    avatar: 'icon-MEL2.png',
    color: '#413660'
  },
]

function App() {
  const BOT = BOT_FEATURES.find(c => c.id === BOT_ID);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'teste@gmail.com',
    phone: '98765-4321',
    token: '987ABC765DEF',
  });

  const chatScript = () => {
    const path = './js/rasa-chat.js';

    if ($('script[src="'+ path +'"]').length > 0) {
      $('script[src="'+ path +'"]').remove();
      $('#rasa-chat-widget-container').remove();
    } else {
      const script = document.createElement("script");
      script.src = path;
  
      document.body.appendChild(script);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      try {
        document.querySelector(".rw-send").click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(()=>{
    chatScript();
  },[])

  return (
    <Container onKeyDown={handleKeyDown} color={BOT.color}>
      <figure>
        <img src="" alt="Chatbot Mel "/>
      </figure>
      <div id="rasa-chat-widget" data-websocket-url={`http://0.0.0.0:5005`}></div>
    </Container>
  );
}

export default App;
