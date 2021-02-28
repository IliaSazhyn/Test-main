import React from "react";
import { Link } from "react-router-dom";

const Item = ({ alt, src, clickToToggle, clickToDelete, imgId }) => {
  return (
    <figure className="gallery_item" key={imgId}>
      {/* <button onClick={clickToDelete}>X</button> */}
      <Link to={`/${imgId}`} key={imgId}>
        <img
          onClick={clickToToggle}
          src={src}
          alt={alt}
          key={imgId}
          className="gallery_img"
        />
      </Link>
    </figure>
  );
};

export default Item;
