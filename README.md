
---

# 🌐 FRONTEND – `README.md`

```md
# 🎮 SavePoint – Game Tracker

SavePoint is a React web application that allows users to search for video games using the RAWG API and save them to a personal game list.

---

## 🚀 Live Features

- 🔍 Search games via RAWG API
- ⭐ Add games to personal list
- 🎯 Track status (Wishlist, Playing, Finished)
- 📝 Add notes
- 🗑 Delete games
- ✏ Edit game details
- 🛒 View available game stores (Steam, PlayStation, Xbox, etc.)
- 🎨 Custom layout with fixed sidebar

---

## 🛠 Tech Stack

- React
- React Router
- Axios
- RAWG Video Games Database API
- JSON Server (custom backend)
- CSS (Flexbox layout)

---

## 📦 Installation

1. Navigate to the client folder:
cd client
2. Install dependencies:
npm install
3. Create a .env file:
VITE_RAWG_API_KEY=your_api_key_here
VITE_SERVER_URL=http://localhost:5005/games
4. Start Development server: 
npm run dev

App runs at: http://localhost:5173 & https://save-point-nine.vercel.app/my-games (for online - non cloned apps)


## 🔑 RAWG API
This project uses the RAWG Video Games Database API.

You can create a free API key at:

https://rawg.io/apidocs

## 📁 Project Structure

src/
  components/
    FavouriteButton.jsx -- to be added/finished
    GameCard.jsx 
    SideBar.jsx
  pages/
    About.jsx
    EditGame.jsx
    GameDetails.jsx
    HomePage.jsx
    MyGames.jsx
    NotFound.jsx
    SearchBAr.jsx
  assets/
    Logo.png
  App.jsx
  main.jsx

## 🧠 How It Works

Games are fetched from RAWG API.

When a user adds a game, it is saved to the local JSON Server.

Game status determines UI behavior (e.g. store links appear only for Wishlist games).

React Router handles page navigation.

## 👤 Author

Built as a portfolio project demonstrating:

API integration

State management

Routing

Full CRUD functionality

Custom layout design