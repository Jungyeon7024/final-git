import React, { useState } from "react";
import KakaoLogin from "react-kakao-login";

const KakaoRegister = () => {
  const [kakaoInfo, setKakaoInfo] = useState(null);

  const responseKaKao = (res) => {
    console.log(res);
    setKakaoInfo(res.profile.kakao_account);
  };

  return (
    <div>
      <KakaoLogin
        token="e7d4ebe3d77d49c64d5020535eb9b4b7"
        onSuccess={responseKaKao}
        onFail={console.error}
        onLogout={console.info}
      >
        카카오 계정으로 로그인
      </KakaoLogin>
      {kakaoInfo && (
        <div>
          <p>이메일: {kakaoInfo.email}</p>
          <p>닉네임: {kakaoInfo.profile.nickname}</p>
        </div>
      )}
    </div>
  );
};

export default KakaoRegister;
