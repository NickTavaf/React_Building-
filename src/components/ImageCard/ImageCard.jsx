import "./ImageCard.css";
function ImageCard({ image, isSelected, onClick }) {
  console.log("Image ID:", image.id, "isSelected:", isSelected);
  return (
    <div className="image-card">
      <img
        src={image.url}
        alt={image.title}
        width="150"
        className={`${isSelected ? "show" : "hide"}`}
      />
      <p>{image.title}</p>
      {/* <button style={{ width: `${image.soundLevel * 2}px` }}  onClick={onClick}></button> */}
      <button className="floor" style={{ width: `${image.soundLevel * 2}px` }} onClick={onClick}></button>
     

    </div>
    
  );
}

export default ImageCard;