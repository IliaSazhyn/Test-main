const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        imageGallery: action.payload,
      };
    case "SET_IMAGE":
      return {
        ...state,
        currentImage: action.payload,
      };
    case "DELETE_IMAGE":
      return {
        ...state,
        imageGallery: action.payload,
      };
    case "SENDING_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_FINISHED":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
