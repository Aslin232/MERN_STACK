import { useState, useEffect, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    api.get("/photos").then((res) => setPhotos(res.data));
  }, []);

  const likePhoto = async (id) => {
    if (!token) {
      alert("Please login first");
      return;
    }
    await api.post(
      `/photos/${id}/like`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert("Photo liked!");
  };

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo._id} style={{ margin: "10px" }}>
          <img src={photo.url} alt="" width="200" />
          <p>{photo.category}</p>
          <p>Likes: {photo.likes}</p>
          <button onClick={() => likePhoto(photo._id)}>Like</button>
        </div>
      ))}
    </div>
  );
}
