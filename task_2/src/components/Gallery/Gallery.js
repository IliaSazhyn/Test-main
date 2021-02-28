import React, { useState, useEffect, useContext } from "react";
import Modal from "../Modal/Modal";
import ImageContext from "../../context/imageContext";
import Item from "../Item/Item";

const Gallery = () => {
  const imageContext = useContext(ImageContext);
  const { getImages, deleteImageById, imageGallery, loading } = imageContext;
  const [isOpen, setIsOpen] = useState(false);
  const [mount, setMount] = useState(false);
  // const [id, setId] = useState("");

  const fetchBusinesses = () => {
    getImages();
  };
  useEffect(() => {
    if (!mount) {
      setMount(true);
      fetchBusinesses();
    }
  }, []);

  useEffect(() => {
    if (imageGallery) {
      window.localStorage.setItem("items", JSON.stringify(imageGallery.imgs));
    }
  }, [imageGallery]);

  // useEffect(() => window.localStorage.setItem("count", id), [id]);

  return (
    <section className="gallery">
      {loading && <div>...Loading</div>}
      {imageGallery.imgs &&
        imageGallery.imgs.map((image, i) => {
          return (
            <div key={i}>
              <Item
                clickToToggle={() => setIsOpen(!isOpen)}
                clickToDelete={() => deleteImageById(image.id)}
                src={image.path}
                alt={image.description}
                imgId={image.id}
                k={i}
              />
            </div>
          );
        })}
      {isOpen && <Modal isOpen={isOpen} toggle={setIsOpen} />}
    </section>
  );
};

export default Gallery;
