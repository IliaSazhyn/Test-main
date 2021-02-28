import React, { useEffect, useContext } from "react";
import ImageContext from "../../context/imageContext";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ isOpen, toggle }) => {
  const imageContext = useContext(ImageContext);
  const { loading, getImageById, currentImage } = imageContext;
  const location = useLocation();
  const imageId = location.pathname;
  const history = useHistory();

  useEffect(() => {
    getImageById(imageId);
  }, []);
  const clickHandler = () => {
    toggle(false);
    history.push("/");
  };

  return (
    <div className={classes.Modal}>
      {!loading && (
        <div className={classes.Container}>
          <img src={currentImage} alt="modal_image" className={classes.Image} />

          <button className={classes.Button} onClick={clickHandler}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
