import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isTokenExpiration } from "./store/slices/userSlice";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import GNB from "./components/atoms/GNB";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from './components/atoms/Footer';

import './styles/App.css';

// CSS 기본 속성 초기화 필요
const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
    // 최상단에서 토큰 관련 로그인을 관리할 수 있게 App에서 import 하여 사용
    useEffect(() => {
        if (localStorage.getItem("token")) {
            isTokenExpiration();
        }
    },[])
    
    return (
        <BrowserRouter>
            <GNB/>
            <Routes>
                <Route path={staticServerUri + "/"} element={<HomePage/>}/>
                <Route path={staticServerUri + "/login"} element={<LoginPage/>}/>
                <Route path={staticServerUri + "/register"} element={<RegisterPage/>}/>
                <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage/>}/>
                <Route path={staticServerUri + "cart"} element={<CartPage/>}/>
                <Route path={staticServerUri + "order"} element={<OrderPage/>}/>
                <Route path={staticServerUri + "orders/complete/:id"} element={<OrderCompletePage/>}/>
                <Route path={staticServerUri + "/*"} element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;