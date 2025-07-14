import React, { useRef, useEffect, useState } from 'react';
import '../App.css';

const Media = React.memo(({ video_url, room_images }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!video_url) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [video_url]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isVisible) {
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    }
  }, [isVisible]);

  if (video_url) {
    return (
      <video
        className="variant-media"
        controls
        width="100%"
        preload="none"
        ref={videoRef}
        muted
        playsInline
      >
        <source src={video_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (room_images && room_images.length > 0) {
    // Responsive image loading
    const imgUrl = room_images[0];
    return (
      <img
        className="variant-media"
        src={imgUrl}
        srcSet={`
          ${imgUrl}&w=400 400w,
          ${imgUrl}&w=800 800w,
          ${imgUrl}&w=1200 1200w
        `}
        sizes="(max-width: 600px) 100vw, 400px"
        alt="Room"
        width="100%"
        loading="lazy"
      />
    );
  } else {
    return null;
  }
});

export default Media; 