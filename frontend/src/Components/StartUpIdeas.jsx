import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StartupIdeas = ({ searchQuery }) => {
  const [startupIdeas, setStartupIdeas] = useState([]);

  useEffect(() => {
    // Fetch startup ideas data from an API or database
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setStartupIdeas(data))
      .catch((error) => console.error("Error fetching startup ideas:", error));
  }, []);

  const filteredIdeas = startupIdeas.filter((idea) =>
  Object.values(idea).some((value) =>
    typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
  )
);

  return (
    <div className="container">
      <h1 className="m-5 text-warning text-start">Explore Startup Ideas</h1>
      <div>
        {filteredIdeas.map((idea) => (
          <div class="card m-4">
            <div class="card-header">{idea.name}</div>
            <div class="card-body">
              <h5 class="card-title">{idea.idea}</h5>
              <p class="card-text">{idea.industryType}</p>
              <Link to={`/ideas/${idea._id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupIdeas;
