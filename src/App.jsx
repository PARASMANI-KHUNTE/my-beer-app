import { useEffect, useState } from "react";
import BeerCard from "./components/BeerCard";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Beer Explorer</h1>
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for a beer..."
          className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
