## :iphone: Chatbot MEL

Chatbot MEL with React and rasa-webchat.

## :computer: Technologies

This project was developed with the following technologies:

-  [React](https://pt-br.reactjs.org/)
-  [Styled-components](https://www.styled-components.com/)
-  [Rasa-webchat](https://www.npmjs.com/package/rasa-webchat/)
-  [VS Code](https://code.visualstudio.com/)


## :ballot_box_with_check: How to use


```bash
# Clone this repository
$ git clone ...

# Access the folder
$ cd front_web_chatbot_mel

# Install dependencies
$ npm i

# Run the app
$ npm start

```

## Some infos


Rasa
Use the socketio channel: See instructions in the Rasa documentation

If you want to process customData in Rasa you have to [create a new channel](https://rasa.com/docs/rasa/messaging-and-voice-channels/#custom-channels). Use channel rasa_core.channels.socketio as a template for your new channel. In this channel, customData can be retrieved via data['customData']. Then you can modify sender_id, save customData to the database, fill slots or whatever you need to with your additional data.

