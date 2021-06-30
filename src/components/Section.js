import React from "react";

const Section = ({ category, images }) => {
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="thumbnails">
        {images.map((image, index) => {
          return (
            <img className="img" key={index} alt="movies-images" src={image} />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
