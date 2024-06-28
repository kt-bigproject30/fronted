import React from "react";
import { Link } from "react-router-dom";

function Mypage() {
  return (
    <nav>
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="assets/site.webmanifest" />
        <link
          rel="mask-icon"
          href="assets/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic:wght@400;700&display=swap");
        </style>
        <title>Mypage</title>
      </head>
      <ul>
        <div className="navBar">
          <li className="navLogo">
            <div>
              <Link to="/">빅프로젝트 30조</Link>
            </div>
          </li>

          <li>
            <div className="navMenuContainer">
              <div className="dropDown">
                <div className="navMenu dropDownMenu navTutorial">
                  서브메뉴1
                </div>
                <div className="dropDownContent">
                  <div className="navTutorial tutorialSquat">서브메뉴1-1</div>
                  <div className="navTutorial tutoriaSideLunge">
                    서브메뉴1-2
                  </div>
                  <div className="navTutorial tutorialPlank">서브메뉴1-3</div>
                  <div className="navTutorial tutorialShoulderPress">
                    서브메뉴1-4
                  </div>
                </div>
              </div>
              <div className="navMenu">
                <Link to="/mypage">마이페이지</Link>
              </div>
              <div className="navMenu">기록지</div>
              <div className="navMenu">
                <Link to="/community">커뮤니티</Link>
              </div>
              <div className="navMenu">
                <Link to="/draftAI">Draft AI</Link>
              </div>
            </div>
          </li>

          <li>
            <div className="navLogin">
              <Link to="/login">Login</Link>
            </div>
          </li>
        </div>
        <li className="navMenu hidden">
          <div className="navMenuBtn">
            <img src="images/navMenuBtn.png" alt="메뉴 햄버거 아이콘" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Mypage;
