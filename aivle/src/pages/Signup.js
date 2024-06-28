import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/signup.css";

function Signup() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [name, setName] = useState("");
  const [emailLocal, setEmailLocal] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [monthOptions, setMonthOptions] = useState([]);
  const [dayOptions, setDayOptions] = useState([]);

  useEffect(() => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    setMonthOptions(months);

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    setDayOptions(days);
  }, []);

  return (
    <div>
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
        </ul>
      </nav>
      <div className="signupContainer">
        <form className="signupBox" action="#">
          <div className="signupDescription">
            <div>회원가입</div>
            <div>가입을 통해 다양한 서비스를 만나보세요!</div>
          </div>
          <div className="signupProfile">
            <div className="profileId">
              <label htmlFor="id">아이디</label>
              <input
                type="text"
                placeholder="6자~20자"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <div className="notice hidden">
                영문 소문자, 숫자를 포함한 6~20자를 입력하세요.
              </div>
            </div>
            <div className="profilePwd">
              <label htmlFor="pwd">비밀번호</label>
              <input
                type="password"
                placeholder="문자, 숫자, 특수문자 포함 8자~20자"
                id="pwd"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <div className="notice hidden">
                영문 대문자, 소문자, 숫자, 특수문자를 포함한 8~20자를
                입력하세요.
              </div>

              <label htmlFor="pwdConfirm">비밀번호 재확인</label>
              <input
                type="password"
                id="pwdConfirm"
                value={pwdConfirm}
                onChange={(e) => setPwdConfirm(e.target.value)}
              />
              <div className="notice hidden">비밀번호가 일치하지 않습니다.</div>
            </div>

            <div className="profileName">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="notice hidden"></div>
            </div>
            <div className="profileEmail">
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                className="emailLocal"
                id="email"
                value={emailLocal}
                onChange={(e) => setEmailLocal(e.target.value)}
              />
              <span>@</span>
              <input
                type="text"
                className="emailDomain"
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
              />
              <select
                className="emailSelect"
                onChange={(e) => setEmailDomain(e.target.value)}
              >
                <option value="type">직접 입력</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="hanmail.com">hanmail.com</option>
              </select>
              <div className="notice hidden localNotice">
                이메일 로컬의 형식을 정확하게 입력하세요.
              </div>
              <div className="notice hidden domainNotice">
                이메일 도메인의 형식을 정확하게 입력하세요.
              </div>
            </div>
            <div className="profileBirth">
              <label htmlFor="birth">생년월일</label>
              <input
                type="text"
                placeholder="년(4자)"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {monthOptions.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                {dayOptions.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <div className="notice hidden yearNotice">
                태어난 년도 4자리를 정확히 입력하세요.
              </div>
              <div className="notice hidden monthNotice">
                태어난 월을 선택하세요.
              </div>
              <div className="notice hidden dayNotice">
                태어난 일(날짜)를 선택하세요.
              </div>
            </div>
          </div>
          <div className="signupBtn">
            <Link to="/login">
              <button type="submit">가입하기</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
