import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
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
        <link rel="stylesheet" href="css/login.css" />
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
        <title>Login</title>
      </head>
      <nav>
        <ul>
          <div className="navBar">
            <li className="navLogo">
              <div>
                <a href="/">빅프로젝트 30조</a>
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
        </ul>
      </nav>

      <div className="loginContainer">
        <form className="loginBox" action="#">
          <div className="loginLogo">
            <div>LOGIN</div>
          </div>

          <div className="loginInput">
            <div>
              <input type="text" placeholder="아이디" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
            </div>
          </div>

          <div className="loginBtn">
            <button type="submit">로그인</button>
          </div>

          <div className="loginEtcBtn">
            <span>아이디 찾기</span>
            <span> | </span>
            <span>비밀번호 찾기</span>
            <span> | </span>
            <span className="signup">
              <Link to="/signup">회원가입</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
