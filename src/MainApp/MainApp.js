import React, { useState } from "react";
import logo from "../images/MSPLogo.svg";
import emoji1 from "../images/Emoji1.png";
import emoji2 from "../images/Emoji2.png";
import emoji3 from "../images/Emoji3.png";
import emoji4 from "../images/Emoji4.png";
import photo1 from "../images/mainImage.png";
import "./MainApp.css";
import Emotions from "../Emotions/Emotions";
import Record from "../Record/Record";
const MainApp = () => {
    const arr = [emoji1 ,emoji2 , emoji3 ,emoji4];
    // let records = [];
    const [records ,setRecords] = useState([]);
    // records.push({text:"hhrh", emoji:emoji1});
    // records.push({text:"hrgwh", emoji:emoji2});
    const deletehandler= (e , deletedi) => {
        setRecords(records.filter((e , idx)=> idx !== deletedi));
    }

    const recordData= () => {
        const text = document.getElementsByTagName("input")[0];
        const emoji = (document.querySelector("input[type='radio']:checked"));
        if (text.value&&emoji){
            // setRecords( records.push({text:text, emoji:arr[emoji.value]}));
            setRecords([...records, {text:text.value, emoji:arr[emoji.value]}]);
            text.value = "";
            emoji.checked = false; 
        } else {
            alert("Please fill all data")
        }

        console.log(records);
    }
    
    return (
        <>
        <header>
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <h1 className="headertext">RECORDING FEELINGS</h1>
        </header>
        <section className="inputsection">
            <section>
                <input type="text" placeholder="Write Your feelings here..." className="writein" id="write"></input>
                <div className="container">
                    <div>
                        <p>Select Emoji</p>
                        <div className="emojis">
                            <Emotions arr={arr}/>
                        </div>
                    </div>
                    <button className="record" onClick={recordData}>Record</button>
                </div>
            </section>
            <img src={photo1} className="pho" alt="pho" />
            <section className="box">
                <div>
                    <Record list={records} func = {deletehandler} />
                </div>
            </section>
        </section>
        </>
    );
}
export default MainApp;

/* <img src={emoji1} alt="emoji" className="emo"/>
                    <p>fgrhjkujhrgeffegrhtj</p> */