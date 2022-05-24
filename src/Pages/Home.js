import React from "react";
import Lines from "../components/Lines";
import Typewriter from "typewriter-effect";
import { useState, useRef } from "react";

const Home = () => {
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  const onSubmitInput = (e) => {
    e.preventDefault();
    //get value of input
    const inputValue = inputRef.current.value;
    //update ouput state
    if (inputValue.split(" ")[0] === "open") {
      setOutput([...output, inputValue.split(" ")[0]]);
      let url = inputValue.split(" ")[1];
      if (inputValue.split(" ").length==1) {
        url = "/aboutme";
        window.open(url);
      } else if (url.startsWith("http://") || url.startsWith("https://")) {
        window.open(url);
      } else {
        url = "https://" + url;
        window.open(url);
      }
      inputRef.current.value = "";
      setOutput([...output, inputValue]);
      return;
    }
    setOutput([...output, inputValue]);

    inputRef.current.value = "";
    if (inputValue === "clear") {
      setOutput([]);
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="text-center welcomeText">Welcome to My Terminal!</h1>
        <div className=" text-center ">
          <span className="d-flex flex-row justify-content-center runText">
            <div className="textLine" style={{ fontWeight: "bold" }}>
              I'm a&nbsp;
            </div>
            <Typewriter
              style={{ fontWeight: "bold" }}
              className="textLine"
              options={{
                strings: [" Front-end Developer", " IT's Student", "Gamer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="Terminal">
          {output.map((line, index) => {
            return <Lines key={index} inputValue={line} />;
          })}
          <div className="d-flex flex-cloumn commandBox">
            <span className="textLine">ThaiDot$</span>

            <form
              onSubmit={onSubmitInput}
              className="d-flex flex-column justify-content-center align-items-center commandBox"
            >
              <input
                type="text"
                name="inputUser"
                className="inputClass ps-1"
                placeholder="Enter your command. Type 'help' for more information"
                ref={inputRef}
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
