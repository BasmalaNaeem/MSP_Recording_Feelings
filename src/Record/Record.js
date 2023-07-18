import React from "react";
import "./Record.css";
const Record = ({list , func}) => {
    return(
        <>
        {
            list.map((d ,idx) => (
                <div className="recorddiv">
                    <img src={d.emoji} alt="emoji" className="emoi"/>
                    <p>{d.text}</p>
                    <button onClick={(e)=>func(e,idx)}>delete</button>
                </div>
            ))
        }
        </>
    );
};
export default Record;