import React, { useState } from "react";

function DraftAI() {
  const [textInput, setTextInput] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [imageOutput, setImageOutput] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setFileContent(e.target.result);
      setTextInput(e.target.result); // 파일 내용을 텍스트 입력란에 설정
    };

    reader.readAsText(file); // 파일을 텍스트로 읽어옴
  };

  const handleGenerate = () => {
    // 텍스트 출력
    setFileContent(textInput);

    // 이미지 출력 (예: 임의의 이미지 URL 사용)
    const imageUrl = "https://via.placeholder.com/400x300"; // 여기에 실제 이미지 URL을 설정하세요
    setImageOutput(imageUrl);
  };

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
        <link rel="stylesheet" href="css/draftai.css" />
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
        <title>Draft AI</title>
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
                  <a href="/mypage">마이페이지</a>
                </div>
                <div className="navMenu">기록지</div>
                <div className="navMenu">
                  <a href="/community">커뮤니티</a>
                </div>
                <div className="navMenu">
                  <a href="/draftAI">Draft AI</a>
                </div>
              </div>
            </li>
            <li>
              <div className="navLogin">
                <a href="/login">Login</a>
              </div>
            </li>
          </div>
        </ul>
      </nav>
      <div className="container">
        <div className="left-column">
          <div className="input-group">
            <input
              type="text"
              id="textInput"
              placeholder="텍스트를 입력하세요"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <input
              type="file"
              id="fileInput"
              accept=".txt,.doc,.docx,.pdf"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
            >
              파일 업로드
            </button>
            <button onClick={handleGenerate}>요약 및 이미지 생성</button>
          </div>
        </div>
        <div className="right-column">
          <div className="output-group">
            <h2>요약글</h2>
            <div id="textOutput" className="output-text">
              {fileContent}
            </div>
            <h2>생성이미지</h2>
            <div id="imageOutput" className="output-image">
              {imageOutput && <img src={imageOutput} alt="출력 이미지" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraftAI;
