const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { myPayloadData: 1234 }, // payload 부분
    "mysecretkey",
    {expiresIn: "1s"}
    ); //jwt를 이용하여 암호화


// 디코드 하기, jwt의 payload를 확인하기 위해 사용
const decodeToken = jwt.decode(token);

// 토큰이 우리가 설정한 암호화 키로 설정된 게 맞나 확인 (검증)
const verifyToken = jwt.verify(token, "mysecretkey"); //mysecreatkey를 바꾸면 오류가 난다
console.log(verifyToken);