# Chat app using React/ts, Node/Express & socket.io

Trying some stuff with the socket.io lib on a live chat application.

To run this app :

Using https :
```bash 
git clone https://github.com/MoustaphaCamara/chat-app.git
```
Using ssh :
```bash 
git clone git@github.com:MoustaphaCamara/chat-app.git
```

Run the back-end (on port 8000, you can change it on `./server/index.js`) :
```bash 
npm start
```

Then run the front-end on another terminal (using Vite, port is 5173) :
```bash 
npm run dev
```

Open the app at `http://localhost:5173/`

Open another browser with the same http://localhost:5173/, and the two clients can now join the same room and chat.

***

This app is only for test purposes, as you will notice there is no architecture, design etc. I just wanted to try out implementing websockets as it's been long :D

