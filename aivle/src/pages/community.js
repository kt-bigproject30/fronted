import React from "react";
import { Link } from "react-router-dom";
import "../main.css"; // CSS 파일 경로에 맞게 조정합니다.

function Community() {
  return (
    <nav>
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

export default Community;
