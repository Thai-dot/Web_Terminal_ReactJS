import React from "react";
import avatar from "../media/avatar.jpg";
import facebook from "../media/facebook.png";
import youtube from "../media/youtube.png";
import github from "../media/github.png";

const AboutMe = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <img
        src={avatar}
        width={200}
        height={200}
        className="rounded-circle mt-4"
        alt="my avatar"
      />
      <h1 className="text-center mt-4">ThaiDot</h1>
      <h4 className="text-center mt-4">Front-end Developer</h4>
      <h4 className="text-center mt-4">Brithday:20/08/2001</h4>
      <h4 className="text-center mt-4">Address:BenTre, VietNam</h4>
      <h4 className="text-center mt-4">PhoneNumber:0919520565</h4>
      <div className="iconGroup d-flex justify-content-evenly">
        <a
          href="https://www.facebook.com/nguyenthai7871/"
          rel="noopener"
          className="icon"
          target="_blank"
        >
          <img src={facebook} width={35} height={35} alt="facebookicon" />
        </a>
        <a
          className="icon"
          href="https://www.youtube.com/channel/UCIxApakrUNszaYWc6_f6SQA"
          target="_blank"
        >
          <img src={youtube} width={35} height={35} alt="youtubeicon" />
        </a>
        <a
          className="icon"
          href="
        https://github.com/Thai-dot"
          target="_blank"
          rel="noopener"
        >
          <img
            src={github}
            width={35}
            height={35}
            rel="noopener"
            target="_blank"
            alt="githubicon"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
