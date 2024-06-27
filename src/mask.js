// src/MaskCursor.js
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './MaskCursor.css';

const MaskCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const debouncedHandleMouseMove = (event) => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(() => handleMouseMove(event));
    };

    window.addEventListener('mousemove', debouncedHandleMouseMove);

    return () => {
      window.removeEventListener('mousemove', debouncedHandleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverableElements = document.querySelectorAll('.hoverable-element');

    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`mask-cursor ${isHovered ? 'hovered' : ''}`}
      style={{ left: position.x, top: position.y }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};
export default MaskCursor;
