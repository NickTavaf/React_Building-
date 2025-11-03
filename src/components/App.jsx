import React, { useState } from "react";
import ImageCard from "./ImageCard/ImageCard";
import imageData from "../data/images.json";
import "./App.css";

function App() {
  const [images] = useState(imageData);
  const [selectId, setSelectedId] = useState(null);

  const showImage = (id) => {
    console.log("Current selectId:", selectId, "Clicked ID:", id);
    setSelectedId(selectId === id ? null : id);
  };

  return (
    <div className="gallery">
      <img className="data-line" src="/src/images/DataLines.png" alt="DataLine" />
      <img className="background-photo" src="/src/images/Background1.png" alt="Background" />
      <img className="photo-box" src="/src/images/photobox.png" alt="PhotoBox" />
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          isSelected={selectId === img.id}
          onClick={() => showImage(img.id)}
        />
      ))}
    </div>
    
  );
}

export default App;
