import React, { useState, useRef } from "react";
import "./redux.css";
export default function Redux_Practice() {
  const [message, setmessage] = useState([]);
  const msgs = useRef();
  const [val, setval] = useState({
    msg: "",
    vis: false,
  });
  function handleClick() {
    setmessage((p) => [...p, val]);
    setval((p) => {
      return {
        ...p,
        vis: true,
      };
    });
    setval((p) => {
      return {
        msg: "",
      };
    });
  }
  function change(e) {
    const { value, defaultValue } = e.target;
    console.log(defaultValue);
    const KEY = "93e9037be27e5c1ecbafd91444e27752";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=19.0144&lon=72.8479&appid=${KEY}`
    )
      .then((data) => data.json())
      .then((r) => console.log(r));
    setval((p) => {
      return {
        ...p,
        msg: value,
      };
    });
  }
  return (
    <div className="main">
      <div className="msg-container">
        <div className="msg-div">
          <input type="text" ref={msgs} value={val.msg} onChange={change} />
          <button className="send" onClick={handleClick}>
            Send
          </button>
          <button className="clear" onClick={() => setmessage((p) => [])}>
            Clear
          </button>
        </div>
        <div className="show-msg">
          {message.map((el, i) => {
            return (
              <div key={i} className="msg">
                {el.msg}
                <p>{el.vis}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
