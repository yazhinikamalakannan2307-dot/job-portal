import React from 'react';
import { FaBookmark, FaRegBookmark, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './JobCard.css';

function JobCard({ job, onBookmark, onViewDetails }) {
  const getRoleColor = (role) => {
    const colors = {
      'Frontend': '#FF6B6B',
      'Backend': '#4ECDC4',
      'Full Stack': '#45B7D1',
      'Data Science': '#96CEB4',
      'DevOps': '#FFEAA7',
      'Design': '#DDA0DD'
    };
    return colors[role] || '#6C63FF';
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="company-info">
          <div className="company-avatar" style={{ background: `linear-gradient(135deg, ${getRoleColor(job.role)}, ${getRoleColor(job.role)}dd)` }}>
            {job.company.charAt(0)}
          </div>
          <div>
            <h3 className="job-title">{job.title}</h3>
            <p className="company-name">{job.company}</p>
          </div>
        </div>
        <button 
          className="bookmark-btn"
          onClick={() => onBookmark(job.id)}
        >
          {job.isBookmarked ? <FaBookmark className="bookmarked" /> : <FaRegBookmark />}
        </button>
      </div>

      <div className="job-tags">
        <span className="tag role-tag" style={{ background: getRoleColor(job.role) + '20', color: getRoleColor(job.role) }}>
          {job.role}
        </span>
        <span className="tag type-tag">
          {job.type}
        </span>
        <span className="tag exp-tag">
          {job.experience}
        </span>
      </div>
      
      <div className="job-details">
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <span>{job.location}</span>
        </div>
        <div className="detail-item">
          <FaBriefcase className="detail-icon" />
          <span>{job.experience}</span>
        </div>
        <div className="detail-item">
          <FaCalendarAlt className="detail-icon" />
          <span>Posted {new Date(job.postedDate).toLocaleDateString('en-IN', { 
            month: 'short', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>
      
      <p className="job-description">{job.description.slice(0, 120)}...</p>
      
      <div className="job-footer">
        <span className="salary">{job.salary}</span>
        <button 
          className="details-btn"
          onClick={() => onViewDetails(job)}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

export default JobCard;