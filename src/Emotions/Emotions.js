import React from "react";

const Emotions = ({arr}) => {
    return(
        <>
            {
            arr.map((image, idx) => (
                <div>
                    <input type="radio" name="emotions" id={idx} value={idx}/>
                    <label htmlFor={idx}>
                        <img src={image} className="emo" alt="emo" />
                    </label>
                </div>))
            }
        </>
    );
} 
export default Emotions;