# React Youtube Video Gallery Project

This project demonstrates how to create simple YouTube-style video cards using React. Each card displays an image, a title, the creator's name, and the number of views. The project does not use any external APIs or fetched data. All data is hardcoded and styled using CSS.

## Project Structure

```
├── node_modules
├── public
│   └── assets
├── src
│   ├── components
│   │   ├── VideoCard.jsx
│   │   └── VideoList.jsx
│   ├── data
│   │   └── videos.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Description

This project is a React application built with Vite that creates a video gallery showcasing YouTube videos featuring content from Korean Englishman and Tanmay Bhat. The application includes video thumbnails, creator information, and view counts.

## Features

- Responsive video card layout
- Video thumbnails from local assets
- Creator profile pictures
- View count display
- Component-based architecture
- Data-driven video rendering

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mrinalini087/yt-project
   ```

2. Navigate to the project directory:

   ```bash
   cd yt-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Components

### VideoCard

- Individual video component that displays:
  - Video thumbnail
  - Video title
  - Creator name
  - Channel profile picture
  - View count

### VideoList

- Container component that renders multiple VideoCard components
- Handles the layout and organization of video cards

### Data Structure

Videos data is stored in `src/data/videos.js` with the following structure:

```javascript
const videos = [
  {
    thumbnail: string, // Path to video thumbnail (e.g., "/assets/thumbnail1.jpg")
    title: string, // Video title
    creator: string, // Channel/creator name
    views: string, // View count
    channelProfilePic: string, // Path to creator's profile picture (e.g., "/assets/ke.jpg")
  },
];
```

Example data:

```javascript
const videos = [
  {
    thumbnail: "/assets/thumbnail1.jpg",
    title: "College Students try Korean Snacks!",
    creator: "Korean Englishman",
    views: "589K views",
    channelProfilePic: "/assets/ke.jpg",
  },
  {
    thumbnail: "/assets/thumbnail2.jpg",
    title: "Desi Online Classes Review",
    creator: "Tanmay Bhat",
    views: "4.8M views",
    channelProfilePic: "/assets/tb.jpg",
  },
];
```

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [ESLint](https://eslint.org/) - Code linting
- CSS Modules - Styling

## Development

The project uses Vite as the build tool for fast development and optimized production builds.

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## License

This project is licensed under the MIT License - see the LICENSE file for details.
