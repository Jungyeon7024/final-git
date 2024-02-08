import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "../css/RegisterUser.css";
import Required from "./img/required.png";
import sample6_execDaumPostcode from "./KakaoAddress";

const GithubRegister = () => {
  const [githubInfo, setGithubInfo] = useState({
    nickname: "",
  });
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [confirm, setConfirm] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [nickname, setNickname] = useState("");
  const [githubUser, setGithubUser] = useState({
    email: "",
    password: "",
    username: "",
    img: "",
    useraddress: "",
    user_introduction: "",
    role: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 사용자 정보를 가져오는 GET 요청
        const code = "f5d0780a68905efa5d0ec731f85057e6286f2b13"; // 권한을 부여할 때 받은 코드
        const userDataResponse = await axios.get(
          `http://localhost:3000/users/github/callback?code=${code}`
        );
        // 받은 응답을 처리
        console.log(userDataResponse.data);
        setGithubInfo(userDataResponse.data);

        // 서버에 데이터를 전송하고 응답을 받는 POST 요청
        const postDataResponse = await axios.post(
          "http://localhost:3000/users/github/register",
          {
            nickname: githubInfo.nickname,
            // 전송할 데이터 객체
            // 이하 원하는 데이터 필드들을 추가할 수 있음
          }
        );
        // 받은 응답을 처리
        console.log(postDataResponse.data);
      } catch (error) {
        console.error("Failed to fetch data.", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGithubUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <Header />
      <br></br>
      <h1 className="title">회원가입</h1>
      <br></br>
      <h3 className="subTitle">회원가입후 S.With에 참여하세요</h3>
      <div className="container_register">
        <form className="m-5 mb-1">
          <div className="register_id ml-5">
            <div className="two">
              <h4 className="s_text_id">아이디(email)</h4>
            </div>
            <br />
          </div>
          <div className="register_id m-3">
            <div className="two">
              <h4 className="s_text">비밀번호(password)</h4>
            </div>
            <label className="m-2"></label>
            <input
              className="textInput"
              type="password"
              name="password"
              value={githubUser.password}
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>

          <div className="register_id m-3">
            <div className="two">
              <h4 className="s_text">이름(name)</h4>
            </div>
            <label className="m-2"></label>
            <input
              className="textInput"
              type="text"
              name="username"
              value={githubUser.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="register_id m-3">
            <div className="two">
              <h4 className="s_text">닉네임(nick name)</h4>
            </div>
            <label className="m-2"></label>
            <input
              className="textInput"
              type="text"
              name="nickname"
              value={githubInfo.nickname}
              readOnly
            />
          </div>

          <div className="two"></div>
          <div className="register_id m-3">
            <div className="two">
              <h4 className="s_text">주소(address)</h4>
            </div>
            <label className="m-2"></label>
            <input type="text" id="useraddress" />
            <br />
            <input
              name="useraddress"
              className="btn round"
              style={{
                backgroundColor: "#ffffb5",
                width: "150px",
                height: "50px",
                margin: "10px",
                marginTop: "5px",
                borderRadius: "30px",
              }}
              type="button"
              value="주소 찾기"
              onClick={() => sample6_execDaumPostcode({ setGithubUser })}
            />
          </div>

          <div className="register_id m-3">
            <div className="two">
              <h4 className="s_text">자기소개(self introduction)</h4>
            </div>
            <label className="m-2"></label>
            <input
              className="textInput"
              type="text"
              name="user_introduction"
              value={githubUser.user_introduction}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="role"
              value={githubUser.role}
              onChange={handleInputChange}
              hidden={true}
            />
          </div>
        </form>
        <div className="login_sns"></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default GithubRegister;
