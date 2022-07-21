import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Login from "../pages/login/Login";
 
const AppRouter = () =>{
    return(
        // 声明当前要用一个非hash模式的路由
         <BrowserRouter>
           {/*指定跳转的组件 to用来配置路由地址
            <Link to="/">首页</Link>
           <Link to="/user">我的</Link> */}
           {/* 路由出口 */}
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
            </Routes>
          
        </BrowserRouter>
     )
}
export default AppRouter