import Swal from 'sweetalert2'
import { logoutMessage, clearTokens } from '../../utils/constants';
import { Link, useNavigate } from "react-router-dom";
import "../../styles/GNB.css";
import { ImBubble } from "react-icons/im";
import { styled } from 'styled-components';

const staticServerUri = process.env.REACT_APP_PATH || "";

const GNB = () => {
    const navigate = useNavigate()
    const logout = () => {
        clearTokens();
        Swal.fire(logoutMessage)
        .then(() => {
            navigate(staticServerUri + "/");
        })
    }

    // 원래는 useSelector로 가져와야 하나...userSlice의 loginRequest에서 return 부분 전에
    // 메인 페이지 리다이렉트 과정을 거치면서 return이 동작하지 못해버림...(해결 필요)
    // 메인 페이지 리다이렉트 로직 수정이 필요할 것으로 보임
    // const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    return (
        <>
        <div className="navbar">
            {/* {email 
            ? <span className="navbarMenu">{email}님 안녕하세요!</span> 
            : <></>} */}
            <Link className="navbarMenu logo" to={staticServerUri + "/"}><LogoIcon /> 쇼핑하기</Link>
            <Link className="navbarMenu cart" to={staticServerUri + "/cart"}>장바구니</Link>
            <div className="divider"></div>
            <Link className="navbarMenu register" to={staticServerUri + "/register"}>회원가입</Link>
            {token 
            ? <Link className="navbarMenu logout" onClick={logout}>로그아웃</Link> 
            : <Link className="navbarMenu login" to={staticServerUri + "/login"}>로그인</Link>}
        </div>
        </>
    );
};

export default GNB;

const LogoIcon = styled(ImBubble)`
    & > path {
        fill: #000;
    }
`