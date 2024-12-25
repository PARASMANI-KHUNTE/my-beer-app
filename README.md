# Beer Explorer

A React-based application that fetches and displays beer data from [Sample Beers API](https://api.sampleapis.com/beers/ale). This app uses **Vite**, **TailwindCSS**, and **React** to provide a responsive and interactive interface. It also includes search functionality to filter beers by name.

## Features

- Fetches beer data (name, price, style, rating, and image) from an API.
- Displays beer details in visually appealing, responsive cards.
- Search functionality to filter beers by name in real-time.
- Handles missing data gracefully by providing default fallbacks.

## Prerequisites

- Node.js (>= 14.x)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PARASMANI-KHUNTE/Beer
   cd beer-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser:
   Navigate to `http://localhost:5173` (default Vite port).

## File Structure

```
src/
|-- components/
|   |-- BeerCard.jsx   # Component to render individual beer cards
|-- App.jsx           # Main application file
|-- main.jsx          # React entry point
|-- index.css         # TailwindCSS styling
```

## How It Works

1. **API Integration**:
   - The app fetches data from `https://api.sampleapis.com/beers/ale` using the `fetch` API.

2. **Beer Card Display**:
   - The `BeerCard` component displays each beer's image, name, style, price, and rating (average and reviews).

3. **Search Functionality**:
   - Filters the list of beers in real-time based on the user's input in the search bar.

## Tech Stack

- **React**: Frontend framework for building the UI.
- **Vite**: Modern build tool for fast development.
- **TailwindCSS**: Utility-first CSS framework for styling.

## Components

### BeerCard.jsx
Renders a single beer card:
```jsx
function BeerCard({ beer }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-56 w-full flex justify-center items-center bg-gray-100">
        <img
          src={beer.image || "https://via.placeholder.com/150"}
          alt={beer.name}
          className="h-full w-auto object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{beer.name}</h2>
        <p className="text-gray-600 text-sm mb-1">{beer.style || "Unknown Style"}</p>
        <p className="text-gray-500 text-sm mb-1">
          <span className="font-semibold">Price:</span> {beer.price || "N/A"}
        </p>
        <p className="text-gray-500 text-sm">
          <span className="font-semibold">Rating:</span> {beer.rating?.average?.toFixed(1) || "N/A"}
          <span className="ml-2">({beer.rating?.reviews || 0} reviews)</span>
        </p>
      </div>
    </div>
  );
}
```

## Customization

- **Styling**: Modify `src/index.css` or add custom TailwindCSS classes to change the app's appearance.
- **API Endpoint**: Replace the API URL in `App.jsx` with a different endpoint to fetch other data.

## Deployment

1. Build the app for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Serve the build folder using a static server or deploy to platforms like Vercel, Netlify, or AWS Amplify.

## Screenshots

_Add screenshots here after running the app._

## License

This project is licensed under the MIT License. Feel free to use and modify the code.
