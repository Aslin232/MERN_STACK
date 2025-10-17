import React, { useRef, useEffect, useState } from "react";
import "./PeopleAnimation.css";

const PeopleAnimation = ({ activeInput, emailStatus, passwordStatus }) => {
  const containerRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getMood = () => {
    if (activeInput === "email" && emailStatus !== null) return emailStatus;
    if (activeInput === "password" && passwordStatus !== null)
      return passwordStatus;
    return "neutral";
  };

  return (
    <div className="people-container" ref={containerRef}>
      {[0, 1, 2].map((i) => {
        const rect = containerRef.current?.getBoundingClientRect();
        let dx = 0,
          dy = 0;
        if (rect) {
          const headX = rect.left + (i + 0.5) * (rect.width / 3);
          const headY = rect.top + rect.height / 2;
          dx = mousePos.x - headX;
          dy = mousePos.y - headY;
        }

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        return (
          <div key={i} className={`person ${getMood()}`}>
            <div
              className="head"
              style={{ transform: `rotate(${angle / 4}deg)` }}
            >
              <div
                className="eye left-eye"
                style={{ transform: `translate(${dx / 80}px, ${dy / 80}px)` }}
              ></div>
              <div
                className="eye right-eye"
                style={{ transform: `translate(${dx / 80}px, ${dy / 80}px)` }}
              ></div>
              <div className="mouth"></div>
            </div>
            <div className="body"></div> {/* Body is static now */}
          </div>
        );
      })}
    </div>
  );
};

export default PeopleAnimation;
