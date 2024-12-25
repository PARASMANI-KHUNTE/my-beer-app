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
  
  export default BeerCard;
  