import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

// Sample job data
const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    role: "Frontend",
    description: "Build responsive web applications using React and modern JavaScript frameworks. Need expertise in React, Redux, and CSS.",
    salary: "₹12L - ₹18L per year",
    postedDate: "2026-06-15",
    isBookmarked: false,
    experience: "2-4 years",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Hyderabad",
    role: "Backend",
    description: "Design and develop scalable backend services using Node.js and AWS. Experience with microservices architecture required.",
    salary: "₹15L - ₹22L per year",
    postedDate: "2026-06-18",
    isBookmarked: false,
    experience: "3-5 years",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Bangalore",
    role: "Full Stack",
    description: "Work on end-to-end development using React, Node.js, and Azure cloud. Full ownership of features from frontend to backend.",
    salary: "₹20L - ₹30L per year",
    postedDate: "2026-06-20",
    isBookmarked: false,
    experience: "4-6 years",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Flipkart",
    location: "Chennai",
    role: "Data Science",
    description: "Analyze large datasets and build machine learning models. Strong Python and SQL skills required.",
    salary: "₹10L - ₹16L per year",
    postedDate: "2026-06-10",
    isBookmarked: false,
    experience: "2-3 years",
    type: "Full-time"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "TCS",
    location: "Pune",
    role: "DevOps",
    description: "Manage CI/CD pipelines and cloud infrastructure on AWS. Experience with Docker, Kubernetes, and Jenkins.",
    salary: "₹8L - ₹14L per year",
    postedDate: "2026-06-12",
    isBookmarked: false,
    experience: "2-5 years",
    type: "Full-time"
  },
  {
    id: 6,
    title: "UX Designer",
    company: "Apple",
    location: "Mumbai",
    role: "Design",
    description: "Create user-centered designs and prototypes for mobile and web. Expertise in Figma and Adobe XD required.",
    salary: "₹10L - ₹15L per year",
    postedDate: "2026-06-14",
    isBookmarked: false,
    experience: "3-4 years",
    type: "Contract"
  },
  {
    id: 7,
    title: "React Native Developer",
    company: "Swiggy",
    location: "Bangalore",
    role: "Frontend",
    description: "Build cross-platform mobile apps using React Native. Experience with iOS and Android deployment.",
    salary: "₹14L - ₹20L per year",
    postedDate: "2026-06-19",
    isBookmarked: false,
    experience: "2-4 years",
    type: "Full-time"
  },
  {
    id: 8,
    title: "Cloud Architect",
    company: "AWS",
    location: "Hyderabad",
    role: "DevOps",
    description: "Design and implement cloud solutions on AWS. Strong knowledge of cloud security and architecture patterns.",
    salary: "₹25L - ₹35L per year",
    postedDate: "2026-06-17",
    isBookmarked: false,
    experience: "6-8 years",
    type: "Full-time"
  }
];

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [jobs, setJobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showBookmarks, setShowBookmarks] = useState(false);

  // Get unique roles and locations
  const roles = ['All', ...new Set(jobs.map(job => job.role))];
  const locations = ['All', ...new Set(jobs.map(job => job.location))];

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const searchMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const roleMatch = selectedRole === 'All' || job.role === selectedRole;
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
    const bookmarkMatch = showBookmarks ? job.isBookmarked : true;
    return searchMatch && roleMatch && locationMatch && bookmarkMatch;
  });

  const handleBookmark = (jobId) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === jobId 
          ? { ...job, isBookmarked: !job.isBookmarked }
          : job
      )
    );
  };

  const bookmarkCount = jobs.filter(job => job.isBookmarked).length;

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      {/* Moving Background */}
      <div className="animated-bg">
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
        
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1>💼 Job Portal</h1>
            <p>Find your dream job today</p>
          </div>
          <div className="header-right">
            <button 
              className={`bookmark-btn ${showBookmarks ? 'active' : ''}`}
              onClick={() => setShowBookmarks(!showBookmarks)}
            >
              ⭐ {bookmarkCount > 0 && <span className="badge">{bookmarkCount}</span>}
              {showBookmarks ? ' Show All' : ' Bookmarks'}
            </button>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        {/* Search and Filters */}
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search jobs by title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-btn"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>
          
          <div className="filters">
            <div className="filter-group">
              <label>Role</label>
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)}
                className="filter-select"
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Location</label>
              <select 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="filter-select"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="results-info">
          Showing <strong>{filteredJobs.length}</strong> job{filteredJobs.length !== 1 ? 's' : ''}
          {showBookmarks && <span className="filter-badge">📌 Bookmarked only</span>}
        </div>

        {/* Job Cards */}
        <div className="job-grid">
          {filteredJobs.length === 0 ? (
            <div className="no-jobs">
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="company-info">
                    <div className="company-avatar">
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <p className="company-name">{job.company}</p>
                    </div>
                  </div>
                  <button 
                    className="bookmark-icon"
                    onClick={() => handleBookmark(job.id)}
                  >
                    {job.isBookmarked ? '⭐' : '☆'}
                  </button>
                </div>
                
                <div className="job-tags">
                  <span className="tag role">{job.role}</span>
                  <span className="tag type">{job.type}</span>
                  <span className="tag exp">{job.experience}</span>
                </div>
                
                <p className="job-desc">{job.description.slice(0, 120)}...</p>
                
                <div className="job-footer">
                  <span className="salary">💰 {job.salary}</span>
                  <span className="location">📍 {job.location}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;