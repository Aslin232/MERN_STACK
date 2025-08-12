import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CategoryGallery() {
  const { category } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/photos/category/${category}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [category]);

  const handleLike = async (id) => {
    try {
      const res = await fetch(`http://localhost:5001/api/photos/${id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const updated = await res.json();
      setPhotos((prev) => prev.map((p) => (p._id === id ? updated : p)));
    } catch (err) {
      console.error("Error liking photo:", err);
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
        background: "#f9f9f9",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "scroll 15s linear infinite",
        }}
      >
        {photos.concat(photos).map((photo, index) => (
          <div
            key={photo._id + index}
            style={{
              flex: "0 0 auto",
              margin: "0 10px",
              textAlign: "center",
            }}
          >
            <img
              src={photo.url}
              alt=""
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div>
              <button
                onClick={() => handleLike(photo._id)}
                style={{ marginTop: "5px" }}
              >
                ❤️ {photo.likes}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Animation style */}
      <style>
        {`
          @keyframes scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
