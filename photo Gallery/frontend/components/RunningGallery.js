import React, { useState, useEffect } from "react";
import "./RunningGallery.css";

export default function RunningGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/photos/random")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="running-gallery">
      <div className="slider">
        {photos.map((photo) => (
          <img key={photo._id} src={photo.url} alt="" />
        ))}
      </div>
    </div>
  );
}
