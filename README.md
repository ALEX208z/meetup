# MeetUp.

A video conferencing web app built from scratch as a hands-on way to learn real-time communication. Create a meeting, share the code, and talk face to face from the browser, with peer-to-peer video powered by WebRTC.

> **Status: work in progress.** The client UI is in place and the real-time layer (signaling server and peer connections) is being built. See the [Roadmap](#roadmap) for what's done and what's next.

---

## Features

**Available now**
- Sign up and sign in with [Clerk](https://clerk.com) authentication
- Protected routes with a shared app layout (navbar, user menu)
- Dashboard with one-click **New Meeting**, **Join by code**, a live clock, and plan/usage card
- Free vs. premium plan display with a monthly meeting limit
- Meeting room with local camera and microphone preview
- Mute/unmute and camera on/off controls
- Toast notifications for user feedback

**Coming soon**
- Peer-to-peer audio and video between participants (WebRTC)
- Signaling server with meeting rooms (Socket.IO)
- In-meeting text chat
- Screen sharing
- Session history
- Pricing and plan upgrades
- "End meeting for everyone" for hosts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Auth | Clerk |
| UI extras | lucide-react (icons), react-hot-toast (notifications) |
| Real-time media | WebRTC (`getUserMedia`, `RTCPeerConnection`) |
| Signaling | Node.js + Socket.IO *(planned)* |

---

## How It Works

1. A user creates a meeting and gets a short code like `abc-defg-hij`.
2. Others join by entering the code, which opens `/meeting/:meetingId`.
3. Each browser asks for camera and microphone access with `getUserMedia`.
4. A signaling server (Socket.IO) relays WebRTC offers, answers, and ICE candidates between participants in the same room.
5. Once peers have exchanged connection details, audio and video flow **directly between browsers**. The server only helps them find each other.

STUN servers are used for NAT traversal, and a TURN server is planned as a fallback for restrictive networks.

---

## Project Structure

```
meetup/
├── client/                 # React + Vite frontend
│   ├── public/
│   └── src/
│       ├── assets/         # Images and dummy data
│       ├── components/     # Navbar, ProtectedRoute, ProtectedLayout, ...
│       ├── hooks/          # useWebRTC (media + peer connection logic)
│       ├── pages/          # Login, Dashboard, Sessions, Pricing, MeetingRoom
│       ├── App.jsx         # Route definitions
│       └── main.jsx        # App entry, providers
└── server/                 # Signaling server (planned)
```

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A free [Clerk](https://clerk.com) account and application

### 1. Clone the repository

```bash
git clone https://github.com/ALEX208z/meetup.git
cd meetup/client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file inside `client/`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Get the key from your Clerk dashboard under **API Keys**. Never commit your `.env` file.

### 4. Start the dev server

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

> **Camera access:** browsers only allow `getUserMedia` on `localhost` or HTTPS. To test with a phone or another device on your network, serve the app over HTTPS.

---

## Roadmap

- [x] Project setup, routing, and layout
- [x] Authentication with Clerk
- [x] Dashboard (create and join meetings)
- [x] Local camera and microphone with mute and camera toggles
- [ ] Signaling server with Socket.IO and meeting rooms
- [ ] Two-person video calls with `RTCPeerConnection`
- [ ] Multi-participant calls (mesh, then possibly an SFU)
- [ ] In-meeting chat
- [ ] Screen sharing
- [ ] Session history page
- [ ] Plans, limits, and pricing page backed by a real API
- [ ] TURN server for restrictive networks
- [ ] Deployment

---

## What I'm Learning

This project is a way to understand real-time web technology end to end:

- How WebRTC peers negotiate connections (offer, answer, ICE)
- Why a signaling server is needed even for peer-to-peer apps
- Managing media streams and cleanup correctly in React, including under `StrictMode`
- Designing protected routes and auth flows
- Structuring a client and server that scale from two users to many

---

## Contributing

This is a personal learning project, but suggestions and bug reports are welcome. Feel free to open an issue.

---

## Author

**Anshuman Ayush**
GitHub: [@ALEX208z](https://github.com/ALEX208z)

---

## License

No license has been chosen yet. Until one is added, all rights are reserved by the author.
