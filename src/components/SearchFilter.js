import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import './SearchFilter.css';

function SearchFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedRole, 
  setSelectedRole, 
  selectedLocation, 
  setSelectedLocation 
}) {
  
  const roles = ['All', 'Frontend', 'Backend', 'Full Stack', 'Data Science', 'DevOps', 'Design'];
  const locations = ['All', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai'];

  return (
    <div className="search-filter-container">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search jobs by title, company, or skills..."
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

      <div className="filters-section">
        <div className="filters-header">
          <FaFilter className="filter-icon" />
          <span>Filters</span>
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
    </div>
  );
}

export default SearchFilter;