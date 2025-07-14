import React from 'react';
import '../App.css';

const SkeletonLoader = () => (
  <div className="skeleton-card">
    <div className="skeleton-media" />
    <div className="skeleton-text" />
    <div className="skeleton-text short" />
    <div className="skeleton-btn" />
  </div>
);

export default SkeletonLoader; 