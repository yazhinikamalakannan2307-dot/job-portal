import React from 'react';
import { FaTimes, FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import './JobDetails.css';

function JobDetails({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <div className="modal-company-avatar">
            {job.company.charAt(0)}
          </div>
          <div>
            <h2 className="detail-title">{job.title}</h2>
            <h3 className="detail-company">{job.company}</h3>
          </div>
        </div>
        
        <div className="detail-tags">
          <span className="detail-tag role-tag">{job.role}</span>
          <span className="detail-tag type-tag">{job.type}</span>
        </div>
        
        <div className="detail-grid">
          <div className="detail-info">
            <FaMapMarkerAlt className="detail-info-icon" />
            <div>
              <label>Location</label>
              <p>{job.location}</p>
            </div>
          </div>
          <div className="detail-info">
            <FaMoneyBillWave className="detail-info-icon" />
            <div>
              <label>Salary</label>
              <p>{job.salary}</p>
            </div>
          </div>
          <div className="detail-info">
            <FaBriefcase className="detail-info-icon" />
            <div>
              <label>Experience</label>
              <p>{job.experience}</p>
            </div>
          </div>
          <div className="detail-info">
            <FaCalendarAlt className="detail-info-icon" />
            <div>
              <label>Posted</label>
              <p>{new Date(job.postedDate).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</p>
            </div>
          </div>
        </div>
        
        <div className="detail-description">
          <h4>Job Description</h4>
          <p>{job.description}</p>
        </div>
        
        <div className="detail-actions">
          <button className="apply-btn">Apply Now</button>
          <button className="save-btn">Save for Later</button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;