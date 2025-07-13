import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Awards from "./components/Awards";
import News from "./components/News";
import Footer from "./components/Footer";

const AcademicPortfolio = () => {
  const [profile, setProfile] = useState(null);
  const [publications, setPublications] = useState([]);
  const [teaching, setTeaching] = useState([]);
  const [awards, setAwards] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load all data files
        const [profileRes, publicationsRes, teachingRes, awardsRes, newsRes] = await Promise.all([
          fetch('/data/profile.json'),
          fetch('/data/publications.json'),
          fetch('/data/teaching.json'),
          fetch('/data/awards.json'),
          fetch('/data/news.json')
        ]);

        // Check if all requests were successful
        if (!profileRes.ok) throw new Error('Failed to load profile data');
        if (!publicationsRes.ok) throw new Error('Failed to load publications data');
        if (!teachingRes.ok) throw new Error('Failed to load teaching data');
        if (!awardsRes.ok) throw new Error('Failed to load awards data');
        if (!newsRes.ok) throw new Error('Failed to load news data');

        // Parse JSON data
        const profileData = await profileRes.json();
        const publicationsData = await publicationsRes.json();
        const teachingData = await teachingRes.json();
        const awardsData = await awardsRes.json();
        const newsData = await newsRes.json();

        // Set state
        setProfile(profileData);
        setPublications(publicationsData);
        setTeaching(teachingData);
        setAwards(awardsData);
        setNews(newsData);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading academic portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Portfolio</h2>
          <p className="text-gray-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Publications publications={publications} />
      <Teaching teaching={teaching} />
      <Awards awards={awards} />
      <News news={news} />
      <Footer profile={profile} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AcademicPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;