import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WatchDetails = () => {
  const { id } = useParams(); // Get dynamic watch ID from URL
  const [watch, setWatch] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchWatch = async () => {
      const response = await fetch(`https://api.example.com/watches/${id}`);
      const data = await response.json();
      setWatch(data);
    };

    fetchWatch();
  }, [id]);

  if (!watch) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{watch.name}</h1>
      <p>Brand: {watch.brand}</p>
      <p>Price: ${watch.price}</p>
      <p>{watch.description}</p>
    </div>
  );
};

export default WatchDetails;
