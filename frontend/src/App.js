
import SearchBar from "./Components/SearchBar";
import { useState } from "react";
import axios from "axios";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserProfile from "./Components/UserProfile";
import InvestorProfile from "./Components/InvestorProfile";
import StartupIdeas from "./Components/StartUpIdeas";
import IdeaDescription from "./Components/IdeaDescription";
import Header from "./Components/Header";



function App() {
  const [name, setName] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the searchQuery state with the new search query
  };

  

  return (
    <div className="text-center p-5" >
      <Router>
      <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile"  element={<UserProfile />}/>
          <Route path="/investorProfile" element={<InvestorProfile />} />
          <Route path="/ideas" element={<StartupIdeas searchQuery={searchQuery} />} />
          <Route path="/ideas/:id" element={<IdeaDescription />} />
        </Routes>
      </Router>
      {/* <SearchBar /> */}

      
     
    </div>
  );
}

export default App;
