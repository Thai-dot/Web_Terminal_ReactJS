import React from 'react'

const Lines = ({inputValue}) => {
   const commands = {
     help:
       "-----Available commands-----:\nclear: clear screen\nhelp: show all commands\nabout: about me \nlmao: lmao \nopen [webAddress]: open a website in your browser",
     clear: "Clear all",
     about:
       "My name is Nguyễn Hoàng Thái. I am a student of HCMUS. I am a front-end developer.",
     lmao: "Lmao lol oh yeah oh yeah",
     open: "Openning website...",
     "": "",
   };
   let printValue=inputValue;
   if(inputValue.split(" ")[0] === "open") {
     printValue = "open";
   }
  return (
    <div className="Lines">
      <div className="textLine">
        ThaiDot$ <span className="textCommand">{inputValue}</span>
      </div>
      <pre className="resultLine">
        {commands[printValue] || commands[printValue] === ""
          ? commands[printValue]
          : "Invalid command"}
      </pre>
    </div>
  );
}

export default Lines