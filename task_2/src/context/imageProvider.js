import React, { useReducer } from "react";
import ImageContext from "./imageContext";
import reducer from "./imageReducer";

const ImageProvider = (props) => {
  const initialState = {
    imageGallery: [],
    currentImage: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Get All Images
  const getImages = async () => {
    try {
      dispatch({ type: "SENDING REQUEST" });
      const res = await fetch("./db.json");
      const data = await res.json();
      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "SET_IMAGES", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  // Get Image by id
  const getImageById = async (id) => {
    try {
      dispatch({ type: "SENDING_REQUEST" });
      const imageId = id.slice(1);

      let tempData = [];
      const res = await fetch("./db.json");
      const data = await res.json();
      data.imgs
        .filter((name) => name.id === imageId)
        .map((filteredName) => tempData.push(filteredName.path));

      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "SET_IMAGE", payload: tempData });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Image by id unfortunately doesn't work
  const deleteImageById = async (imageId) => {
    try {
      dispatch({ type: "SENDING_REQUEST" });
      let delData = [];
      const res = await fetch("./db.json");
      const data = await res.json();
      data.imgs
        .filter((name) => name.id !== imageId)
        .map((filteredName) => delData.push(filteredName));

      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "DELETE_IMAGE", payload: delData });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        imageGallery: state.imageGallery,
        currentImage: state.currentImage,
        loading: state.loading,
        getImages: getImages,
        getImageById,
        deleteImageById,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
