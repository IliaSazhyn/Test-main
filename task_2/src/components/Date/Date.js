import React, { useState, useEffect, useContext } from "react";
import ImageContext from "../../context/imageContext";

const Date = () => {
    const [currTime, setCurrTime] = useState('');
    const [count, setCount] = useState('');
    const imageContext = useContext(ImageContext);
    const { imageGallery, loading } = imageContext;

    useEffect(() => {

        var today = new window.Date();
        var date = (new Intl.DateTimeFormat('UTC', {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'}).format(today));
        setCurrTime(date);
        if(imageGallery && !loading) {
            setCount(imageGallery.imgs.length) 
        }
      }, [imageGallery]);
 
    return (
        <div className="current_date">
         Time: {currTime}  {!loading && <div>Images: {count}</div> }
         
        </div>
    )
}

export default Date
