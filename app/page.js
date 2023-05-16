"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import Image from "next/image";
import logo from "./components/imgs/logo.png";
import perfil from "./components/imgs/profile.png";
import $ from "jquery";
import { Container } from '../public/chatbot/styles';
import { Navigation } from "./components/nav";


const navigation = [
	{ name: "", href: "/projects" },
	{ name: "", href: "/contact" },
];


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
    const path = './chatbot/rasa-chat.js';

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
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation />
        <section>
          <Image src={logo} alt="logo" width={300} height={300} />
        </section>
        <section style={{ position: "absolute", bottom: "0", left: "0" }}>
            <Image src={perfil} alt="perfil" width={300} height={300}/>
            </section>
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-gradient-to-r from-pink-500 to-violet-500 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Mel Desing
        </h1>
        
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Nail Design Professional Since 2018
            <br/>
          </h2>
        </div>
        <div id="root"></div>
        <div id="rasa-chat-widget" data-websocket-url={`http://0.0.0.0:5005`}></div>
      </div>
      
    </Container>
	);
}


export default App;